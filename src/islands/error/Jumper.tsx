import { IS_BROWSER } from "fresh/runtime";
import { useRef } from "preact/hooks";
import { defineComponent } from "~/utils/preact.ts";
import { cn } from "~/utils/tailwind.ts";
import { Container } from "~/components/Container.tsx";
import characterImage from "~/assets/error/character.png";

export const Jumper = defineComponent(() => {
  const gameRef = useRef<HTMLDivElement>(null);

  if (IS_BROWSER) {
    const init = async () => {
      const { default: Phaser } = await import("phaser");

      class Main extends Phaser.Scene {
        player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
        constructor() {
          super("Main");
        }
        preload() {
          this.load.spritesheet(
            "character",
            characterImage,
            { frameWidth: 50, frameHeight: 70 },
          );
        }
        create() {
          this.player = this.physics.add.sprite(50, 70, "character");
          this.player.setCollideWorldBounds(true);
          this.anims.create({
            key: "stop",
            frames: [
              { key: "character", frame: 0 },
            ],
            frameRate: 10,
          });
          this.anims.create({
            key: "start",
            frames: this.anims.generateFrameNumbers(
              "character",
              { start: 0, end: 3 },
            ),
            frameRate: 10,
            repeat: -1,
          });
          this.player.anims.play("start", true);
        }
        override update() {
          const cursors = this.input.keyboard?.createCursorKeys();
          if (cursors?.space.isDown) {
            this.player.setVelocityY(-200);
          }
        }
      }

      new Phaser.Game({
        parent: gameRef.current,
        type: Phaser.AUTO,
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
          width: 800,
          height: 200,
        },
        physics: {
          default: "arcade",
          arcade: {
            gravity: { x: 0, y: 300 },
            debug: true,
          },
        },
        scene: [
          Main,
        ],
      });
    };

    init();
  }

  return (
    <section>
      <Container
        class={cn(
          "py-16",
        )}
      >
        <div ref={gameRef} />
      </Container>
    </section>
  );
});

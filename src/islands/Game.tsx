import { IS_BROWSER } from "fresh/runtime";
import { useEffect, useRef } from "preact/hooks";
import { defineComponent } from "~/utils/preact.ts";

export const Game = defineComponent(() => {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (IS_BROWSER) {
      const run = async () => {
        const { default: Phaser } = await import("phaser");
        class Main extends Phaser.Scene {
          player?: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
          constructor() {
            super("Main");
          }
          preload() {
            this.load.spritesheet(
              "character",
              "/game/character.png",
              {
                frameWidth: 70,
                frameHeight: 100,
              },
            );
          }
          create() {
            this.player = this.physics.add.sprite(70, 100, "character");
            this.player.setBounce(0.2);
            this.player.setCollideWorldBounds(true);
            this.anims.create({
              key: "walk",
              frames: this.anims.generateFrameNumbers("character", {
                start: 0,
                end: 3,
              }),
              frameRate: 10,
              repeat: -1,
            });
            this.player.anims.play("walk");
          }
          override update() {
            const cursors = this.input.keyboard?.createCursorKeys();
            if (cursors?.space.isDown) {
              this.player?.setVelocityY(-200);
            }
          }
        }
        new Phaser.Game({
          type: Phaser.AUTO,
          title: "ゲーム",
          width: 800,
          height: 600,
          physics: {
            default: "arcade",
            arcade: {
              gravity: { x: 0, y: 300 },
              debug: false,
            },
          },
          parent: gameRef.current,
          scene: [
            Main,
          ],
        });
      };
      run();
    }
  });

  return (
    <div ref={gameRef}>
    </div>
  );
});

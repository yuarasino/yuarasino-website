import { cn } from "../utils/tailwind.ts";

import type { JSX } from "preact";

export interface ProfileItem {
  label: string;
  value: string;
}

export interface ProfileTableProps {
  class?: JSX.IntrinsicElements["table"]["class"];
  items: ProfileItem[];
}

export const ProfileTable = ({
  class: class_,
  items,
}: ProfileTableProps) => {
  return (
    <table
      class={cn(
        class_,
      )}
    >
      <tbody
        class={cn(
          "flex flex-col",
          "gap-y-2",
        )}
      >
        {items.map(({ label, value }) => (
          <tr
            key={label}
            class={cn(
              "flex",
              "gap-x-4",
            )}
          >
            <th
              class={cn(
                "w-[6em]",
                "font-normal",
                "text-left",
                "text-blue-300",
              )}
            >
              {label}
            </th>
            <td
              class={cn(
                "flex-1",
              )}
            >
              {value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

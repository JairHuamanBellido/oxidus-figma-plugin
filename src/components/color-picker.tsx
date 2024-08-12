import { useState } from "preact/hooks";
import { themeSignal } from "../signals/theme-signal";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("#1350F4");

  return (
    <div class="flex flex-col space-y-1 w-full">
      <label for="color" class="text-sm opacity-70">
        Pick your color
      </label>
      <div class="flex items-center space-x-2">
        <input
          class="rounded-full w-4 h-4"
          onInput={(e) => {
            if (e.target) {
              themeSignal.value = {
                light: {
                  ...themeSignal.value.light,
                },
                dark: {
                  ...themeSignal.value.dark,
                },
                mainColor: e.currentTarget.value,
              };
              setColor(e.currentTarget.value);
            }
          }}
          value={color}
          type="color"
          name="color"
          id="color"
        />
        <input
          type="text"
          class="w-[100px] focus:outline-none"
          onChange={(e) => {
            if (e.target) {
              themeSignal.value = {
                light: {
                  ...themeSignal.value.light,
                },
                dark: {
                  ...themeSignal.value.dark,
                },
                mainColor: e.currentTarget.value,
              };
              setColor(e.currentTarget.value);
            }
          }}
          value={color}
          id="input-text-color"
        />
      </div>
    </div>
  );
}

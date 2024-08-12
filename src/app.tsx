import { useState } from "preact/hooks";
import ColorPicker from "./components/color-picker";
import LightPalette from "./components/light-palette";
import DarkPalette from "./components/dark-palette";
import { Sun, Moon } from "lucide-react";
import GeneratePaletteButton from "./components/generate-palette-button";
import ClosePluginButton from "./components/close-plugin-button";
export function App() {
  const [isShowLight, setIsShowLight] = useState<boolean>(true);

  return (
    <div className="text-black p-2 bg-white h-screen w-full relative overflow-hidden">
      <div className=" w-full  h-16 border-b relative flex items-center justify-between">
        <ColorPicker />
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <button
              className=" bg-gray-200 rounded p-2 w-fit"
              onClick={() => {
                setIsShowLight(!isShowLight);
              }}
            >
              {isShowLight ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[calc(100%_-_128px)]">
        {isShowLight ? <LightPalette /> : <DarkPalette />}
      </div>
      <div className="w-full border-t h-16 flex items-center justify-end space-x-2">
        <ClosePluginButton />
        <GeneratePaletteButton />
      </div>
    </div>
  );
}

import { Play } from "lucide-react";
import { themeSignal } from "../signals/theme-signal";

export default function GeneratePaletteButton() {
  function handleGenerate() {
    parent.postMessage(
      {
        pluginMessage: {
          type: "create-rectangles",
          theme: themeSignal.value,
        },
      },
      "*",
    );
  }

  return (
    <button
      onClick={handleGenerate}
      className="w-fit bg-[#0d99ff] text-white rounded-md text-sm h-fit p-[6px] flex items-center space-x-2 "
    >
      <Play size={14} />
      <p>Generate</p>
    </button>
  );
}

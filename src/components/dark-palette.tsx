import { themeSignal } from "../signals/theme-signal";
import ColorBar from "./color-bar";

export default function DarkPalette() {
  return (
    <div className=" text-xs  w-full overflow-auto h-full">
      <ColorBar label="Background" color={themeSignal.value.dark.background} />
      <ColorBar label="Foreground" color={themeSignal.value.dark.foreground} />
      <ColorBar label="Primary" color={themeSignal.value.dark.primary} />
      <ColorBar
        label="Primary Foreground"
        color={themeSignal.value.dark.primaryForeground}
      />
      <ColorBar label="Card" color={themeSignal.value.dark.card} />
      <ColorBar
        label="Card Foreground"
        color={themeSignal.value.dark.cardForeground}
      />
      <ColorBar label="Popover" color={themeSignal.value.dark.popover} />
      <ColorBar
        label="Popover Foreground"
        color={themeSignal.value.dark.popoverForeground}
      />
      <ColorBar label="Secondary" color={themeSignal.value.dark.secondary} />
      <ColorBar
        label="Secondary Foreground"
        color={themeSignal.value.dark.secondaryForeground}
      />
      <ColorBar label="Muted" color={themeSignal.value.dark.muted} />
      <ColorBar
        label="Muted Foreground"
        color={themeSignal.value.dark.mutedForeground}
      />
      <ColorBar label="Accent" color={themeSignal.value.dark.accent} />
      <ColorBar
        label="Accent Foreground"
        color={themeSignal.value.dark.accentForeground}
      />
      <ColorBar label="Border" color={themeSignal.value.dark.border} />
      <ColorBar label="Input" color={themeSignal.value.dark.input} />
      <ColorBar label="Ring" color={themeSignal.value.dark.ring} />
    </div>
  );
}

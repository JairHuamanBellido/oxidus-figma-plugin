import { themeSignal } from "../signals/theme-signal";
import ColorBar from "./color-bar";

export default function LightPalette() {
  return (
    <div className=" text-xs  w-full overflow-auto h-full">
      <ColorBar label="Background" color={themeSignal.value.light.background} />
      <ColorBar label="Foreground" color={themeSignal.value.light.foreground} />
      <ColorBar label="Primary" color={themeSignal.value.light.primary} />
      <ColorBar
        label="Primary Foreground"
        color={themeSignal.value.light.primaryForeground}
      />
      <ColorBar label="Card" color={themeSignal.value.light.card} />
      <ColorBar
        label="Card Foreground"
        color={themeSignal.value.light.cardForeground}
      />
      <ColorBar label="Popover" color={themeSignal.value.light.popover} />
      <ColorBar
        label="Popover Foreground"
        color={themeSignal.value.light.popoverForeground}
      />
      <ColorBar label="Secondary" color={themeSignal.value.light.secondary} />
      <ColorBar
        label="Secondary Foreground"
        color={themeSignal.value.light.secondaryForeground}
      />
      <ColorBar label="Muted" color={themeSignal.value.light.muted} />
      <ColorBar
        label="Muted Foreground"
        color={themeSignal.value.light.mutedForeground}
      />
      <ColorBar label="Accent" color={themeSignal.value.light.accent} />
      <ColorBar
        label="Accent Foreground"
        color={themeSignal.value.light.accentForeground}
      />
      <ColorBar label="Border" color={themeSignal.value.light.border} />
      <ColorBar label="Input" color={themeSignal.value.light.input} />
      <ColorBar label="Ring" color={themeSignal.value.light.ring} />
    </div>
  );
}

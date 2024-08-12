import { effect, signal } from "@preact/signals";
import Color from "color";

export const themeSignal = signal({
  mainColor: "#1350F4",
  dark: {
    background: "",
    foreground: "",
    primary: "",
    primaryForeground: "",
    card: "",
    cardForeground: "",
    popover: "",
    popoverForeground: "",
    secondary: "",
    secondaryForeground: "",
    muted: "",
    mutedForeground: "",
    accent: "",
    accentForeground: "",
    border: "",
    input: "",
    ring: "",
  },
  light: {
    background: "",
    foreground: "",
    primary: "",
    primaryForeground: "",
    card: "",
    cardForeground: "",
    popover: "",
    popoverForeground: "",
    secondary: "",
    secondaryForeground: "",
    muted: "",
    mutedForeground: "",
    accent: "",
    accentForeground: "",
    border: "",
    input: "",
    ring: "",
  },
});

effect(() => {
  const hex = themeSignal.value.mainColor;
  const primary = hex;
  const primaryForeground = Color({ hex: primary }).isDark()
    ? Color(hex).mix(Color("white"), 0.9).hex()
    : Color(hex).mix(Color("black"), 0.9).hex();

  const lightBackground = "#FFFFFF";
  const lightForeground = Color(hex).mix(Color("black"), 0.9).hex();
  const lightCard = Color(hex).mix(Color("white"), 0.95).hex();
  const lightCardForeground = Color(hex).mix(Color("black"), 0.9).hex();
  const lightPopover = Color("white").hex();
  const lightPopoverForeground = Color(hex).mix(Color("black"), 0.9).hex();
  const lightSecondary = Color(hex).mix(Color("white"), 0.85).hex();
  const lightSecondaryForeground = "#000000";
  const lightMuted = Color(hex).mix(Color("white"), 0.9).hex();
  const lightMutedForeground = Color("white").hsl().darken(0.6).hex();
  const lightAccent = Color(hex).mix(Color("white"), 0.9).hex();
  const lightAccentForeground = Color(hex).mix(Color("black"), 0.85).hex();
  const lightBorder = Color(hex).mix(Color("white"), 0.8).hex();
  const lightInput = Color(hex)
    .mix(Color("black"), 0.5)
    .mix(Color("white"), 0.75)
    .hex();

  const darkBackground = "#000000";
  const darkForeground = Color(hex).mix(Color("white"), 0.85).hex();
  const darkCard = Color(hex).mix(Color("#0a0a0a"), 0.96).hex();
  const darkCardForeground = Color(hex).mix(Color("white"), 0.85).hex();
  const darkPopover = "#000000";
  const darkPopoverForeground = Color(hex).mix(Color("white"), 0.85).hex();
  const darkSecondary = Color("black").mix(Color(hex), 0.35).hex();
  const darkSecondaryForeground = Color("white").hex();
  const darkMuted = Color("#000000").mix(Color("white"), 0.1).hex();
  const darkMutedForeground = Color("#000000").mix(Color("white"), 0.5).hex();
  const darkAccent = Color("black").mix(Color(hex), 0.35).hex();
  const darkAccentForeground = Color(hex).mix(Color("white"), 0.85).hex();
  const darkInput = Color(hex)
    .mix(Color("white"), 0.6)
    .mix(Color("black"), 0.75)
    .hex();
  const darkBorder = Color(hex).mix(Color("black"), 0.8).hex();

  themeSignal.value.light = {
    background: lightBackground,
    foreground: lightForeground,
    primary,
    primaryForeground,
    card: lightCard,
    cardForeground: lightCardForeground,
    popover: lightPopover,
    popoverForeground: lightPopoverForeground,
    secondary: lightSecondary,
    secondaryForeground: lightSecondaryForeground,
    muted: lightMuted,
    mutedForeground: lightMutedForeground,
    accent: lightAccent,
    accentForeground: lightAccentForeground,
    border: lightBorder,
    input: lightInput,
    ring: primary,
  };
  themeSignal.value.dark = {
    background: darkBackground,
    foreground: darkForeground,
    primary,
    primaryForeground,
    card: darkCard,
    cardForeground: darkCardForeground,
    popover: darkPopover,
    popoverForeground: darkPopoverForeground,
    secondary: darkSecondary,
    secondaryForeground: darkSecondaryForeground,
    muted: darkMuted,
    mutedForeground: darkMutedForeground,
    accent: darkAccent,
    accentForeground: darkAccentForeground,
    border: darkBorder,
    input: darkInput,
    ring: primary,
  };
  
});

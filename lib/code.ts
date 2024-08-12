import Color from "color";

// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

const RECTANGLE_WIDTH = 140;
const RECTANGLE_HEIGHT = 75;
const SPACE_BETWEEN_COLORS = 70;
const LIGHT_VARIABLES_HEADING_Y = 20;
const DARK_VARIABLES_HEADING_Y = 280;

// This shows the HTML page in "ui.html".
figma.showUI(__html__, {
  height: 700,
  width: 400,
});

figma.loadFontAsync({ family: "Manrope", style: "Regular" });
figma.loadFontAsync({ family: "Manrope", style: "Bold" });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === "create-rectangles") {
    const nodes: SceneNode[] = [];

    const cursorXPosition = figma.viewport.center.x;
    const cursorYPosition = figma.viewport.center.y;
    const frame = figma.createFrame();
    // Frame settings
    frame.resize(240 * 17, 600);
    frame.x = cursorXPosition;
    frame.y = cursorYPosition;
    frame.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];

    const collection =
      figma.variables.createVariableCollection("new-collection");
    collection.name = "Oxidus";

    // Titles variables
    const lightVariablesHeading = figma.createText();
    const darkVariablesHeading = figma.createText();

    lightVariablesHeading.fontName = { family: "Manrope", style: "Bold" };
    lightVariablesHeading.characters = "Light Variables";
    lightVariablesHeading.fontSize = 24;
    lightVariablesHeading.x = 40;
    lightVariablesHeading.y = LIGHT_VARIABLES_HEADING_Y;

    darkVariablesHeading.fontName = { family: "Manrope", style: "Bold" };
    darkVariablesHeading.characters = "Dark Variables";
    darkVariablesHeading.fontSize = 24;
    darkVariablesHeading.x = 40;
    darkVariablesHeading.y = DARK_VARIABLES_HEADING_Y;

    frame.appendChild(lightVariablesHeading);
    frame.appendChild(darkVariablesHeading);

    Object.keys(msg.theme.light).forEach((variable, i) => {
      const lightColor = Color(msg.theme.light[variable]);
      const darkColor = Color(msg.theme.dark[variable]);

      const lightR = parseFloat((lightColor.red() / 255).toFixed(2));
      const lightG = parseFloat((lightColor.green() / 255).toFixed(2));
      const lightB = parseFloat((lightColor.blue() / 255).toFixed(2));

      const darkR = parseFloat((darkColor.red() / 255).toFixed(2));
      const darkG = parseFloat((darkColor.green() / 255).toFixed(2));
      const darkB = parseFloat((darkColor.blue() / 255).toFixed(2));

      // Sets variables
      const colorVariable = figma.variables.createVariable(
        `light-${variable}`,
        collection,
        "COLOR",
      );

      const darkColorVariables = figma.variables.createVariable(
        `dark-${variable}`,
        collection,
        "COLOR",
      );
      const lightModeId = collection.modes[0].modeId;

      colorVariable.name = `light/${variable}`;
      darkColorVariables.name = `dark/${variable}`;

      colorVariable.setValueForMode(lightModeId, {
        r: lightR,
        g: lightG,
        b: lightB,
      });
      darkColorVariables.setValueForMode(lightModeId, {
        r: darkR,
        g: darkG,
        b: darkB,
      });

      const lightTextVariable = figma.createText();
      const lightTextHex = figma.createText();
      const lightTextRGB = figma.createText();

      const darkTextVariable = figma.createText();
      const darkTextHex = figma.createText();
      const darkTextRGB = figma.createText();

      lightTextVariable.fontName = { family: "Manrope", style: "Bold" };
      lightTextVariable.characters =
        variable[0].toUpperCase() + variable.slice(1);
      lightTextVariable.fontSize = 16;

      lightTextHex.fontName = { family: "Manrope", style: "Regular" };
      lightTextHex.characters = lightColor.hex();
      lightTextHex.fontSize = 14;

      lightTextRGB.fontName = { family: "Manrope", style: "Regular" };
      lightTextRGB.characters = `rgb(${lightColor.rgb().red()},${lightColor.rgb().green()},${lightColor.rgb().blue()})`;
      lightTextRGB.fontSize = 14;

      darkTextVariable.fontName = { family: "Manrope", style: "Bold" };
      darkTextVariable.characters =
        variable[0].toUpperCase() + variable.slice(1);
      darkTextVariable.fontSize = 16;

      darkTextHex.fontName = { family: "Manrope", style: "Regular" };
      darkTextHex.characters = darkColor.hex();
      darkTextHex.fontSize = 14;

      darkTextRGB.fontName = { family: "Manrope", style: "Regular" };
      darkTextRGB.characters = `rgb(${darkColor.rgb().red()},${darkColor.rgb().green()},${darkColor.rgb().blue()})`;
      darkTextRGB.fontSize = 14;

      const lightRect = figma.createRectangle();
      const darkRect = figma.createRectangle();

      // Rect settings
      lightRect.x = i * (RECTANGLE_WIDTH + SPACE_BETWEEN_COLORS) + 40;
      lightRect.y = LIGHT_VARIABLES_HEADING_Y + 40 + 10;
      lightRect.resize(RECTANGLE_WIDTH, RECTANGLE_HEIGHT);
      lightRect.cornerRadius = 12;
      lightRect.fills = [
        { type: "SOLID", color: { r: lightR, g: lightG, b: lightB } },
      ];

      darkRect.x = i * (RECTANGLE_WIDTH + SPACE_BETWEEN_COLORS) + 40;
      darkRect.y = DARK_VARIABLES_HEADING_Y + 40 + 10;
      darkRect.resize(RECTANGLE_WIDTH, RECTANGLE_HEIGHT);
      darkRect.cornerRadius = 12;
      darkRect.fills = [
        { type: "SOLID", color: { r: darkR, g: darkG, b: darkB } },
      ];

      // Text variable
      lightTextVariable.x = i * (RECTANGLE_WIDTH + SPACE_BETWEEN_COLORS) + 40;
      lightTextVariable.y = LIGHT_VARIABLES_HEADING_Y + 40 + 90;

      darkTextVariable.x = i * (RECTANGLE_WIDTH + SPACE_BETWEEN_COLORS) + 40;
      darkTextVariable.y = DARK_VARIABLES_HEADING_Y + 40 + 90;

      // Text hex
      lightTextHex.x = i * (RECTANGLE_WIDTH + SPACE_BETWEEN_COLORS) + 40;
      lightTextHex.y = LIGHT_VARIABLES_HEADING_Y + 40 + 120;

      darkTextHex.x = i * (RECTANGLE_WIDTH + SPACE_BETWEEN_COLORS) + 40;
      darkTextHex.y = DARK_VARIABLES_HEADING_Y + 40 + 120;

      // Text rgb
      lightTextRGB.x = i * (RECTANGLE_WIDTH + SPACE_BETWEEN_COLORS) + 40;
      lightTextRGB.y = LIGHT_VARIABLES_HEADING_Y + 40 + 146;

      darkTextRGB.x = i * (RECTANGLE_WIDTH + SPACE_BETWEEN_COLORS) + 40;
      darkTextRGB.y = DARK_VARIABLES_HEADING_Y + 40 + 146;

      frame.appendChild(lightRect);
      frame.appendChild(lightTextVariable);
      frame.appendChild(lightTextHex);
      frame.appendChild(lightTextRGB);

      frame.appendChild(darkRect);
      frame.appendChild(darkTextVariable);
      frame.appendChild(darkTextHex);
      frame.appendChild(darkTextRGB);
    });
    figma.currentPage.appendChild(frame);
    nodes.push(frame);

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};

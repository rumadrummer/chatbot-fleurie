import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

// 🌸 Workflow-ID für Fleurie (bleibt gleich wie bisher)
export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

// Session Endpoint für ChatKit
export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// 🌷 Start-Buttons für Fleurie
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Öffnungszeiten",
    prompt:
      "Wie sind die aktuellen Öffnungszeiten der Brocanterie Fleurie? Bitte freundlich und kompakt antworten."
  },
  {
    label: "Brocante-Artikel",
    prompt:
      "Welche Brocante-Artikel und besonderen Stücke gibt es in der Brocanterie Fleurie? Beschreibe kurz das Sortiment."
  },
  {
    label: "Blumen & Dekoration",
    prompt:
      "Welche Blumen, Sträusse und Deko-Ideen bietet die Brocanterie Fleurie? Beschreibe den Stil und was Besucher erwartet."
  },
  {
    label: "Café & Getränke",
    prompt:
      "Was gibt es im Café der Brocanterie Fleurie an Kaffee, Kuchen und Getränken? Stelle das Angebot gemütlich und einladend dar."
  }
];

// Eingabefeld-Text
export const PLACEHOLDER_INPUT = "Frag mich etwas…";

// 👋 Begrüssungstext
export const GREETING =
  "Grüezi 🌸 Ich bin Fleurie! Hast du Fragen zu Café, Brocante, Blumen oder Öffnungszeiten?";

// 🎨 Design- und Farbkonfiguration (zartes Rosa & Grün)
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4
    },
    accent: {
      primary: theme === "dark" ? "#1F3117" : "#1F3117",
      level: 1
    }
  },
  radius: "round"
});







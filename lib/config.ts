import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

// ☕ Workflow-ID für den Fleurie Chatbot
export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

// Session Endpoint
export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// 🌸 Startscreen Buttons & Prompts
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Öffnungszeiten",
    prompt:
      "Wie sind die Öffnungszeiten der Brocanterie Fleurie?"
  },
  {
    label: "Brocante-Artikel",
    prompt:
      "Welche Brocante-Artikel bietet ihr an? Bitte ein paar Beispiele beschreiben."
  },
  {
    label: "Café & Getränke",
    prompt:
      "Was kann man im Café der Brocanterie Fleurie trinken und essen? Bitte kurz erklären."
  },
  {
    label: "Reservieren / Kontakt",
    prompt:
      "Wie kann ich euch kontaktieren oder reservieren? Bitte Kontaktmöglichkeiten nennen."
  }
];

// 🌸 Placeholder im Eingabefeld
export const PLACEHOLDER_INPUT = "Frag mich etwas...";

// 👋 Begrüssungstext
export const GREETING =
  "Grüezi 🌸 Ich bin Fleurie! Hast du Fragen zu Café, Brocante oder Öffnungszeiten?";

// 🎨 Farben & Styling: Fleurie Theme
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 320, // etwas wärmer für Fleurie
      tint: 8,
      shade: theme === "dark" ? -1 : -3
    },
    accent: {
      primary: "#E5C4CF", // Rosa Akzentfarbe für den Fleurie-Stil
      level: 2
    }
  },
  radius: "round"
});






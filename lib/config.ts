import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

// 🥁 Workflow-ID für Ruma (kommt aus dem Agent Builder)
export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

// Session Endpoint
export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// ⭐ Start-Screen Buttons (Label + Prompt getrennt)
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Konzerte",
    prompt:
      "Wann und wo spielt Ruedi als Nächstes live? Bitte die nächsten Konzerte von Silverhead, Polo Sélection und John & John Xpanded prüfen."
  },
  {
    label: "Bands buchen",
    prompt:
      "Können wir dich oder deine Bands für ein Event buchen? Bitte erkläre kurz die Möglichkeiten und wie man dich erreichen kann."
  },
  {
    label: "Schlagzeugunterricht",
    prompt:
      "Unterrichtest du auch Erwachsene am Schlagzeug? Bitte erkläre wo, wie und wie man dich kontaktieren kann."
  }
];

// Eingabefeld-Text
export const PLACEHOLDER_INPUT = "Frag mich etwas...";

// 👋 Begrüssungstext
export const GREETING =
  "Grüezi 🌸 Ich bin Fleurie! Hast du Fragen zu Café, Brocante oder Öffnungszeiten?";

// 🎨 Design- und Farbkonfiguration
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





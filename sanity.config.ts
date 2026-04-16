import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/lib/sanity/schemas";
import { SchemaType } from "sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'op74vyyu';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

// Tema personalizado oscuro y elegante para Casa Seis
const myTheme = {
  // Fondos y bordes
  "--black": "#000000",
  "--white": "#ffffff",
  "--gray-base": "#1d2a34",
  "--component-bg": "#1d2a34", // Fondo principal del CMS
  "--component-text-color": "#ffffff",
  
  // Brand colors
  "--brand-primary": "#C49A6C", // El color dorado/tostado de la marca
  
  // Base
  "--default-button-color": "#C49A6C",
  "--default-button-primary-color": "#C49A6C",
  "--state-info-color": "#2d5e62",
  "--state-success-color": "#2d5e62",
  "--state-warning-color": "#C49A6C",
  "--state-danger-color": "#7d3857",
  
  // Navegación (navbar)
  "--main-navigation-color": "#121b22",
  "--main-navigation-color--inverted": "#ffffff",
  "--focus-color": "#C49A6C",
} as any;

export default defineConfig({
  basePath: "/studio",
  name: "casaseis_studio",
  title: "Casa Seis CMS",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenido del Sitio")
          .items([
            S.listItem()
              .title("Hero (Inicio)")
              .schemaType("hero")
              .icon(() => "🏠"),
            S.listItem()
              .title("Intro (Mirada)")
              .schemaType("intro")
              .icon(() => "👁️"),
            S.listItem()
              .title("Servicios")
              .schemaType("service")
              .icon(() => "⚙️"),
            S.listItem()
              .title("Para Quién Es")
              .schemaType("whoIsItFor")
              .icon(() => "🎯"),
            S.listItem()
              .title("Quiénes Somos")
              .schemaType("about")
              .icon(() => "👥"),
            S.listItem()
              .title("Astrología")
              .schemaType("astrology")
              .icon(() => "🌙"),
            S.listItem()
              .title("Contacto")
              .schemaType("contact")
              .icon(() => "✉️"),
            S.divider(),
            S.listItem()
              .title("Frases Rotativas")
              .schemaType("phrase")
              .icon(() => "💬"),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
});

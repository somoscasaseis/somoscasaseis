// ARCHIVO COMENTADO PARA DESPLIEGUE - Notion desactivado temporalmente
// TODO: Reactivar cuando se corrija la integración con Notion

/*
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

// Cliente singleton
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

// ─── Tipos ──────────────────────────────────────────────────────────────────

export type NotionPhrase = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  order: number;
};

export type NotionService = {
  id: string;
  title: string;
  colorClass: string;
  iconPath: string;
  items: string[];
};

export type NotionPage = {
  id: string;
  title: string;
  slug: string;
  published: boolean;
};

// ─── Helpers para extraer propiedades tipadas de Notion ──────────────────────

function getRichText(property: unknown): string {
  const p = property as { rich_text?: Array<{ plain_text: string }> };
  return p?.rich_text?.map((t) => t.plain_text).join("") ?? "";
}

function getTitle(property: unknown): string {
  const p = property as { title?: Array<{ plain_text: string }> };
  return p?.title?.map((t) => t.plain_text).join("") ?? "";
}

function getNumber(property: unknown): number {
  const p = property as { number?: number };
  return p?.number ?? 0;
}

function getCheckbox(property: unknown): boolean {
  const p = property as { checkbox?: boolean };
  return p?.checkbox ?? false;
}

function getMultiSelect(property: unknown): string[] {
  const p = property as { multi_select?: Array<{ name: string }> };
  return p?.multi_select?.map((s) => s.name) ?? [];
}

// ─── HOME DB: Frases (Sección 3 — ProposalV2) ───────────────────────────────

export async function getHomePhrases(): Promise<NotionPhrase[]> {
  // Temporalmente desactivado
  return [];
}
*/

// Exportaciones vacías para mantener compatibilidad
export type NotionPhrase = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  order: number;
};

export type NotionService = {
  id: string;
  title: string;
  colorClass: string;
  iconPath: string;
  items: string[];
};

export type NotionPage = {
  id: string;
  title: string;
  slug: string;
  published: boolean;
};

export async function getHomePhrases(): Promise<NotionPhrase[]> {
  return [];
}

// ─── HOME DB: Servicios (Sección 4 — ServicesV2) ────────────────────────────

export async function getHomeServices(): Promise<NotionService[]> {
  // Temporalmente desactivado
  return [];
}

// ─── PAGES DB: Listado de páginas publicadas ─────────────────────────────────

export async function getPublishedPages(): Promise<NotionPage[]> {
  // Temporalmente desactivado
  return [];
}

// ─── PAGES DB: Obtener contenido completo de una página por slug ─────────────

export async function getPageBySlug(
  slug: string
): Promise<{ page: NotionPage; markdown: string } | null> {
  // Temporalmente desactivado
  return null;
}

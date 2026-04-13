import { client } from "./client";

export type Phrase = {
  text: string;
  order: number;
};

export type Service = {
  title: string;
  items: string[];
  colorClass: string;
  iconPath: string;
  order: number;
};

export async function getPhrases(): Promise<Phrase[]> {
  try {
    const data = await client.fetch(
      `*[_type == "phrase"] | order(order asc) { text, order }`
    );
    return data;
  } catch (error) {
    console.error("Error fetching phrases from Sanity:", error);
    return [];
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const data = await client.fetch(
      `*[_type == "service"] | order(order asc) {
        title,
        items,
        colorClass,
        iconPath,
        order
      }`
    );
    return data;
  } catch (error) {
    console.error("Error fetching services from Sanity:", error);
    return [];
  }
}

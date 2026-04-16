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

export type Hero = {
  titleLine1: string;
  titleLine2: string;
  buttonText: string;
};

export type Intro = {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
};

export type WhoIsItFor = {
  title: string;
  description: string;
  targetItems: string[];
};

export type About = {
  title: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  buttonText: string;
};

export type Astrology = {
  titleLine1: string;
  titleLine2: string;
  description1: string;
  description2: string;
  description3: string;
};

export type Contact = {
  title: string;
  nameLabel: string;
  namePlaceholder: string;
  serviceLabel: string;
  servicePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  services: string[];
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

export async function getHero(): Promise<Hero | null> {
  try {
    const data = await client.fetch(
      `*[_type == "hero"][0] { titleLine1, titleLine2, buttonText }`
    );
    return data;
  } catch (error) {
    console.error("Error fetching hero from Sanity:", error);
    return null;
  }
}

export async function getIntro(): Promise<Intro | null> {
  try {
    const data = await client.fetch(
      `*[_type == "intro"][0] { line1, line2, line3, line4 }`
    );
    return data;
  } catch (error) {
    console.error("Error fetching intro from Sanity:", error);
    return null;
  }
}

export async function getWhoIsItFor(): Promise<WhoIsItFor | null> {
  try {
    const data = await client.fetch(
      `*[_type == "whoIsItFor"][0] { title, description, targetItems }`
    );
    return data;
  } catch (error) {
    console.error("Error fetching whoIsItFor from Sanity:", error);
    return null;
  }
}

export async function getAbout(): Promise<About | null> {
  try {
    const data = await client.fetch(
      `*[_type == "about"][0] { title, paragraph1, paragraph2, paragraph3, buttonText }`
    );
    return data;
  } catch (error) {
    console.error("Error fetching about from Sanity:", error);
    return null;
  }
}

export async function getAstrology(): Promise<Astrology | null> {
  try {
    const data = await client.fetch(
      `*[_type == "astrology"][0] { titleLine1, titleLine2, description1, description2, description3 }`
    );
    return data;
  } catch (error) {
    console.error("Error fetching astrology from Sanity:", error);
    return null;
  }
}

export async function getContact(): Promise<Contact | null> {
  try {
    const data = await client.fetch(
      `*[_type == "contact"][0] { title, nameLabel, namePlaceholder, serviceLabel, servicePlaceholder, messageLabel, messagePlaceholder, services }`
    );
    return data;
  } catch (error) {
    console.error("Error fetching contact from Sanity:", error);
    return null;
  }
}

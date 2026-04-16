import { client } from "../src/lib/sanity/client";

async function seedSanity() {
  console.log("🌱 Seeding Sanity CMS with initial content...");

  try {
    // Hero Section
    const hero = await client.create({
      _type: "hero",
      titleLine1: "COMUNICACIÓN",
      titleLine2: "CONSCIENTE",
      buttonText: "CONOCÉ MÁS",
    });
    console.log("✅ Created Hero document:", hero._id);

    // Intro Section
    const intro = await client.create({
      _type: "intro",
      line1: "Bienvenidos a Casa Seis.",
      line2: "Un equipo de comunicación que potencia",
      line3: "y acompaña estratégicamente",
      line4: "proyectos con propósito.",
    });
    console.log("✅ Created Intro document:", intro._id);

    // WhoIsItFor Section
    const whoIsItFor = await client.create({
      _type: "whoIsItFor",
      title: "¿PARA QUIÉN ES CASA SEIS?",
      description: "Trabajamos especialmente con proyectos vinculados a:",
      targetItems: [
        "autoconocimiento y desarrollo personal",
        "salud integral y bienestar",
        "cuerpo y movimiento",
        "terapias complementarias",
      ],
    });
    console.log("✅ Created WhoIsItFor document:", whoIsItFor._id);

    // About Section
    const about = await client.create({
      _type: "about",
      title: "¿QUIÉNES SOMOS?",
      paragraph1: "Somos Xime y Juli, comunicadoras con más de 15 años de experiencia y un camino recorrido de desarrollo personal a través de terapias y herramientas holísticas. Entendemos de mensajes, de personas y de procesos.",
      paragraph2: "También conocemos el detrás de escena: la duda, el desorden, la sobrecarga que aparece cuando un proyecto crece sin estructura.",
      paragraph3: "Por eso creamos Casa Seis. Para ordenar lo que hoy te pesa y darle dirección a lo que quiere expandirse.",
      buttonText: "QUIERO EMPEZAR",
    });
    console.log("✅ Created About document:", about._id);

    // Astrology Section
    const astrology = await client.create({
      _type: "astrology",
      titleLine1: "CASA SEIS EN",
      titleLine2: "ASTROLOGÍA",
      description1: "La Casa Seis representa el ámbito del trabajo, el servicio y la vida cotidiana.",
      description2: "Habla de cómo nos relacionamos con lo que hacemos todos los días, con nuestros hábitos y con la actitud frente a nuestras responsabilidades.",
      description3: "Es una casa que nos invita a ordenar, mejorar y perfeccionar, poniendo atención en los detalles. Porque es ahí donde pequeñas acciones sostenidas construyen bienestar a largo plazo.",
    });
    console.log("✅ Created Astrology document:", astrology._id);

    // Contact Section
    const contact = await client.create({
      _type: "contact",
      title: "Si sentís que es por acá, hablemos.",
      nameLabel: "Nombre",
      namePlaceholder: "¿Cómo te llamás?",
      serviceLabel: "Servicio de interés",
      servicePlaceholder: "Seleccioná una opción",
      messageLabel: "Mensaje",
      messagePlaceholder: "Contanos brevemente tu proyecto o consulta...",
      services: [
        "Diagnóstico comunicacional",
        "Orden estratégico",
        "Acción y producción",
        "Consulta general",
      ],
    });
    console.log("✅ Created Contact document:", contact._id);

    console.log("\n🎉 Sanity CMS seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding Sanity:", error);
    process.exit(1);
  }
}

seedSanity();

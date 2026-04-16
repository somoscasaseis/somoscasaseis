type ValidationRule = {
  required: () => ValidationRule;
};

const aboutSchema = {
  name: "about",
  title: "About Section (Quiénes Somos)",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "¿QUIÉNES SOMOS?",
    },
    {
      name: "paragraph1",
      title: "Párrafo 1",
      type: "text",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "Somos Xime y Juli, comunicadoras con más de 15 años de experiencia y un camino recorrido de desarrollo personal a través de terapias y herramientas holísticas. Entendemos de mensajes, de personas y de procesos.",
    },
    {
      name: "paragraph2",
      title: "Párrafo 2",
      type: "text",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "También conocemos el detrás de escena: la duda, el desorden, la sobrecarga que aparece cuando un proyecto crece sin estructura.",
    },
    {
      name: "paragraph3",
      title: "Párrafo 3 (Destacado)",
      type: "text",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "Por eso creamos Casa Seis. Para ordenar lo que hoy te pesa y darle dirección a lo que quiere expandirse.",
    },
    {
      name: "buttonText",
      title: "Texto del Botón",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "QUIERO EMPEZAR",
    },
  ],
};

export default aboutSchema;

type ValidationRule = {
  required: () => ValidationRule;
};

const heroSchema = {
  name: "hero",
  title: "Hero Section (Inicio)",
  type: "document",
  fields: [
    {
      name: "titleLine1",
      title: "Título - Línea 1",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "COMUNICACIÓN",
    },
    {
      name: "titleLine2",
      title: "Título - Línea 2",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "CONSCIENTE",
    },
    {
      name: "buttonText",
      title: "Texto del Botón",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "CONOCÉ MÁS",
    },
  ],
};

export default heroSchema;

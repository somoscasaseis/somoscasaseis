type ValidationRule = {
  required: () => ValidationRule;
};

const introSchema = {
  name: "intro",
  title: "Intro Section (Mirada)",
  type: "document",
  fields: [
    {
      name: "line1",
      title: "Línea 1",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "Bienvenidos a Casa Seis.",
    },
    {
      name: "line2",
      title: "Línea 2",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "Un equipo de comunicación que potencia",
    },
    {
      name: "line3",
      title: "Línea 3",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "y acompaña estratégicamente",
    },
    {
      name: "line4",
      title: "Línea 4",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "proyectos con propósito.",
    },
  ],
};

export default introSchema;

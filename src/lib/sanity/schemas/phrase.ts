type ValidationRule = {
  required: () => ValidationRule;
  max: (limit: number) => ValidationRule;
};

const phraseSchema = {
  name: "phrase",
  title: "Frases Rotativas",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Texto de la Frase",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required().max(100),
    },
    {
      name: "order",
      title: "Orden de aparición",
      type: "number",
    },
  ],
};

export default phraseSchema;

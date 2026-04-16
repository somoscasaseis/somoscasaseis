type ValidationRule = {
  required: () => ValidationRule;
};

const whoIsItForSchema = {
  name: "whoIsItFor",
  title: "Who Is It For Section (Para Quién Es)",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "¿PARA QUIÉN ES CASA SEIS?",
    },
    {
      name: "description",
      title: "Descripción",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "Trabajamos especialmente con proyectos vinculados a:",
    },
    {
      name: "targetItems",
      title: "Ítems de Objetivo",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: [
        "autoconocimiento y desarrollo personal",
        "salud integral y bienestar",
        "cuerpo y movimiento",
        "terapias complementarias",
      ],
    },
  ],
};

export default whoIsItForSchema;

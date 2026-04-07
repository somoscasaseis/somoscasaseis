type ValidationRule = {
  required: () => ValidationRule;
};

const serviceSchema = {
  name: "service",
  title: "Servicios (Pilares)",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título del Pilar",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 3,
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "icon",
      title: "Icono (Lucide name)",
      type: "string",
      description: "Nombre del icono de Lucide (ej: Search, ListChecks, Play)",
    },
    {
      name: "order",
      title: "Orden de aparición",
      type: "number",
    },
  ],
};

export default serviceSchema;

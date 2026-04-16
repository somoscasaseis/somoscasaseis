type ValidationRule = {
  required: () => ValidationRule;
};

const contactSchema = {
  name: "contact",
  title: "Contact Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "Si sentís que es por acá, hablemos.",
    },
    {
      name: "nameLabel",
      title: "Etiqueta Nombre",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "Nombre",
    },
    {
      name: "namePlaceholder",
      title: "Placeholder Nombre",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "¿Cómo te llamás?",
    },
    {
      name: "serviceLabel",
      title: "Etiqueta Servicio",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "Servicio de interés",
    },
    {
      name: "servicePlaceholder",
      title: "Placeholder Servicio",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "Seleccioná una opción",
    },
    {
      name: "messageLabel",
      title: "Etiqueta Mensaje",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "Mensaje",
    },
    {
      name: "messagePlaceholder",
      title: "Placeholder Mensaje",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "Contanos brevemente tu proyecto o consulta...",
    },
    {
      name: "services",
      title: "Servicios (Opciones del dropdown)",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: [
        "Diagnóstico comunicacional",
        "Orden estratégico",
        "Acción y producción",
        "Consulta general",
      ],
    },
  ],
};

export default contactSchema;

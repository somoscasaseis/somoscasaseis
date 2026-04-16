type ValidationRule = {
  required: () => ValidationRule;
};

const astrologySchema = {
  name: "astrology",
  title: "Astrology Section",
  type: "document",
  fields: [
    {
      name: "titleLine1",
      title: "Título - Línea 1",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "CASA SEIS EN",
    },
    {
      name: "titleLine2",
      title: "Título - Línea 2",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "ASTROLOGÍA",
    },
    {
      name: "description1",
      title: "Descripción 1",
      type: "text",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "La Casa Seis representa el ámbito del trabajo, el servicio y la vida cotidiana.",
    },
    {
      name: "description2",
      title: "Descripción 2",
      type: "text",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "Habla de cómo nos relacionamos con lo que hacemos todos los días, con nuestros hábitos y con la actitud frente a nuestras responsabilidades.",
    },
    {
      name: "description3",
      title: "Descripción 3",
      type: "text",
      validation: (Rule: ValidationRule) => Rule.required(),
      initialValue: "Es una casa que nos invita a ordenar, mejorar y perfeccionar, poniendo atención en los detalles. Porque es ahí donde pequeñas acciones sostenidas construyen bienestar a largo plazo.",
    },
  ],
};

export default astrologySchema;

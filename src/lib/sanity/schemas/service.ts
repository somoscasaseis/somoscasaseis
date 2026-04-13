type ValidationRule = {
  required: () => ValidationRule;
};

const serviceSchema = {
  name: "service",
  title: "Servicios (Tarjetas)",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "items",
      title: "Lista de items (Viñetas)",
      type: "array",
      of: [{ type: "string" }],
      description: "Agrega cada viñeta que aparecerá dentro del servicio.",
    },
    {
      name: "colorClass",
      title: "Color de Fondo (Clase Tailwind o Hex)",
      type: "string",
      initialValue: "bg-[#1c2833]",
      description: "Ejemplo: bg-[#1c2833], bg-[#2d5e62], bg-[#7d3857]",
    },
    {
      name: "iconPath",
      title: "Ruta del Ícono",
      type: "string",
      initialValue: "/diagnostico.svg",
      description: "Ruta del SVG local (ej: /diagnostico.svg, /orden.svg, /accion.svg)",
    },
    {
      name: "order",
      title: "Orden de aparición",
      type: "number",
    },
  ],
};

export default serviceSchema;

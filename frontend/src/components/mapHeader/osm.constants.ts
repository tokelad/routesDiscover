export const OSM_KEY_MAP: Record<
  string,
  {
    label: string
    icon: string
    category: string
  }
> = {
  // =========================
  // SHOPS
  // =========================

  shop: {
    label: "Shop",
    icon: "🛍️",
    category: "shopping",
  },

  // =========================
  // FOOD / SERVICES
  // =========================

  amenity: {
    label: "Service",
    icon: "🍴",
    category: "service",
  },

  // =========================
  // TOURISM
  // =========================

  tourism: {
    label: "Tourism",
    icon: "🏨",
    category: "tourism",
  },

  // =========================
  // ROADS
  // =========================

  highway: {
    label: "Street",
    icon: "🛣️",
    category: "transport",
  },

  railway: {
    label: "Railway",
    icon: "🚆",
    category: "transport",
  },

  aeroway: {
    label: "Airport",
    icon: "✈️",
    category: "transport",
  },

  public_transport: {
    label: "Transport",
    icon: "🚌",
    category: "transport",
  },

  route: {
    label: "Route",
    icon: "🧭",
    category: "transport",
  },

  // =========================
  // PLACES
  // =========================

  place: {
    label: "Place",
    icon: "📍",
    category: "location",
  },

  boundary: {
    label: "Boundary",
    icon: "🗺️",
    category: "location",
  },

  // =========================
  // NATURE
  // =========================

  natural: {
    label: "Nature",
    icon: "⛰️",
    category: "nature",
  },

  waterway: {
    label: "Water",
    icon: "🌊",
    category: "nature",
  },

  landuse: {
    label: "Land",
    icon: "🌱",
    category: "nature",
  },

  // =========================
  // LEISURE
  // =========================

  leisure: {
    label: "Leisure",
    icon: "🌳",
    category: "leisure",
  },

  sport: {
    label: "Sport",
    icon: "⚽",
    category: "leisure",
  },

  // =========================
  // BUILDINGS
  // =========================

  building: {
    label: "Building",
    icon: "🏢",
    category: "building",
  },

  addr: {
    label: "Address",
    icon: "📮",
    category: "building",
  },

  // =========================
  // BUSINESS
  // =========================

  office: {
    label: "Office",
    icon: "💼",
    category: "business",
  },

  industrial: {
    label: "Industrial",
    icon: "🏭",
    category: "business",
  },

  craft: {
    label: "Craft",
    icon: "🛠️",
    category: "business",
  },

  man_made: {
    label: "Infrastructure",
    icon: "🏗️",
    category: "business",
  },

  // =========================
  // CULTURE / HISTORY
  // =========================

  historic: {
    label: "Historic",
    icon: "🏛️",
    category: "culture",
  },

  religion: {
    label: "Religion",
    icon: "⛪",
    category: "culture",
  },

  tourism_attraction: {
    label: "Attraction",
    icon: "🎡",
    category: "culture",
  },

  // =========================
  // EMERGENCY
  // =========================

  emergency: {
    label: "Emergency",
    icon: "🚑",
    category: "emergency",
  },

  healthcare: {
    label: "Healthcare",
    icon: "🏥",
    category: "emergency",
  },

  // =========================
  // EDUCATION
  // =========================

  education: {
    label: "Education",
    icon: "🎓",
    category: "education",
  },

  // =========================
  // POWER / UTILS
  // =========================

  power: {
    label: "Power",
    icon: "⚡",
    category: "infrastructure",
  },

  telecom: {
    label: "Telecom",
    icon: "📡",
    category: "infrastructure",
  },

  // =========================
  // DEFAULT
  // =========================

  default: {
    label: "Other",
    icon: "📌",
    category: "other",
  },
}
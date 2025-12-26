// /data/category.mock.ts
export interface Category {
  slug: string;
  name: string;
  description: string;
  coverUrl: string;
  coverPhoto?: {
    blurData: string;
  };
}

export const StaticCategories: Category[] = [
  {
    slug: "creative",
    name: "Creative Studio",
    description: "creative studio pernikahan terbaik.",
    coverUrl: "images/cover.jpg",
    coverPhoto: {
      blurData: "L8PZT6%fFxxC}=S~%NRi0KsAMdXT", // valid Blurhash
    },
  },
  {
    slug: "wedding",
    name: "Wedding Photography",
    description: "wedding photography Banda Aceh.",
    coverUrl: "images/cover.jpg",
    coverPhoto: {
      blurData: "L8PZT6%fFxxC}=S~%NRi0KsAMdXT", // valid Blurhash
    },
  },
  {
    slug: "studio",
    name: "Studio Photography",
    description: "Studio profesional untuk sesi foto dan video.",
    coverUrl: "images/cover.jpg",
    coverPhoto: {
      blurData: "L8PZT6%fFxxC}=S~%NRi0KsAMdXT", // valid Blurhash
    },
  },
  {
    slug: "photography",
    name: "Photography",
    description: "Temukan fotografer pernikahan terbaik.",
    coverUrl: "images/cover.jpg",
    coverPhoto: {
      blurData: "L8PZT6%fFxxC}=S~%NRi0KsAMdXT", // valid Blurhash
    },
  },
  {
    slug: "videography",
    name: "Videography",
    description: "Abadikan momen lewat video sinematik.",
    coverUrl: "images/cover.jpg",
    coverPhoto: {
      blurData: "L8PZT6%fFxxC}=S~%NRi0KsAMdXT", // valid Blurhash
    },
  },
];

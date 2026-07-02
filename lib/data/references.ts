import {
  Landmark,
  Hospital,
  Home,
  Factory,
  GraduationCap,
  Store,
  type LucideIcon,
} from "lucide-react";

export type ReferenceCategory =
  | "kamu"
  | "hastane"
  | "konut"
  | "sanayi"
  | "egitim"
  | "ticaret";

export const referenceCategories: { id: ReferenceCategory; icon: LucideIcon }[] = [
  { id: "kamu", icon: Landmark },
  { id: "hastane", icon: Hospital },
  { id: "konut", icon: Home },
  { id: "sanayi", icon: Factory },
  { id: "egitim", icon: GraduationCap },
  { id: "ticaret", icon: Store },
];

export type ReferenceProject = {
  id: string;
  category: ReferenceCategory;
  location: string;
  image: string;
  year?: string;
};

/**
 * Verified completed projects sourced from the company's official
 * project records and client-provided photos.
 */
export const referenceProjects: ReferenceProject[] = [
  {
    id: "ozel-harekat-daire-baskanligi",
    category: "kamu",
    location: "Ankara",
    image: "/references/ozel-harekat-daire-baskanligi.jpg",
    year: "2010",
  },
  {
    id: "bilim-sanayi-teknoloji-bakanligi",
    category: "kamu",
    location: "Ankara",
    image: "/references/bilim-sanayi-teknoloji-bakanligi.jpg",
    year: "2012",
  },
  {
    id: "euas-kangal-termik-santrali",
    category: "sanayi",
    location: "Sivas",
    image: "/references/euas-kangal-termik-santrali.jpg",
    year: "2012",
  },
  {
    id: "euas-orhaneli-termik-santrali",
    category: "sanayi",
    location: "Bursa",
    image: "/references/euas-orhaneli-termik-santrali.jpg",
    year: "2013",
  },
  {
    id: "teknopark-ankara",
    category: "ticaret",
    location: "Ankara",
    image: "/references/teknopark-ankara.jpg",
  },
  {
    id: "akkent-paradise-gardens",
    category: "konut",
    location: "Ankara",
    image: "/references/akkent-paradise-gardens.jpg",
  },
  {
    id: "defne-etap-hatay",
    category: "konut",
    location: "Hatay",
    image: "/references/defne-etap-hatay.jpg",
  },
  {
    id: "nevayali-izmir",
    category: "konut",
    location: "İzmir",
    image: "/references/nevayali-izmir.jpg",
  },
  {
    id: "ibn-haldun-universitesi",
    category: "egitim",
    location: "İstanbul",
    image: "/references/ibn-haldun-universitesi.jpg",
  },
  {
    id: "sanliurfa-piazza-avm",
    category: "ticaret",
    location: "Şanlıurfa",
    image: "/references/sanliurfa-piazza-avm.jpg",
  },
  {
    id: "tsk-ankara",
    category: "kamu",
    location: "Ankara",
    image: "/references/tsk-ankara.png",
    year: "1999",
  },
  {
    id: "konya-hastanesi",
    category: "hastane",
    location: "Konya",
    image: "/references/konya-hastanesi.png",
    year: "2003",
  },
  {
    id: "sakarya-hastanesi",
    category: "hastane",
    location: "Adapazarı",
    image: "/references/sakarya-hastanesi.png",
    year: "2004",
  },
  {
    id: "ulastirma-bakanligi",
    category: "kamu",
    location: "Ankara",
    image: "/references/ulastirma-bakanligi.png",
    year: "2004",
  },
  {
    id: "gazi-hastanesi",
    category: "hastane",
    location: "Ankara",
    image: "/references/gazi-hastanesi.png",
    year: "2005",
  },
  {
    id: "dsi-genel-mudurluk",
    category: "kamu",
    location: "Ankara",
    image: "/references/dsi-genel-mudurluk.png",
    year: "2006",
  },
];

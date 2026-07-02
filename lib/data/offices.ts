export type Office = {
  id: string;
  nameKey: string;
  address: string;
  phone: string;
  hours: string;
};

export const offices: Office[] = [
  {
    id: "ankara",
    nameKey: "ankara",
    address: "Saray Mahallesi, Dağyaka Caddesi No:47/4, Kahramankazan / Ankara",
    phone: "+90 850 722 7827",
    hours: "08:30 – 18:00",
  },
  {
    id: "istanbul",
    nameKey: "istanbul",
    address: "Zuhuratbaba, Gençler Caddesi No:36/3, Bakırköy / İstanbul",
    phone: "+90 850 722 7827",
    hours: "08:30 – 18:00",
  },
];

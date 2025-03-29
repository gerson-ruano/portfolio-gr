export type Certificate = {
  title: string;
  
  techs: string[];
  link: string;
  period: string[];
  document?: string;
  imageUrl?: string;
  isComingSoon?: boolean;
};

const certificates: Certificate[] = [
  {
    title: "Integración API de Facturación Electrónica de Factus",
    techs: ["HALLTEC"],
    period: ["Emisión - Ene 2025 "," Expira - No"],
    link: "https://halltec.co/reto-factus-content-173.html",
    document: "/assets/images/factus_api.png",
    imageUrl: "/assets/images/factus_api.png"
  },
  {
    title: "Fortinet Certified Fundamentals in Cybersecurity",
    techs: ["Fortinet"],
    period: ["Emisión - Sep 2022 "," Expira - Sep 2024 "," ID - 0707142753GR"],
    link: "https://training.fortinet.com/admin/tool/certificate/index.php?id=0707142753GR",
    document: "/assets/images/ffc_fortinet.png",
    imageUrl: "/assets/images/ffc_fortinet.png",
    //isComingSoon: true, //no tiene el repositorio
  },
  {
    title: "Scrum Fundamentals Certified",
    techs: ["SCRUMstudy"],
    period: ["Emisión - May 2024 "," Expira - May 2026 "," ID - 1031170"],
    link: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-GersonRocaelRuanoHernandez-1031170.pdf",
    document: "/assets/images/scrum_fundamentals.png",
    imageUrl: "/assets/images/scrum_fundamentals.png"
  },
];

export default certificates;

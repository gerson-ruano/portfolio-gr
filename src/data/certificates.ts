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
    period: ["Emisión - Abril 2025 "," Expira - Abril 2027 "," ID - 0707142753GR"],
    link: "https://training.fortinet.com/admin/tool/certificate/index.php?code=0707142753GR",
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
  {
    title: "Ciberseguridad",
    techs: ["SIB"],
    period: ["Emisión - Abr 2025 "," Expira - No "," ID - 2020751766GR"],
    link: "https://www.sib.gob.gt/PortalEF/admin/tool/certificate/index.php?code=2020751766GR",
    document: "/assets/images/ciberseguridad.png",
    imageUrl: "/assets/images/ciberseguridad.png"
  },
];

export default certificates;

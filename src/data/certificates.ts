export type Certificate = {
  title: string;
  
  techs: string[];
  link: string;
  emission: string[];
  repoUrl?: string;
  imageUrl?: string;
  isComingSoon?: boolean;
};

const certificates: Certificate[] = [
  {
    title: "Integración API de Facturación Electrónica de Factus",
    techs: ["HALLTEC"],
    emission: ["Emisión - Ene 2025 "," Expira - No"],
    link: "https://halltec.co/reto-factus-content-173.html",
    repoUrl: "/assets/images/contactApp.png",
    imageUrl: "/assets/images/contactApp.png"
  },
  {
    title: "Ventas Lite",
    techs: ["Laravel", "Mysql"],
    emission: ["Emisión - Ene 2025 "," Expira - No"],
    link: "/",
    repoUrl: "https://github.com/gerson-ruano/ventaslite.git",
    imageUrl: "/assets/images/ventaslite.png",
    //isComingSoon: true,
  },
  {
    title: "JWT Aut Laravel",
    techs: ["Laravel", "Mysql"],
    emission: ["Emisión - Ene 2025 "," Expira - No"],
    link: "/",
    repoUrl: "https://github.com/gerson-ruano/jwt-laravel.git",
    imageUrl: "/assets/images/jwt-laravel.png"
  },
  {
    title: "Cursos",
    techs: ["Laravel", "Mysql"],
    emission: ["Emisión - Ene 2025 "," Expira - No"],
    link: "/",
    repoUrl: "https://github.com/gerson-ruano/cursos.git",
    imageUrl: "/assets/images/cursos.png"
  },
  /*
  {
    title: "Evaluaciòn de Creditos",
    techs: ["Java", "Mysql"],
    link: "/",
    repoUrl: "https://github.com/gerson-ruano/Evaluacion-de-credito.git",
    imageUrl: "/assets/images/contactApp.png"
  },*/
];

export default certificates;

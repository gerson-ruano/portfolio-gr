export type Project = {
  title: string;
  techs: string[];
  link: string;
  repoUrl?: string;
  imageUrl?: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Contact App",
    techs: ["Python","Flask","Mysql"],
    link: "https://github.com/gerson-ruano",
    repoUrl: "https://github.com/gerson-ruano/contact-app.git",
    imageUrl: "/assets/images/contactApp.png"
  },
  {
    title: "Ventas Lite",
    techs: ["Laravel", "Mysql"],
    link: "/",
    repoUrl: "https://github.com/gerson-ruano/ventaslite.git",
    imageUrl: "/assets/images/ventaslite.png"
    //isComingSoon: true,
  },
  {
    title: "JWT Aut Laravel",
    techs: ["Laravel", "Mysql"],
    link: "/",
    repoUrl: "https://github.com/gerson-ruano/jwt-laravel.git",
    imageUrl: "/assets/images/jwt-laravel.png"
  },
  {
    title: "Cursos",
    techs: ["Laravel", "Mysql"],
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

export default projects;

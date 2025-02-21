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
    isComingSoon: true,
  },
  {
    title: "JWT Aut Laravel",
    techs: ["Laravel", "Mysql"],
    link: "/",
    repoUrl: "https://github.com/gerson-ruano/jwt-laravel.git",
  },
  {
    title: "Cursos",
    techs: ["Laravel", "Mysql"],
    link: "https://github.com/gerson-ruano/cursos.git",
  },
  {
    title: "Evaluador de creditos",
    techs: ["Java", "Mysql"],
    link: "https://github.com/gerson-ruano/Evaluacion-de-credito.git",
    isComingSoon: true,
  },
];

export default projects;

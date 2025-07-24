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
    link: "/projects",
    repoUrl: "https://github.com/gerson-ruano/contact-app.git",
    imageUrl: "/assets/images/contactApp.png"
  },
  {
    title: "Ventas Lite",
    techs: ["Laravel", "Mysql","Livewire"],
    link: "/projects/",
    repoUrl: "https://github.com/gerson-ruano/ventaslite.git",
    imageUrl: "/assets/images/ventaslite.png"
    //isComingSoon: true, //no esta montado en la WEB
  },
  {
    title: "Admi GR",
    techs: ["Laravel", "Mysql", "Filament"],
    link: "/projects",
    repoUrl: "https://github.com/gerson-ruano/admigr.git",
    imageUrl: "/assets/images/admigr.png"
  },
  {
    title: "Monitor de Ips",
    techs: ["Python", "Flask"],
    link: "/projects",
    repoUrl: "https://github.com/gerson-ruano/monitor_ips.git",
    imageUrl: "/assets/images/monitor_ips.png"
  },
  {
    title: "JWT Aut Laravel",
    techs: ["Laravel", "Mysql"],
    link: "/projects",
    repoUrl: "https://github.com/gerson-ruano/jwt-laravel.git",
    imageUrl: "/assets/images/jwt-laravel.png"
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

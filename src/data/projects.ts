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
    title: "Form WEB",
    techs: ["Python", "Flask"],
    link: "https://form-web-zbu3.onrender.com/login",
    repoUrl: "https://github.com/gerson-ruano/form_web.git",
    imageUrl: "/assets/images/adm_form.png"
    //isComingSoon: true,
  },
  {
    title: "Mejorador de CVs",
    techs: ["Python", "Streamlit"],
    link: "https://mejoradordecvs.streamlit.app",
    repoUrl: "https://github.com/gerson-ruano/analizador_ATS.git",
    imageUrl: "/assets/images/mejorador_cvs.png"
    //isComingSoon: true,
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

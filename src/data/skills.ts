export type SkillType =
  | "Programming Languages"
  | "Tools"
  | "Libraries / Framework"
  | "Databases";

export type Skill = {
  name: string;
  icon: string;
  isLocal?: boolean;
  experience?: number;
  colorClass?: string;
};

export type SkillCardProps = {
  skillGroup: Skill[];
  type: SkillType;
};

export enum IconName {
  Angular = "icon-[logos--angular-icon]",
  JS = "icon-[logos--javascript]",
  TS = "icon-[logos--typescript-icon]",
  Java = "icon-[logos--java]",
  Python = "icon-[logos--python]",
  React = "icon-[logos--react]",
  Express = "icon-[skill-icons--expressjs-dark]",
  Nest = "icon-[logos--nestjs]",
  Nodejs = "icon-[logos--nodejs-icon]",
  GCP = "icon-[logos--google-cloud]",
  AngularJS = "icon-[devicon--angularjs]",
  Linux = "icon-[logos--linux-tux]",
  Git = "icon-[logos--git-icon]",
  Mysql = "icon-[logos--mysql]",
  Postgresql = "icon-[logos--postgresql]",
  Mongodb = "icon-[logos--mongodb-icon]",
  Docker = "icon-[logos--docker-icon]",
  Vim = "icon-[logos--vim]",
  Php = "icon-[logos--php]",
  Laravel = "icon-[logos--laravel]",
  Tailwindcss = "icon-[logos--tailwindcss]",

  Livewire = "/assets/svg/icons/livewire.svg",
  Bookstack = "/assets/svg/icons/bookstack.svg",
  Proxmox = "/assets/svg/icons/proxmox.svg",
}

export type Skills = SkillCardProps[];

const skills: Skills = [
  {
    type: "Programming Languages",
    skillGroup: [ 
      {
        name: "JavaScript",
        icon: IconName["JS"],
        colorClass: "text-slate-800 bg-yellow-400",
      },
      {
        name: "Python",
        icon: IconName["Python"],
        colorClass: "text-slate-50 bg-red-500",
      },
      {
        name: "Php",
        icon: IconName["Php"],
        colorClass: "text-slate-50 bg-blue-500",
      },
    ],
  },
  {
    type: "Libraries / Framework",
    skillGroup: [
      {
        name: "Laravel",
        icon: IconName["Laravel"],
        colorClass: "text-slate-900 bg-lime-50",
      },
      {
        name: "Tailwind",
        icon: IconName["Tailwindcss"],
        colorClass: "text-slate-900 bg-lime-100",
      },
      {
        name: "Node.js",
        icon: IconName["Nodejs"],
        colorClass: "text-slate-900 bg-slate-200",
      },
      {
        name: "Livewire",
        icon: IconName.Livewire,
        isLocal: true,
        colorClass: "text-slate-900 bg-orange-200",
      },
    ],
  },
  {
    type: "Tools",
    skillGroup: [
      {
        name: "Proxmox",
        icon: IconName.Proxmox,
        isLocal: true,
        colorClass: "text-slate-800 bg-orange-200",
      },
      {
        name: "Linux",
        icon: IconName["Linux"],
        colorClass: "text-slate-800 bg-gray-200",
      },
      {
        name: "Git",
        icon: IconName["Git"],
        colorClass: "text-slate-800 bg-orange-200",
      },
      {
        name: "Docker",
        icon: IconName["Docker"],
        colorClass: "text-slate-50 bg-orange-700",
      },
      {
        name: "Bookstack",
        icon: IconName.Bookstack,
        isLocal: true,
        colorClass: "text-slate-50 bg-blue-700",
      },
    ],
  },
  {
    type: "Databases",
    skillGroup: [
      {
        name: "PostgreSQL",
        icon: IconName["Postgresql"],
        colorClass: "text-slate-800 bg-blue-300",
      },
      {
        name: "Mysql",
        icon: IconName["Mysql"],
        colorClass: "text-slate-800 bg-red-300",
      },
    ],
  },
];

export default skills;

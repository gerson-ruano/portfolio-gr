export enum SocialType {
  linkedIn = 'LinkedIn',
  gitHub = 'GitHub',
  twitter = 'Twitter',
  email = 'Email',
  instagram = 'Instagram',
}

type SocialMediaPlatform = {
  type: SocialType;
  url: string;
  icon: string;
};

type Presentation = {
  name: string;
  mail: string;
  title: string;
  description: string;
  socialMedia: SocialMediaPlatform[];
};

const socialMediaPlatforms: SocialMediaPlatform[] = [
  /*{
    type: SocialType.twitter,
    url: 'https://twitter.com/xxx',
    icon: '/assets/svg/icons/x.svg',
  },*/
  {
    type: SocialType.gitHub,
    url: 'https://github.com/gerson-ruano',
    icon: '/assets/svg/icons/github.svg',
  },
  {
    type: SocialType.email,
    url: 'toge619@gmail.com',
    icon: '/assets/svg/icons/email.svg',
  },
  {
    type: SocialType.linkedIn,
    url: 'https://www.linkedin.com/in/gerson-ruano',
    icon: '/assets/svg/icons/linkedin.svg',
  },
  // {
  //   type: SocialType.instagram,
  //   url: 'https://www.instagram.com/xxx',
  //   icon: '/assets/svg/icons/instagram.svg',
  // },
];

const presentation: Presentation = {
  name: "Gerson Ruano",
  mail: "toge619@gmail.com",
  title: "Engineer Systems",
  description: `
    ¡Hola, soy <strong class="font-bold text-blue-700">Ingeniero en Sistemas</strong>. 
    En esta web encontrarás muchos de mis <strong class="font-bold text-blue-700">Proyectos</strong> 
    en los que he trabajado y <strong class="font-bold text-blue-700">Tecnologias </strong>con las que he trabajado 
    asi como <strong class="font-bold text-blue-700"> enlaces</strong> a mis demas plataformas.
  `,
  socialMedia: socialMediaPlatforms,
};

export default presentation;

export enum SocialType {
  linkedIn = 'LinkedIn',
  gitHub = 'GitHub',
  twitter = 'Twitter',
  email = 'Email',
  instagram = 'Instagram',
  tableau = 'Tableau',
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
  linkedIn: string;
  description: string;
  socialMedia: SocialMediaPlatform[];
};

const socialMediaPlatforms: SocialMediaPlatform[] = [
  {
    type: SocialType.tableau,
    url: 'https://public.tableau.com/app/profile/gerson6011',
    icon: '/assets/svg/icons/tableau.svg',
  },
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
  title: "Systems Analyst / Developer",
  linkedIn: "https://www.linkedin.com/in/gerson-ruano",
  description: `
    Hello, I'm <strong class="font-bold text-blue-500">Gerson Ruano</strong>
On this website you'll find some of my <strong class="font-bold text-blue-500">publications</strong>
that I find interesting, <strong class="font-bold text-blue-500">projects</strong> I've worked on,
<strong class="font-bold text-blue-500">courses/certifications</strong> I've taken and certified,
also <strong class="font-bold text-blue-500">Technologies</strong> and different tools I've worked with,
as well as <strong class="font-bold text-blue-500">links</strong> to my other contact platforms.
  `,
  socialMedia: socialMediaPlatforms,
};

export default presentation;

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
  {
    type: SocialType.twitter,
    url: 'https://twitter.com/xxx',
    icon: '/assets/svg/icons/x.svg',
  },
  {
    type: SocialType.gitHub,
    url: 'https://github.com/',
    icon: '/assets/svg/icons/github.svg',
  },
  {
    type: SocialType.email,
    url: 'xxx@email.com',
    icon: '/assets/svg/icons/email.svg',
  },
  {
    type: SocialType.linkedIn,
    url: 'https://www.linkedin.com/',
    icon: '/assets/svg/icons/linkedin.svg',
  },
  // {
  //   type: SocialType.instagram,
  //   url: 'https://www.instagram.com/xxx',
  //   icon: '/assets/svg/icons/instagram.svg',
  // },
];

const presentation: Presentation = {
  name: "Anil",
  mail: "Anil.Kumble@gmail.com",
  title: "Software Engineer",
  description: `
    Hi, I'm a <strong class="font-normal text-orange-600">software developer</strong>.
    I am currently working with <strong class="font-normal text-orange-600">Typescript, ReactJS and Java</strong>.
    Outside of work I really enjoy Cricket and Bollywood Movies.
  `,
  socialMedia: socialMediaPlatforms,
};

export default presentation;

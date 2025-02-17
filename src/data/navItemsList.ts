export type NavItemType = {
  title: string;
  link: string;
  additionalClasses?: string;
};

const cvUrl = "/assets/cv.pdf";

const navItemsList: NavItemType[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Projects",
    link: "/projects"
  },
  {
    title: "Download CV",
    link: cvUrl,
    additionalClasses: "border-2 rounded-xl p-1 border-blue-500 font-bold",
  }
];

export default navItemsList;

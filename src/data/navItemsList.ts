export type NavItemType = {
  title: string;
  link: string;
  additionalClasses?: string;
};

const cvUrl = "/assets/desarrollador-web.pdf";

const navItemsList: NavItemType[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Project details",
    link: "/blog",
  },
  {
    title: "Projects",
    link: "/projects"
  },
  {
    title: "Courses",
    link: "/certificates"
  },
  {
    title: "CV",
    link: cvUrl,
    additionalClasses: "border-2 rounded-xl border-blue-500",
  },
];

export default navItemsList;

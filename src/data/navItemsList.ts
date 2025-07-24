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
    title: "Projects",
    link: "/projects"
  },
  {
    title: "Project details",
    link: "/blog",
  },
  {
    title: "Courses",
    link: "/certificates"
  },
  {
    title: "CV",
    link: cvUrl,
    additionalClasses: "border-2 rounded-lg border-blue-500 text-sm",
  },
];

export default navItemsList;

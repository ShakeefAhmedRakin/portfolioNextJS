const title = "Full Stack Engineer";
const birthPlace = "Bangladesh";

const SiteConfig = {
  // Site Meta Data
  title: title,
  fullName: "Shakeef Ahmed Rakin",
  nationality: "Bangladeshi",
  heroImage: `${process.env.WEBSITE_URL}/images/branding/main-hero.jpg`,
  birthPlace: birthPlace,
  location: "Dhaka, Bangladesh",
  gender: "male",
  heroDescription: `${title} from ${birthPlace}, skilled in developing web applications and integrating AI solutions. Experienced in machine learning projects, including natural language processing and computer vision.`,
  footerDescription: `${title} with expertise in web development, software engineering and AI.`,
  languages: ["English", "Bengali"],
  // Contact
  email: "shakeef.rakin321@gmail.com",
  resumeLink:
    "https://drive.google.com/file/d/1KEX5j0xOPu2IFVyMyHDRlAR04qb7Pauz/view",

  // For Fetching Blogs From Medium
  mediumUsername: "shakeef.rakin321",
  mediumLink: `https://medium.com/@shakeef.rakin321`,
};

export default SiteConfig;

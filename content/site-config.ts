const fullName = "Shakeef Ahmed Rakin";
const title = "Full Stack Engineer";
const birthPlace = "Bangladesh";
export const yearsOfExperience = "1.5+";

const SiteConfig = {
  // Site Meta Data
  title: title,
  fullName: fullName,
  nationality: "Bangladeshi",
  gallery: {
    mainHeroImage: {
      name: `${fullName} | Hero Image`,
      src: "/images/branding/hero-main.png",
      blurURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA80lEQVR4ARyNy07CUBiE5xza6g5iNDa9xERKS4s1Mb6BG1a+s3sTE8OGKhhMvCCoWNTSFs7/e2Q1k8z3ZaTretQJQuolJ5Qm6TaTuEfdKKaoE5E0TUskYVsceY5o7jZE4NvCtQ9FGofCdWwhTcNAHLbRajVxduziNPDhew4u+xdIwgByx7JwMxji6WWK8fMc2WQKoyExvHvA6+wdkgGsNxuMxhNkj2+4HmS41332ucCqqiGVUiDS0LpGRQpS21/5EvOPBb5/fiH/7bquNUSwGgL98y4UMZZ6zPNcXzBxUa7YME0uFfPV7YgP9ve4KAouq4r/AAAA//+md4fvAAAABklEQVQDAP1Wc+F5QA/NAAAAAElFTkSuQmCC",
    },
    aboutHeroImage: {
      name: `${fullName} | About Image`,
      src: `/images/branding/hero-about.png`,
      blurURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAALCAYAAABCm8wlAAAAAXNSR0IArs4c6QAAAVZJREFUKFMFwUsoRFEAgOH/zDjGzBBTlGg8Qh5JiGxIsWCHspFXkZRpCFkpe7FRbFgoLKxloURemYUNJSQkRA0ZY3LNvde9x/eJ6fk55fb68OhxmhpqSUkyCZ3f4P0OcxOViMDMjLISXBg4qMnPpsKfzl/kjcvzKzRbIrrGxpVMcPIR+eL6+AhL0wgOdVFWXEaybSM6RqeUL83HReiU9JdLstxwZ0gGu9t4dvkRAxMBlZFXztnOFiN+i9RYhPucSh51SdyVgugNDKjM7Fy0zzAFTxeIryjh2mbe4zZOhxOxsrGqSpIUGVaMp/1tDE2nvKWdg9co63shRFtTvVoM9iEdEHu8JWaY5BSW8mP80T+7jJifHFad9ZV4ZSJOywKlEIBpGixtHSBO1hZUlkcipcStbBy2jaXrhDWNX81E9LU2qp66UoqqqvEISDRNrPgvm7uHPLx98A9TOJLbqTgCqgAAAABJRU5ErkJggg==",
    },
    // ADD MORE IMAGES HERE IF NEEDED, MAKE SURE TO ADD BLUR DATA URL FROM HERE ( https://blur-data-url.com/ )
    // ALSO UPDATE THE BLUR URLS IF YOU UPDATE ANY IMAGES
  },
  birthPlace: birthPlace,
  location: "Dhaka, Bangladesh",
  gender: "male",
  heroDescription: `${title} from ${birthPlace}. I build scalable applications across web, mobile, and desktop with hands-on experience in AI and ML. Focused on end-to-end development from system design to deployment, balancing performance and user experience.`,
  footerDescription: `${title} with expertise in full-stack development, scalable architecture, and AI/ML integration`,
  languages: ["English", "Bengali"],
  // Contact
  email: "shakeef.rakin321@gmail.com",
  resumeLink:
    "https://drive.google.com/file/d/1KEX5j0xOPu2IFVyMyHDRlAR04qb7Pauz/view",
};

export default SiteConfig;

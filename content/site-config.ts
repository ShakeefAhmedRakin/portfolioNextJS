const fullName = "Shakeef Ahmed Rakin";
const title = "Full Stack Engineer";
const birthPlace = "Bangladesh";

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
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAANxJREFUKFM1jrFKw2AYRc/9voRWBBFEBcdABskm4iI4uTi6+wKFFhxdfQdXX8LJB3B366AlxRS1JSnFioqG8ksjcrfLPYerx1EVzIRJNDERuXCzv64ZaDmAi16XdDejc97D/6FBUYbIDEncXl2yvr3D0VmnARpDXpTB3XEX/ZtrorVNsuNTJNASHBZlMAdffPA1nfA6eiE9OMTjdmNV/lQGq2d4PUfm1FpF9RvtrRRbGgbDSYi+x8ynz7RaK/wsYhQ+2Uj2kRw95OOg95z+/R1JmlFVM+JYJHsnzYdfA2NHTEyE1bUAAAAASUVORK5CYII=",
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
  heroDescription: `${title} from ${birthPlace}, skilled in developing web applications and integrating AI solutions. Experienced in machine learning projects, including natural language processing and computer vision.`,
  footerDescription: `${title} with expertise in web development, software engineering and AI.`,
  languages: ["English", "Bengali"],
  // Contact
  email: "shakeef.rakin321@gmail.com",
  resumeLink:
    "https://drive.google.com/file/d/1KEX5j0xOPu2IFVyMyHDRlAR04qb7Pauz/view",
};

export default SiteConfig;

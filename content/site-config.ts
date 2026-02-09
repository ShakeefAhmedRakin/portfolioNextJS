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
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2UlEQVR4ARSNDUsCQRCG39m73XRbvTOwkjAVIymo//8zgpD6AZbhRXRd+Lk74zjwwMzwvDOmEwoOvsvt1jn7dlA6SuDTvuj22NxNbvEwm5KzloaXF3TT71Fuc5rdj2k0HMCUZYHgPZzN8DS5xvN0AN86w+eyQl03MK/zd7zM38AgLFa/+PpuYK2DzXP8rzcwAuiQQbRZrGp8VH9wzmKz3SHGCMPMiIqosU0JO07YH6IGBKwhFQQpMlJijPslHkdX+kzAKoowjBbIkJiMpGrWsvxpRI8JswgBOAIAAP//tJLatAAAAAZJREFUAwDGnGcK2ySPXgAAAABJRU5ErkJggg==",
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
  heroDescription: `${title} from ${birthPlace}, specializing in architecting scalable AI-driven applications across web, mobile, and desktop platforms. Experienced in end-to-end development from system design to deployment, balancing performance and user experience.`,
  footerDescription: `${title} with expertise in full-stack development and scalable application architecture`,
  languages: ["English", "Bengali"],
  // Contact
  email: "shakeef.rakin321@gmail.com",
  resumeLink:
    "https://drive.google.com/file/d/1KEX5j0xOPu2IFVyMyHDRlAR04qb7Pauz/view",
};

export default SiteConfig;

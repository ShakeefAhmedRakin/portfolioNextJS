const fullName = "Shakeef Ahmed Rakin";
const title = "Senior Full Stack Engineer";
const birthPlace = "Bangladesh";
export const yearsOfExperience = "2";
export const projectDepthYears = "4+";

const SiteConfig = {
  // Site Meta Data
  title: title,
  fullName: fullName,
  nationality: "Bangladeshi",
  gallery: {
    mainHeroImage: {
      name: `${fullName} | Hero Image`,
      src: "/images/branding/hero-main.webp",
      blurURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAABd0lEQVR4nB3PzU4TUQBA4bvXBCMR7Fhoh9b57fTeKSFYSudHRmI71QQUcaSIgNZAAgtpXBATFj6BiTuXLkx8Al/MhddkjsHlSb7NEYZRLU2zgW05BK02sq3wvBae5+PYHq7jY913tKjVzDKUiixNSeIE6bWI19aI+33Wuz06KiRsh1oYxr3y8uKc6dkJT/Oc6fMBV+/HjPIRR3sFP759pXi2pYVjO+X2k5z9Ypej12OuDnf4cnnOyWTC548X/Pr5nfGLHS18PyiTKCbbyAhailRKBnHMflHwafqByZsDRsOhFp7rlxtJSkd1mL09h12pU52v/h85ffeW44NrmGthW26ZxikyUNydN1ismiwuLGE1bR5nm7zafUkcJVo0m1YZrcf4bsDMzCx+0yLrrqJkiAwkw0HOysqqFqbZKLsPeri2x42bt1h2HaZ7W6i2IokS+r0I1/W1MOtLf6QM9XXM3aloo7Kg67WGfhglejN7pEO1/Ney7N//ABp5qgB0T7TQAAAAAElFTkSuQmCC",
    },
    aboutHeroImage: {
      name: `${fullName} | About Image`,
      src: `/images/branding/hero-about.webp`,
      blurURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQUlEQVR4nAE2Acn+AF9zcnOJiFVxclJyckFQUU5TV5mRh8q9raqSkMKqoAA9V2J3jZFVZWsjMDQRCAcUCAcUEBCgjHuwopWhoJ0AT2twiaKmSm15PEFCfEQsrVc3SycffWZVmoN0cZCdAFZgU5CkpU1kaU9XVKNkRrNOK5NkT2JwbFdZV1NfYQBaZVqKm5dieXN5fnKDTDSCNR5/eGxkf3ppeHJ1hH0AipaSnqejw6+e16aPrFQxpEoq36SQ1r+vi46IeIB9ACUmJcifjve5oO25o9B6WsN3WPO2oPq4n6J2aAUGCABJPzruuaLqtZ/xuaLprJTpqZL0t6D0uKHztZ83LCgAkXtv8L6m3K2X8beg8rWe8rae8rOb4KKL+bigg2FWAMGjk/bIs9SokuqynPCym/Cwme6tlsuRe/e6osqSgMoNnPnNXe+IAAAAAElFTkSuQmCC",
    },
    // ADD MORE IMAGES HERE IF NEEDED, MAKE SURE TO ADD BLUR DATA URL FROM HERE ( https://blur-data-url.com/ )
    // ALSO UPDATE THE BLUR URLS IF YOU UPDATE ANY IMAGES
  },
  birthPlace: birthPlace,
  location: "Dhaka, Bangladesh",
  gender: "male",
  heroDescription: `${title} with over ${yearsOfExperience} years of professional experience and ${projectDepthYears} years of project depth. I architect end-to-end SaaS products across web, mobile, and desktop, and ship production-grade AI/ML pipelines.`,
  // Short SEO description (<=155 chars) used for meta description / OG / Twitter.
  seoDescription: `${title} building end-to-end SaaS across web, mobile, and desktop, plus production-grade AI/ML pipelines. ${yearsOfExperience}+ years of experience.`,
  footerDescription: `${title} specializing in scalable web, mobile, and desktop ecosystems with hands-on AI/ML experience.`,
  languages: ["English", "Bengali"],
  // Contact
  email: "shakeef.rakin321@gmail.com",
  resumeLink:
    "https://drive.google.com/file/d/1KEX5j0xOPu2IFVyMyHDRlAR04qb7Pauz/view",
};

export default SiteConfig;

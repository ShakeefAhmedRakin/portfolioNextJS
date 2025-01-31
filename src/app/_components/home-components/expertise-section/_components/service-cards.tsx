import { GiArtificialIntelligence } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* SECTION CONTENT */}
      {services.map((service, index) => (
        <div
          key={index}
          className={`space-y-3 text-white ${
            index % 2 === 0 ? "bg-gradient-to-tr" : "bg-gradient-to-br"
          } from-primary to-secondary px-6 md:px-3 lg:px-6 py-8 rounded-lg shadow-md ${
            index % 2 === 0 ? "shadow-primary" : "shadow-secondary"
          }`}
        >
          <div className="text-3xl lg:text-5xl p-3 bg-white text-secondary w-fit rounded-full mb-5 lg:mb-7">
            {service.icon}
          </div>
          <h4 className="font-heading font-bold text-sm lg:text-xl">
            {service.title}
          </h4>
          <p className="font-body text-xs lg:text-base">
            {service.description}
          </p>
          <ul className="font-body text-[10px] lg:text-sm list-disc list-inside -ml-1 space-y-2">
            {service.bullet_points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const services = [
  {
    title: "Full Stack Development",
    description: "Expertise in building end-to-end web applications",
    icon: <FaCode />,
    bullet_points: [
      "Frontend & Backend development",
      "SEO & Hosting",
      "Scalable and efficient architectures",
      "Secure API development",
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Experienced in working with different AI technologies",
    icon: <GiArtificialIntelligence />,
    bullet_points: [
      "Natural Language Processing (NLP)",
      "Computer Vision applications",
      "LLMs (OpenAI, Gemini, etc.)",
    ],
  },
  {
    title: "What you can expect",
    description: "Coding for performance and usability with best practices",
    icon: <GoPersonFill />,
    bullet_points: [
      "Simple, intuitive, and user-focused designs",
      "Efficient code that aligns with best practices",
      "Well documented code for future workability",
    ],
  },
];

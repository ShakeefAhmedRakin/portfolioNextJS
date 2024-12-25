import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <>
      <p className="font-body font-light text-text text-xs lg:text-base mb-4">
        {`I'm thrilled to connect with you! Whether you have a project in
                  mind, want to collaborate, or simply want to say hello, feel free
                  to reach out. You can contact me through the following channels.`}
      </p>

      <ContactForm
        serviceID={process.env.EMAILJS_SERVICE_ID}
        templateID={process.env.EMAILJS_TEMPLATE_ID}
        publicKey={process.env.EMAILJS_PUBLIC_KEY}
      />
    </>
  );
}

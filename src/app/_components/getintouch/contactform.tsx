"use client";
import React, { useState } from "react";
import { MdMail, MdMessage, MdPerson } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { CgSpinner } from "react-icons/cg";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSending(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      onInvalid={() => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }}
    >
      {/* NAME */}
      <div className="w-full bg-primary-lighter dark:bg-background font-body text-text pl-5 pr-3 py-[5px] rounded-2xl flex items-center gap-4">
        <MdPerson className="text-primary text-lg lg:text-xl" />
        <input
          type="text"
          className="w-full bg-transparent outline-none text-xs lg:text-sm selection:bg-primary py-2 selection:text-white"
          id="name"
          name="name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      {/* EMAIL */}
      <div className="w-full bg-primary-lighter dark:bg-background font-body text-text pl-5 pr-3 py-[5px] rounded-2xl flex items-center gap-4">
        <MdMail className="text-primary text-lg lg:text-xl" />
        <input
          type="email"
          className="w-full bg-transparent outline-none text-xs lg:text-sm selection:bg-primary py-2 selection:text-white"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {/* MESSAGE */}
      <div className="w-full bg-primary-lighter dark:bg-background font-body text-text pl-5 pr-3 py-[5px] rounded-2xl flex items-start gap-4">
        <MdMessage className="text-primary text-lg lg:text-xl mt-[9px]" />
        <textarea
          className="w-full bg-transparent outline-none text-xs lg:text-sm selection:bg-primary py-2 selection:text-white"
          id="message"
          name="message"
          placeholder="Type your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={7}
          style={{
            resize: "none",
          }}
        />
      </div>
      <button
        aria-label="Send Message"
        className={`hover:before:bg-secondary border-0 relative h-[40px] lg:h-[50px] overflow-hidden w-full rounded-2xl bg-primary duration-300 px-3 text-white shadow shadow-primary transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-300 hover:text-white hover:shadow-secondary hover:before:left-0 hover:before:w-full active:scale-[0.96] ${
          isSending && "pointer-events-none"
        }`}
        disabled={isSending}
      >
        <span className="relative z-10 text-[10px] md:text-xs lg:text-sm font-body flex items-center justify-center gap-2">
          {isSending ? (
            <>
              <CgSpinner className="w-6 h-6 animate-spin" />
            </>
          ) : (
            <>
              Send Message
              <IoIosSend
                className={`w-5 h-5 mt-0.5  ${
                  error ? "text-red-500" : "text-white"
                } duration-300`}
              />
            </>
          )}
        </span>
      </button>
    </form>
  );
}

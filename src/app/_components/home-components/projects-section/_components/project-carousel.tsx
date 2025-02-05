"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  date: string;
  type: string;
  coverPhoto: {
    url: string;
    alt: string;
  };
  isWorkInProgress?: boolean;
};

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  return (
    <>
      <div className="bg-backgroundAlt pt-20 pb-0 mt-24 xl:mt-32 px-2 lg:px-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className="-mt-56 lg:-mt-56 xl:-mt-64 hover:cursor-grab active:cursor-grabbing"
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 2000,
          }}
          modules={[Autoplay]}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectItem project={project}></ProjectItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <Link
      href={`/projects/${project.id}`}
      key={project.id}
      className="shadow-md hover:shadow-secondary duration-300 group"
      aria-label={`Go to project: ${project.title}`}
      title={`Go to project: ${project.title}`}
    >
      <div
        className="relative bg-black rounded-lg"
        style={{
          aspectRatio: "16/11",
        }}
      >
        <Image
          src={project?.coverPhoto?.url}
          alt={
            project?.coverPhoto?.alt ||
            `Cover photo for project ${project?.title}`
          }
          fill={true}
          priority
          sizes="500"
          draggable={false}
          className="rounded-lg object-cover opacity-80 group-hover:opacity-100 duration-300"
        />
        {/* CARD BLACK OVERLAY */}
        <div className="absolute bg-gradient-to-b from-transparent to-black opacity-100 group-hover:opacity-70 duration-300 bottom-0 rounded-lg w-full h-full"></div>
        {/* PROJECT TITLE BANNER */}
        <h5 className="absolute top-4 bg-gradient-to-br from-primary to-secondary rounded-r-lg text-white text-xs font-bold font-body px-4 py-2">
          {project?.title}
        </h5>
        {/* PROJECT WIP BANNER */}
        {project?.isWorkInProgress && (
          <span className="absolute top-4 right-0 bg-error rounded-l-lg text-white text-xs font-bold font-body px-4 py-2">
            WIP
          </span>
        )}
        {/* PROJECT DETAILS */}
        <div className="absolute w-full bottom-0 h-fit flex flex-col px-4 py-6">
          <span className="font-body font-semibold text-white text-[9px] mb-1">
            {new Date(project?.date || "").toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <h6 className="font-body font-semibold line-clamp-1 text-white group-hover:underline text-xs md:text-sm">
            {project.subtitle} <FaArrowRight className="inline text-xs" />
          </h6>
          <p className="font-body mt-2 flex-1 text-white text-[11px] capitalize line-clamp-2 max-h-[33px] min-h-[33px]">
            {project.tags.join(", ")}
          </p>
        </div>
      </div>
    </Link>
  );
};

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
  type: string;
  coverPhoto: {
    url: string;
  };
  isWorkInProgress?: boolean;
};

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  return (
    <>
      <div className="bg-backgroundAlt pt-20 pb-0 mt-24 xl:mt-32 px-2 lg:px-1">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 20,
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
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectItem project={project}></ProjectItem>
            </SwiperSlide>
          ))}
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
    <div className="bg-background rounded-b-lg shadow-xl">
      <div
        className="relative"
        style={{
          aspectRatio: "16/8",
        }}
      >
        <Image
          src={project?.coverPhoto?.url}
          fill={true}
          alt="test"
          draggable={false}
          className="object-cover"
        ></Image>
      </div>
      <div className="p-4">
        <h4 className="font-heading font-bold text-secondary text-sm lg:text-lg">
          {project.title}
          {project.isWorkInProgress && " - (WIP)"}
        </h4>
        <hr className="mt-1 mb-1 lg:mb-2" />
        <div className="flex justify-between items-center">
          <h5 className="font-heading font-bold text-text text-xs md:text-sm">
            {project.type}
          </h5>
          <Link
            href={`/projects/${project.id}`}
            className="rounded-lg"
            aria-label={`View Project ${project.title}`}
          >
            <button
              className="py-2 px-4 rounded-lg shadow hover:shadow-secondary duration-150 active:scale-[0.98] font-heading text-[9px] lg:text-xs font-semibold flex items-center gap-2 text-text"
              aria-label="Read Story"
            >
              View Project <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

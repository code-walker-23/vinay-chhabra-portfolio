"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
// writing type for extra clarity
import type { ProjectProps } from "@/lib/types";

function Project({
  title,
  description,
  tags,
  imageUrl,
  liveLink = "",
  githubLink = "",
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:group-even:pl-8 hover:bg-gray-200 transition">
        {/* Mobile version */}
        <div className="block sm:hidden p-4">
          <h3 className="text-xl font-semibold flex items-center">
            {title}
            <Link
              href={liveLink}
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline ml-3"
            >
              <div className="flex">
                <FaLink className="mr-1" /> <FaArrowTrendUp />
              </div>
            </Link>
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline ml-3"
            >
              <div className="flex">
                <FaGithub /> <FaArrowTrendUp />
              </div>
            </Link>
          </h3>

          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Desktop version */}
        <div className="hidden sm:block">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold flex items-center">
              {title}{" "}
              <Link
                href={liveLink}
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-3"
              >
                <div className="flex">
                  <FaLink className="mr-1" /> <FaArrowTrendUp />
                </div>
              </Link>
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:underline ml-3"
              >
                <div className="flex">
                  <FaGithub /> <FaArrowTrendUp />
                </div>
              </Link>
            </h3>

            <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-8">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
            transition
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial]
            group-even:-left-40"
          />
        </div>
      </section>
    </motion.div>
  );
}

export default Project;

"use client";
import LAAS from "@/assets/LAAS.png";
import ERP_workflows from "@/assets/ERP_workflows.png";
import machine_observabilty from "@/assets/machine_observabilty.png";
import medical from "@/assets/medical_tech.jpg";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      // className="bg-gradient-to-b from-[#FFFFFF] to-[#ffd6f1] py-24 overflow-x-clip"
      className="bg-white py-48 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          {/* <div className="flex justify-center">
            <div className="tag">Services</div>
          </div> */}
          <h2 className="section-title mt-5">Our Services</h2>
          <p className="section-description mt-5">
            We don’t build tools for the sake of tools.
          </p>
        </div>
        {/* <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />

          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div> */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1] text-center">
            <div className="flex justify-center mb-6">
              <Image
                src={LAAS}
                alt="Integration ecosystem"
                height={200}
                width={250}
                className="object-contain h-36"
              />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">
              Lab As A Service
            </h3>
            <p className="text-black/60 leading-relaxed"></p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1] text-center">
            <div className="flex justify-center mb-6">
              <Image
                src={medical}
                alt="IOT Medical Technologies"
                height={350}
                width={250}
                className="object-contain h-36 scale-125"
              />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">
              IOT Medical Technologies
            </h3>
            <p className="text-black/60 leading-relaxed"></p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1] text-center">
            <div className="flex justify-center mb-6">
              <Image
                src={machine_observabilty}
                alt="Machine Observability"
                height={200}
                width={250}
                className="object-contain h-36"
              />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">
              Machine Observability
            </h3>
            <p className="text-black/60 leading-relaxed"></p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1] text-center">
            <div className="flex justify-center mb-6">
              <Image
                src={ERP_workflows}
                alt="ERP_workflows"
                height={180}
                width={250}
                className="object-contain h-36"
              />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">
              ERP Workflows
            </h3>
            <p className="text-black/60 leading-relaxed"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

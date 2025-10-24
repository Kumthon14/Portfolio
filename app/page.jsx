'use client'

import Contact from "@/components/main/Contact";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Achievement from "@/components/main/Archeivement";
import Skills from "@/components/main/Skills";
import SuccessModal from "@/components/main/SuccessModal";
import { useState } from "react";
import Project from "@/components/main/Project";

export default function Home() {

  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  function handleModal() {
    console.log("handleModal Usage");
    console.log(isCustomModalOpen)
    setIsCustomModalOpen(!isCustomModalOpen);
  }

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero/>
        <Skills/>
        <Achievement/>
        <Project/>
        <Contact handleShowModal={handleModal}v/>
        <Footer/>
        {isCustomModalOpen && (
          <SuccessModal handleShowModal={handleModal} />
        )}
      </div>
    </main>
  );
}

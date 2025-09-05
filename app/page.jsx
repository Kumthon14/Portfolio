'use client'

import Contact from "@/components/main/Contact";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Project from "@/components/main/Project";
import Skills from "@/components/main/Skills";
import SuccessModal from "@/components/main/SuccessModal";
import { useState } from "react";

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

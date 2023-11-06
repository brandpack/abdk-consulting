'use client'
import { TopBlockContact } from "@/components/ContactPage/TopBlock/TopBlock";
import Footer from "@/components/common/Footer/Footer";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import StaticHeader from "@/components/common/StaticHeader/StaticHeader";
import { useState } from "react";



export default function Audit() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className='page'>
      <StaticHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
      <TopBlockContact />
      <Footer />
    </main>
  )
}

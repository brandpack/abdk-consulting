'use client'
import { TopBlockContact } from "@/components/ContactPage/TopBlock/TopBlock";
import Footer from "@/components/common/Footer/Footer";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import StaticHeader from "@/components/common/old_StaticHeader/StaticHeader";
import StickHeader from "@/components/common/StickHeader/StickHeader";
import { useState } from "react";
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";



export default function Audit() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className='page'>
      {/* <StaticHeader isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      <TopStaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'white'} researchColor={'white'} consultingColor={'white'} evaluationColor={'white'} />
      <TopBlockContact />
      <Footer />
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </main>
  )
}

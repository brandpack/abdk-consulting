'use client'
import { TopBlockResearch } from "@/components/ResearchPage/TopBlock/TopBlock";
import { ChooseResearch } from "@/components/ResearchPage/choose2/Choose";
import { RequestResearch } from "@/components/ResearchPage/request3/Request";
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";
import Footer from "@/components/common/Footer/Footer";
import StickHeader from "@/components/common/StickHeader/StickHeader";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import { useState } from "react";

export default function Research() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className='page'>
        <TopStaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'white'} researchColor={'#34C88C'} consultingColor={'white'} evaluationColor={'white'} />
        <StickHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
        <TopBlockResearch />
        <ChooseResearch />
        <RequestResearch />
        <Footer />
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </main>
  )
}

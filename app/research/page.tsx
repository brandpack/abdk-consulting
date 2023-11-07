'use client'
import { TopBlockResearch } from "@/components/ResearchPage/TopBlock/TopBlock";
import { ChooseResearch } from "@/components/ResearchPage/choose2/Choose";
import { RequestResearch } from "@/components/ResearchPage/request3/Request";
import StaticHeader from "@/components/common/StaticHeader/StaticHeader";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/StickHeader/StickHeader";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import { useState } from "react";



export default function Research() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className='page'>
        <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
        <StaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'white'} researchColor={'#34C88C'} consultingColor={'white'} evaluationColor={'white'} />
        <TopBlockResearch />
        <ChooseResearch />
        <RequestResearch />
        <Footer />
    </main>
  )
}

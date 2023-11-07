'use client'
import { TopBlockEvaluation } from "@/components/EvaluationPage/TopBlock/TopBlock";
import { ChooseEvaluation } from "@/components/EvaluationPage/choose2/Choose";
import { RequestEvaluation } from "@/components/EvaluationPage/request3/Request";
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";
import Footer from "@/components/common/Footer/Footer";
import StickHeader from "@/components/common/StickHeader/StickHeader";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import { useState } from "react";




export default function Consulting() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className='page'>
        <TopStaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'white'} researchColor={'white'} consultingColor={'white'} evaluationColor={'#BF63DF'} />
        <StickHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
        <TopBlockEvaluation />
        <ChooseEvaluation />
        <RequestEvaluation />
        <Footer />
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </main>
  )
}

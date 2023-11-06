'use client'
import { TopBlockEvaluation } from "@/components/EvaluationPage/TopBlock/TopBlock";
import { ChooseEvaluation } from "@/components/EvaluationPage/choose2/Choose";
import { RequestEvaluation } from "@/components/EvaluationPage/request3/Request";
import StaticHeader from "@/components/common/FixedHeader/FixedHeader";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import { useState } from "react";




export default function Consulting() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className='page'>
        <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
        <StaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'white'} researchColor={'white'} consultingColor={'white'} evaluationColor={'#BF63DF'} />
        <TopBlockEvaluation />
        <ChooseEvaluation />
        <RequestEvaluation />
        <Footer />
    </main>
  )
}

'use client'
import { TopBlockConsulting } from "@/components/ConsultingPage/TopBlock/TopBlock";
import { ChooseConsulting } from "@/components/ConsultingPage/choose2/Choose";
import { RequestConsulting } from "@/components/ConsultingPage/request3/Request";
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";
import Footer from "@/components/common/Footer/Footer";
import StickHeader from "@/components/common/StickHeader/StickHeader";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import { useState } from "react";

export default function Consulting() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className='page'>
        <TopStaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'white'} researchColor={'white'} consultingColor={'#474DD8'} evaluationColor={'white'}/>
        <StickHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
        <TopBlockConsulting />
        <ChooseConsulting />
        <RequestConsulting />
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Footer />
    </main>
  )
}

'use client'
import { TopBlockConsulting } from "@/components/ConsultingPage/TopBlock/TopBlock";
import { ChooseConsulting } from "@/components/ConsultingPage/choose2/Choose";
import { RequestConsulting } from "@/components/ConsultingPage/request3/Request";
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/StickHeader/StickHeader";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import { useState } from "react";

export default function Consulting() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className='page'>
        <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
        <TopStaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'white'} researchColor={'white'} consultingColor={'#474DD8'} evaluationColor={'white'}/>
        <TopBlockConsulting />
        <ChooseConsulting />
        <RequestConsulting />
      <Footer />
    </main>
  )
}

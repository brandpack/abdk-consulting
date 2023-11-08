'use client'
import { ChooseResearch } from "@/components/ResearchPage/choose2/Choose";
import { RequestResearch } from "@/components/ResearchPage/request3/Request";
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";
import Footer from "@/components/common/Footer/Footer";
import StickHeader from "@/components/common/StickHeader/StickHeader";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import { useState } from "react";
import { ServiceFirstScreen } from "@/components/common/ServiceFirstScreen/ServiceFirstScreen";
import image from '@/public/Research.webp';

export default function Research() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className='page'>
        <TopStaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'white'} researchColor={'#34C88C'} consultingColor={'white'} evaluationColor={'white'} />
        <StickHeader isOpen={isOpen} setIsOpen={setIsOpen}/>

        <ServiceFirstScreen title='Research' image={image} color='#34C88C' text='Advise on making best architectural and security decisions.'/>

        <ChooseResearch />
        <RequestResearch />
        <Footer />
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </main>
  )
}

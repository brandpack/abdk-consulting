'use client'
import { ChooseConsulting } from "@/components/ConsultingPage/choose2/Choose";
import { RequestConsulting } from "@/components/ConsultingPage/request3/Request";
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";
import Footer from "@/components/common/Footer/Footer";
import StickHeader from "@/components/common/StickHeader/StickHeader";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import { useState } from "react";
import image from '@/public/Consulting.webp';
import { ServiceFirstScreen } from "@/components/common/ServiceFirstScreen/ServiceFirstScreen";

export default function Consulting() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className='page'>
        <TopStaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'white'} researchColor={'white'} consultingColor={'#474DD8'} evaluationColor={'white'}/>
        <StickHeader isOpen={isOpen} setIsOpen={setIsOpen}/>

        <ServiceFirstScreen title='Consulting' image={image} color='#676DFA' text='Request a one-time or a series of consultations on the design, development or usage of decentralized finance or cryptography'/>

        <ChooseConsulting />
        <RequestConsulting />
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Footer />
    </main>
  )
}

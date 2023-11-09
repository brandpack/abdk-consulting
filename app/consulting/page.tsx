'use client'
import { RequestConsulting } from "@/components/ConsultingPage/request3/Request";
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";
import Footer from "@/components/common/Footer/Footer";
import StickHeader from "@/components/common/StickHeader/StickHeader";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import { useState } from "react";
import image from '@/public/Consulting.webp';
import { ServiceFirstScreen } from "@/components/common/ServiceFirstScreen/ServiceFirstScreen";
import Engaged from '@/public/engaged.svg';
import EngagedH from '@/public/enagedConsultingH.svg';
import OurDesigns from '@/public/ourDesigns.svg';
import OurDesignsH from '@/public/OurDesignsConsultingH.svg';
import Conduct from '@/public/conduct.svg';
import ConductH from '@/public/ConductConsultingH.svg';
import Advise from '@/public/advise.svg';
import AdviseH from '@/public/AdviseConsultingH.svg';
import { WhyChoose } from "@/components/common/WhyChoose/WhyChoose";
import { Request } from "@/components/common/Request/Request";

const nameService = 'Consulting';

const WhyChooseData = [
  {
      image: Advise,
      hoverImage: AdviseH,
      text: 'Advise top players in the industry',
  },
  {
      image: Conduct,
      hoverImage: ConductH,
      text: 'Conduct transparent consultation',
  },
  {
      image: OurDesigns,
      hoverImage: OurDesignsH,
      text: 'Our designs used in hundreds of applications',
  },
  {
      image: Engaged,
      hoverImage: EngagedH,
      text: 'Engaged in standards for blockchain and cryptography',
  }
]

const ConsultingStages = [
  'Explain your problem over a quick call',
  'Get a quote on consultation',
  'Pay a deposit',
];


export default function Consulting() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className='page'>
        <TopStaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'white'} researchColor={'white'} consultingColor={'#474DD8'} evaluationColor={'white'}/>
        <StickHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
        <ServiceFirstScreen title={nameService} image={image} color='#676DFA' text='Request a one-time or a series of consultations on the design, development or usage of decentralized finance or cryptography'/>
        <WhyChoose items={WhyChooseData}/>
        <Request nameRequest={nameService} stages={ConsultingStages}/>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Footer />
    </main>
  )
}

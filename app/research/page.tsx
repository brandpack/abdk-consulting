'use client'
import { RequestResearch } from "@/components/ResearchPage/request3/Request";
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";
import Footer from "@/components/common/Footer/Footer";
import StickHeader from "@/components/common/StickHeader/StickHeader";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import { useState } from "react";
import { ServiceFirstScreen } from "@/components/common/ServiceFirstScreen/ServiceFirstScreen";
import image from '@/public/Research.webp';
import { WhyChoose } from "@/components/common/WhyChoose/WhyChoose";
import Provide from '@/public/provide.svg';
import ProvideH from '@/public/ProvideResearchH.svg';
import trackRecord from '@/public/trackRecord.svg';
import trackRecordH from '@/public/trackRecordResearchH.svg';
import Collaborate from '@/public/collaborate.svg';
import CollaborateH from '@/public/collaborateResearchH.svg';
import Develop from '@/public/develop.svg';
import DevelopH from '@/public/DevelopResearchH.svg';
import Author from '@/public/author.svg';
import AuthorH from '@/public/authorResearchH.svg';
import { Request } from "@/components/common/Request/Request";

const nameService = 'Research';

const WhyChooseData = [
  {
      image: trackRecord,
      hoverImage: trackRecordH,
      text: 'Track record of thousands of critical bugs',
  },
  {
      image: Author,
      hoverImage: AuthorH,
      text: 'Author top cryptography publications in zero knowledge',
  },
  {
      image: Develop,
      hoverImage: DevelopH,
      text: 'Develop math models for Uniswap and Yield',
  },
  {
      image: Collaborate,
      hoverImage: CollaborateH,
      text: 'Collaborate with top researchers on cutting-edge problems',
  },
  {
      image: Provide,
      hoverImage: ProvideH,
      text: 'Provide transparent rates and timelines',
  },
];

const ResearchStages = [
  'Explain your problem',
  'Get a quote and timeline',
  'Pay a deposit',
];

export default function Research() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className='page'>
        <TopStaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'white'} researchColor={'#34C88C'} consultingColor={'white'} evaluationColor={'white'} />
        <StickHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
        <ServiceFirstScreen title={nameService} image={image} color='#34C88C' text='Advise on making best architectural and security decisions.'/>
        <WhyChoose items={WhyChooseData}/>
        <Request nameRequest={nameService} stages={ResearchStages}/>

        <RequestResearch />
        <Footer />
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </main>
  )
}

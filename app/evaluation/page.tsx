'use client'
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";
import Footer from "@/components/common/Footer/Footer";
import StickHeader from "@/components/common/StickHeader/StickHeader";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import { useState } from "react";
import image from '@/public/Evaluation.webp';
import { ServiceFirstScreen } from "@/components/common/ServiceFirstScreen/ServiceFirstScreen";
import { WhyChoose } from "@/components/common/WhyChoose/WhyChoose";
import Review from '@/public/review.svg';
import ReviewH from '@/public/reviewEvaluationH.svg';
import OpenSource from '@/public/openSource.svg';
import OpenSourceH from '@/public/OpenSourceEvaluationH.svg';
import Conduct from '@/public/conduct.svg';
import ConductH from '@/public/ConductEvaluationH.svg';
import Advise from '@/public/advise.svg';
import AdviseH from '@/public/AdviseEvaluationH.svg';
import { Request } from "@/components/common/Request/Request";

const nameService = 'Evaluation';

const WhyChooseData = [
  {
      image: Advise,
      hoverImage: AdviseH,
      text: 'Advise top players in the industry',
  },
  {
      image: Conduct,
      hoverImage: ConductH,
      text: 'Conduct transparent evaluation process',
  },
  {
      image: OpenSource,
      hoverImage: OpenSourceH,
      text: 'Develop open-source standards and packages',
  },
  {
      image: Review,
      hoverImage: ReviewH,
      text: 'Review for top conferences and journals',
  }
]

const EvaluationStages = [
  'Explain your project',
  'Get a quote on evaluation',
  'Pay a deposit',
];


export default function Consulting() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className='page'>
        <TopStaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'white'} researchColor={'white'} consultingColor={'white'} evaluationColor={'#BF63DF'} />
        <StickHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
        <ServiceFirstScreen title={nameService} image={image} color='#BF63DF' text='Request an evaluation of your project or technology'/>
        <WhyChoose items={WhyChooseData}/>
        <Request nameRequest={nameService} stages={EvaluationStages}/>
        <Footer />
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </main>
  )
}

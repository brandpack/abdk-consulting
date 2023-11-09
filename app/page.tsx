"use client"
import { FirstScreen } from "@/components/MainPage/FirstScreen/FirstScreen";
import { CheckOut } from "@/components/MainPage/checkOut6/CheckOut";
import { Clients } from "@/components/MainPage/Clients/Clients";
import { Expertise } from "@/components/MainPage/expertise4/Expertise";
import { Services } from "@/components/MainPage/services3/Services";
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";
import Footer from "@/components/common/Footer/Footer";
import StickHeaderHome from "@/components/MainPage/StickHeaderHome/StickHeaderHome";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import { useEffect, useRef, useState } from "react";
import { WhyChoose } from "@/components/common/WhyChoose/WhyChoose";

import Transparent from '@/public/transparent.svg';
import TransparentH from '@/public/transparentH.svg';
import FullConf from '@/public/fullConf.svg';
import FullConfH from '@/public/FullConfH.svg';
import FollowUp from '@/public/followUp.svg';
import FollowUpH from '@/public/FollowUpH.svg';
import InternalCross from '@/public/internalCross.svg';
import InternalCrossH from '@/public/InternalCrossH.svg';
import ClearMilestones from '@/public/clearMilestones.svg';
import ClearMilestonesH from '@/public/ClearMilestonesH.svg';

const WhyChooseData = [
  {
      image: Transparent,
      hoverImage: TransparentH,
      text: 'Transparent working plan',
  },
  {
      image: ClearMilestones,
      hoverImage: ClearMilestonesH,
      text: 'Clear milestones and deliverables',
  },
  {
      image: InternalCross,
      hoverImage: InternalCrossH,
      text: 'Internal cross-review',
  },
  {
      image: FollowUp,
      hoverImage: FollowUpH,
      text: 'Follow-up guidance',
  },
  {
      image: FullConf,
      hoverImage: FullConfH,
      text: 'Full confidentiality',
  },
]


export default function Home() {

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const scrollableElementRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollableElementRef.current) {
        const scrollPosition = scrollableElementRef.current.scrollTop;
        scrollPosition > 800 ? setIsHeaderFixed(true) : setIsHeaderFixed(false);
      }
    };
    if (scrollableElementRef.current) {
      scrollableElementRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollableElementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        scrollableElementRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
    <main ref={scrollableElementRef} className='Mainpage'>
      <TopStaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'white'} researchColor={'white'} consultingColor={'white'} evaluationColor={'white'} />
      <FirstScreen />
      <Clients />
      <Services />
      {/* <Expertise /> */}

      <WhyChoose items={WhyChooseData} title='Our approach stand on'/>
      <CheckOut />
      <Footer scrollableElementRef={scrollableElementRef}/>
    </main>

    <StickHeaderHome scrollableElementRef={scrollableElementRef} isOpen={isOpen} setIsOpen={setIsOpen} isHeaderFixed={isHeaderFixed}/>
    <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}
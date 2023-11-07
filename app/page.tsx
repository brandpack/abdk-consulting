"use client"
import { TopBlock } from "@/components/MainPage/TopBlock/TopBlock";
import { Approach } from "@/components/MainPage/approach5/Approach";
import { CheckOut } from "@/components/MainPage/checkOut6/CheckOut";
import { Clients } from "@/components/MainPage/clients2/Clients";
import { Expertise } from "@/components/MainPage/expertise4/Expertise";
import { Services } from "@/components/MainPage/services3/Services";
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";
import Footer from "@/components/common/Footer/Footer";
import StickHeaderHome from "@/components/MainPage/StickHeaderHome/StickHeaderHome";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import { useEffect, useRef, useState } from "react";

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
      <TopBlock />
      <Clients />
      <Services />
      {/* <Expertise /> */}
      {/* <Approach /> */}
      <CheckOut />
      <Footer scrollableElementRef={scrollableElementRef}/>
    </main>

    <StickHeaderHome scrollableElementRef={scrollableElementRef} isOpen={isOpen} setIsOpen={setIsOpen} isHeaderFixed={isHeaderFixed}/>
    <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}
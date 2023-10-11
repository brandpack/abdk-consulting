"use client"
import { TopBlock } from "@/components/MainPage/TopBlock/TopBlock";
import { Approach } from "@/components/MainPage/approach5/Approach";
import { CheckOut } from "@/components/MainPage/checkOut6/CheckOut";
import { Clients } from "@/components/MainPage/clients2/Clients";
import { Expertise } from "@/components/MainPage/expertise4/Expertise";
import { Services } from "@/components/MainPage/services3/Services";
import StaticHeader from "@/components/common/FixedHeader/StaticHeader";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header4MainPage/Header";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const scrollableElementRef = useRef<any>(null);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollableElementRef.current) {
        const scrollPosition = scrollableElementRef.current.scrollTop;
        if (scrollPosition > 800) {
          setIsHeaderFixed(true);
        } else {
          setIsHeaderFixed(false);
        }
      }
    };
    if (scrollableElementRef.current) {
      scrollableElementRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollableElementRef.current) {
        scrollableElementRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  return (
    <>
    <main ref={scrollableElementRef} className='Mainpage'>
      <StaticHeader auditColor={'white'} researchColor={'white'} consultingColor={'white'} evaluationColor={'white'} />
      <TopBlock />
      <Clients />
      <Services />
      <Expertise />
      <Approach />
      <CheckOut />
      <Footer />
    </main>
    <Header isHeaderFixed={isHeaderFixed}/>
    </>

  )
}

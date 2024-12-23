'use client'
import Footer from "@/components/common/Footer/Footer";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import { useState } from "react";
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";
import { NotFoundBlock } from "@/components/common/NotFound/NotFound";

export const viewport = {
    width: 'device-width',
    initialScale: 1,
};

export default function NotFound() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <main className='page'>
            <TopStaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'white'} researchColor={'white'} consultingColor={'white'} evaluationColor={'white'} />
            <NotFoundBlock />
            <Footer />
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
        </main>
    )
}
'use client'
import { TopBlockAudit } from "@/components/AuditPage/TopBlock/TopBlock";
import { ChooseAudit } from "@/components/AuditPage/choose2/Choose";
import { RequestAudit } from "@/components/AuditPage/request3/Request";
import StaticHeader from "@/components/common/StaticHeader/StaticHeader";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/StickHeader/StickHeader";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import { useState } from "react";


export default function Audit() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<main>
			  <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
        <StaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'#2DAED7'} researchColor={'white'} consultingColor={'white'} evaluationColor={'white'} />
        <TopBlockAudit />
        <ChooseAudit />
        <RequestAudit />
        <Footer />
    </main>
  )
}

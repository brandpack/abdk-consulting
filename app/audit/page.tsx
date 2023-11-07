'use client'
import { TopBlockAudit } from "@/components/AuditPage/TopBlock/TopBlock";
import { ChooseAudit } from "@/components/AuditPage/choose2/Choose";
import { RequestAudit } from "@/components/AuditPage/request3/Request";
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";
import Footer from "@/components/common/Footer/Footer";
import StickHeader from "@/components/common/StickHeader/StickHeader";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import { useState } from "react";

export default function Audit() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<main>
        <TopStaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'#2DAED7'} researchColor={'white'} consultingColor={'white'} evaluationColor={'white'} />
			  <StickHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
        <TopBlockAudit />
        <ChooseAudit />
        <RequestAudit />
        <Footer />
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </main>
  )
}

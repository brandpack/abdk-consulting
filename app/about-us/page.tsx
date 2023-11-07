'use client'
import History from "@/components/AboutUsPage/History/History";
import HistoryMobile from "@/components/AboutUsPage/History/HistoryMobile";
import { TopBlockAboutUs } from "@/components/AboutUsPage/TopBlock/TopBlock";
import WorkAtABDK from "@/components/AboutUsPage/WorkAtABDK/WorkAtABDK";
import { ChooseAboutUs } from "@/components/AboutUsPage/choose2/Choose";
import { OurTeam } from "@/components/AboutUsPage/ourTeam2/ourTeam";
import { CheckOut } from "@/components/MainPage/checkOut6/CheckOut";
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";
import Footer from "@/components/common/Footer/Footer";
import StickHeader from "@/components/common/StickHeader/StickHeader";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import React, { useState } from "react";

const AboutUs: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<main>
			<TopStaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'white'} researchColor={'white'} consultingColor={'white'} evaluationColor={'white'} />
			<StickHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
			<TopBlockAboutUs />
			<OurTeam/>
			<ChooseAboutUs />
			<History />
            <HistoryMobile />
			<WorkAtABDK />
			<CheckOut />
			<Footer />
        	<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
		</main>
	);
};

export default AboutUs;

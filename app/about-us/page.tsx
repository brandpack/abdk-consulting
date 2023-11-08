'use client'
import History from "@/components/AboutUsPage/History/History";
import HistoryMobile from "@/components/AboutUsPage/History/HistoryMobile";
import WorkAtABDK from "@/components/AboutUsPage/WorkAtABDK/WorkAtABDK";
import { ChooseAboutUs } from "@/components/AboutUsPage/choose2/Choose";
import { OurTeam } from "@/components/AboutUsPage/ourTeam2/ourTeam";
import { CheckOut } from "@/components/MainPage/checkOut6/CheckOut";
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";
import Footer from "@/components/common/Footer/Footer";
import StickHeader from "@/components/common/StickHeader/StickHeader";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import React, { useState } from "react";
import image from '@/public/about-us.webp';
import { ServiceFirstScreen } from "@/components/common/ServiceFirstScreen/ServiceFirstScreen";

const AboutUs: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<main>
			<TopStaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'white'} researchColor={'white'} consultingColor={'white'} evaluationColor={'white'} />
			<StickHeader isOpen={isOpen} setIsOpen={setIsOpen}/>

			<ServiceFirstScreen title='About Us' image={image} text='ABDK Consulting was founded in 2016 as a top service provider in the design and security of Web 3.0. Since then we have conducted over 100 audit projects, have developed DeFi protocols and cryptographic schemes, have crafted Solidity libraries and consulted dozens of clients.'/>

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

'use client'
import History from "@/components/AboutUsPage/History/History";
import HistoryMobile from "@/components/AboutUsPage/History/HistoryMobile";
import WorkAtABDK from "@/components/AboutUsPage/WorkAtABDK/WorkAtABDK";
import { CheckOut } from "@/components/MainPage/CheckOut/CheckOut";
import TopStaticHeader from "@/components/common/TopStaticHeader/TopStaticHeader";
import Footer from "@/components/common/Footer/Footer";
import StickHeader from "@/components/common/StickHeader/StickHeader";
import MobileMenu from "@/components/common/Menu/MobileMenu";
import React, { useState } from "react";
import image from '@/public/about-us.webp';
import { ServiceFirstScreen } from "@/components/common/ServiceFirstScreen/ServiceFirstScreen";
import { WhyChoose } from "@/components/common/WhyChoose/WhyChoose";
import Transparent from '@/public/transparent.svg';
import TransparentH from '@/public/TransparentAboutUsH.svg';
import Time from '@/public/time.svg';
import TimeH from '@/public/TimeAboutUsH.svg';
import Independence from '@/public/Independence.svg';
import IndependenceH from '@/public/IndependenceAboutUsH.svg';
import { OurTeam } from "@/components/AboutUsPage/OurTeam/OurTeam";

const WhyChooseData = [
	{
		image: Independence,
		hoverImage: IndependenceH,
		text: 'Independence',
	},
	{
		image: Time,
		hoverImage: TimeH,
		text: 'Time commitment',
	},
	{
		image: Transparent,
		hoverImage: TransparentH,
		text: 'Designated approach',
	},
]

const AboutUs: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<main>
			<TopStaticHeader isOpen={isOpen} setIsOpen={setIsOpen} auditColor={'white'} researchColor={'white'} consultingColor={'white'} evaluationColor={'white'} />
			<StickHeader isOpen={isOpen} setIsOpen={setIsOpen}/>

			<ServiceFirstScreen title='About Us' image={image} text='ABDK Consulting was founded in 2016 as a top service provider in the design and security of Web 3.0. Since then we have conducted over 100 audit projects, have developed DeFi protocols and cryptographic schemes, have crafted Solidity libraries and consulted dozens of clients.'/>

			<OurTeam/>
			<WhyChoose items={WhyChooseData} title='Our values'/>

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

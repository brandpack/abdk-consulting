import History from "@/components/AboutUsPage/History/History";
import HistoryMobile from "@/components/AboutUsPage/History/HistoryMobile";
import { TopBlockAboutUs } from "@/components/AboutUsPage/TopBlock/TopBlock";
import WorkAtABDK from "@/components/AboutUsPage/WorkAtABDK/WorkAtABDK";
import { ChooseAboutUs } from "@/components/AboutUsPage/choose2/Choose";
import { OurTeam } from "@/components/AboutUsPage/ourTeam2/ourTeam";
import { CheckOut } from "@/components/MainPage/checkOut6/CheckOut";
import StaticHeader from "@/components/common/FixedHeader/StaticHeader";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import React from "react";

const AboutUs: React.FC = () => {
	return (
		<main>
			<Header/>
			<StaticHeader auditColor={'white'} researchColor={'white'} consultingColor={'white'} evaluationColor={'white'} />
			<TopBlockAboutUs />
			<OurTeam/>
			<ChooseAboutUs />
			<History />
            <HistoryMobile />
			<WorkAtABDK />
			<CheckOut />
			<Footer />
		</main>
	);
};

export default AboutUs;

import History from "@/components/AboutUsPage/History/History";
import HistoryMobile from "@/components/AboutUsPage/History/HistoryMobile";
import { TopBlockAboutUs } from "@/components/AboutUsPage/TopBlock/TopBlock";
import WorkAtABDK from "@/components/AboutUsPage/WorkAtABDK/WorkAtABDK";
import { ChooseAboutUs } from "@/components/AboutUsPage/choose2/Choose";
import { CheckOut } from "@/components/MainPage/checkOut6/CheckOut";
import StaticHeader from "@/components/common/FixedHeader/StaticHeader";
import React from "react";

const AboutUs: React.FC = () => {
	return (
		<main>
			<StaticHeader auditColor={'white'} researchColor={'white'} consultingColor={'white'} evaluationColor={'white'} />
			<TopBlockAboutUs />
			<ChooseAboutUs />
			<History />
            <HistoryMobile />
			<WorkAtABDK />
			<CheckOut />
		</main>
	);
};

export default AboutUs;

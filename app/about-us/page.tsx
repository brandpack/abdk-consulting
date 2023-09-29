import History from "@/components/AboutUsPage/History/History";
import { TopBlockAboutUs } from "@/components/AboutUsPage/TopBlock/TopBlock";
import WorkAtABDK from "@/components/AboutUsPage/WorkAtABDK/WorkAtABDK";
import { ChooseAboutUs } from "@/components/AboutUsPage/choose2/Choose";
import { CheckOut } from "@/components/MainPage/checkOut6/CheckOut";
import StaticHeader from "@/components/common/FixedHeader/StaticHeader";
import React from "react";

const AboutUs: React.FC = () => {
	return (
		<main>
			<StaticHeader />
			<TopBlockAboutUs />
			<ChooseAboutUs />
            <History />
			<WorkAtABDK />
			<CheckOut />
		</main>
	);
};

export default AboutUs;

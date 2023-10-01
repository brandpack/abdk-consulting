import React from "react";
import cls from "./HistoryMobile.module.scss";
import Link from "next/link";
import Button from "@/ui/button";

const HistoryMobile: React.FC = () => {
	return (
		<section className={cls.history}>
			<h1>History</h1>
			<div className={cls.history__container}>
                <div className={`${cls.YearContainer} ${cls.YearContainer1}`} >
                    <p className={cls.text}>ABDK is founded, first audits commenced</p>
						<div className={cls.line} />
					<p className={cls.year}>2016</p>
                </div>
                <div className={`${cls.line2} ${cls.line2_1}`} />
                <div className={`${cls.YearContainer} ${cls.YearContainer2}`} >
                    <p className={cls.text}>Attacks on the ERC-20 standard</p>
						<div className={cls.line} />
					<p className={cls.year}>2017</p>
                </div>
                <div className={`${cls.line2} ${cls.line2_2}`} />
                <div className={`${cls.YearContainer} ${cls.YearContainer3}`} >
                    <p className={cls.text}>First circuit audits</p>
						<div className={cls.line} />
					<p className={cls.year}>2018</p>
                </div>
                <div className={`${cls.line2} ${cls.line2_3}`} />
                <div className={`${cls.YearContainer} ${cls.YearContainer4}`} >
                    <p className={cls.text}>ABDK Solidity math libraries and Poseidon hash</p>
						<div className={cls.line} />
					<p className={cls.year}>2019</p>
                </div>
                <div className={`${cls.line2} ${cls.line2_4}`} />
                <div className={`${cls.YearContainer} ${cls.YearContainer5}`} >
                    <p className={cls.text}>Collaborated with Uniswap on tick design</p>
						<div className={cls.line} />
					<p className={cls.year}>2020</p>
                </div>
                <div className={`${cls.line2} ${cls.line2_5}`} />
                <div className={`${cls.YearContainer} ${cls.YearContainer6}`} >
                    <p className={cls.text}>Cryptography schemes and protocols review</p>
						<div className={cls.line} />
					<p className={cls.year}>2021</p>
                </div>
                <div className={`${cls.line2} ${cls.line2_6}`} />
                <div className={`${cls.YearContainer} ${cls.YearContainer7}`} >
                    <p className={cls.text}>100th project reviewed</p>
						<div className={cls.line} />
					<p className={cls.year}>2022</p>
                </div>
                <div className={`${cls.line2} ${cls.line2_7}`} />
                <div className={cls.button}>
						<h4>2023</h4>
						<p>We are open to suggestions</p>
						<Button
							href="/contact"
							backgroundColor="rgba(47, 53, 67, 1)"
							borderColor="rgba(47, 53, 67, 1)"
							color="rgba(255, 255, 255, 1)"
							includeSvg={true}
						>
							Contact us
						</Button>
					</div>
                <div className={cls.Footer}></div>
			</div>
		</section>
	);
};

export default HistoryMobile;

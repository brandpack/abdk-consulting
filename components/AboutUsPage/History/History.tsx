import React from "react";
import cls from "./History.module.scss";
import Year from "./Year/Year";
import Link from "next/link";
import Button from "@/ui/button";

const History: React.FC = () => {
	return (
		<section className={cls.history}>
			<h1>History</h1>
			<div className={cls.history__container}>
				<div className={cls.containerYear}>
					<Year
						year={2016}
						text="ABDK is founded, first audits commenced"
					/>

					<Year
						text="Attacks on the ERC-20 standard"
						year={2017}
						reverse
					/>

					<Year text="First circuit audits" year={2018} />

					<Year
						text="ABDK Solidity math libraries and
                    Poseidon hash"
						year={2019}
						reverse
					/>

					<Year
						text="Collaborated with Uniswap on tick design"
						year={2020}
					/>

					<Year
						text="Cryptography schemes and protocols review"
						year={2021}
						reverse
					/>

					<Year text="100th project reviewed" year={2022} />

					{/* тут дублирую line2, потому что она дублируется дважды после каждого Year */}
					<div className={cls.line2} />
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
				</div>
			</div>
		</section>
	);
};

export default History;

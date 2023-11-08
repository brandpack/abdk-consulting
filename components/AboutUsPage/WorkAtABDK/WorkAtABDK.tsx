import React from "react";
import cls from "./WorkAtABDK.module.scss";
import Button from "@/ui/button";


const WorkAtABDK: React.FC = () => {
	return (
		<div className={cls.workAtABDK}>
			<div className={cls.container}>
				<div className={cls.content}>
					<h2>Work at ABDK</h2>
					<p className={cls.text}>For top white-hat hackers and<br/> cryptographers.</p>
					<Button href="/contact" backgroundColor="rgba(52, 200, 140, 0.1)" borderColor="rgba(52, 200, 140, 1)" color="rgba(52, 200, 140, 1)" includeSvg={false}>
						Send a message
					</Button>
				</div>
			</div>
		</div>
	);
};

export default WorkAtABDK;

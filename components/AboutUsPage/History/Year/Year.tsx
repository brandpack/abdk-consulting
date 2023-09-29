import React from "react";
import cls from "./Year.module.scss";
import { IYear } from "./interface";

const Year: React.FC<IYear> = ({ year, text, reverse }) => {
	const containerStyle = reverse
		? { transform: "translateX(-189.988px)" }
		: {};
	const containerClass = reverse ? cls.containerReverse : cls.container;

	return (
		<>
			<div className={cls.line2} />
			<div
				className={`${cls.container} ${containerClass}`}
				style={containerStyle}
			>
				{reverse ? (
					<>
						<p className={cls.text}>{text}</p>
						<div className={cls.line} />
						<p className={cls.year}>{year}</p>
					</>
				) : (
					<>
						<p className={cls.year}>{year}</p>
						<div className={cls.line} />
						<p className={cls.text}>{text}</p>
					</>
				)}
			</div>
            {/* <div className={styles.line2} /> */}
		</>
	);
};

export default Year;

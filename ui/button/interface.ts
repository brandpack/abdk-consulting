export interface IButtonProps {
	children: React.ReactNode;
	type?: "button" | "submit" | "reset";
	onClick?: (event: React.MouseEvent) => void;
    href: string;
	backgroundColor?: string;
	borderColor?: string;
	color?: string;
	includeSvg: boolean,
}

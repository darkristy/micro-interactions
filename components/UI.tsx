import { media } from "@/styles/style-fuctions";
import { useRouter } from "next/router";
import tw, { styled } from "twin.macro";
import Down from "@/svg/down.svg";
import { cloneElement, ReactSVGElement } from "react";

interface IconProps {
	fill: any;
	svg: any;
	style?: any;
}

interface ButtonProps {
	label: string;
	icon?: IconProps;
	disabled?: boolean;
	onClick: () => void;
	customStyles?;
	reverse?: boolean;
}

export const Back = (): JSX.Element => {
	const router = useRouter();
	const BackContainer = styled.div(() => [tw` fixed z-10 ml-8 mt-8 cursor-pointer flex items-center text-sm`]);

	return (
		<BackContainer onClick={(): void => router.back()}>
			<Down style={{ rotate: "45deg" }} />
			<p tw="uppercase pl-2">Back</p>
		</BackContainer>
	);
};

export const Container = ({ size, children }): JSX.Element => {
	const StyledDiv = styled.div`
		margin-left: auto;
		margin-right: auto;
		&.small {
			max-width: 62rem;
			padding-left: 1.5rem;
			padding-right: 1.5rem;
			${media.desktop`max-width: 42rem;`}
			${media.tablet`max-width: 36rem;`}
			${media.thone`max-width: 32rem;`}
		}
		&.large {
			max-width: 82rem;
			padding-left: 1.5rem;
			padding-right: 1.5rem;
			${media.giant`max-width: 76rem; padding:0;`}
			${media.bigDesktop`padding: 0 6rem;`}
			${media.desktop`padding: 0 4rem;`}
			${media.tablet`max-width: 45rem; padding: 0 2rem;`}
		}
	`;

	return <StyledDiv className={size}>{children}</StyledDiv>;
};

export const Icon = (props: IconProps): ReactSVGElement => cloneElement(props.svg, { fill: props.fill });

export const B = (props: ButtonProps): JSX.Element => {
	const { icon, label, customStyles, onClick, reverse, disabled } = props;

	const ButtonContianer = styled.button`
		${tw`rounded-full px-2 border flex items-center bg-black text-white`}
		${reverse && tw`flex-row-reverse`}
		${customStyles && customStyles}
	`;

	const Label = styled.p(() => [tw`uppercase text-sm`, reverse ? tw`mr-1` : null, icon && reverse ? tw`ml-1` : null]);

	return (
		<ButtonContianer type="button" onClick={onClick} disabled={disabled}>
			{icon ? <Icon svg={icon.svg} fill={icon.fill} /> : null}
			<Label>{label}</Label>
		</ButtonContianer>
	);
};

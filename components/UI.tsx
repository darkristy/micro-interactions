import { media } from "@/styles/style-fuctions";
import { useRouter } from "next/router";
import { FC } from "react";
import tw, { styled } from "twin.macro";

interface HProps {
	priority: number;
	customStyles?: any;
	children: any;
	className?: string;
}

export const Back = (): JSX.Element => {
	const router = useRouter();

	const BackContainer = styled.div(() => [tw`bg-white fixed z-10 ml-8 mt-8 cursor-pointer`]);

	return (
		<BackContainer onClick={(): void => router.back()}>
			<p tw="uppercase">Back</p>
		</BackContainer>
	);
};

export const H: FC<HProps> = ({ ...props }) => {
	const Heading = `h${props.priority}` as keyof JSX.IntrinsicElements;

	const h1 = props.priority === 1;
	const h2 = props.priority === 2;

	const fontSize =
		(h1 && tw`text-7xl font-semibold`) ||
		(h2 && tw`text-5xl font-semibold`) ||
		new Error("Don't use an h3 in your blog posts, dude");

	const StyledHeading = styled(Heading)<{ size: any; customStyles: any }>(({ size, customStyles }) => [
		tw`text-black`,
		size && size,
		customStyles && customStyles,
	]);

	return (
		<StyledHeading size={fontSize} customStyles={props.customStyles} {...props}>
			{props.children}
		</StyledHeading>
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

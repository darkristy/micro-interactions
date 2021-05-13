import { media } from "@/styles/style-fuctions";
import { useRouter } from "next/router";
import tw, { styled } from "twin.macro";

export const Back = (): JSX.Element => {
	const router = useRouter();

	const BackContainer = styled.div(() => [tw`bg-white fixed z-10 ml-8 mt-8 cursor-pointer`]);

	return (
		<BackContainer onClick={(): void => router.back()}>
			<p tw="uppercase">Back</p>
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

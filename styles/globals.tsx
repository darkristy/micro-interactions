import { Global, css } from "@emotion/react";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css`
	/* inter-regular - latin */
	@font-face {
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		src: url("/fonts/inter-v3-latin-regular.woff2") format("woff2");
	}
	/* inter-600 - latin */
	@font-face {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		src: url("/fonts/inter-v3-latin-600.woff2") format("woff2");
	}
	/* inter-500 - latin */
	@font-face {
		font-family: "Inter";
		font-style: normal;
		font-weight: 500;
		src: url("/fonts/inter-v3-latin-500.woff2") format("woff2");
	}
	/* inter-800 - latin */
	@font-face {
		font-family: "Inter";
		font-style: normal;
		font-weight: 800;
		src: url("/fonts/inter-v3-latin-800.woff2") format("woff2");
	}
	@font-face {
		font-family: "Source Code Pro";
		font-style: normal;
		font-weight: 400;
		src: url("/fonts/source-code-pro-v14-latin-regular.woff2") format("woff2");
	}
	.scroll-container {
		${tw`fixed right-0 left-0 `};
		will-change: transform;
	}

	p {
		${tw`font-mono`};
	}
	h1,
	h2 {
		${tw`font-sans`};
	}
`;

export const GlobalStyles = (): JSX.Element => (
	<>
		<BaseStyles />
		<Global styles={customStyles} />
	</>
);

import { Global, css } from "@emotion/react";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css``;

export const GlobalStyles = (): JSX.Element => (
	<>
		<BaseStyles />
		<Global styles={customStyles} />
	</>
);

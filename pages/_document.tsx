/* eslint-disable react/no-danger */
import Document, { Head, Main, NextScript, Html } from "next/document";
import { extractCritical } from "@emotion/server";

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: any
	): Promise<{
		styles: JSX.Element;
		html: string;
		head?: JSX.Element[];
	}> {
		const initialProps = await Document.getInitialProps(ctx);
		const styles = extractCritical(initialProps.html);
		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					<style data-emotion-css={styles.ids.join(" ")} dangerouslySetInnerHTML={{ __html: styles.css }} />
				</>
			),
		};
	}

	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preload"
						href="/fonts/inter-v3-latin-regular.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/inter-v3-latin-500.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/inter-v3-latin-600.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/inter-v3-latin-800.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/source-code-pro-v14-latin-regular.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

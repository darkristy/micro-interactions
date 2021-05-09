import { GlobalStyles } from "@/styles/globals";
import { FC } from "react";
import { useRouter } from "next/router";

interface AppProps {
	Component: any;
	pageProps: any;
}

const App: FC<AppProps> = ({ Component, pageProps }) => {
	const router = useRouter();
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} key={router.route} />
		</>
	);
};

export default App;

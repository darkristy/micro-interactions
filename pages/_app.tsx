import { GlobalStyles } from "@/styles/globals";
import { FC } from "react";
import { useRouter } from "next/router";
import { Back } from "@/components/UI";

interface AppProps {
	Component: any;
	pageProps: any;
}

const App: FC<AppProps> = ({ Component, pageProps }) => {
	const router = useRouter();

	const notHome = router.pathname !== "/";
	return (
		<>
			{notHome && <Back />}
			<GlobalStyles />
			<Component {...pageProps} key={router.route} />
		</>
	);
};

export default App;

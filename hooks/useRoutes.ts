import { useState } from "react";
import useSWR from "swr";

import fetcher from "@/lib/fetcher";

interface Routes {
	data: any;
	error: any;
	stale: boolean;
	update: () => void;
}

export const useRoutes = (): Routes => {
	const { data, error } = useSWR("/api/routes", fetcher);
	const [routes, setRoutes] = useState(data);

	if (data && !routes) setRoutes(data);

	return {
		data: routes,
		error,
		stale: routes !== data,
		update: (): void => setRoutes(data),
	};
};

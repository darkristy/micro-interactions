/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable prefer-const */
import { useCallback, useEffect, useRef, useState } from "react";

export const useResize = () => {
	const windowGlobal = (): boolean => typeof window !== "undefined";

	const viewportRef = useRef(null);
	// @ts-ignore
	const [currentHeight, setCurrentHeight] = useState(windowGlobal.innerHeight);
	const getCurrentHeight = useCallback((entries) => {
		for (let entry of entries) {
			const crx = entry.contentRect;
			setCurrentHeight(crx.height);
		}
	}, []);

	useEffect(() => {
		const viewport = viewportRef.current;

		if (!viewport) return;
		let ro = new ResizeObserver((entries) => getCurrentHeight(entries));
		ro.observe(viewport);
		return (): void => {
			if (!ro) return;
			ro.disconnect();
		};
	}, [getCurrentHeight]);

	return [viewportRef, currentHeight];
};

import { MutableRefObject, useEffect } from "react";

const opts = {
	root: null,
	threshold: 0.2,
};

export const useIntersectionObserver = (ref: MutableRefObject<HTMLDivElement>, animationCallback) => {
	useEffect(() => {
		const callback = ([entry]) => {
			if (entry.isIntersecting) {
				requestAnimationFrame(() => animationCallback());
			}
		};

		const observer = new IntersectionObserver(callback, opts);
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref, animationCallback]);
};

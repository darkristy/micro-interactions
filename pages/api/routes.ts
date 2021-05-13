import { NextApiRequest, NextApiResponse } from "next";

const routes = [
	{ name: "Hover Wave", href: "/hover-wave" },
	{ name: "Thumbnail to Full Width", href: "/thumbnail-to-fullwidth" },
];

export default (req: NextApiRequest, res: NextApiResponse): void => {
	res.status(200).json(routes);
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const routes = [{ name: "Hover Wave", href: "/hover-wave" }];

export default (req, res) => {
	res.status(200).json(routes);
};

export const HOME = "/";
export const PLANS = "/plans";
export const PLAN_HREF = "/plans/[planId]";

export const CONTACT = "/contact";
export const JOIN_US = "/joinUs";

export const NAVLINKS = {
	desktop: [
		{ href: CONTACT, label: "CONTACT" },
		{ href: JOIN_US, label: "REJOIGNEZ-NOUS" }
	],
	mobile: [
		{ href: HOME, label: "ACCUEIL", icon: "/homeWhiteIcon.png" },
		{ href: CONTACT, label: "CONTACT", icon: "/contactWhiteIcon.png" },
		{
			href: JOIN_US,
			label: "REJOIGNEZ-NOUS",
			icon: "/communityWhiteIcon.png"
		}
	]
};

export const NAVLINKSMENUMOBILE = [
	{ href: HOME, label: "ACCUEIL", icon: "/homeWhiteIcon.png" },
	{ href: CONTACT, label: "CONTACT", icon: "/contactWhiteIcon.png" }
];

export const HOME = "/";
export const PLAN_HREF = "/plan/[planId]";
export const CONTACT = "/contact";
export const JOIN_US = "/joinUs";

export const NAVLINKS = {
	desktop: [
		{ href: HOME, label: "ACCUEIL" },
		{ href: CONTACT, label: "CONTACT" },
		{ href: JOIN_US, label: "REJOIGNEZ-NOUS" }
	],
	mobile: [
		{ href: HOME, label: "ACCUEIL", icon: "/homeWhiteIcon.png" },
		{ href: CONTACT, label: "CONTACT", icon: "/contactWhiteIcon.png" }
	]
};

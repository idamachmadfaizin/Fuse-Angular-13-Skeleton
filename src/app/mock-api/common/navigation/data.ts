/* tslint:disable:max-line-length */
// import { FuseNavigationItem } from '@fuse/components/navigation';

// export const defaultNavigation: FuseNavigationItem[] = [
//     {
//         id   : 'example',
//         title: 'Example',
//         type : 'basic',
//         icon : 'heroicons_outline:chart-pie',
//         link : '/example'
//     }
// ];
// export const compactNavigation: FuseNavigationItem[] = [
//     {
//         id   : 'example',
//         title: 'Example',
//         type : 'basic',
//         icon : 'heroicons_outline:chart-pie',
//         link : '/example'
//     }
// ];
// export const futuristicNavigation: FuseNavigationItem[] = [
//     {
//         id   : 'example',
//         title: 'Example',
//         type : 'basic',
//         icon : 'heroicons_outline:chart-pie',
//         link : '/example'
//     }
// ];
// export const horizontalNavigation: FuseNavigationItem[] = [
//     {
//         id   : 'example',
//         title: 'Example',
//         type : 'basic',
//         icon : 'heroicons_outline:chart-pie',
//         link : '/example'
//     }
// ];
/* eslint-disable */
import { FuseNavigationItem } from "@fuse/components/navigation";

export const defaultNavigation: FuseNavigationItem[] = [
	{
		id: "example",
		title: "Example",
		type: "basic",
		icon: "heroicons_outline:chart-pie",
		link: "/example",
	},
	{
		id: "dashboards",
		title: "Dashboards",
		subtitle: "Unique dashboard designs",
		type: "group",
		icon: "heroicons_outline:home",
		children: [
			{
				id: "dashboards.project",
				title: "Main",
				type: "basic",
				icon: "heroicons_outline:clipboard-check",
				link: "/dashboards",
			},
		],
	},
	{
		id: "apps",
		title: "Applications",
		subtitle: "Custom made application designs",
		type: "group",
		icon: "heroicons_outline:home",
		children: [
			{
				id: "courses",
				title: "Courses",
				type: "basic",
				icon: "heroicons_outline:chat-alt",
				link: "/courses",
			},
			{
				id: "students",
				title: "Students",
				type: "basic",
				icon: "heroicons_outline:chat-alt",
				link: "/students",
			},
		],
	},
	{
		id: "pages",
		title: "Pages",
		subtitle: "Custom made page designs",
		type: "group",
		icon: "heroicons_outline:document",
		children: [
			{
				id: "pages.invoice",
				title: "Invoice",
				type: "collapsable",
				icon: "heroicons_outline:calculator",
				children: [
					{
						id: "pages.invoice.printable",
						title: "Printable",
						type: "collapsable",
						children: [
							{
								id: "pages.invoice.printable.compact",
								title: "Compact",
								type: "basic",
								link: "/pages/invoice/printable/compact",
							},
							{
								id: "pages.invoice.printable.modern",
								title: "Modern",
								type: "basic",
								link: "/pages/invoice/printable/modern",
							},
						],
					},
				],
			},

			{
				id: "profile",
				title: "Profile",
				type: "basic",
				icon: "heroicons_outline:user-circle",
				link: "/profile",
			},
		],
	},
	{
		id: "divider-1",
		type: "divider",
	},
];

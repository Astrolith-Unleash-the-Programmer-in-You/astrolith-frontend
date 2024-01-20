// import {
//     mobile,
//     backend,
//     creator,
//     web,
//     javascript,
//     typescript,
//     html,
//     css,
//     reactjs,
//     redux,
//     tailwind,
//     nodejs,
//     mongodb,
//     git,
//     figma,
//     docker,
//     meta,
//     starbucks,
//     tesla,
//     shopify,
//     carrent,
//     jobit,
//     tripguide,
//     threejs,
//   } from "../assets";

import {
  CertificateButton,
  DashboardButton,
  Diamond,
  MarketplaceButton,
  about,
  axe,
  blade,
  bronze,
  coin,
  gold,
  hammer,
  home,
  knife,
  lore,
  magicPotion,
  player1,
  player2,
  player3,
  player4,
  silver,
} from "../assets";
import {
  certificate,
  tsilver,
  tgold,
  dashboard,
  tbronze,
  tdiamond,
  marketplace,
} from "../assets/text";

const navLinks = [
  {
    id: "/",
    title: "Hero",
    img: home,
  },
  {
    id: "marketPlace",
    title: "MarketPlace",
    img: marketplace,
  },
  {
    id: "dashboard",
    title: "Dashboard",
    img: lore,
  },
  {
    id: "about",
    title: "About",
    img: about,
  },
];

const topPlayers = [
  {
    img: player1,
    handle: "@Berno322",
    userName: "Diamond Level",
    exp: "23,988",
  },
  {
    img: player2,
    handle: "@Renai",
    userName: "Diamond Level",
    exp: "23,988",
  },
  {
    img: player3,
    handle: "@Carla665",
    userName: "Diamond Level",
    exp: "23,988",
  },
  {
    img: player4,
    handle: "@Justinno322",
    userName: "Diamond Level",
    exp: "23,988",
  },
];

const dashLinks = [
  {
    id: "dashboard",
    title: "Dashboard",
    text: dashboard,
    activeText: DashboardButton,
  },
  {
    id: "marketPlace",
    title: "MarketPlace",
    text: marketplace,
    activeText: MarketplaceButton,
  },
  {
    id: "certificate",
    title: "Certificate",
    text: certificate,
    activeText: CertificateButton,
  },
  {
    id: "certificate",
    title: "",
  },
  {
    id: "",
    title: "",
  },
  {
    id: "",
    title: "",
  },
  {
    id: "",
    title: "",
  },
  {
    id: "",
    title: "",
  },
  {
    id: "",
    title: "",
  },
  {
    id: "",
    title: "",
  },
  {
    id: "",
    title: "",
  },
  {
    id: "",
    title: "",
  },
  {
    id: "",
    title: "",
  },
  {
    id: "",
    title: "",
  },
];

const achievements = [
  {
    img: bronze,
    name: "Bronze",
    medalNo: "2",
    text: tbronze,
  },
  {
    img: silver,
    name: "silver",
    medalNo: "2",
    text: tsilver,
  },
  {
    img: gold,
    name: "Gold",
    medalNo: "1",
    text: tgold,
  },
  {
    img: Diamond,
    name: "diamond",
    medalNo: "2",
    text: tdiamond,
  },
];

const marketItems = [
  {
    img: axe,
    name: "axe",
    coinImg: coin,
    coinNo: "45",
  },
  {
    img: axe,
    name: "axe",
    coinImg: coin,
    coinNo: "45",
  },
  {
    img: magicPotion,
    name: "potion ",
    coinImg: coin,
    coinNo: "45",
  },
  {
    img: hammer,
    name: "hammer ",
    coinImg: coin,
    coinNo: "45",
  },
  {
    img: blade,
    name: "blade ",
    coinImg: coin,
    coinNo: "45",
  },
  {
    img: magicPotion,
    name: " potion ",
    coinImg: coin,
    coinNo: "45",
  },
  {
    img: axe,
    name: "axe",
    coinImg: coin,
    coinNo: "45",
  },
  {
    img: knife,
    name: "blade",
    coinImg: coin,
    coinNo: "45",
  },
  // {
  //   img: crest,
  //   name: "blade",
  //   coinImg: coin,
  //   coinNo: "45",
  // },
  // {
  //   img: key,
  //   name: "blade",
  //   coinImg: coin,
  //   coinNo: "45",
  // },
  // {
  //   img: book,
  //   name: "spells ",
  //   coinImg: coin,
  //   coinNo: "45",
  // },
  {
    img: axe,
    name: "axe",
    coinImg: coin,
    coinNo: "45",
  },
  {
    img: magicPotion,
    name: "potion ",
    coinImg: coin,
    coinNo: "45",
  },
];

// const projects = [

//   {
//     name: "Travel Website",
//     description:
//       "Web application that enables users to locate available destinations based on their chosen location, offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://faygo.vercel.app/",
//   },
//   {
//     name: "PortFolio Website",
//     description:
//       "A comprehensive portfolio that showcases skills and work done ",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://fay-sigma.vercel.app/",
//   },
//   {
//     name: "School website",
//     description:
//       "A Web-based template of a school website.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://remyfaye.github.io/school-website/",
//   },
// ];

export { navLinks, topPlayers, dashLinks, achievements, marketItems };

//protocol did
export const CONSTANTS = {
	PROTOCOLDID:
		"did:ion:EiCt83z1zr1WTxyRiJVbDBy3uOEuhTVQB2O2Y_jKGT23iQ:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4IjoiNGNBSlJtemNnd3luaF9nWmVPYy1hazM3M3EzNExZWHVUNGU1NHZZVHd3WSJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJ1TmFvcWpCLU56X1U5b2JENGhqaG9YNUFmb0VoOGMxYmlfVl9NNHI5NW1BIiwieSI6IktqWURGRGVIRXNVaW51TDUyNUhuMThGYUliQUUtdXZQSEJ3VDhZd1d1ZkEifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduNiIsImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMSJdLCJzaWduaW5nS2V5cyI6WyIjZHduLXNpZyJdfSwidHlwZSI6IkRlY2VudHJhbGl6ZWRXZWJOb2RlIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlDeTlQeDdKcm5KejFfdXluWk1nRzRGaFUwbjd0b3JZa1RmV3cwTmdkRVhKQSJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpRFZYc1BZQ2NlWkFRS2VyTG1TOHdRNUVBbDRhdXMtSnM3QW1tVldtemJoYlEiLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUJvRUNKbEZYQjlyeVgwRmMzbWtnNERnMlN4U2VReTcyTVhZZm9uMWF4d3NRIn19",
};

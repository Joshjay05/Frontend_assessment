import { TrendingUp } from "lucide-react";
import circle from "../assets/circle_layer.png";
import user from "../assets/user.png";
import wanda_parker from "../assets/wanda_parker.png";
import terry_brown from "../assets/terry_brown.png";
import lucas_holmes from "../assets/lucas_holmes.png";
import janice_miller from "../assets/janice_miller.png";
import terry from "../assets/terry.png";
import russia from "../assets/russia.png";
import elon_musk from "../assets/musk.png";
import fuel_crisis from "../assets/fuel_crisis.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
export const statsItems = [
  {
    value: "51",
    label: "Total Channels",
    icon: circle,
    iconBg: "bg-emerald-50 text-emerald-500",
    iconColor: "text-emerald-500",
  },
  {
    value: "125",
    label: "New Members",
    icon: user,
    iconBg: "bg-indigo-50 text-indigo-500",
    iconColor: "text-indigo-500",
  },
  {
    value: "789",
    label: "All Impressions",
    icon: TrendingUp,
    iconBg: "bg-orange-50 text-orange-500",
    iconColor: "text-orange-500",
  },
];

export const trendingPosts = [
  {
    id: 1,
    title: "8 Upcoming Influencer Marketing Trends and Benefits",
    description:
      "Marketing is evolving. It's changing from a one-way street to a two-way conversa…",
    likes: "260",
    comments: "234",
    shares: "123",
  },
  {
    id: 2,
    title: "How Influencer Marketing Affects Consumer Buying Behavior",
    description:
      "As influencer marketing continues to grow, consumers have been turning to their…",
    likes: 260,
    comments: 234,
    shares: 123,
  },
];

export const potentialMembers = [
  {
    id: 1,
    name: "Wanda Parker",
    handle: "@ashking1234",
    growth: "10.3%",
    initials: "WP",
    avatar: wanda_parker,
  },
  {
    id: 2,
    name: "Terry Brown",
    handle: "@ashking1234",
    growth: "9.8%",
    initials: "TB",
    avatar: terry_brown,
  },
  {
    id: 3,
    name: "Lucas Holmes",
    handle: "@ashking1234",
    growth: "6.5%",
    initials: "LH",
    avatar: lucas_holmes,
  },
  {
    id: 4,
    name: "Janice Miller",
    handle: "@ashking1234",
    growth: "8.6%",
    initials: "JM",
    avatar: janice_miller,
  },
  {
    id: 5,
    name: "Terry Brown",
    handle: "@ashking1234",
    growth: "9.8%",
    initials: "TB",
    avatar: terry,
  },
];

export const watchListItems = [
  {
    ticker: "AAPL",
    price: "$142.90",
    change: "+0.47%",
    up: true,
  },
  {
    ticker: "BPL",
    price: "$142.90",
    change: "-0.78%",
    up: false,
  },
];

export const revenueItems = [
  {
    id: 1,
    title: "Recently Added Pages",
    amount: "$4000",
    img: facebook,
    imgBg: "bg-[#e8eff9] text-[#e8eff9]",
    imgAlt: "Recently Added Pages",
  },
  {
    id: 2,
    title: "Video Monetization",
    amount: "$2,120",
    img: insta,
    imgBg: "bg-[#f9eaec] text-[#f9eaec]",
    imgAlt: "Video Monetization",
  },
  {
    id: 3,
    title: "Community Buildup",
    amount: "$1,752",
    img: linkedin,
    imgBg: "bg-[#e8eff9] text-[#e8eff9]",
    imgAlt: "Community Buildup",
  },
];

export const trendingNews = [
  {
    id: 1,
    title: "Russia & Ukraine War",
    description: "Marketing is evolving. It's chang...",
    img: russia,
  },
  {
    id: 2,
    title: "Elon Musk bought Twitter",
    description: "Twitter is the most useful social pl....",
    img: elon_musk,
  },
  {
    id: 3,
    title: "Fuel Crisis Everywhere",
    description: "Due to covid situation in 2020 the....",
    img: fuel_crisis,
  },
];

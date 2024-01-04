import { resolve } from "path";

const pages = [
  {
    name: "index",
    path: resolve(__dirname, "index.html"),
  },
  {
    name: "hot_offers",
    path: resolve(__dirname, "hot_offers.html"),
  },
  {
    name: "campaigns",
    path: resolve(__dirname, "campaigns.html"),
  },
  {
    name: "client's_personal_account",
    path: resolve(__dirname, "client's_personal_account.html"),
  },
  {
    name: "contacts",
    path: resolve(__dirname, "contacts.html"),
  },
  {
    name: "directions",
    path: resolve(__dirname, "directions.html"),
  },
  {
    name: "hotel",
    path: resolve(__dirname, "hotel.html"),
  },
  {
    name: "search_results",
    path: resolve(__dirname, "search_results.html"),
  },
  {
    name: "text_page",
    path: resolve(__dirname, "text_page.html"),
  },
  {
    name: "tour_request",
    path: resolve(__dirname, "tour_request.html"),
  },
];

export default pages;

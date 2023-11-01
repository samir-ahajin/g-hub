import axios from "axios";
import { defer } from "react-router-dom";
import format from "date-fns/format";

const url = "https://api.rawg.io/api";
const key = "key=05a8cbebe2554a548f56f88ab415dd05";

export const getDates = () => {
  const t = new Date();
  const prior = new Date(new Date().setDate(t.getDate() - 30));

  const dates = {
    past30: format(prior, "yyyy-MM-dd"),
    today: format(new Date(t), "yyyy-MM-dd"),
  };
  return dates;
};

const todaysQuery = `dates=${getDates().past30},${
  getDates().today
}&ordering=-added&page_size=10`;

const gameImageLoader = async ({ query = todaysQuery }) => {
  try {
    const response = await axios.get(`${url}/games?${query}&${key}`);

    console.log(getDates());
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

// export const imagetoShow = async () => {
//   const q = a;
//   const newLink = await gameImageLoader(q);
//   return defer(newLink);
// };

export default gameImageLoader;

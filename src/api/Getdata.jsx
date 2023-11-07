//utils
import axios from "axios";
import { nextMonday } from "date-fns/esm";
import format from "date-fns/format";
import { defer } from "react-router-dom";
const url = "https://api.rawg.io/api";
const key = "&key=05a8cbebe2554a548f56f88ab415dd05";

const getData = async () => {
  try {
    const response = await axios.get(`${url}${category}?${key}`);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const loadData = async (category, query) => {
  if (category === null || category === undefined) {
    category = "/games";
  }
  if (category === null || category === undefined) {
    query = "";
  }
  try {
    const response = await axios.get(`${url}${category}?${query}${key}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getDateQuery = (typeDate) => {
  const t = new Date();
  let nextMon;
  let dates;
  let query;

  switch (typeDate) {
    case "prior":
      dates = {
        from: format(
          new Date(new Date().setDate(t.getDate() - 30)),
          "yyyy-MM-dd"
        ),
        to: format(new Date(t), "yyyy-MM-dd"),
      };

      break;

    case "thisWeek":
      dates = {
        from: format(new Date(t.setDate(t.getDate())), "yyyy-MM-dd"),
        to: format(
          new Date(t.setDate(t.getDate() - t.getDay() + 7)),
          "yyyy-MM-dd"
        ),
      };
      break;
    case "nextWeek":
      nextMon = new Date(nextMonday(t));
      dates = {
        from: format(nextMon, "yyyy-MM-dd"),
        to: format(
          new Date(nextMon.setDate(nextMon.getDate() - nextMon.getDay() + 7)),
          "yyyy-MM-dd"
        ),
      };
      break;
    case "lastYear":
      dates = {
        from: format(new Date(t.getFullYear() - 1, 0, 1), "yyyy-MM-dd"),
        to: format(new Date(t.getFullYear() - 1, 11, 31), "yyyy-MM-dd"),
      };
      break;
    case "thisYear":
      dates = {
        from: format(new Date(t.getFullYear(), 0, 1), "yyyy-MM-dd"),
        to: format(new Date(t.getFullYear(), 11, 31), "yyyy-MM-dd"),
      };
      break;
  }
  query = `dates=${dates.from},${dates.to}`;

  return query;
};

export const loadAllData = async () => {
  const [genres, platforms] = await Promise.all([
    loadData("/genres"),
    loadData("/platforms"),
  ]);

  return defer({
    genres,
    platforms,
  });
};

export default getData;

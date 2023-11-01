import axios from "axios";
const URL = "https://api.rawg.io/api";
const key = "05a8cbebe2554a548f56f88ab415dd05";

const getData = async () => {
  try {
    const response = await axios.get(`${URL}/games?key=${key}`);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export default getData;

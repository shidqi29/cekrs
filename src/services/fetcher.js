import axios from "axios";

export const fetcher = async (url) => {
  try {
    const response = await axios.get(
      `https://rs-bed-covid-api.vercel.app/api/${url}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

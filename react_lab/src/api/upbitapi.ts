import axios from "axios";

const url = "https://api.upbit.com/v1";

export async function fetchData(market: string) {
  try {
    const response = await axios.get(`${url}/ticker?markets=${market}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

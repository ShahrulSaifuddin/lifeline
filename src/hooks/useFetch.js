import { useState, useEffect } from "react";
import paginate from "../utils/pagination";
const url = "https://randomuser.me/api/?seed=lll&page=1&results=25";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(paginate(data.results));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};

import { useEffect, useState } from "react";

const useFetch = (url) => {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);
  return { data, loading };
};
export default useFetch;

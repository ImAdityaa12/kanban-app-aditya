import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";

const getOrderingData = () => {
  let localData = localStorage.getItem("userData");
  if (localData) {
    return JSON.parse(localData);
  } else {
    return {
      grouping: "status",
      ordering: "priority",
    };
  }
};
const getApiData = () => {
  let localData = localStorage.getItem("apiData");
  if (localData) {
    return JSON.parse(localData);
  } else {
    return async () => {
      const res = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      let fetchData = await res.json();
      return fetchData;
    };
  }
};

function App() {
  const [data, setData] = useState(getOrderingData());
  const [apiData, setApiData] = useState(getApiData());
  const getData = async () => {
    const res = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    let fetchData = await res.json();
    localStorage.setItem("apiData", JSON.stringify(fetchData));
    setApiData(fetchData);
  };
  const saveLocalData = () => {
    localStorage.setItem("userData", JSON.stringify(data));
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    saveLocalData();
  }, [data]);
  return (
    <div className="app">
      <Navbar data={data} setData={setData} />
      <Body data={data} apiData={apiData} />
    </div>
  );
}

export default App;

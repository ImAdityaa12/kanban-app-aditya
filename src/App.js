import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";

function App() {
  const [data, setData] = useState({
    grouping: "status",
    ordering: "priority",
  });
  const [localData, setLocalData] = useState();

  const [apiData, setApiData] = useState([]);
  const getData = async () => {
    const res = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    let fetchData = await res.json();
    setApiData(fetchData);
  };
  useEffect(() => {
    getData();
    saveLocalData();
    getLocalData();
  }, []);
  useEffect(() => {
    saveLocalData();
    getLocalData();
  }, [data]);

  const saveLocalData = () => {
    localStorage.setItem("myData", JSON.stringify(data));
  };
  const getLocalData = () => {
    if (localStorage.getItem("myData") === null) {
      localStorage.setItem("myData", JSON.stringify({}));
    } else {
      let localData = JSON.parse(localStorage.getItem("myData"));
      console.log(data);
      setLocalData(localData);
    }
  };

  return (
    <div className="app">
      <Navbar data={data} setData={setData} />
      <Body data={data} apiData={apiData} />
    </div>
  );
}

export default App;

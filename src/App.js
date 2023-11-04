import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";

const getOrderingData = () => {
  let localData = localStorage.getItem("userData");
  if (localData) {
    return JSON.parse(localData); // Parse the retrieved data if it exists
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
    return JSON.parse(localData); // Parse the retrieved data if it exists
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
  // const api = getApiData();
  // console.log(api);
  // console.log(data);
  const [apiData, setApiData] = useState(getApiData());
  const getData = async () => {
    const res = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    let fetchData = await res.json();
    localStorage.setItem("apiData", JSON.stringify(fetchData));
    // setApiData(fetchData);
  };
  useEffect(() => {
    getData();
    // saveLocalData();
    // getLocalData();
  }, []);
  useEffect(() => {
    saveLocalData();
    // getLocalData();
  }, [data]);
  const saveLocalData = () => {
    // localStorage.setItem("myData", JSON.stringify(data));
    localStorage.setItem("userData", JSON.stringify(data));
  };

  // const getLocalData = () => {
  //   if (localStorage.getItem("myData") === null) {
  //     localStorage.setItem("myData", JSON.stringify({}));
  //   } else {
  //     let localData = JSON.parse(localStorage.getItem("myData"));
  //     console.log(data);
  //     setLocalData(localData);
  //   }
  // };

  return (
    <div className="app">
      <Navbar data={data} setData={setData} />
      <Body data={data} apiData={apiData} />
    </div>
  );
}

export default App;

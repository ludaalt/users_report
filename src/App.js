import { useState, useEffect } from "react";

import CardList from "./components/CardList";
import { getData } from "./services/getData";

const App = () => {
  const [appData, setAppData] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    setIsLoadingData(true);

    getData().then((items) => {
      if (isLoadingData) {
        setAppData(items);
      }
    });
    setIsLoadingData(false);
  }, [isLoadingData]);

  return (
    <>
      <input />
      {isLoadingData && <div>A moment please...</div>}
      <CardList data={appData} />
    </>
  );
};

export default App;

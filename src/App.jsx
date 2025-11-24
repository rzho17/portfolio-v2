import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/main.scss";

import { basePath } from "../globals";
import { Outlet } from "react-router";

function App() {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState();
  const restPath = basePath + "pages/8" + "?acf_format=standard";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data.acf);
        setIsLoaded(true);

        console.log(data.acf);
      } else {
        setIsLoaded(false);
      }
    };
    fetchData();
  }, [restPath]);

  return (
    <>
      {isLoaded ? (
        <>
          <Header content={data.name} />

          <main>
            <Outlet context={{ data }} />
          </main>

          <Footer data={data} />
        </>
      ) : null}
    </>
  );
}

export default App;

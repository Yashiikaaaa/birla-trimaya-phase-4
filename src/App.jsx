import ReactGA from "react-ga4";
import { useEffect } from "react";
import { PageRoute } from "./PageRoute";

function App() {
  return (
    <div className="font-body md:text-xl bg-white">
      <PageRoute />
    </div>
  );
}

export default App;

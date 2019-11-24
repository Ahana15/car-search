import React, { Suspense, lazy } from "react";
import "./App.css";

import Loading from "./components/Loading";

const Header = lazy(() => import("./components/Header"));
const Body = lazy(() => import("./components/Body"));

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header />
        <Body />
      </Suspense>
    </div>
  );
}

export default App;

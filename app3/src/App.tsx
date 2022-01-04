import * as React from "react";
import {FilterProps} from "shared/types";

const RemoteFilter1: React.FC<FilterProps> = React.lazy(() => import("app1/Filter"));

const App = () => {
  return (
    <div style={{
      margin: "10px",
      padding:"10px",
      textAlign:"center",
      backgroundColor:"darkred"
    }}>
      <h1 >App 3</h1>
        <React.Suspense fallback={"loading..."}>
            <RemoteFilter1 projectName="App 3"/>
        </React.Suspense>
    </div>
  )
}

export default App;


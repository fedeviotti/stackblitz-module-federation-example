import * as React from "react";
import {FilterProps} from "app1/shared/types";

const RemoteFilter1: React.FC<FilterProps> = React.lazy(() => import("app1/Filter"));

const App = () => {
  return (
    <div style={{
      margin: "10px",
      padding:"10px",
      textAlign:"center",
      backgroundColor:"cyan"
    }}>
      <h1 >App 2</h1>
        <React.Suspense fallback={"loading..."}>
            <RemoteFilter1 project="App 2"/>
        </React.Suspense>
    </div>
  )
}

export default App;


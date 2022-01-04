import React, {Suspense} from "react";

const RemoteFilter1 = React.lazy(() => import("app1/Filter"));

const App = () => {
  return (
    <div style={{
      margin: "10px",
      padding:"10px",
      textAlign:"center",
      backgroundColor:"darkred"
    }}>
      <h1 >App 3</h1>
        <Suspense fallback={"loading..."}>
            <RemoteFilter1/>
        </Suspense>
    </div>
  )
}

export default App;


import * as React from "react";
const RemoteApp2 = React.lazy(() => import("app2/App"));
const RemoteApp3 = React.lazy(() => import("app3/App"));

const App = () => {
  return (
    <div>
      <div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"greenyellow"
      }}>
        <h1>App1</h1>
      </div>
      <React.Suspense fallback={"loading..."}>
        <RemoteApp2/>
        <RemoteApp3/>
      </React.Suspense>
    </div>)
}


export default App;

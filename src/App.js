import { Button } from "antd";
import SaimasLayout from "./pages/Layout";
import { Outlet } from "react-router-dom";
import Imgs from "./pages/Home/components/Imgs";
function App(){
  return (
  <div style={{maxWidth:'1200px',margin:'0 auto'}}>
    <div style={{height:'40px'}}></div>

    <SaimasLayout/>
  </div>
  )
}

export default App;
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function Layout(){
    return(
        <div>
          <Header/>
          <Outlet/>    {/* here you can add home about ... using parent-child in route*/}
          <Footer/>
        </div>
    )
}

export default Layout
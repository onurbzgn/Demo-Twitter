import MainHeader from "../companents/MainHeader"
import { Outlet } from "react-router-dom"

function RootLayaout() {
    return(
        <>
        <MainHeader/>
        <Outlet/>
        </>
    )
}
export default RootLayaout
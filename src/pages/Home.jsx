import React from "react";
import HeaderComponent from "../components/Header/Header";
import Slider from "../components/Section1_Slider/Section1";
import Sec2Datas from "../components/Section2_Datas/Section2";
import Sec3Datas from "../components/Section3_Datas/Section3";
import Sec4Datas from "../components/Section4_Datas/Section4";
import Sec5Datas from "../components/Section5_Datas/Section5";
import Sec6Datas from "../components/Section6_Datas/Section6";

function Home(){
    return(
        <>
        < HeaderComponent/>
        < Slider/>
        <Sec2Datas/>
        <Sec3Datas/>
        <Sec4Datas/>
        <Sec5Datas/>
        <Sec6Datas/>
        </>
    )
}

export default Home;
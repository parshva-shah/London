"use client"
import Layout from "@/components/layout/Layout";
import Popup from "@/components/layout/Popup";
import Section1 from "@/components/sections/home9/section1";
import Section2 from "@/components/sections/home1/section2";
import Section3 from "@/components/sections/home1/section3";
import Section4 from "@/components/sections/home1/section4";
import Section5 from "@/components/sections/home1/section5";
import Section6 from "@/components/sections/home1/section6";
import Section7 from "@/components/sections/home1/section7";
import Section8 from "@/components/sections/home1/section8";
import Section9 from "@/components/sections/home1/section9";
import Section10 from "@/components/sections/home6/section2";
import { MyProvider } from "./context/MainContext";
import Highlights from "./highlights/page";
export default function Home() {
  return (
    <>
      <MyProvider>
        <Layout headerStyle={1} footerStyle={1}>
          <Section1 />
         <Section2 />
         <Highlights />
          <Section3 />
          {/* <Section4 />
          <Section5 />
          <Section6 /> */}
          <Section7 />
          {/* <Section8 /> */}
          <Section9 /> 
          {/* <Section10 />  */}
        </Layout>
      </MyProvider>
    </>
  );
}

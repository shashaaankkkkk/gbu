import React from "react";
import AboutUs from "../components/AboutIct.jsx";
import HeroBanner from "../components/Research.jsx";
import DepartmentCard from "../components/Deptcard.jsx";
import CenterOfExcellence from "../components/Excellence.jsx";
import OurEntrepreneurs from "../components/Enterpre.jsx";
import Landing from "../components/Landing.jsx";

const ICTPage = () => {
  return (
    <>
<Landing/>

      <AboutUs />
       <DepartmentCard></DepartmentCard>
      <CenterOfExcellence />
      <HeroBanner />
      <OurEntrepreneurs />



    </>
  );
};

export default ICTPage;

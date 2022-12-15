import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProgramHeader from "../../components/program/ProgramHeader";
import ProgramBody from "../../components/program/ProgramBody";
import Gallery from "../../components/card/Gallery";
import Header from "../../layout/Header/Header";
import FooterTwo from "../../layout/Footer/FooterTwo";


const programSingle = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [Department, setDepartment] = useState();
  const getData = async () => {
    // Get Posts
    await axios
      .get(`http://iba-kdk.com/wp-json/wp/v2/campus/${pid}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setDepartment(result.data));
    //   .then((result) => console.log(result.data.title));
  };

  useEffect(() => {
    getData();
  }, []);

  const header = {
    // title: Department && Department.title,
    // description: Department && Department.description,
    // process: Department && Department.title,
    // feeStructure: Department && Department.title,
    // courseSchemata: Department && Department.title,
    // apply: Department && Department.title,
    title: "Department && Department.title",
    description: "Department && Department.description",
    process: "Department && Department.title",
    feeStructure: "Department && Department.title",
    courseSchemata: "Department && Department.title",
    apply: "Department && Department.title",
    
  };

  const body = {
    mission: "Department && Department.title",
    eligibility: "Department && Department.description",
    outcomes: "Department && Department.description",
  };

  return (
    <>
      {/* <p>Post: {pid}</p>
      <p>{ Department ? Department.title : ""}</p> */}
      <Header />
      <div className="container">
        <ProgramHeader props={header} />
        <ProgramBody props={body} />
        <Gallery />
      </div>
      <FooterTwo />
    </>
  );
};

export default programSingle;

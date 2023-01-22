import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Card } from "antd";
import { Table } from "antd";
import "antd/dist/antd.css";
import Header from "../../../layout/Header/Header";
import FooterTwo from "../../../layout/Footer/FooterTwo";
import ProgramHeader from "../../../components/program/ProgramHeader";
import ProgramBody from "../../../components/program/ProgramBody";
import Gallery from "../../../components/card/Gallery";


// const tabList = [
//   {
//     key: "tab1",
//     tab: "tab1",
//   },
//   {
//     key: "tab2",
//     tab: "tab2",
//   },
// ];
// const contentList = {
//   tab1: <p>content1</p>,
//   tab2: <p>content2</p>,
// };
// const tabListNoTitle = [
//   {
//     key: "article",
//     tab: "article",
//   },
//   {
//     key: "app",
//     tab: "app",
//   },
//   {
//     key: "project",
//     tab: "project",
//   },
// ];
// const contentListNoTitle = {
//   article: <p>article content</p>,
//   app: <p>app content</p>,
//   project: <p>project content</p>,
// };

// const columns = [
//   {
//     title: "Name (all screens)",
//     dataIndex: "name",
//     key: "name",
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: "Age (medium screen or bigger)",
//     dataIndex: "age",
//     key: "age",
//     responsive: ["md"],
//   },
//   {
//     title: "Address (large screen or bigger)",
//     dataIndex: "address",
//     key: "address",
//     responsive: ["lg"],
//   },
// ];
// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//   },
// ];

// regex for removing the html tags
const regex = /(<([^>]+)>)/gi;

const program = () => {
  const [program, setprogram] = useState();
  const [imagebyCat, setimageCat] = useState();

  // const [activeTabKey1, setActiveTabKey1] = useState("tab1");
  // const [activeTabKey2, setActiveTabKey2] = useState("app");
  const router = useRouter();
  const { pid } = router.query;

  const getData = async () => {
    // Get Posts
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}campus/${pid && pid}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setprogram(result.data))
    // .then((result) => console.log(result.data[0]["title"]["rendered"]));
    .catch(function (error) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
  
    });

   

  };

  useEffect(() => {
    getData();
    // console.log(pid);
  }, []);

  const header = {
    Id:program && program.id,
    title: program && program["title"]["rendered"].replace(regex, ""),
    description: program && program["content"]["rendered"],
    process: program && program["acf"]["process"].replace(regex, ""),
    feeStructure: program && program["acf"]["Fee Structure"].replace(regex, ""),
    courseSchemata: program && program["acf"]["Course Schema"].replace(regex, ""),
    apply: program && program["acf"]["Apply"].replace(regex, ""),
    // imageUrl:imagebyCat && imagebyCat.guid.rendered,
    featuredImage: program && program.guid && program.guid.rendered
  };

  const body = {
    mission: program && program["acf"]["Mission"].replace(regex, ""),
    eligibility: program && program["acf"]["PLO"].replace(regex, ""),
    outcomes: program && program["acf"]["Eligibility Criteria"].replace(regex, ""),
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

export default program;

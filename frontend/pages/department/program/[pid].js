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
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}campus?slug=${pid}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setprogram(result.data));
    // .then((result) => console.log(result.data[0]["title"]["rendered"]));

    const data = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API}campus?slug=${pid}`
    );
    const featuredImage = data.data[0].featured_media;

    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}media/${featuredImage}`)
      // .then((result) => console.log(result.data));
      .then((result) => setimageCat(result.data));

  };

  useEffect(() => {
    getData();
    // console.log(pid);
  }, []);

  const header = {
    Id:program && program[0].id,
    title: program && program[0]["title"]["rendered"].replace(regex, ""),
    description: program && program[0]["content"]["rendered"].replace(regex, ""),
    process: program && program[0]["acf"]["process"].replace(regex, ""),
    feeStructure: program && program[0]["acf"]["Fee Structure"].replace(regex, ""),
    courseSchemata: program && program[0]["acf"]["Course Schema"].replace(regex, ""),
    apply: program && program[0]["acf"]["Apply"].replace(regex, ""),
    imageUrl:imagebyCat && imagebyCat.guid.rendered,
  };

  const body = {
    mission: program && program[0]["acf"]["Mission"].replace(regex, ""),
    eligibility: program && program[0]["acf"]["PLO"].replace(regex, ""),
    outcomes: program && program[0]["acf"]["Eligibility Criteria"].replace(regex, ""),
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

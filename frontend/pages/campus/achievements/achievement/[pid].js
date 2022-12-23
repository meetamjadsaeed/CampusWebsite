import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Button, Card } from "antd";
import { Table } from "antd";
import "antd/dist/antd.css";
import Header from "../../../../layout/Header/Header";
import FooterTwo from "../../../../layout/Footer/FooterTwo";


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
const regex = /(<([^>]+)>)/ig;

const achievement = () => {
  const [achievement, setachievement] = useState();
  // const [activeTabKey1, setActiveTabKey1] = useState("tab1");
  // const [activeTabKey2, setActiveTabKey2] = useState("app");
  const router = useRouter();
  const { pid } = router.query;

  const getData = async () => {
    // Get Posts
    await axios
      .get(`http://iba-kdk.com/wp-json/wp/v2/campus?slug=${pid}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setachievement(result.data));
      // .then((result) => console.log(result.data[0]["title"]["rendered"]));
  };

  useEffect(() => {
    getData();
    // console.log(pid);
  }, []);

  // const onTab1Change = (key) => {
  //   setActiveTabKey1(key);
  // };
  // const onTab2Change = (key) => {
  //   setActiveTabKey2(key);
  // };

  return (
    <>
    <Header/>
       <header className="hero">
        <div className="hero-text">
          <h1>Event</h1>
          {/* <p>Details</p> */}
        </div>
        <a href="#blogPost-header" className="hero-arrow">
          <i className="ri-arrow-down-s-line"></i>
        </a>
      </header>

      <div className="container">
        <p className='hero-description'>
        description description
        </p>
        <Button>Download</Button>
      </div>
      
      <FooterTwo/>

    </>
  );
};

export default achievement;

import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Button, Card } from "antd";
import { Table } from "antd";
import "antd/dist/antd.css";
import Header from "../../../layout/Header/Header";
import FooterTwo from "../../../layout/Footer/FooterTwo";
import Link from "next/link";

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

const pin = () => {
  const [pin, setpin] = useState();
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
      .then((result) => setpin(result.data))
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
    const data = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API}campus?slug=${pid}`
    );
    const featuredImage = data.data[0].featured_media;

    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}media/${featuredImage}`)
      // .then((result) => console.log(result.data));
      .then((result) => setimageCat(result.data))
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

  // const onTab1Change = (key) => {
  //   setActiveTabKey1(key);
  // };
  // const onTab2Change = (key) => {
  //   setActiveTabKey2(key);
  // };

  return (
    <>
      <Header />
      <header
        className="hero"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.86)), url(${
            imagebyCat && imagebyCat.guid.rendered
          })`,
        }}
      >
        <div className="hero-text">
          <h1>{pin && pin[0]["title"]["rendered"].replace(regex, "")}</h1>
          {/* <p>Details</p> */}
        </div>
        <a href="#blogPost-header" className="hero-arrow">
          <i className="ri-arrow-down-s-line"></i>
        </a>
      </header>

      <div className="container">
        <p style={{ color: "#ea6645" }} className="hero-description">
          {pin && pin[0]["acf"]["Attachment"] ? (
            <a href={pin[0]["acf"]["Attachment"]}>Download Here</a>
          ) : null}
        </p>
        <p className="hero-description">
          {pin && pin[0]["content"]["rendered"].replace(regex, "")}
        </p>
        {/* <Button>Download</Button> */}
      </div>

      <FooterTwo />
    </>
  );
};

export default pin;

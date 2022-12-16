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

const faculty = () => {
  const [Faculty, setFaculty] = useState();
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
      .then((result) => setFaculty(result.data));
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
      <div className="container">
        <div className="panel panel-mask profileheader border-default-light"
        style={{
          marginTop: '50px',
          padding:"20px",
          boxShadow: '0 2px 10px 0 rgb(45 60 75 / 10%)',
border: '1px solid #e8e8e8',
borderRadius: '4px',
background: '#fff',
        }}
        >
          <div className="coverprofile bg-cover"></div>
          <div className="text-center">
            <img
              alt=""
              src="https://i.tribune.com.pk/media/images/1830234-emmadirfani-1540029568/1830234-emmadirfani-1540029568.png"
              className="avatar avatar-150 photo"
              height="150"
              width="150"
            />
          </div>
          <div className="panel-body">
            <div className="text-center">
              <div className="dropdown inblock">
                <h1 className="font-3x margtop-none inblock">
                  {/* Prof. Dr. M. Abdul Rehman Soomrani */}
                  {Faculty && Faculty[0]["title"]["rendered"]}
                </h1>
              </div>

              <h2>Professor</h2>
              <p>
              {Faculty && Faculty[0]["content"]["rendered"]}
              </p>
              <p>Contact Member: </p>
              <p>E-mail : rehman@iba-suk.edu.pk</p>
              <p>Office Extension : 4061</p>

              {/* <h2>Qualifications</h2> */}
              {/* <Table columns={columns} dataSource={data} /> */}
              {/* <Card
                style={{
                  width: "100%",
                }}
                tabList={tabListNoTitle}
                activeTabKey={activeTabKey2}
                tabBarExtraContent={<a href="#"></a>}
                onTabChange={(key) => {
                  onTab2Change(key);
                }}
              >
                {contentListNoTitle[activeTabKey2]}
              </Card> */}
            </div>
          </div>
        </div>
      </div>
      <FooterTwo/>
    </>
  );
};

export default faculty;

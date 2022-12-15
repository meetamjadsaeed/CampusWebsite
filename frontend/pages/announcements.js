import React from "react";
import { Space, Table, Tag } from "antd";
import Header from "../layout/Header/Header";
import FooterTwo from "../layout/Footer/FooterTwo";
import { Breadcrumb, Button } from "antd";
import { Col, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";

const columns = [
  {
    title: "Project",
    dataIndex: "Project",
    key: "Project",
  },
  {
    title: "Documents",
    dataIndex: "Documents",
    key: "Documents",
    render: (text) =><Link href="https://example.com">{text}</Link> ,
  },
  {
    title: "Last Date",
    dataIndex: "Lastdate",
    key: "Lastdate",
  },
  {
    title: "Publish Date",
    dataIndex: "Publishdate",
    key: "Publishdate",
  },
];

export default function Announcements() {
  const [announcements, setannouncements] = useState();
  const getData = async () => {
    // Get Posts
    await axios
      .get("http://iba-kdk.com/wp-json/wp/v2/campus?categories=15", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => setannouncements(result.data));
    // .then((result) => console.log(result));
  };

  useEffect(() => {
    getData();
  }, []);

  // var data = [];

  // posts.map((post) => 
  
  // data = [
  //   {

  //   }
  // ]
  
  // )

  // announcements.map(
  //   (item) =>
  //     (data = [
  //       {
  //         key: item.id,
  //         Project: "ABC",
  //         Documents: "Documents",
  //         Lastdate: "Lastdate",
  //         Publishdate: "Publishdate",
  //       },

  //     ])
  // );
  

  // const data = [
  //   {
  //     key: '1',
  //     Project: 'ABC',
  //     Documents: "Documents",
  //     Lastdate: "Lastdate",
  //     Publishdate: "Publishdate"
  //   },
  //   {
  //     key: '2',
  //     Project: 'ABC',
  //     Documents: "Documents",
  //     Lastdate: "Lastdate",
  //     Publishdate: "Publishdate"
  //   },
  //   {
  //     key: '3',
  //     Project: 'ABC',
  //     Documents: "Documents",
  //     Lastdate: "Lastdate",
  //     Publishdate: "Publishdate"
  //   },
  //   {
  //     key: '4',
  //     Project: 'ABC',
  //     Documents: "Documents",
  //     Lastdate: "Lastdate",
  //     Publishdate: "Publishdate"
  //   },
  // ];

  return (
    <>
      <Header />
      <div className="container">
        <Breadcrumb style={{ marginTop: 16 }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Announcements</a>
          </Breadcrumb.Item>
        </Breadcrumb>

        <Row>
          <Col span={16}>
            <h2>Announcements</h2>
          </Col>
          {/* <Col span={8}><Button type="">Apply Online</Button></Col> */}
        </Row>

        <Table columns={columns} dataSource={
          [
            {
              key: "1",
              Project: "ABC",
              Documents: "View Doc",
              Lastdate: "30-12-2022",
              Publishdate: "30-12-2022",
            },
            {
              key: "2",
              Project: "ABC",
              Documents: "View Doc",
              Lastdate: "30-12-2022",
              Publishdate: "30-12-2022",
            },
            {
              key: "3",
              Project: "ABC",
              Documents: "View Doc",
              Lastdate: "30-12-2022",
              Publishdate: "30-12-2022",
            },
            {
              key: "2",
              Project: "ABC",
              Documents: "View Doc",
              Lastdate: "30-12-2022",
              Publishdate: "30-12-2022",
            },
            {
              key: "3",
              Project: "ABC",
              Documents: "View Doc",
              Lastdate: "30-12-2022",
              Publishdate: "30-12-2022",
            }
          ]
        } />
      </div>

      <FooterTwo />
    </>
  );
}

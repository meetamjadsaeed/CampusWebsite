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
    render: (text) => <Link href="https://example.com">{text}</Link>,
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
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}campus?categories=15`)
      .then((result) => setannouncements(result.data))
      // .then((result) => console.log(result));
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
          console.log("Error", error.message);
        }
      });
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "space-around",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "2%",
          }}
        >
          {/* <Button type="">Admission process</Button> */}
          {/* <Button type="">Fee Structure</Button> */}
          {/* <Button type="">Apply Online</Button> */}
        </div>

        <div className="site-card-wrapper">
          <h1 className="page-title">Announcements</h1>

          <Table
            columns={columns}
            dataSource={[
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
              },
            ]}
          />
        </div>
      </div>

      <FooterTwo />
    </>
  );
}

// import React from 'react'
import React, { useState } from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import { Table } from "antd";
const tabList = [
  {
    key: "tab1",
    tab: "tab1",
  },
  {
    key: "tab2",
    tab: "tab2",
  },
];
const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};
const tabListNoTitle = [
  {
    key: "article",
    tab: "article",
  },
  {
    key: "app",
    tab: "app",
  },
  {
    key: "project",
    tab: "project",
  },
];
const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};

const columns = [
  {
    title: "Name (all screens)",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age (medium screen or bigger)",
    dataIndex: "age",
    key: "age",
    responsive: ["md"],
  },
  {
    title: "Address (large screen or bigger)",
    dataIndex: "address",
    key: "address",
    responsive: ["lg"],
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
];

const Profile = () => {
  const [activeTabKey1, setActiveTabKey1] = useState("tab1");
  const [activeTabKey2, setActiveTabKey2] = useState("app");
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };
  return (
    <>
      <div>Header</div>

      <div className="container">
        <div className="panel panel-mask profileheader border-default-light">
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
                  Prof. Dr. M. Abdul Rehman Soomrani
                </h1>
              </div>

              <h2>Biography</h2>
              <p>
                Dr. Rehman has experience with a wide range of database and
                semantic web technologies through the academic and research
                projects. His areas of interests are: Scientific Workflows,
                Scientific (machine generated) Data Management, Ontology based
                data integration, and Data transformation as well as
                transportation in scientific applications. Moreover, his
                interests also include the dataflow and data transformation
                languages.{" "}
              </p>
              <p>Contact Member: </p>
              <p>E-mail : rehman@iba-suk.edu.pk</p>
              <p>Office Extension : 4061</p>

              <h2>Qualifications</h2>
              {/* <Table columns={columns} dataSource={data} /> */}
              <Card
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
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div>Footer</div>

      {/* image
about 
timilnine */}
    </>
  );
};

export default Profile;

// import React from "react";
import React, { useState } from "react";
// import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Link from "next/link";
import { Spin } from "antd";

const items = [
  {
    label: <Link href="/">Home</Link> ? <Link href="/">Home</Link> : <Spin />,
    key: "home",
    icon: <SettingOutlined />,
  },
  {
    label: "University",
    key: "submenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "About",
        children: [
          {
            label: <Link href="/vision">Vision</Link> ? <Link href="/vision">Vision</Link> : <Spin />,
            key: "vision",
          },
          {
            label: <Link href="/mission">Mission</Link> ? <Link href="/mission">Mission</Link> : <Spin />,
            key: "mission",
          },
          {
            label: <Link href="/history">History</Link> ? <Link href="/history">History</Link> : <Spin />,
            key: "history",
          },
        ],
      },
      {
        type: "group",
        label: "Founders",
        children: [
          {
            label: <Link href="http://localhost:3000/profilebycat/profile/173">Vice Chancellor</Link> ? <Link href="http://localhost:3000/profilebycat/faculty/vice-chancellor">Vice Chancellor</Link> : <Spin />,
            key: "chancellor",
          },
          {
            label: <Link href="http://localhost:3000/profilebycat/profile/175">Registrar</Link> ? <Link href="http://localhost:3000/profilebycat/faculty/registrar">Registrar</Link> : <Spin />,
            key: "registrar",
          },
          {
            label: <Link href="http://localhost:3000/profilebycat/profile/177">Director</Link> ? <Link href="http://localhost:3000/profilebycat/faculty/director">Director</Link> : <Spin />,
            key: "director",
          },
        ],
      },
    ],
  },
  {
    label: <Link href="/pinboard">Pin Board</Link> ? <Link href="/pinboard">Pin Board</Link> : <Spin />,
    key: "pinboard",
    icon: <SettingOutlined />,
  },

  {
    label: <Link href="/admissions">Admissions</Link> ? <Link href="/admissions">Admissions</Link> : <Spin />,
    key: "admissions",
    icon: <SettingOutlined />,
  },
  {
    label: <Link href="/allprofiles">Profiles</Link> ? <Link href="/allprofiles">Profiles</Link> : <Spin />,
    key: "allprofiles",
    icon: <SettingOutlined />,
  },
  {
    label: <Link href="https://www.iba-suk.edu.pk/student-resources">Resources</Link> ? <Link href="https://www.iba-suk.edu.pk/student-resources">Resources</Link> : <Spin />,
    key: "resources",
    icon: <SettingOutlined />,
  },
  {
    label: <Link href="/campus">Life at Campus</Link> ? <Link href="/campus">Life at Campus</Link> : <Spin />,
    key: "campus",
    icon: <SettingOutlined />,
  },
];

export const Nav = () => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      {/* <div>Nav</div> */}

      {/* <h1 style={{color:'#fff'}}>Nav</h1> */}
      <div style={{ marginLeft: "30%", marginTop: "2%" }}>
        <Menu
          // onClick={onClick}
          // selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{
            backgroundColor: "#012447",
            backgroundColor: "rgb(1, 36, 71)",
            borderBottom: "none",
            color: "#ffffff",
          }}
        />
      </div>
    </>
  );
};

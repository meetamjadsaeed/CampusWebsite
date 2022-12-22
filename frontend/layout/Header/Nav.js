// import React from "react";
import React, { useState } from 'react';
// import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Link from "next/link"; 
import { Spin } from "antd";

const items = [
 {
    label: 'University',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'About',
        children: [
          {
            label: (
              <Link href="/vision">Vision</Link>
            ),
            key: 'setting:1',
          },
          {
            label: (
              <Link href="/mission">Mission</Link>
            ),
            key: 'setting:2',
          },
          {
            label: (
              <Link href="/history">History</Link>
            ),
            key: 'setting:3',
          },
        ],
      },
      {
        type: 'group',
        label: 'Founders',
        children: [
          {
            label: (
              <Link href="http://localhost:3000/profilebycat/faculty/vice-chancellor">Vice Chancellor</Link>
            ),
            key: 'setting:4',
          },
          {
            label: (
              <Link href="http://localhost:3000/profilebycat/faculty/registrar">Registrar</Link>
            ),
            key: 'setting:5',
          },
          {
            label: (
              <Link href="http://localhost:3000/profilebycat/faculty/director">Director</Link>
            ),
            key: 'setting:6',
          },
        ],
      },
    ],
  },
  {
    label: (
      <Link href="/pinboard">Pin Board</Link>
    ),
    key: 'pinboard',
    icon: <SettingOutlined />,
  },

  {
    label: (
      <Link href="/admissions">Admissions</Link>
    ),
    key: 'admissions',
    icon: <SettingOutlined />,
  },
  {
    label: (
      <Link href="/allprofiles">Profiles</Link>
    ),
    key: 'allprofiles',
    icon: <SettingOutlined />,
  },
  {
    label: (
      <Link href="https://www.iba-suk.edu.pk/student-resources">Resources</Link>
    ),
    key: 'Resources',
    icon: <SettingOutlined />,
  },
  {
    label: (
      <Link href="/campustour">Campus</Link>
    ),
    key: 'campus',
    icon: <SettingOutlined />,
  },

];



export const Nav = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      {/* <div>Nav</div> */}

      {/* <h1 style={{color:'#fff'}}>Nav</h1> */}
    <div style={{    marginLeft: '30%',marginTop: '2%'}}>

    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{backgroundColor:'#012447',backgroundColor: 'rgb(1, 36, 71)',
    borderBottom: 'none', color: '#ffffff'}}/>
    
    </div>
     

    </>
  );
};

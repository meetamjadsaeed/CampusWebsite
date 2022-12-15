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
            label: 'Vice Chancellor',
            key: 'setting:4',
          },
          {
            label: 'Registrar',
            key: 'setting:5',
          },
          {
            label: 'Director',
            key: 'setting:6',
          },
        ],
      },
    ],
  },
  {
    label: (
      <Link href="/events">Events</Link>
    ),
    key: 'Events',
    icon: <SettingOutlined />,
  },
  {
    label: (
      <Link href="/news">News</Link>
    ),
    key: 'News',
    icon: <SettingOutlined />,
  },
  {
    label: (
      <Link href="/announcements">Annoucements</Link>
    ),
    key: 'Annoucements',
    icon: <SettingOutlined />,
  },
  {
    label: (
      <Link href="/departments">Departments</Link>
    ),
    key: 'Departments',
    icon: <SettingOutlined />,
  },
  {
    label: (
      <Link href="/faculty">Profiles</Link>
    ),
    key: 'Faculties',
    icon: <SettingOutlined />,
  },
  {
    label: (
      <Link href="/">Resources</Link>
    ),
    key: 'Resources',
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

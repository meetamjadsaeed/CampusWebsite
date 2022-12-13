// import React from "react";
import React, { useState } from 'react';
// import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
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
            label: 'Vision',
            key: 'setting:1',
          },
          {
            label: 'Mission',
            key: 'setting:2',
          },
          {
            label: 'History',
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
      <a href="/events" rel="noopener noreferrer">
        Events
      </a>
    ),
    key: 'Events',
    icon: <SettingOutlined />,
  },
  {
    label: (
      <a href="/news" rel="noopener noreferrer">
        News
      </a>
    ),
    key: 'News',
    icon: <SettingOutlined />,
  },
  {
    label: (
      <a href="/announcements" rel="noopener noreferrer">
        Annoucements
      </a>
    ),
    key: 'Annoucements',
    icon: <SettingOutlined />,
  },
  {
    label: (
      <a href="/departments" rel="noopener noreferrer">
        Departments
      </a>
    ),
    key: 'Departments',
    icon: <SettingOutlined />,
  },
  {
    label: (
      <a href="/faculty" rel="noopener noreferrer">
        Faculties
      </a>
    ),
    key: 'Faculties',
    icon: <SettingOutlined />,
  },
  {
    label: (
      <a href="/resources" rel="noopener noreferrer">
        Resources
      </a>
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

import React from "react";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';



export const Nav = () => {
  return (
    <>
      {/* <div>Nav</div> */}

      {/* <h1 style={{color:'#fff'}}>Nav</h1> */}
    <div style={{    marginLeft: '30%',marginTop: '10%'}}>

    <Menu mode="horizontal" defaultSelectedKeys={['mail']} style={{background:'#012447', color:'#fff',border: 'none'}}>
    <Menu.Item key="mail" style={{color:'#fff'}}>
      University
    </Menu.Item>

    <Menu.Item key="mail" style={{color:'#fff'}}>
      University
    </Menu.Item>

    <Menu.Item key="mail" style={{color:'#fff'}}>
      University
    </Menu.Item>

    <Menu.Item key="mail" style={{color:'#fff'}}>
      University
    </Menu.Item>

    <Menu.Item key="mail" style={{color:'#fff'}}>
      University
    </Menu.Item>

    {/* <Menu.SubMenu key="SubMenu" title="Navigation Two - Submenu" >
      <Menu.Item key="two" >
        Navigation Two
      </Menu.Item>
      <Menu.Item key="three">
        Navigation Three
      </Menu.Item>
      <Menu.ItemGroup title="Item Group">
        <Menu.Item key="four" >
          Navigation Four
        </Menu.Item>
        <Menu.Item key="five">
          Navigation Five
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu> */}
  </Menu>

    </div>
     

    </>
  );
};

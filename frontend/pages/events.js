import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import { Breadcrumb, Button } from "antd";
import { Image } from 'antd';
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';

import qs from 'qs';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      {
        text: 'Male',
        value: 'male',
      },
      {
        text: 'Female',
        value: 'female',
      },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const events = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState({
      pagination: {
        current: 1,
        pageSize: 10,
      },
    });
    const fetchData = () => {
      setLoading(true);
      fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
        .then((res) => res.json())
        .then(({ results }) => {
          setData(results);
          setLoading(false);
          setTableParams({
            ...tableParams,
            pagination: {
              ...tableParams.pagination,
              total: 200,
              // 200 is mock data, you should read it from server
              // total: data.totalCount,
            },
          });
        });
    };
  
    useEffect(() => {
      fetchData();
    }, [JSON.stringify(tableParams)]);
    const handleTableChange = (pagination, filters, sorter) => {
      setTableParams({
        pagination,
        filters,
        ...sorter,
      });
  
      // `dataSource` is useless since `pageSize` changed
      if (pagination.pageSize !== tableParams.pagination?.pageSize) {
        setData([]);
      }
    };
  return (
    <>
        <Header/>
    <div className="container">

    <Breadcrumb style={{ marginTop: 16 }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Events</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Table
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
      </div>
    <Footer/>

    
    </>
  )
}

export default events
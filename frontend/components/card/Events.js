import React from "react";
import { Card, Col, Row } from "antd";
import { Avatar, Skeleton, Switch } from "antd";
const { Meta } = Card;

const Events = () => {
  return (
    <Card title="Events title" bordered={true}>
      <Card style={{ width: 300, marginTop: 16 }}>
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="What you have to know about MBA"
          description="March 12, 2020"
        />
      </Card>

      <Card style={{ width: 300, marginTop: 16 }}>
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="What you have to know about MBA"
          description="March 12, 2020"
        />
      </Card>

      <Card style={{ width: 300, marginTop: 16 }}>
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="What you have to know about MBA"
          description="March 12, 2020"
        />
      </Card>
    </Card>
  );
};

export default Events;

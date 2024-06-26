import React from "react";
import { Input } from "antd";
import { Card, Col, Row } from "antd";
import { useState } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Form, Radio, TreeSelect } from "antd";

const Query = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <>
      <Card title="Visitor's Query" bordered={true} style={{ height: "420px" }}>
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            requiredMarkValue: requiredMark,
          }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
        >
          {/* <Form.Item label="Required Mark" name="requiredMarkValue">
            <Radio.Group>
              <Radio.Button value="optional">Optional</Radio.Button>
              <Radio.Button value>Required</Radio.Button>
              <Radio.Button value={false}>Hidden</Radio.Button>
            </Radio.Group>
          </Form.Item> */}
          {/* <Form.Item
            label="Email Address *"
            required
            tooltip="This is a required field"
          >
            <Input placeholder="input placeholder" />
          </Form.Item> */}
          {/* <Form.Item
            label="Full Name *"
            required
            tooltip={{
              title: "Tooltip with customize icon",
              icon: <InfoCircleOutlined />,
            }}
          >
            <Input placeholder="Full Name " />
          </Form.Item> */}
          <Form.Item
            label="Program of Interest *"
            required
            tooltip={{
              title: "Tooltip with customize icon",
              icon: <InfoCircleOutlined />,
            }}
          >
            <TreeSelect
              treeData={[
                {
                  title: "BS",
                  value: "bs",
                  children: [
                    {
                      title: "BSCS",
                      value: "bscs",
                    },
                  ],
                },
                {
                  title: "BUSSINES",
                  value: "bussines",
                  children: [
                    {
                      title: "BBA",
                      value: "bba",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item>
            <Button>Submit</Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default Query;

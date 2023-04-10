import React from "react";
import { Avatar, Skeleton, Switch } from "antd";
import { Image } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import Link from "next/link";

const { Meta } = Card;
// import { Image } from "antd";
// import { Col, Row } from "antd";
// import { Image } from "antd";
import {
  HomeOutlined,
  ArrowRightOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Marquee from "react-easy-marquee";
import { Card, Col, Row } from "antd";
import News from "./News";
import Events from "./Events";
// import Query from "./Query";
import Announcements from "./Announcements";

const Group = () => {
  const [pin_board, setpin_board] = useState();
  const [bypin_board, setbypin_board] = useState();
  // const [imagebyCat, setimageCat] = useState();

  // useEffect(() => {
  //   // not adding .catch() here for simplicity 😎

  //   axios
  //     .get(`${process.env.NEXT_PUBLIC_BACKEND_API}pin_board`)
  //     .then(({ data }) => {
  //       // we're putting this here because we only want to set state once (we don't wanna have to rerender 30times in data.map())
  //       // let externalPosts = [];
  //       // destructed out the {data}, same as response.data, so no worries 👍
  //       setpin_board(data);
  //       // console.log(data);
  //       // this is where you'll make your second API calls using the external_id from first call
  //       data.map(({ id }) => {
  //         // {external_id} same as your-param-name.external_id
  //         axios
  //           .get(`${process.env.NEXT_PUBLIC_BACKEND_API}campus?pin_board=${id}`)
  //           .then(({ data }) => {
  //             // we push the data into the array 📃
  //             setbypin_board(data);
  //             console.log(data);
  //             // externalPosts.push(data);
  //           });

  //         // then finally set the external post states once to prevent multiple rerendring in .map() 💯
  //         // setPostsExternal(externalPosts);
  //         // that's it 😎
  //       });
  //     });

  //   // tho, i'd recommend you create a seperate function for the above 👆
  // }, []);

  return (
    <>
      <div className="site-card-wrapper" style={{ marginTop: "5%" }}>
        <Row gutter={[40, 40]}>
          {/* {pin_board ? (
            pin_board.map((item) => {
              return (
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <h2>{item.slug} dsdsds</h2>
                </Col>
              );
            })
          ) : (
            <p>loading...</p>
          )} */}

          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <News />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Events />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Announcements />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Group;

import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Card } from "antd";
import { Table } from "antd";
import "antd/dist/antd.css";
import Header from "../../../layout/Header/Header";
import FooterTwo from "../../../layout/Footer/FooterTwo";
import FeaturedImage from "../../../components/meta/FeaturedImage";



// regex for removing the html tags
const regex = /(<([^>]+)>)/gi;

const faculty = () => {
  const [profile, setprofile] = useState();

  const router = useRouter();
  const { pid } = router.query;

  const getData = async () => {
    // Get Posts
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}campus/${pid && pid}`)
      .then((result) => setprofile(result.data))
      // .then((result) => console.log(result.data[0]["title"]["rendered"]));
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }

      });


  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <Header />
      <div className="container">
        <div
          className="panel panel-mask profileheader border-default-light"
          style={{
            marginTop: "50px",
            padding: "20px",
            boxShadow: "0 2px 10px 0 rgb(45 60 75 / 10%)",
            border: "1px solid #e8e8e8",
            borderRadius: "4px",
            background: "#fff",
          }}
        >
          <div className="coverprofile bg-cover"></div>
          <div className="text-center">
            <FeaturedImage
              PropsData={{
                featuredImage: profile && profile.featured_media,
                className: "avatar avatar-150 photo",
              }}
            />

          </div>
          <div className="panel-body">
            <div className="text-center">
              <div className="dropdown inblock">
                <h1 className="font-3x margtop-none inblock">
                  {profile && profile.title.rendered && profile.title.rendered}
                </h1>
              </div>


              {/* <h2>
                {profile && profile["acf"]["Designation"].replace(regex, "")}

              </h2> */}
              <p className="hero-description" dangerouslySetInnerHTML={{ __html: profile && profile.content.rendered }}></p>

              {/* <p>
              {profile &&
                  profile[0]["content"]["rendered"].replace(regex, "")}
              content
              </p>
              <p>Contact Member:
                {profile &&
                  profile[0]["acf"]["Contact Member"].replace(regex, "")}
              </p>
              <p>E-mail :
                {profile &&
                  profile[0]["acf"]["e-mail"].replace(regex, "")}

              </p>
              <p>Office Extension : 4061</p>

              <h2>Qualifications</h2>
              <Table columns={columns} dataSource={data} />
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
              </Card> */}
            </div>
          </div>
        </div>
      </div>
      <FooterTwo />
    </>
  );
};

export default faculty;

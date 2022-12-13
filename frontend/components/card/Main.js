import React, { useEffect } from "react";
import { Card } from "antd";

const Main = (props) => {
  // console.log(props);
  useEffect(() => {
    console.log(props.content);
  });

  return (
    <>
      <div
        className="site-card-border-less-wrapper"
        style={{ marginTop: "5%" }}
      >
        <Card
          title="Descriptive Content about Sukkur IBA KKOT Campus"
          bordered={true}
          style={{ width: "auto" }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            gravida tempor neque, sed blandit felis. Aenean vel augue non ligula
            porttitor viverra. Nulla id dignissim lacus. Nullam vehicula aliquam
            ipsum, et feugiat tellus iaculis et. Sed tincidunt ipsum ante, ut
            vestibulum massa iaculis sed. Aenean tempor sodales pellentesque.
            Aenean lacinia, est ac rhoncus mollis, libero purus commodo sapien,
            a lacinia enim ex id tortor. Fusce feugiat quam ut ligula dictum, at
            consectetur ante viverra. Aenean bibendum massa varius vulputate
            volutpat. Aliquam egestas augue sit amet porttitor laoreet. Morbi
            dolor leo, sollicitudin at nisi a, varius euismod libero. In
            pellentesque libero vel turpis eleifend ultricies. mollis, libero
            purus commodo sapien, a lacinia enim ex id tortor. Fusce feugiat
            quam ut ligula dictum, at consectetur ante viverra. Aenean bibendum
            massa varius vulputate volutpat. Aliquam egestas augue sit amet
            porttitor laoreet. Morbi dolor leo, sollicitudin at nisi a, varius
            euismod libero. In pellentesque libero vel turpis eleifend
            ultricies.
          </p>
        </Card>
      </div>
    </>
  );
};

export default Main;

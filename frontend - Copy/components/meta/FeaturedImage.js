import React from 'react'
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Card } from "antd";
import { Table } from "antd";
import "antd/dist/antd.css";

const FeaturedImage = ({ PropsData }) => {
    const [featuredImage, setFeaturedImage] = useState();



    const getData = async () => {
        // Get Posts
        await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_API}media/${PropsData && PropsData.featuredImage}`)
            .then((result) => setFeaturedImage(result.data))
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
            <img
                alt=""
                src={
                    featuredImage ? featuredImage &&
                        featuredImage.guid &&
                        featuredImage.guid.rendered : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Spring_Flower_in_IBA_Sukkur.jpg"

                }
                className={PropsData && PropsData.className ? PropsData.className: ""}
                // height="150"
                // width="150"
            />
        </>
    )
}

export default FeaturedImage
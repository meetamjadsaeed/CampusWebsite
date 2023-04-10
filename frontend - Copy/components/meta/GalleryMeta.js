import React from 'react'
import { Image } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import Link from "next/link";
import { Card, Col, Row } from "antd";

const { Meta } = Card;


const GalleryMeta = ({propsData}) => {
    const [FeaturedImage, setFeaturedImage] = useState();
    const getData = async () => {
        // Get Posts
        await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_API}media/${propsData.featured_image && propsData.featured_image
                }`)
            .then((result) => setFeaturedImage(result.data))
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
                    console.log("Error", error.message);
                }
            });
    }
    useEffect(() => {
        getData();
    });
    return (
        <>
            <Image
                // width={80}
                // height={80}
                src={propsData && propsData.FeaturedImage ? propsData.FeaturedImage : "http://iba-kdk.com/wp-content/uploads/2022/12/294517709_2884433441864646_587713335291766174_n.jpg" }
            />

        </>
    )
}

export default GalleryMeta
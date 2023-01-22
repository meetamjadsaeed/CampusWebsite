import React from 'react'
import { Image } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import Link from "next/link";
import { Card, Col, Row } from "antd";

const { Meta } = Card;


const GroupMeta = ({ propsData }) => {
    const [FeaturedImage, setFeaturedImage] = useState();


    const getData = async () => {
        // Get Posts
        await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_API}media/${propsData.featuredImage && propsData.featuredImage
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
            <Meta
                avatar={

                    <Image
                        width={50}
                        src={
                            FeaturedImage ? FeaturedImage &&
                            FeaturedImage.guid &&
                            FeaturedImage.guid.rendered : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Spring_Flower_in_IBA_Sukkur.jpg"

                        }
                    />


                }
                title={propsData && propsData.title}
                description={propsData && propsData.date}
            />

        </>
    )
}

export default GroupMeta
// import React from 'react'
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Spin } from "antd";

// regex for removing the html tags
const regex = /(<([^>]+)>)/gi;

const GlobalSliderMeta = ({propsData}) => {
    const [featuredImage, setFeaturedImage] = useState();
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
            <div class="flip_card">
                <div class="flip_content">
                    <div class="flip_front"
                        style={{
                            backgroundImage: `linear-gradient(0deg, ${propsData.rgba1}, ${propsData.rgba2}),url(${ featuredImage ? featuredImage &&
                                featuredImage.guid &&
                                featuredImage.guid.rendered : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Spring_Flower_in_IBA_Sukkur.jpg"})`,
                        }}
                    >
                        
                           
                                <h2 className="white">{propsData.title.replace(regex, "")}</h2>
                            
                        
                    </div>
                    <div class="flip_back"
                        style={{
                            background: propsData.backgroundColor,
                            color: propsData.color,
                        }}
                    >

                           
                                <p className="white">{propsData.title.replace(regex, "").replace(regex, "")}</p>
                               
                        

                    </div>
                </div>
            </div>
        </>
    )
}

export default GlobalSliderMeta
import React from "react";

import videoImg from '../assets/images/video.jpg'
import "../styles/blog.css"
import pass from "../assets/images/pass.jpg"
import hotel from "../assets/images/hotel.jpg"
import traveller from "../assets/images/traveller.jpg"
import paral from "../assets/images/paral.jpeg"
import bhaktapur from "../assets/images/bhaktapur.jpeg"




const blogData =[
    {
        imgUrl: videoImg,
        title: "MACHHAPUCHRE",
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        linkUrl: '#'
    },
    {
        imgUrl: pass,
        title: "BOUDHA",
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        linkUrl: '#'
    },
    {
        imgUrl: hotel,
        title: "Explore",
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        linkUrl: '#'
    },
    {
        imgUrl: traveller,
        title: "BHAKTAPUR",
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        linkUrl: '#'
    }
    ,
    {
        imgUrl: paral,
        title: "EAST NEPAL",
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        linkUrl: '#'
    },
    {
        imgUrl: bhaktapur,
        title: "AMAZING EVENING",
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        linkUrl: '#'
    }

    
    
]

const Blog = () => {
    return (
        <section>
            <div className="container">
                <div className="blog__top-content">
                    <h2>
                        Let's have a look from our 
                        <span> recent blog</span>
                    </h2>
                </div>

                <div className="blog__wrapper">
                    {blogData.map((item, index) => (
                        <div className="blog__item" key={index}>
                            <h3>{item.title}</h3>
                            <div className="blog__img">
                                <img src={item.imgUrl} alt=""/>
                            </div>
                            <p className="description blog__desc">
                                {item.desc}
                                <div>
                                    <a href={item.linkUrl} className="learn__more"> Learn More</a>
                                </div>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog
 
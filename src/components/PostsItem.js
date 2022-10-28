import React from "react";
import Posts from "./Posts";
import {Link} from "react-router-dom";

const PostsItem = ({posts}) => {
    return (
    <div className="ui card">
        <div className="content">
            <div className="centered aligned header">{posts.location}</div>
            <div className="centered aligned description"></div>
            <p>{posts.description}</p>
            <div className="extra content">
                <div className="center aligned header">
                    <Link to="">View Location</Link>
                </div>
            </div>
        </div>
        

    </div>
    )
};

export default PostsItem; 
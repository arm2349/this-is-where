import React, { useState } from "react";
import PropTypes from "prop-types";

function FullPostComponent(post) {
    const [like, setLike] = useState();

    const fullDate = new Date(post.date);
    const dateString = fullDate.toDateString();
    const subtitle = `Posted on ${dateString} by `;

    return (
        <div className="container">
            <div className="row d-flex justify-content-center" id="post">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="card" id="postID">
                        <div className="card-body">
                         <h4 className="card-title">{post.location}</h4>
                         <div className="row justify-content-start">
                            <div className="col-md-2">
                                <span className="badge bg-secondary">{post.city}</span>
                            </div>
                            <div className="col-md-2">
                                <span className="badge bg-secondary">{post.type}</span>
                            </div>
                         </div>
                         <br />
                         <div className="row">
                            <div className="col-md-12">
                                <p>{post.body}</p>
                            </div>
                         </div>
                         <br />
                         <div className="row">
                            <div className="col-md-12">
                                <h5 id="post-subtitle">{subtitle}<strong>{post.username}</strong></h5>
                            </div>
                         </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

FullPostComponent.propTypes = {
    post: PropTypes.object.isRequired
}

export default FullPostComponent;
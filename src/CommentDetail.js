import React from 'react';
import faker from 'faker';

const ComentDetail = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
                < a href="/" className="author">
                    Sam
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00PM</span>
                </div>
                <div className="text">
                    nice blog post
                </div>
            </div>
        </div>
    );
}

export default ComentDetail;
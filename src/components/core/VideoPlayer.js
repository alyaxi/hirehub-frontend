import React from 'react';

function VideoPlayer({ src, className }) {
    return (
        <div className={className}>
            <video width="336" controls>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoPlayer;

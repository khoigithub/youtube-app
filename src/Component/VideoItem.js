import React from "react";
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">                  
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;

// onClick={() => onVideoSelect(video)} we call this because if we put onClick={this.onVideoSelect} the it 
// wont call with the video which go with it.
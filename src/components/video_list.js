import React, {Component} from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideListItemClick}) => {
    
    if (!videos){
        return <div>Loading</div>
    }
    const videoItems = videos.map((video) =>{
        return( 
        <VideoListItem
         onVideListItemClick = {onVideListItemClick}
         key={video.etag}
         video={video}
         />)
    })

    return (
            <ul className="col-md-4">
                {videoItems}
            </ul>
        );
}

export default VideoList;
import _ from 'lodash'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCU7f_KmFH-Jeq4BpV7xuHrypTldPXetlg';


class App extends Component{
    constructor(props){
        super(props);

        this.state = { 
            videos: [] ,
            selectedVideo: null
        };

        this.videoSearch('lerdi');
    }

    videoSearch(term) {
        YoutubeSearch({key: API_KEY , term: term}, (videos) => {
            this.setState ({
                videos: videos,
                selectedVideo: videos[0]
            });    
        });
    }

    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

        return (
            <div>
                <SearchBar onSearchTermChange = {videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideListItemClick={selectedVideo => this.setState({selectedVideo})} 
                    videos = {this.state.videos}/>       
            </div> 
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));
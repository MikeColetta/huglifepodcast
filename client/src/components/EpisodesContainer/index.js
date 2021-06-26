import React, { useState, useEffect } from "react";
import './style.css';
import Episode from '../Episode';
import EpisodePagination from '../EpisodePagination';

let Parser = require('rss-parser');
let parser = new Parser();

function EpisodesContainer() {     
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [episodesPerPage] = useState(5);


    //Get episodes from RSS feed
    async function getEpisodes() {
        setLoading(true);
        const feed = await parser.parseURL('https://huglifepodcast.libsyn.com/rss');
        setEpisodes(feed.items.slice(0,20));
        setLoading(false);
    }

    //Get current episodes
    const indexOfLastEpisode = currentPage * episodesPerPage;
    const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
    const currentEpisodes = episodes.slice(indexOfFirstEpisode, indexOfLastEpisode)

    useEffect(() => {
        getEpisodes()
    }, [])
    
    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container card episodeContainer">
                    <h5 className="bookHeading mt-1">Recent Episodes</h5>
                    <Episode 
                    loading={loading}
                    currentEpisodes={currentEpisodes}
                    />
                    <EpisodePagination className="paginationStyle"
                        episodesPerPage={episodesPerPage}
                        totalEpisodes={episodes.length}
                        paginate={paginate}
                    />
                </div>
    )
}


export default EpisodesContainer;
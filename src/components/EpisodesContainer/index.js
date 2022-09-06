import React, { useState, useEffect } from "react";
import './style.css';
import Episode from '../Episode';
import EpisodePagination from '../EpisodePagination';
import { Container, Card } from 'react-bootstrap'

function EpisodesContainer() {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [episodesPerPage] = useState(5);

    const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.libsyn.com%2F100667%2Frss&api_key=${process.env.REACT_APP_RSS_2_JSON_KEY}`;
    async function getEpisodes() {
        fetch(RSS_URL)
            .then(response => response.json())
            .then(data => {
                setEpisodes(data.items)
            });
    }

    //Get current episodes
    const indexOfLastEpisode = currentPage * episodesPerPage;
    const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
    const currentEpisodes = episodes.slice(indexOfFirstEpisode, indexOfLastEpisode)

    useEffect(() => {
        let isMounted = true;
        getEpisodes().then(() => {
            if (isMounted) {
                setLoading(false);
            }
            return () => { isMounted = false }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container className="episodeContainer">
            <h3 className="recentHeading mt-1">Recent Episodes</h3>

            <Card className="episodeCard">
                <Episode
                    loading={loading}
                    currentEpisodes={currentEpisodes}
                />
                <EpisodePagination className="paginationStyle"
                    episodesPerPage={episodesPerPage}
                    totalEpisodes={episodes.length}
                    paginate={paginate}
                />
            </Card>
        </Container>
    )
}


export default EpisodesContainer;
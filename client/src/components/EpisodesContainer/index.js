import React, { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import './style.css';

let Parser = require('rss-parser');
let parser = new Parser();

function EpisodesContainer() {     
    const [episodes, setEpisodes] = useState([]);
    
    async function getEpisodes() {
        const feed = await parser.parseURL('https://huglifepodcast.libsyn.com/rss');
        setEpisodes(feed.items)
        console.log(feed.items)
    }

    useEffect(() => {
        getEpisodes()
    }, [])

    return (
        <div className="container card episodeContainer">
                    <h5 className="bookHeading mt-1">Recent Episodes</h5>

                    {episodes.slice(0,9).map((result, index) => (
                        <div className="card mt-2 mb-2" key={index}>
                            <div className="row">
                                {/* <div className="col-md-2 imageStyle">
                                    <img alt={result.title} className="img-fluid customImage" src={result.itunes.image} />
                                </div> */}
                                <div className="col-12">
                                    <div className="card-body">
                                        <Row>
                                            <h5 className="card-title">{result.title}</h5>
                                            </Row>
                                        <Row>
                                            <p>{result.isoDate}</p>
                                        </Row>
                                        <div>
                                            <audio controls="controls"> 
                                                <source src={result.enclosure.url}/>
                                            </audio> 
                                        </div>
                                        <div className="row">
                                            <p className="card-text">{result.contentSnippet}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
    )
}


export default EpisodesContainer;
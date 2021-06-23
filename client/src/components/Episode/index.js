import React from 'react';
import { Row } from 'react-bootstrap';

const Episode = ({ currentEpisodes, loading }) => {
    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {currentEpisodes.map((result, index) => (
                <div className="card mt-2 mb-2" key={index}>
                    <Row>
                        <div className="card-body">
                            <Row>
                                <h5 className="card-title">{result.title}</h5>
                            </Row>
                            <Row>
                                <p>{result.isoDate}</p>
                            </Row>
                            <div>
                                <audio controls="controls">
                                    <source src={result.enclosure.url} />
                                </audio>
                            </div>
                            <Row>
                                <p className="card-text">{result.contentSnippet}</p>
                            </Row>
                        </div>
                    </Row>
                </div>
            ))
            }
        </div>
    )
}

export default Episode;
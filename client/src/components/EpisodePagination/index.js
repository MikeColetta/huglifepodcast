import React from 'react';
import Pagination from 'react-bootstrap/Pagination'


const EpisodePagination = ({ episodesPerPage, totalEpisodes, paginate }) => {
    const pageNumbers = [];


         for (let i = 1; i <= Math.ceil(totalEpisodes / episodesPerPage); i++) {
            pageNumbers.push(i);
        }


    return (
        <Pagination>
            {pageNumbers.map(number => (
                    <Pagination.Item>
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </Pagination.Item>
                ))}
        </Pagination>

    )
}

export default EpisodePagination;
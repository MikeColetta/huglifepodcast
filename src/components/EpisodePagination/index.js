import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './style.css';


const EpisodePagination = ({ episodesPerPage, totalEpisodes, paginate }) => {
    const pageNumbers = [];
    
         for (let i = 1; i <= Math.ceil(totalEpisodes / episodesPerPage); i++) {
            pageNumbers.push(i);
        }


    return (
        <Pagination className="paginationStyle">
            {pageNumbers.map(number => (
                    <Pagination.Item onClick={() => paginate(number)} key={number}> 
                            {number}
                    </Pagination.Item>
                ))}
        </Pagination>

    )
}

export default EpisodePagination;
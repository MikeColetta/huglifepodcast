import axios from 'axios';

export default {
    //Grabs a book from the Google API
    getAllEpisodes: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },

    //Grabs a searched episode from Libsyn
    getGooglebooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },

}
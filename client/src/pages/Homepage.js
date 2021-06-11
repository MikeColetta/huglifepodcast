import React from 'react';
import Jumbotron from '../components/Jumbotron';
import SidebarAd from '../components/SidebarAd';
import EpisodesContainer from '../components/EpisodesContainer';
import API from '../utils/API';
import './style.css';
import Row from 'react-bootstrap/Row';

class Homepage extends React.Component {

    // state = {
    //     value: "",
    //     books: [],
    //     savedBooks: [],
    // }

    // componentDidMount() {

    // }

    // getSavedBooks() {
    //     API.getBooks()
    //         .then(res => {
    //             this.setState({ savedBooks: res.data })
    //         })
    //         .catch(err => console.error(err));
    // };

    // createBook = bookData => {
    //     return {
    //         _id: bookData.id,
    //         authors: bookData.volumeInfo.authors.join(", "),
    //         description: bookData.volumeInfo.description,
    //         image: bookData.volumeInfo.imageLinks === undefined ? "https://i.ibb.co/c1DZG9d/unnamed.jpg" : bookData.volumeInfo.imageLinks.thumbnail,
    //         link: bookData.volumeInfo.previewLink,
    //         title: bookData.volumeInfo.title,

    //     }
    // }

    // saveBook = event => {
    //     let index = event.target.getAttribute("data-index");
    //     let currentBook = this.state.books[index]
    //     API.saveBook(currentBook)
    //         .then(() => this.componentDidMount())
    //         .catch(err => console.error(err));
    // };

    // searchBook = query => {
    //     API.getGooglebooks(query)
    //         .then(
    //             res => this.setState({ books: res.data.items.map(bookData => this.createBook(bookData)) }))
    //         .catch(err => console.error(err));
    // };

    // handleInputChange = event => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchBook(this.state.search)
    // }

    render() {
        return (
            <div>
                <Jumbotron />
                <Row>
                    <div className="col-6">
                        <EpisodesContainer />
                    </div>

                    <div className="col-6">
                        <SidebarAd />
                    </div>
                </Row>
            </div>
        )
    }
}

export default Homepage;
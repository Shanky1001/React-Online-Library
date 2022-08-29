import React from 'react';
import './Styles/SearchPage.css'


const SearchCard = ({ val }) => {
    return (
        <div className="cardContainer">
            <div className="coverImage">
                <img src={`https://covers.openlibrary.org/b/olid/${val.cover_edition_key}-M.jpg`} alt={val.title}  />
            </div>
            <div className="bookDetails">
                <h2>{val.title}</h2>
                <li>by {" " + val.author_name} </li>
                <li><span>First published in {val.first_publish_year}</span> </li>
                <li><span> {val.edition_count} editions in {val.language === undefined ? 0 : val.language.length} languages  - {val.ebook_count_i} previewable</span> </li>
            </div>
            <div className="actions">
                <button>Borrow</button>
                <button>Want to Read</button>
            </div>
        </div>
    )
}

export default SearchCard;

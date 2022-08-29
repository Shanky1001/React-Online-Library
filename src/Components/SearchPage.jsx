import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SearchCard from './SearchCard';
import './Styles/SearchPage.css'

var error = "";
const SearchPage = ({ text, setText }) => {
  var [result, setResult] = useState([]);

  useEffect(() => {
    if (text === "") {
      setResult([])
    } else {
      axios.get(`https://openlibrary.org/search.json?q=${text}&mode=ebooks&has_fulltext=true&limit=10`)
        .then(resp => {
          setResult(resp.data)
        })
        .catch((e) => {
          error = e.code;
        })
    }
  }, [text])


  return (
    <div id="searchContainer">
      <div id="searchPageContainer">
        <Link to={'/'} className="link"><h1>Digital Library</h1></Link>
        <input type="text" value={text} placeholder="Search here" autoFocus onChange={(e) => setText(e.target.value)} />
      </div>

      {result.length === 0 ? <h1>{error} </h1> :
        <div id="searchListContainer">
          <h1>Search Result</h1>
          <div id='filters'>
            <span>{result.numFound} results</span><span>Relevance</span><span>Most Editions</span><span>First Published</span><span>Most Recent</span><span>Random</span>
          </div>
          <div id="searchCardContainer">
            {result.docs.map((val, index) => {
              return (
                <SearchCard val={val} key={index} />
              )
            })
            }
          </div>
        </div>
      }

    </div>
  )
}

export default SearchPage
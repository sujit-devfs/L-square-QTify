import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import Card from './Components/Card';
import HeroSection from './Components/HeroSection';
import NavBar from './Components/NavBar';
import Section from './Components/Section';
import FilterSection from './Components/FilterSection';
import AccordionFaq from './Components/AccordionFaq';


const ENDPOINT = "https://qtify-backend-labs.crio.do/";

function App() {

const [topAlbums, setTopAlbums] = useState([]);
const [newAlbums, setNewAlbums] = useState([]);
const [songs, setSongs] = useState([]);
const [filteredSongs, setFilteredSongs] = useState([]);
const [genres, setGenres] = useState([]);
const [faq, setFaq] = useState([]);

useEffect(() => {
  axios.get(`${ENDPOINT}albums/top`)
  .then(res => {
    setTopAlbums(res.data);
})
axios.get(`${ENDPOINT}albums/new`)
  .then(({data}) => {
    setNewAlbums(data);
})
axios.get(`${ENDPOINT}songs`)
  .then(({data}) => {
    setSongs(data);
    setFilteredSongs(data);
})
axios.get(`${ENDPOINT}genres`)
  .then(({data}) => {
    setGenres([{"key":"all","label":"all"},...data.data]);
})
axios.get(`${ENDPOINT}faq`)
  .then(({data}) => {
    setFaq(data.data);
})
}, [])
  return (
    <>
    <NavBar />
    <HeroSection />
    <Section navId="ta" title="Top Albums" data={topAlbums}/>
    <Section navId="na" title="New Albums" data={newAlbums}/>
    <FilterSection navId="filter" title="Songs" data={filteredSongs} filters={genres}
    executeFilter={(genre) => {
      if(genre === 'all'){
        setFilteredSongs(songs);
      }else{
        setFilteredSongs(songs.filter(song => song.genre.key=== genre));
      }
    }}
    />
    <AccordionFaq title="FAQs" data={faq}/>
    </> 
  );
}

export default App;

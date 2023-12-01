import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import Card from './Components/Card';
import HeroSection from './Components/HeroSection';
import NavBar from './Components/NavBar';
import Section from './Components/Section';


const ENDPOINT = "https://qtify-backend-labs.crio.do/";

function App() {

const [topAlbums, setTopAlbums] = useState([]);
const [newAlbums, setNewAlbums] = useState([]);

useEffect(() => {
  axios.get(`${ENDPOINT}albums/top`)
  .then(res => {
    setTopAlbums(res.data);
})
axios.get(`${ENDPOINT}albums/new`)
  .then(({data}) => {
    setNewAlbums(data);
})
}, [])
  return (
    <>
    <NavBar />
    <HeroSection />
    <Section title="Top Albums" data={topAlbums}/>
    <Section title="New Albums" data={newAlbums}/>
    </> 
  );
}

export default App;

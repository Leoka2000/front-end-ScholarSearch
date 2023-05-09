import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Axios from 'axios';
import { BeatLoader } from 'react-spinners';
import './single.css';
import { AiOutlineHome } from 'react-icons/ai';
import { FaInternetExplorer } from 'react-icons/fa';

const IndividualPages = () => {
  const [keyValue, setKeyValue] = useState(null);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [funding, setFunding] = useState('');
  const [level, setLevel] = useState('');
  const [style, setStyle] = useState('');
  const [description, setDescription] = useState('');
  const [scholarships, setScholarships] = useState([]);
  const [link, setLink] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();

  useEffect(() => {
    setKeyValue(state.data['submit-button']);
    setLoading(true);
    setTimeout(() => {
      Axios.get('http://localhost:8000/api/scholarships/').then((response) => {
        setScholarships(response.data);
        setCountry(response.data[keyValue].country);
        setName(response.data[keyValue].name);
        setFunding(response.data[keyValue].funding);
        setLevel(response.data[keyValue].level);
        setStyle(response.data[keyValue].style);
        setDescription(response.data[keyValue].description);
        setLink(response.data[keyValue].link);
        setImage(response.data[keyValue].image);
        setLoading(false);
      });
    }, 1000);
  }, [keyValue]);

  if (loading) {
    return (
      <div className='beat-loader-wrapper'>
        <BeatLoader size={15} color={'purple'} loading={loading} />
      </div>
    );
  }

  return (
    <section className='single-page-section'>
      <header className='header-page-row'>
        <div className='header-page-thumbnail'>
          <img alt='scholarship-image' src={`${image}`} />
        </div>
        <div className='header-page-text-wrapper'>
          <h1>{name}</h1>
          <h2>{description}</h2>
          <p>{country}</p>
        </div>
      </header>
      <main className='single-main'>
        <div className='single-row'>
          <h1>Level of education to be studied during period abroad.</h1>
          <p>{level}</p>
        </div>
        <div className='single-row'>
          <h1>Style of scholarship - short vs long term programs:</h1>
          <p>{style}</p>
        </div>
        <div className='single-row'>
          <h1>Funding quantity:</h1>
          <p>{funding}</p>
        </div>

        <div className='single-btn-wrapper'>
          <a style={{ textDecoration: 'none' }} target='_blank' href={`${link}`}>
            <FaInternetExplorer/>
            <p> See webpage</p>
          </a>
          <Link style={{ textDecoration: 'none' }} to='/'>
            <AiOutlineHome />
            <p>Home</p>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default IndividualPages;
import { useState, useEffect, Suspense } from 'react'
import './home.css'
import CountryFilter from '../../../hooks/filter/countryFilter'
import Content from '../../content/content'
import Axios from 'axios'
import FundingFilter from '../../../hooks/filter/fundingFilter'
import StudyLevelFilter from '../../../hooks/filter/studyLevelFilter'
import { BeatLoader } from 'react-spinners'
import logo from '../../../assets/logo.png'

const Home = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [scholarships, setScholarships] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedFunding, setSelectedFunding] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [filteredScholarships, setFilteredScholarships] = useState([]);



    useEffect(() => {
        getList();
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value); // We will access the value provided by the input, we will assign this function to the INPUT BOX
    };

    const filteredList = scholarships.filter(scholarships =>
        scholarships.name.toLowerCase().includes(search.toLowerCase())
    );

    const getList = () => {
        setLoading(true);
        setTimeout(() => {
            Axios.get('http://localhost:8000/api/scholarships')
                .then((response) => {
                    setScholarships(response.data);
                    setLoading(false);
                    setFilteredScholarships(response.data)
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                });
        }, 1000);
    };



    return (
        <section className='home-section'>
            <div className='search-bar-wrapper'>
                <div>
                    <img src={logo} />
                    <h1></h1>
                </div>
                <input
                    type='text'
                    onChange={handleChange}
                    placeholder='Type here to search'>

                </input>
            </div>
            <main className='home-main'>
                <div className='left'>
                    <CountryFilter onCountrySelect={setSelectedCountry} />
                    <FundingFilter onFundingSelect={setSelectedFunding} />
                    <StudyLevelFilter onLevelSelect={setSelectedLevel} />
                </div>
                <div className='right'>

                    <Suspense fallback={<BeatLoader />}>
                        {loading ? (
                            <BeatLoader className='loader' size={25} color='purple' />
                        ) : (<div className='conditional-div'>
                            {filteredList
                                .filter(scholarship => !selectedCountry || scholarship.country === selectedCountry)
                                .filter(scholarship => !selectedFunding || scholarship.funding === selectedFunding)
                                .filter(scholarship => !selectedLevel || scholarship.level === selectedLevel)
                                .map((val, key) => {
                                    return (
                                        <Content
                                            keyNumber={key}
                                            image={val.image}
                                            name={val.name}
                                            country={val.country}
                                        />
                                    );
                                })}
                        </div>)}</Suspense>
                </div>
            </main>
        </section>
    )
}

export default Home
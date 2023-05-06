import { useState } from 'react'

import Axios from 'axios'


function Home() {
  const [id, setId] = useState(0)
 const [name, setName] = useState('')
 const [country, setCountry] = useState('')
 const [level, setLevel] = useState('')
 const [description, setDescription] = useState('')
 const [link, setLink] = useState('')
 const [image, setImage] = useState('')
 const [list, setList] = useState([])
 const [loading, setLoading] = useState(false)

 const getList = () => {
  setLoading(true);
  setTimeout(() => {
    Axios.get('http://localhost:8000/api/scholarships')
      .then((response) => {
        setList(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, 1000);
};
console.log(list)
  return (
    <div className="App">
      <button onClick={getList}>GETLIST</button>
     

      {list.map((val, key) => {

return (
  <div className="list-parent">

    <ul key={key}>
      <li>{val.id}</li>
      <li>{val.name}</li>
      <li>{val.country}</li>
      <li>{val.level}</li>
      <li>{val.description}</li>
      <li>{val.link}</li>
      <li>{val.image}</li>
      <img src={val.image}/>
      {console.log(val.image)}

    </ul>
  </div>
);
})}



    </div>
  )
}

export default Home

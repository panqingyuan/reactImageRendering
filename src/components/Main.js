import { useEffect, useState } from 'react'

function Main() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [time, setTime] = useState(0);

  useEffect(() => {
    fetchImages(3);
  }, []);

  async function fetchImages(sec) {
    setLoading(true);
    try {
      const startTime = new Date();
      const response = await fetch('https://reqres.in/api/users?delay='+sec);
      const endTime = new Date();
      //console.log(endTime - startTime);
      setTime(endTime - startTime);
      const data = await response.json();
      setImages(data.data);
      if (endTime - startTime > 3000) {
        alert('loading time is longer than 3 seconds')
      }
    } catch (err) {
      console.error(err);
      alert(err);
    } finally {
      setLoading(false);
    }
  }

  const delayedFetch = () => {
    fetchImages(5);
  }

  const handleSearch = (event) => {
    //console.log(event.target.value)
    setKeyword(event.target.value);
  }

  const filteredImages = images.filter((image) => {
    const name = image.first_name+' '+image.last_name;
    return image.email.includes(keyword) || image.first_name.includes(keyword) || image.last_name.includes(keyword) || name.includes(keyword);
  })


  return (
    <div>
      <h1>Rendering Images Component</h1>
      <p>
        Made by Qingyuan Pan, 4/26/2023
      </p>
      {
        loading ?
        <div>
          <h2>loading...</h2>
        </div>
        :
        <div>
          <h2>Images</h2>
          <p>data loaded for {time / 1000} seconds</p>
          <input type="text" placeholder='enter name or email' value={keyword} onChange={handleSearch} /><br/>
          <button type='button' onClick={delayedFetch}>Delay 5 seconds</button>
          <div>
            {filteredImages.map((image) => (
              <div key={image.id}>
                <img src={image.avatar} alt="avatar" />
                <p>{'Name: ' + image.first_name+' '+image.last_name + ', Email: '+image.email}</p>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  )
}

export default Main
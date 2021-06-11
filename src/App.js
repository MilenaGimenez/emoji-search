import {useState} from 'react';
import {useEffect} from 'react';
import React from 'react';
import Navbar from './components/Navbar';
// import InputText from './components/InputText';
import BoxEmoji from './components/BoxEmoji';
import styled from 'styled-components';


function App() {
  useEffect(() => {
    consultarApi(emoji)
  }, []);

  const [emoji, setEmoji] = useState([]);

  const consultarApi = async arr => {
    const url = `https://emoji-api.com/emojis?search=${arr}&access_key=257614b3203fcfe4d98623094339d413da537965`;
    const api = await fetch(url)
    const emoji = await api.json()
    
    setEmoji(emoji)
    // console.log(api)
  } 
  


  const InputText = ({emoji}) => {
    const handleKeyup = event => {
      if(event.key == 'Enter')
      {
        console.log(event.target.value)
        let prueba = event.target.value
        emoji={prueba}
        consultarApi(prueba)
      } else {}
    }
  
      return(
          <InputStyle>
              <input type="text" placeholder="Press Enter to search"
              onKeyPress={handleKeyup}
              />
          </InputStyle>
      );
  };
  
  const InputStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    flex-direction: column;
    background-color: #ffffff;
    margin: 1rem 0;
  
    input{
      background-color: #ecebeb;
      height: 2.5rem;
      width: 80%;
      border-radius: 10px;
      border-style: none;
      font-family: 'Segoe Ui';
      font-size: 1rem;
      padding: 0 0.5rem;
    }
    input:focus{
      background-color: #d6d6d6;
      outline-style: none;
    }
  `;

  
  return (
    <div>
      <Navbar>
        <h1>Emoji Search 🚀</h1>
      </Navbar>
      <InputText />   
      {emoji.map(meme => 
      <BoxEmoji 
        emoji={meme.character} 
        name={meme.unicodeName} 
        key={Math.random() * 10000}
        
      />)}
    </div>
  );
};

export default App;
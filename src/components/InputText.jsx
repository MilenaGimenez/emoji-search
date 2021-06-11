/* import styled from 'styled-components';

const InputText = ({emoji}) => {
  const handleKeyup = event => {
    console.log(event.target.value)
    let prueba = event.target.value
    emoji={prueba}
    consultarApi(prueba)
  }

    return(
        <InputStyle>
            <input type="text" placeholder="Write your emoji here"
            onKeyUp={handleKeyup}
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


export default InputText; */
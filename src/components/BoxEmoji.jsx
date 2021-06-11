import styled from 'styled-components';
import Emoji from './Emoji'
import NameEmoji from './NameEmoji'
import ClipboardJS from "clipboard";


const prueba = () => {
    var div = document.querySelectorAll('div');
    var clipboard = new ClipboardJS(div);

    clipboard.on('success', function (e) {
        alert('copiado n')
      console.log(e);
    });

    clipboard.on('error', function (e) {
      console.log(e);
    });
}

prueba()

const BoxEmoji = ({emoji, name, id}) => {
    /* let emojiSelect = ''
    const handleClick = event => {
        console.log(event.id)
        console.log(event.target.id)
        console.log(event.target.value)
        console.log(id)
        console.log(emoji)
        console.log(name)
        emojiSelect = emoji
    } */
    
    return(
        <BoxStyle>            
            <Emoji emoji={emoji}/>
            <NameEmoji emoji={emoji} name={name}/>            
        </BoxStyle>
    );
};

const BoxStyle = styled.div `
    border-top: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    width: 100%;
`;
export default BoxEmoji;
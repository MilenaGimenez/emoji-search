import styled from 'styled-components';

const Emoji = ({emoji}) => {
    return(
        <EmojiStyle>
            <div data-clipboard-text={emoji}>{emoji}</div>
        </EmojiStyle>
    );
};

const EmojiStyle = styled.div `
    padding: 0.5rem;
    font-size: 1.5rem;
`;

export default Emoji;
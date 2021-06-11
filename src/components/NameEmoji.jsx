import styled from 'styled-components';

const Emoji = ({name, emoji}) => {
    return(
        <NameStyle>
            <div data-clipboard-text={emoji}>{name}</div>
        </NameStyle>
    );
};

const NameStyle = styled.div `
    padding: 0.5rem;
    font-size: 1.5rem;
`;

export default Emoji;
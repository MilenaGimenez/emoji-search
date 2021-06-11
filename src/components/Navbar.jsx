import styled from 'styled-components';

const Navbar = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  flex-direction: column;
  background-image: linear-gradient(to right, #3a00c2 0%, #aa0e83 50%, #e0c213 93%, #0848a7 100%);
  background-size: 400%;
  animation: fondo-anim 10s infinite alternate;

  @keyframes fondo-anim{
  0%{background-position: left;}
  100%{background-position: right;}
}

`;

export default Navbar;
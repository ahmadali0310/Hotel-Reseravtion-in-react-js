import styled from "styled-components";
const StyedHero = styled.div`
  width: 100%;
  min-height: 60vh;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyedHero;

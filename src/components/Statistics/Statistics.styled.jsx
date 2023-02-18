import styled from 'styled-components';

export const Section = styled.section`
  margin: 50px auto;
  max-width: 500px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

`;
export const Title = styled.h2`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  background-color: rgba(186, 181, 200, 0.878);
  margin: 0;
  padding: 20px 0;
`;
export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;
export const Item = styled.li`
  list-style: none;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.span`
  text-align: center;
  font-size: 12px;
  color: white;
`;
export const Percentage = styled.span`
  font-size: 25px;
  text-align: center;
  color: white;
`;

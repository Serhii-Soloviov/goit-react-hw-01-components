import styled from 'styled-components';

export const Item = styled.li`
  padding: 10px;
  display: flex;
  width: 480px;
  align-items: center;

  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;
export const Marker = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => {
    return p.isOnline ? 'green' : 'red';
  }};
  margin: auto 15px;
`;
export const Picture = styled.img`
  display: block;
  padding: 20px 15px;
  width: 80px;
  border: 1px solid rgba(186, 181, 200, 0.878);
  border-radius: 5px;
  margin-right: 15px;
`;
export const Name = styled.p`
  font-size: 25px;
  font-weight: 700;
`;

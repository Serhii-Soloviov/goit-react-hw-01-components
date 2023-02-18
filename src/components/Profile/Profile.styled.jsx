import styled from 'styled-components';
export const Card = styled.div`
  margin: 20px auto 20px auto;
  text-align: center;
  width: 500px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  background-color: rgba(186, 181, 200, 0.878);
`;
export const Avatar = styled.img`
  width: 300px;
  border-radius: 50%;
  background-color: #fff;
`;
export const Name = styled.p`
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 10px;
  padding-top: 20px;
`;
export const Tag = styled.p`
  font-size: 18px;
  padding-bottom: 10px;
  color: rgb(116, 116, 116);
`;
export const Location = styled.p`
  font-size: 21px;
  color: rgb(116, 116, 116);
  padding-bottom: 30px;
`;
export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  background-color: rgba(186, 181, 200, 0.878);
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: rgb(212, 207, 207);
  width: 100%;
`;
export const Label = styled.span`
  font-size: 17px;
  padding-bottom: 8px;
`;
export const Quantity = styled.span`
  font-size: 22px;
  font-weight: 700;
`;

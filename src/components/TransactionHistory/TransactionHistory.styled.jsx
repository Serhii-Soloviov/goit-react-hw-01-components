import styled from 'styled-components';
export const Table = styled.table`
  width: 1000px;
  border: none;
  margin-bottom: 20px;
  margin: 0 auto;
`;
export const TableHeader = styled.th`
  font-weight: bold;
  text-align: center;
  border: none;
  padding: 10px 15px;
  background-color: rgba(186, 181, 200, 0.878);
  font-size: 21px;
  border-top: 1px solid #ddd;
  &:first-child {
    border-left: 1px solid #ddd;
    border-radius: 20px 0 0 0;
  }
  &:last-child {
    border-right: 1px solid #ddd;
    border-radius: 0 20px 0 0;
  }
`;
export const TableData = styled.td`
  text-align: center;
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  vertical-align: top;
  &:first-child {
    border-left: 1px solid #ddd;
  }
  &:last-child {
    border-right: 1px solid #ddd;
  }
`;
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
  &:last-child {
    ${TableData} {
      border-bottom: 1px solid #ddd;
      &:last-child {
        border-radius: 0 0 20px 0;
      }
      &:first-child {
        border-radius: 0 0 0 20px;
      }
    }
  }
`;

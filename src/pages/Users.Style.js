import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1800px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableWrapper = styled.div`
  width: 100%;
  border: 1px solid #eeeeee;
`;

export const TableHeader = styled.div`
  display: flex;
  width: 100%;
  background: #333;
  padding: 18px 0;
`;

export const TableHeaderItem = styled.div`
  flex: 1 1 20%;
  text-align: center;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  position: relative;
  display: inline-block;
`;

export const TableRow = styled.div`
  display: flex;
  width: 100%;
  padding: 18px 0;

  &:nth-of-type(odd) {
    background: rgb(248 250 252);
  }
`;

export const TableData = styled.div`
  flex: 1 1 20%;
  text-align: center;
`;

export const TableAction = styled.div`
  cursor: pointer;
  display: inline-block;
  margin: 0 5px;
  min-width: 24px;
`;

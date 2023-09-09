import styled from "@emotion/styled";

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(248 250 252);
  height: 75px;
`;

export const Item = styled.li`
  float: left;
`;

export const Home = styled.a`
  display: block;
  margin-left: 50px;
  margin-top: 10px;
  font-size: 30px;
  color: rgb(31 41 55);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
`;

export const Add = styled.a`
  float: right;
  margin-right: 60px;
  margin-top: 15px;
  display: block;
  font-size: 18px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
  background-color: rgb(220 38 38);
`;

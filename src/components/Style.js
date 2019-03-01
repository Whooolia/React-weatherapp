import styled from "styled-components";

const Input = styled.input`
  border: none;
  width: 250px;
  height: 40px;
  text-align: center;
  font-size: 1.3rem;
  outline: none;
  margin-top: 15px;
  border-radius: 5px;
  float: right;
  margin-right: 170px;
`;

const Button = styled.button`
  color: black;
  background-color: #ff8008;
  border-radius: 10px;
  border: none;
  width: 80px;
  height: 40px;
  font-size: 1rem;
  bottom: 10px;
  float: right;
  margin-right: 10px;
  margin-top: 15px;
`;

const DefaultDiv = styled.div`
  text-align: center;
  height: 80px;
  background-color: #ffe47a;
`;

const CenterDiv = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
`;

const Title = styled.h1`
  float: left;
  font-size: 1.5rem;
  margin-left: 30px;
`;

export { Input, Button, DefaultDiv, Image, Title, CenterDiv };

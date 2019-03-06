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
  color: white;
  background-color: #ff8008;
  border-radius: 5px;
  border: none;
  width: 80px;
  height: 40px;
  font-size: 1rem;
  bottom: 10px;
  float: right;
  margin-right: -350px;
  margin-top: 15px;
`;

const SaveButton = styled.button`
  border: none;
  background-color: white;
  font-size: 2rem;
  color: #ff8008;
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

const P = styled.p`
  font-size: 1.5rem;
`;

const LeftDiv = styled.div`
  float: left;
  margin-left: 25rem;
`;

const RightDiv = styled.div`
  float: right;
  margin-right: 25rem;
`;

export {
  Input,
  Button,
  DefaultDiv,
  Image,
  Title,
  CenterDiv,
  P,
  LeftDiv,
  RightDiv,
  SaveButton
};

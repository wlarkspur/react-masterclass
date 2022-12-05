import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
<<<<<<< HEAD

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
=======
const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;
const Text = styled.h1`
  color: white;
>>>>>>> a412470563317a79c1c943ddb6e4b5d127d85ca6
`;

function App() {
  return (
<<<<<<< HEAD
    <Father as="header">
      <Input />
      <Input />
      <Input />
=======
    <Father>
      <BoxOne>
        <Text>Hello</Text>
      </BoxOne>
      <BoxTwo />
>>>>>>> a412470563317a79c1c943ddb6e4b5d127d85ca6
    </Father>
  );
}

export default App;

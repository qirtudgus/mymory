import { useState } from 'react';
import styled from 'styled-components';
import Box from './Box';

const BoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const S_Box = styled.div`
  width: 150px;
  height: 150px;
  background-color: #8b8b8b;
  border-radius: 10px;
  margin: 5px 0;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export default function Rendering() {
  const [Arr, setArr] = useState([
    { name: '박스', number: 0 },
    { name: '박스', number: 1 },
    { name: '박스', number: 2 },
    { name: '박스', number: 3 },
    { name: '박스', number: 4 },
    { name: '박스', number: 5 },
    { name: '박스', number: 6 },
    { name: '박스', number: 7 },
  ]);

  return (
    <>
      <button
        onClick={() => {
          setArr((prev) => {
            let newArr = [...prev];
            if (newArr[0].number === 0) {
              newArr[0].number = 100;
            } else {
              newArr[0].number = 0;
            }

            return newArr;
          });
        }}
      >
        상태변경
      </button>
      <div>z</div>
      <BoxWrap>
        {Arr.map((i, index) => (
          <Box number={i.number} />
        ))}
      </BoxWrap>
    </>
  );
}

// const memoBox = React.useMemo(({number}:{number:number})=>{
//   return <Box numbre={number}></Box>
// },[])

// function Box({ number }: { number: number }) {
//   return React.useMemo(() => {
//     return <S_Box>{number}</S_Box>;
//   }, [number]);
// }

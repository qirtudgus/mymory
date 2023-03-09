import Code from '@/components/Code';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Box from '../../components/Box';
import hljs from 'highlight.js';
import { useEffect } from 'react';
const BoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
let boxNumber = 3;
const Rendering = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const [Arr, setArr] = useState([
    { name: '박스', number: 0 },
    { name: '박스', number: 1 },
    { name: '박스', number: 2 },
    { name: '박스', number: 3 },
  ]);

  return (
    <>
      <h1>React.memo 사용하기</h1>
      <p>
        공식문서에 따르면 React.memo는 고차 컴포넌트(Higher Order Component)라고 한다. <br />
        컴포넌트가 동일한 props로 같은 결과를 렌더링해낸다면 React.memo를 호출하여 결과를 메모이징해서 경우에 따라 성능
        향상을 누릴 수 있다! React.memo로 래핑한 컴포넌트가 같은 결과를 렌더링할 경우 마지막 렌더링 결과를
        재사용하게되어 렌더링 비용을 아끼는 것이다.
      </p>

      <p>
        아래 요소는 Box를 감싸는 Wrap요소와, React.memo로 래핑한 Box 컴포넌트가 렌더링되는 과정이다.
        <br />
        React.memo로 래핑전에는 박스 하나하나가 모두 렌더링 되는 반면에 래핑 후에는 최적화된것을 볼 수 있다.
      </p>

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
      <button
        onClick={() => {
          setArr((prev) => {
            boxNumber++;
            let newArr = [...prev].concat({ name: '박스', number: boxNumber });
            return newArr;
          });
        }}
      >
        박스 추가 - concat()
      </button>
      <button
        onClick={() => {
          setArr((prev) => {
            boxNumber++;
            let newArr = [...prev];
            newArr.push({ name: '박스', number: boxNumber });
            return newArr;
          });
        }}
      >
        박스 추가 - push()
      </button>

      <BoxWrap>
        {Arr.map((i, index) => (
          <Box
            key={index}
            number={i.number}
          />
        ))}
      </BoxWrap>
      <Code>
        {`
  //Box.tsx
  function Box({ number }: { number: number }) {
    return <S_Box>{number}</S_Box>;
  }
  export default React.memo(Box);

`}
      </Code>
    </>
  );
};

// export default React.memo(Rendering);
export default Rendering;

import Code from '@/components/Code';
import styled from 'styled-components';
import hljs from 'highlight.js';
import { useEffect, useState } from 'react';
export default function UseState() {
  const [test, setTest] = useState(0);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  // useEffect(() => {
  //   validLogin();
  // }, [isUser]);

  const Test2 = (number: number) => {
    return number === 1 ? console.log('zzzz') : console.log('0');
  };

  return (
    <>
      <button
        onClick={async () => {
          setTest((prev) => {
            return prev;
          });

          // const a = async () => {
          //   setTest(1);
          // };
          // await a().then(() => console.log(test));

          // setTest(() => 1);
          // console.log(test);

          setTest(1);
          Test2(test);
          console.log(test);
        }}
      >
        test적용
      </button>
      <h1>useState에 typeScript를 적용할 때...</h1>
      안녕하세요
      <Code>{`
        const Data:any[] = [];
        const Data:any[] = [];
        useEffect(() => {
            hljs.highlightAll();
          }, []);

      `}</Code>
    </>
  );
}

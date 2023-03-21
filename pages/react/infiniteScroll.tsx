import Code from '@/components/Code';
import hljs from 'highlight.js';
import React, { forwardRef, ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const Box = styled.div`
  width: 90%;
  height: 200px;
  background: #555;
  border-radius: 10px;
  color: #fff;
  font-size: 5rem;
  text-align: center;
  line-height: 200px;
  margin-bottom: 20px;
`;

//props 구조분해를 하지않을 시 (ref와 props의 순서가 반대인것이 특징)
interface Props {
  children?: ReactNode;
}
type Ref = HTMLDivElement;

const Boxs = forwardRef<Ref, Props>((props, ref) => {
  return <Box ref={ref}>{props.children}</Box>;
});

const BoxComponent = React.memo(Boxs);

const InfiniteScroll = () => {
  const [number, setNumber] = useState([0, 1, 2]);
  const { ref, inView, entry } = useInView();
  useEffect(() => {
    // inView 값이 true일 때만 실행합니다.
    if (inView) {
      console.log('inView에 따른 상태값 추가');
      setNumber((prev) => {
        let result = [...prev];
        result.push(prev[prev.length - 1] + 1);
        return result;
      });
    }
  }, [inView]);
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <h1>무한 스크롤</h1>
      <p>무한스크롤을 구현할 때 자주 쓰이는 intersectionObserver 모듈을 통한 방법이다.</p>
      <Code>{`npm i react-intersection-observer`}</Code>
      <Code>
        {`
  const [number, setNumber] = useState([0, 1, 2]);
  const { ref, inView, entry } = useInView();
  
  useEffect(() => {
    // inView 값이 true일 때만 실행합니다.
    if (inView) {
      console.log('inView에 따른 상태값 추가');
      setNumber((prev) => {
        let result = [...prev];
        result.push(prev[prev.length - 1] + 1);
        return result;
      });
    }
  }, [inView]);
        `}
      </Code>

      {number.map((i) => {
        return (
          <BoxComponent
            key={i}
            ref={ref}
          >
            {i}
          </BoxComponent>
        );
      })}
    </>
  );
};

export default React.memo(InfiniteScroll);

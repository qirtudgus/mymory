import Code from '@/components/Code';
import styled from 'styled-components';
import hljs from 'highlight.js';
import { useEffect } from 'react';
export default function UseState() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      <h1>useState에 typeScript를 적용할 때...</h1>
      안녕하세요
      <Code>{`
        const Data:any[] = [];

        const Data:any[] = [];
        const Data:any[] = [];
        const Data:any[] = [];
        const Data:any[] = [];
        const Data:any[] = [];
        const Data:any[] = [];
        useEffect(() => {
            hljs.highlightAll();
          }, []);

      `}</Code>
    </>
  );
}

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
      <div>useState</div>
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

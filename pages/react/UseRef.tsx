import { useRef, useState } from 'react';

const UseRef = () => {
  const [state, setState] = useState('성트');
  const ref = useRef('성트');

  return (
    <>
      <h1>useRef를 사용하는 법</h1>

      <h1>- .current 프로퍼티를 변경하는것이 리렌더링을 발생시키지않는다.</h1>
      <p>
        current를 변경한다고하여 리렌더링되지않는다. 하지만 그 값은 변경되어있으며, 타 요소로 인해 리렌더링 될 시
        정상적으로 갱신된다.
      </p>
      <button
        onClick={() => {
          setState('성트 변경');
        }}
      >
        state 변경
      </button>
      <button
        onClick={() => {
          console.log(ref);
          ref.current = '성트 변경';
        }}
      >
        ref 변경
      </button>
      <div>state : {state}</div>
      <div>useRef : {ref.current}</div>
    </>
  );
};

export default UseRef;

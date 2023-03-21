import Box from '@/components/Box';
import { useEffect } from 'react';

const RequestAnimationFrame = () => {
  useEffect(() => {
    let start = new Date().getTime();
    let callback = function () {
      let ts = new Date().getTime();
      if (ts - 1000 > start) {
        // console.log('End');
      } else {
        console.log(ts);
        requestAnimationFrame(callback);
      }
    };
    requestAnimationFrame(callback);
  }, []);

  return (
    <>
      <h1>requestAnimationFrame</h1>

      <button
        onClick={() => {
          //   let el = document.getElementById('box') as HTMLDivElement;
          //   el.style.width = '500px';
          const cartItemId = [];
          cartItemId.push({ prdId: 1234 });
          console.log(cartItemId);
        }}
      >
        박스 사이즈 변경
      </button>
      <Box
        number={1}
        id='box'
      ></Box>
    </>
  );
};

export default RequestAnimationFrame;

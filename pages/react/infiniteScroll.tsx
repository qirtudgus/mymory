import { useEffect, useState } from 'react';
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

const InfiniteScroll = () => {
  const [number, setNumber] = useState([0, 1, 2, 3]);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {}, [inView]);

  return (
    <>
      {number.map((i) => {
        return <Box ref={ref}>{i}</Box>;
      })}
    </>
  );
};

export default InfiniteScroll;

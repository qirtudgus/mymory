import React from 'react';
import styled from 'styled-components';
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
function Box({ number }: { number: number }) {
  return <S_Box>{number}</S_Box>;
}

export default React.memo(Box);

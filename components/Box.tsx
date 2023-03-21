import React from 'react';
import styled from 'styled-components';
const S_Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: #8f8f8f;
  border-radius: 10px;
  margin: 5px;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
  font-weight: bold;
`;
function Box({ number, id }: { number: number; id: string }) {
  return <S_Box id={id}>{number}</S_Box>;
}

export default React.memo(Box);
// export default Box;

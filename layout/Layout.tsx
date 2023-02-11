import { useRouter } from 'next/router';
import styled from 'styled-components';

const SideBar = styled.div`
  position: fixed;
  width: 250px;
  height: 100dvh;
  background: #fff;
  border-right: 1px solid #000;
  z-index: 10;
`;

const MenuDiv = styled.div`
  cursor: pointer;
  height: 40px;
  padding: 0 15px;
  line-height: 40px;
  &:hover {
    background: #eee;
  }
`;

const Menu = styled.li`
  font-size: 18px;
`;

const Main = styled.main`
  position: relative;
  margin-left: 250px;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
const Container = styled.div`
  display: flex;
`;
export default function Layout({ children }: { children: React.ReactNode }) {
  const MenuArr = [
    { name: 'useState', link: '/useState' },
    { name: 'useEffect', link: '/useEffect' },
  ];

  const router = useRouter();
  const routing = (link: string) => {
    router.push(link);
  };

  return (
    <Container>
      <SideBar>
        {MenuArr.map((i) => (
          <MenuDiv onClick={() => routing(i.link)}>
            <Menu>{i.name}</Menu>
          </MenuDiv>
        ))}
      </SideBar>
      <Main>{children}</Main>
    </Container>
  );
}

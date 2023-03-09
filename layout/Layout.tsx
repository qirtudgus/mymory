import Menu from '@/components/Menu';
import styled from 'styled-components';

const SideBar = styled.div`
  position: fixed;
  width: 250px;
  height: 100dvh;
  background: #fff;
  border-right: 1px solid #000;
  z-index: 10;
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
const ReactMenu = [{ name: 'React.js' }];
const ReactArr = [
  { name: 'useState', link: '/react/State' },
  { name: 'useEffect', link: '/react/Effect' },
  { name: 'rendering', link: '/react/rendering' },
  { name: 'infiniteScroll', link: '/react/infiniteScroll' },
];
const NextMenu = [{ name: 'Next.js' }];
const NextArr = [
  { name: 'useState', link: '/react/useState' },
  { name: 'useEffect', link: '/react/useEffect' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <SideBar>
        <Menu
          menu={ReactMenu}
          isActiveURL={'/react'}
          postList={ReactArr}
        ></Menu>
        <Menu
          menu={NextMenu}
          isActiveURL={'/next'}
          postList={NextArr}
        ></Menu>
      </SideBar>
      <Main>{children}</Main>
    </Container>
  );
}

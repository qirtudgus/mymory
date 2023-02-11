import { useRouter } from 'next/router';
import styled from 'styled-components';
import { MouseEvent } from 'react';

interface MenuInterface {
  name: string;
}

interface PostListInterface {
  name: string;
  link: string;
}

export default function Menu({ menu, postList }: { menu: MenuInterface[]; postList: PostListInterface[] }) {
  const router = useRouter();
  const routing = (link: string) => {
    router.push(link);
  };
  const ShowMenu = (e: MouseEvent) => {
    const dom = e.target as HTMLElement;
    if (dom.tagName === 'LI') return;
    dom.classList.toggle('active');
  };

  return (
    <>
      {menu.map((i, index) => (
        <MenuUl
          key={index}
          onClick={(e) => ShowMenu(e)}
        >
          {i.name}
          {postList.map((i, index) => (
            <PostDiv
              key={index}
              onClick={() => routing(i.link)}
            >
              <PostList className={router.pathname.startsWith(`${i.link}`) ? 'active' : undefined}>{i.name}</PostList>
            </PostDiv>
          ))}
        </MenuUl>
      ))}
    </>
  );
}

const PostDiv = styled.div`
  cursor: pointer;
  height: 30px;
  padding: 0 15px;
  line-height: 30px;
  &:hover {
    color: green;
  }
`;

const PostList = styled.li`
  font-size: 18px;
  &.active {
    font-weight: bold;
  }
`;

const MenuUl = styled.ul`
  cursor: pointer;
  user-select: none;
  & div {
    display: none;
  }
  &.active div {
    display: block;
  }
`;

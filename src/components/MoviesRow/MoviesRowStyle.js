import styled from "styled-components";

export const ListArea = styled.div`
  margin-bottom: 20px;
  overflow-x: hidden;
`;

export const List = styled.div`
  transition: all ease 0.5s;
`;

export const Img = styled.img`
  display: inline-block;
  width: 16rem;
  transform: scale(0.9);

  &:hover {
    transform: scale(1);
    cursor: pointer;
    transition: all ease 0.3s;
  }
`;
export const LeftArrow = styled.div`
  position: absolute;
  width: 4rem;
  height: 22.5rem;
  background-color: rgba(15, 22, 36, 0.4);
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  cursor: pointer;
  ${List}:hover & {
    opacity: 1;
  }
`;
export const RightArrow = styled.div`
  position: absolute;
  width: 4rem;
  height: 22.5rem;
  background-color: rgba(15, 22, 36, 0.4);
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  ${List}:hover & {
    opacity: 1;
  }
`;

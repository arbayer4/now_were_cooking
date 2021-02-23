import { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

//This whole burger was learned from this:
//https://www.youtube.com/watch?v=GGkBwpxV7AI

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 22px;
  right: 20px;

  z-index: 3;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    align-items: flex-end;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) =>
      open ? "rgb(54, 70, 82)" : "rgb(220, 112, 73)"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} setOpen={setOpen} />
    </div>
  );
};

export default Burger;

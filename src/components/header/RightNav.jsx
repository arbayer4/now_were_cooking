import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    /* padding: 18px 10px */
    color: rgb(220, 112, 73);
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgb(237, 199, 109);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    margin: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 2;

    li {
    }
  }
`;
function RightNav(props) {
  return (
    <Ul open={props.open}>
      {/* <li></li> */}
      <li>
        <Link className="link" to="/recipes">
          Recipes
        </Link>
      </li>
      <li>
        <Link className="link" to="/new">
          Contribute Recipe
        </Link>
      </li>
    </Ul>
  );
}

export default RightNav;

import "./Footer.css";
function Footer() {
  return (
    <footer>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/andy-bayer-203/"
      >
        <img src="https://i.imgur.com/99y64jr.png" alt="linked-in" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/arbayer4">
        {" "}
        <img src="https://i.imgur.com/UAMsbs8.png" alt="github" />
      </a>
      <p>© Andy Bayer 2021</p>
    </footer>
  );
}

export default Footer;

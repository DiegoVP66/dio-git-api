import GitImg from "assets/img/github.svg";
import Button from "components/Button";
import { Link } from "react-router-dom";

import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Desafio GitHub API</h1>
      <p>Encontre um perfil do GitHub</p>
      <div className="home-img">
        <img src={GitImg} alt="" />
      </div>
      <div>
        <Link to="/profile">
          <Button text="Iniciar Busca" />
        </Link>
      </div>
    </div>
  );
};

export default Home;

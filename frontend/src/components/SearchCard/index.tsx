import { UserInfo } from "types/types";
import "./styles.css";

type Props = {
  user: UserInfo;
};

const SearchCard = ({ user }: Props) => {
  return (
    <div className="search-card-container">
      <div className="img-container">
        <img src={user.avatar_url} alt="Imagem do perfil" />
      </div>
      <div className="name-container">
        <h1>{user.name}</h1>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          <span>URL: </span>
          <a className="link" href={user.html_url}>
            {user.html_url}
          </a>
        </li>
        <li className="list-group-item">
          <span>Repositórios: </span>
          {user.public_repos}
        </li>
        <li className="list-group-item">
          <span>Seguidores:</span> {user.followers}
        </li>
        <li className="list-group-item">
          <span>Seguindo:</span> {user.followers}
        </li>
      </ul>
    </div>
  );
};

export default SearchCard;

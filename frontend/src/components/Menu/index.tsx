import axios from "axios";
import Button from "components/Button";
import SearchCard from "components/SearchCard";
import { useState } from "react";
import { UserInfo } from "types/types";
import { toast } from "react-toastify";
import "./styles.css";

type FormData = {
  name: string;
};

const Menu = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
  });
  const [profileInfo, setProfileInfo] = useState<UserInfo>();
  const hanndleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.name}`)
      .then((response) => {
        setProfileInfo(response.data);
        toast.info("Perfil encontrado!");
      })
      .catch((error) => {
        setProfileInfo(undefined);
        toast.error("Erro ao procurar o perfil!");
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="menu-card">
      <h1>Pesquisar Perfil</h1>
      <form onSubmit={hanndleSubmit}>
        <div className="menu">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Search"
            onChange={handleChange}
          />
          <Button text="Encontrar" />
        </div>
      </form>
      {profileInfo && <SearchCard user={profileInfo} />}
    </div>
  );
};

export default Menu;

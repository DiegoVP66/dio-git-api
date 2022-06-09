import "./styles.css";

type Props = {
  text: string;
};
const Button = ({ text }: Props) => {
  return (
    <div className=" btn btn-container">
      <button type="submit" className="btn-style">
        <h4>{text}</h4>
      </button>
    </div>
  );
};

export default Button;

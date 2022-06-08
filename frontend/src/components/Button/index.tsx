import "./styles.css";

type Props = {
  text: string;
};
const Button = ({ text }: Props) => {
  return (
    <div>
      <button>{text}</button>
    </div>
  );
};

export default Button;

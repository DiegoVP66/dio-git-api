import { render, screen } from "@testing-library/react";
import Button from "..";

test("Button should render button with given text", () => {
  //Arrange
  const text = "Procurar perfil";

  //Act
  render(<Button text={text} />);

  //Assert
  expect(screen.getByText("Procurar perfil")).toBeInTheDocument();
});

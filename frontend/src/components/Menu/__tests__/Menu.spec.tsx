import { render, screen } from "@testing-library/react";
import Menu from "..";

test("Menu should have title text", () => {
  const title = "Menu";

  render(<Menu />);

  expect(screen.getByText(title)).toBeInTheDocument();
});

test("Menu input should have placeholder text", () => {
  const title = "Search";

  render(<Menu />);

  expect(screen.getByPlaceholderText(title)).toBeInTheDocument();
});

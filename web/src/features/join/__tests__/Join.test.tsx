// import dependencies
import React from "react";
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import { MemoryRouter } from 'react-router-dom';
import Join from "../routes/Join";

it("loads and displays join header", () => {
  render(<Join />);
  const headerElement = screen.getByText(/join/i);
  expect(headerElement).toBeInTheDocument();
});

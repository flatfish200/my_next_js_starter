import React from "react";
import { render, screen } from "@testing-library/react";
import Index from "../pages/index";

describe("Index testing", () => {
    test("Should render content correctly", () => {
        render(<Index/>);
        expect(screen.getByText(/My Next JS Stater/i)).toBeInTheDocument();
    });
});
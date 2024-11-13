import {describe, expect, it} from "vitest"
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    it("should render correctly", () => {
        const {getByTestId} = render(<App />)
        expect(getByTestId("app-id")).toBeInTheDocument()
    })
})

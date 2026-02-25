import { RouterProvider } from "react-router";
import { router } from "./routes";
import { CustomCursor } from "./components/CustomCursor";
import "../styles/design-system.css";
import "../styles/global.css";

export default function App() {
  return (
    <>
      <CustomCursor />
      <RouterProvider router={router} />
    </>
  );
}
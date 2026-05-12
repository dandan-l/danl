import { RouterProvider } from "react-router";
import { router } from "./routes";
import { CustomCursor } from "./components/CustomCursor";
import { Analytics } from "@vercel/analytics/react";
import "../styles/tokens.css";
import "../styles/global.css";

export default function App() {
  return (
    <>
      <CustomCursor />
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
}

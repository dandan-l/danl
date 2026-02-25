import { createBrowserRouter, redirect } from "react-router";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ReportMyUPPage } from "./pages/ReportMyUPPage";
import { EFileMyFormsCaseStudyPage } from "./pages/EFileMyFormsCaseStudyPage";
import { RootLayout } from "./components/RootLayout";

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/reportmyup",
        Component: ReportMyUPPage,
      },
      {
        path: "/efilemyforms",
        Component: EFileMyFormsCaseStudyPage,
      },
      // Redirects for old URLs
      {
        path: "/efilemyforms-case-study",
        loader: () => redirect("/efilemyforms"),
      },
      {
        path: "/case-study",
        loader: () => redirect("/reportmyup"),
      },
    ],
  },
]);
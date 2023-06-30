import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import NavBar from "../Functions/NavBar/Navbar";
import IntroPage from "../Pages/IntroPage";


const PageContentCombination = ({ pageContent }) => (
  <div>
    <NavBar />
    {pageContent}
  </div>
);

const router = createBrowserRouter([
  {
    path: "/home",
    element: <PageContentCombination pageContent={<HomePage />} />
  },
  {
    path: "/intro",
    element: <PageContentCombination pageContent={<IntroPage />}/>
  }
]);


export default router;


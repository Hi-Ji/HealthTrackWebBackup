import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import NavBar from "../Functions/NavBar/Navbar";


const PageContentCombination = ({ pageContent }) => (
  <div>
    <NavBar />
    {pageContent}
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageContentCombination pageContent={<HomePage />} />
  }
]);


export default router;


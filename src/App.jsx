import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
// Layout
import MainLayout from "./Layouts/MainLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path="/jobs" element={<JobsPage/>} />
    </Route>
  )
);

const App = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default App
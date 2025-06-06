import { createBrowserRouter, RouterProvider } from "react-router"
import AppLayout from "./components/common/appLayout/AppLayout"
import Home from "./components/pages/home/Home"
import Blogs from "./components/pages/blogs/Blogs"
import BlogDetail from "./components/pages/blogs/BlogDetail"
import Products from "./components/pages/products/Products"
import About from "./components/pages/about/About"
import UserDetails from "./components/pages/user/UserDetails"
import ErrorPage from "./components/pages/errorPage/ErrorPage"

const App = () => {
  const routers = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/products',
          element: <Products />
        },
        {
          path: '/blogs',
          element: <Blogs />
        },
        {
          path: '/blogs/:id',
          element: <BlogDetail />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/user/:id',
          element: <UserDetails />
        },
        {
          path: '*',
          element: <ErrorPage />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={routers}></RouterProvider>
  )
}

export default App

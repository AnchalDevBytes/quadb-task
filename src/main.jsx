import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StoreProvider from './redux/StoreProvider.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MovieDetail from './pages/MovieDetail.jsx'
import Home from './pages/Home.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router}/>
    </StoreProvider>
  </React.StrictMode>,
)

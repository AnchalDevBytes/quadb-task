import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getAllMovies } from './redux/dataSlice';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';

const App = () => {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getAllMovies());
  },[])

  return (
    <>
      <Header/>
        <div className={mainStyles}>
          <Outlet/>
        </div>
      <Footer/>
    </>
  )
}

const mainStyles = `min-h-screen lg:min-h-[calc(100vh-150px)] w-screen bg-[url("./assets/movieBg.jpg")] bg-center bg-cover bg-no-repeat`

export default App
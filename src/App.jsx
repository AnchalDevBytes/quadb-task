import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from './redux/dataSlice';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getAllMovies());
  },[])

  return (
    <>
      <Header/>
        <div className='h-[calc(100vh-145px)] w-screen bg-[url("./assets/movieBg.jpg")] bg-center bg-cover bg-no-repeat'>
          <Outlet/>
        </div>
      <Footer/>
    </>
  )
}

export default App
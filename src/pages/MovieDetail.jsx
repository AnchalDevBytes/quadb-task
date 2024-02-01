import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const MovieDetail = () => {
  const movies = useSelector(state => state.movies);
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Find the movie with the matching id
    const selectedMovie = movies.find((movie) => movie.show.id.toString() === id);

    // Set the selected movie in the state
    setMovie(selectedMovie);
  }, [id, movies]);

  useEffect(() => {
    // Load user details from local storage if available
    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails')) || {};
    setUserDetails(storedUserDetails);
  }, []);

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookTicket = () => {
    // Save user details to local storage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Show the booking modal
    setShowModal(true);

    // Mark the form as submitted
    setFormSubmitted(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    // Reset the form submission status when modal is closed
    setFormSubmitted(false);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <section className={containerStyles}>
      <div id='main' className={mainStyles}>
        <h2 className="font-bold text-2xl mb-4">{movie.show.name}</h2>
        <img className={imgStyles} src={movie.show.image?.medium} alt={movie.show.name} />

        <p className="text-gray-400 mb-2">Genres: {movie.show.genres?.join(', ')}</p>
        <p className="text-gray-400 mb-2">Premiered: {movie.show.premiered}</p>
        <p className={`mb-2 ${movie.show.status === 'Ended' ? 'text-red-500' : 'text-green-500'}`}>Status: {movie.show.status}</p>

        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Summary:</h3>
          <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: movie.show.summary }} />
        </div>

        <button
          id='bookTicketBtn'
          onClick={() => setShowModal(true)}
          className={bookTicketBtnStyles}
        >
          Book Ticket
        </button>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-70 absolute inset-0"></div>
            <div className="bg-purple-900 p-8 rounded-md z-10">
              <h2 className="text-2xl font-bold mb-4">{formSubmitted ? 'Booking Confirmation' : 'Book a Ticket'}</h2>
              {formSubmitted ? (
                <div className='flex flex-col items-center'>
                  <p className="text-green-500 mb-4">Ticket booked successfully!</p>
                  <h6 className='text-sm tracking-wider font-medium text-purple-200 mb-2'>Name : {userDetails.name}</h6>
                  <h6 className='text-sm tracking-wider font-medium text-purple-200 mb-2'>Email : {userDetails.email}</h6>
                  <Link to="/" id='formSubmittionLink' className={formSubmittionLinkStyles}>Book More Movies</Link>
                </div>
              ) : (
                <form className="flex flex-col max-w-md">
                  <label htmlFor="name" className="mb-2 text-gray-400">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={userDetails.name}
                    onChange={handleInputChange}
                    className="p-2 mb-2 bg-gray-700 text-white rounded-md"
                  />

                  <label htmlFor="email" className="mb-2 text-gray-400">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                    className="p-2 mb-2 bg-gray-700 text-white rounded-md"
                  />

                  <button
                    type="button"
                    onClick={handleBookTicket}
                    className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 mt-3"
                  >
                    Book Ticket
                  </button>
                </form>
              )}
              <button
                onClick={handleModalClose}
                className="mt-4 bg-fuchsia-700 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

//tailwind classes
const containerStyles =`w-full min-h-screen md:p-12 p-5 pt-10 flex items-center bg-fuchsia-950/90 backdrop-filter backdrop-blur`
const mainStyles = `max-w-5xl md:min-h-[70vh] lg:min-h-full mx-auto my-1 -translate-y-5 bg-purple-950/80 backdrop-filter backdrop-blur shadow-black text-white rounded-md overflow-hidden shadow-md p-4 flex flex-col justify-between`
const imgStyles = `w-full h-48 md:h-96 object-cover mb-4`
const bookTicketBtnStyles = `p-4 flex mx-auto bg-fuchsia-700 rounded-md hover:bg-fuchsia-800 active:bg-fuchsia-900 transition-all mb-5`
const formSubmittionLinkStyles = `text-medium text-xs my-2 text-yellow-400 tracking-widest border py-2 px-2 rounded bg-fuchsia-800/50`

export default MovieDetail;




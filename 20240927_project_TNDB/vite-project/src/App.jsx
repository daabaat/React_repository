import "./App.css";
import MovieCard from "./components/MovieCard/MovieCard";
import useMoviefetch from "./function/useMoviefetch";
import { useState } from "react";
import Slider from "react-slick";

import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";

function App() {
  const [page, setPage] = useState(1);
  const { loading, error, movies } = useMoviefetch(page);
  const [selectedMovie, setSelectedMovie] = useState(null); // 선택한 영화 상태 관리
  const [showModal, setShowModal] = useState(false); // 모달 표시 상태 관리

  // 캐러셀 설정
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: false,
    draggable: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie); // 클릭한 영화 정보 저장
    setShowModal(true); // 모달 표시
  };

  const handleCloseModal = () => {
    setShowModal(false); // 모달 닫기
  };

  return (
    <>
      <Header />

      <h1>Movie list</h1>
      {loading && <p>로딩중 ...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && movies && movies.length > 0 && (
        <div className="carousel-container">
          <Slider {...settings}>
            {movies.map((movie) => (
              <div key={movie.id} onClick={() => handleMovieClick(movie)}>
                {/* MovieCard 클릭 시 모달 표시 */}
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </div>
      )}

      <Modal
        show={showModal}
        onClose={handleCloseModal}
        movie={selectedMovie}
      />

      <div className="pagination">
        <button
          onClick={() => {
            setPage(page - 1);
          }}
          disabled={page === 1}
        >
          이전
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          다음
        </button>
      </div>
    </>
  );
}

export default App;

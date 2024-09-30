import Slider from "react-slick";
import MovieCard from "../../MovieCard/MovieCard";

export default function GanreMovieSlider({ movies }) {
  return (
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
  );
}

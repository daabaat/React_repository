import useTrendMoviefetch from "../../function/useTrendMoviefetch";
import Slider from "react-slick";
import "./Header.css"; // 스타일링을 위해 별도 파일 추가

export default function Header() {
  const {
    loading: trendLoading,
    error: trendError,
    movies: trendMovies,
  } = useTrendMoviefetch(); // 트렌드 영화 호출

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true, // fade 효과 추가
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true, // 중앙에 영화 포스터를 배치
    centerPadding: "20%", // 양옆 포스터 크기 조정
  };

  return (
    <div className="header">
      <h1>최신 트렌드</h1>
      {trendLoading && <p>로딩중 ...</p>}
      {trendError && <p>{trendError}</p>}
      {!trendLoading &&
        !trendError &&
        trendMovies &&
        trendMovies.length > 0 && (
          <div className="trend-movie-carousel">
            <Slider {...settings}>
              {trendMovies.map((movie) => (
                <div key={movie.id} className="slider-item">
                  <img
                    className="main-poster"
                    src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}
    </div>
  );
}

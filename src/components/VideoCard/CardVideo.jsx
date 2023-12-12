import { ThumbUpSharp } from "@mui/icons-material";
import TextTruncate from "react-text-truncate";
import cardstyle from "../../css/Video.module.css";
import { forwardRef } from "react";
const base_url = "https://image.tmdb.org/t/p/w1280";

const CardVideo = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className={cardstyle.videocard}>
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path} `}
        alt=""
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="...."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className={cardstyle.parausage}>
        {movie.media_type && `${movie.media_type} .`}
        {movie.release_date || movie.first_air_date}
        <ThumbUpSharp /> {""} {movie.vote_count}
      </p>
    </div>
  );
});

export default CardVideo;

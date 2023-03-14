import './MovieReview.css'

interface MovieReviewProps {
  imgLink: string,
  reviewContent: string,
  ratingImgLink: string,
}

const MovieReview: React.FC<MovieReviewProps> = (props: MovieReviewProps) => {
  return (
    <div className="reviewContainer">
        <div className="imageContainer">
            <img src={props.imgLink} alt="movie poster" width={'1000px'}/>
        </div>
        <div className="contentContainer">
            <p>{props.reviewContent}</p>
            <img src={props.ratingImgLink} alt="movie rating" width={"20%"}/>
        </div>
    </div>
  );
};

export default MovieReview;
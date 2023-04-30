import './MusicReview.css'

interface MusicReviewProps {
  imgLink: string,
  reviewContent: string,
  ratingImgLink: string,
  albumAuthor: string,
}

const MusicReview: React.FC<MusicReviewProps> = (props: MusicReviewProps) => {
  return (
    <div className="reviewContainer">
        <div className="imageContainer">
            <img src={props.imgLink} alt="movie poster" width={'300px'}/>
        </div>
        <div className="contentContainer">
            <h2>{props.albumAuthor}</h2>
            <p>{props.reviewContent}</p>
            <img src={props.ratingImgLink} alt="movie rating" width={"40%"}/>
        </div>
    </div>
  );
};

export default MusicReview;
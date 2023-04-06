interface GolfScoreProps {
  date: string, 
  golfCourseName: string,
  holes: string,
  netScore: string,
  score: string,
}

const GolfScore: React.FC<GolfScoreProps> = (props: GolfScoreProps) => {
  return (
    <tr id="scores">
        <td>{props.date}</td>
        <td>{props.golfCourseName}</td>
        <td>{props.holes}</td>
        <td>{props.score}</td>
        <td>{props.netScore}</td>
    </tr>
  );
};

export default GolfScore;
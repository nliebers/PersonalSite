import { IonButton, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Golf.css';
import Dropdown from 'react-dropdown'
import { Storage } from '@ionic/storage';
import GolfScore from '../components/GolfScore';
import { checkmark, golf, golfOutline, golfSharp } from 'ionicons/icons';

const store = new Storage();
store.create();
let scores: any[] = []

const updateScores = () => {
    store.remove("test");
    store.forEach((key, value, index) => {
        console.log(key, value, index)
        if(!scores.includes([key, value])){
            scores.push([key, value]);
        }
    });
}


const changeClubDist = (option: any) => {
    store.set("1/1/1", ['test course', '9', '45', '+9']);
    updateScores();
    (document.getElementById('distanceText') as HTMLInputElement).textContent = distances[options.indexOf(option.value)];
    (document.getElementById('speedText') as HTMLInputElement).textContent = clubSpeeds[options.indexOf(option.value)];
}

const createNewRow = (date: string, course: string, netScore: string, holes: string, score: string) => {
    const scoreContainer = (document.getElementById('scoreTable'));
    const row = document.createElement('tr');
    const rowDate = document.createElement('td');
    rowDate.innerHTML = date;
    const rowCourse = document.createElement('td');
    rowCourse.innerHTML = course;
    const rowNetScore = document.createElement('td');
    rowNetScore.innerHTML = netScore;
    const rowHoles = document.createElement('td');
    rowHoles.innerHTML = holes;
    const rowScore = document.createElement('td');
    rowScore.innerHTML = score;
    row.appendChild(rowDate);
    row.appendChild(rowCourse);
    row.appendChild(rowScore);
    row.appendChild(rowNetScore);
    row.appendChild(rowHoles);
    scoreContainer?.appendChild(row);
}

const addNewScore = () => {
    const date = (document.getElementById('date') as HTMLInputElement).value;
    const course = (document.getElementById('course') as HTMLInputElement).value;
    const score = (document.getElementById('score') as HTMLInputElement).value;
    const netScore = (document.getElementById('net score') as HTMLInputElement).value;
    const holes = (document.getElementById('holes') as HTMLInputElement).value;
    console.log(date, course, holes, score, netScore);
    store.set(date, [course, holes, score, netScore]);
    createNewRow(date, course, netScore, holes, score);
}

updateScores();
const options = ['Driver', '3 Wood', '4 Hybrid', '4 iron', '5 iron', '6 iron', '7 iron', '8 iron', '9 iron', 'Pitching Wedge', '52 Degree Wedge', '56 Degree Wedge', '60 Degree Wedge']
const distances = ['275 Yards', '240 Yards', '210 Yards', '200 Yards', '190 Yards', '180 Yards', '165 Yards', '155 Yards', '140 Yards', '115 Yards', '105 Yards', '85 Yards', '65 Yards']
const clubSpeeds = ['110 MPH', '107 MPH', '104 MPH', '102 MPH', '100 MPH', '99 MPH', '97 MPH', '96 MPH', '95 MPH', '85 MPH', '80 MPH', '77 MPH', '75 MPH']
const defaultOption = options[0]
let selectedDistance = distances[0]
let selectedSpeed = clubSpeeds[0]

const Golf: React.FC = () => {
    let score = scores.map(value => {
        // replace option with your component name
        return <GolfScore date={value[1]} golfCourseName={value[0][0]} holes={value[0][1]} score={value[0][2]} netScore={value[0][3]} />
    })
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Noah's Golf Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div id="golfBody">
      <div className="nameContainer">
      <div>
                    </div>
                    <div className='profile'>
                            <img src="assets/media/headshot.jpg" alt="noah" width="15%"/>
                            <div >
                                <h3>Select Club</h3>
                                <Dropdown onChange={changeClubDist} arrowClosed={<span className="arrow right" />} arrowOpen={<span className="arrow down" />} className='dropdown' options={options} value={defaultOption} placeholder="Select an option"/>
                                <div >
                                    <h3>Selected Club Average Distance</h3>
                                    <h4><span id="distanceText" className="underlined underline-clip">{selectedDistance}</span></h4>
                                </div>
                                <div >
                                    <h3>Selected Club Average Speed</h3>
                                    <h4><span id="speedText" className="underlined underline-clip">{selectedSpeed}</span></h4>
                                </div>  
                            </div>               
                        </div>
                <div className="row">
                    <div>
                        <h2>Status: <span className="underlined underline-clip">Amatuer</span></h2>
                    </div>
                    <div>
                        <h2>Country: <span className="underlined underline-clip">USA</span></h2>
                    </div>
                    <div>
                        <h2>Handicap: <span className="underlined underline-clip">16.6</span></h2>
                    </div>
                    <div>
                        <h2>College: <span className="underlined underline-clip">Nebraska</span></h2>
                    </div>
                </div>
            </div>
        <section className='golfScores'>
            <h1>Noah's Recent Golf Scores</h1>
            <div className="tbl-header">
                <table>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Course</th>
                    <th>Holes</th>
                    <th>Overall Score</th>
                    <th>Net Score (+/- Par)</th>
                    </tr>
                </thead>
                </table>
            </div>
            <div className="tbl-content">
                <table border={0}>
                <tbody id="scoreTable">
                    <GolfScore date='2/27/23' golfCourseName='Fairways Golf Course' holes='9' score='45' netScore='+9'/>
                    {score}
                </tbody>
                </table>
            </div>
            </section>
        </div>
        <h1>Add Score(s)</h1>
        <div className='scoreContainer'>
            <div className='enterScore'>
                <form>
                    <div className='textInp'>
                        <h3>Date</h3>
                        <input type="date" id="date" name="date" className='inp'/>
                    </div>
                    <div className='textInp'>           
                        <h3>Course</h3>
                        <input type="course" id="course" name="couse" className='inp'/>
                    </div>
                    
                    <div className='textInp'>           
                        <h3>Holes </h3>
                        <input type="holes" id="holes" name="holes" className='inp'/>
                    </div>
                    <div className='textInp'>           
                        <h3>Score</h3>
                        <input type="score" id="score" name="score" className='inp'/>
                    </div>
                    <div className='textInp'>           
                        <h3>Net Score</h3>
                        <input type="net score" id="net score" name="net score" className='inp'/>
                    </div>
                </form>
                <IonButton className="golfSubmit" onClick={addNewScore}>
                    <IonIcon aria-hidden="true" icon={checkmark}/>
                </IonButton>
            </div>
            <div>
                <img src="assets/media/augustanational.jpg" width={"50%"} alt="layout"/>
            </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Golf;

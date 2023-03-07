import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Golf.css';
import Dropdown from 'react-dropdown'

const changeClubDist = (option: any) => {
    (document.getElementById('distanceText') as HTMLInputElement).textContent = distances[options.indexOf(option.value)];
    (document.getElementById('speedText') as HTMLInputElement).textContent = clubSpeeds[options.indexOf(option.value)];
}

const options = ['Driver', '3 Wood', '4 Hybrid', '4 iron', '5 iron', '6 iron', '7 iron', '8 iron', '9 iron', 'Pitching Wedge', '52 Degree Wedge', '56 Degree Wedge', '60 Degree Wedge']
const distances = ['275 Yards', '240 Yards', '210 Yards', '200 Yards', '190 Yards', '180 Yards', '165 Yards', '155 Yards', '140 Yards', '115 Yards', '105 Yards', '85 Yards', '65 Yards']
const clubSpeeds = ['110 MPH', '107 MPH', '104 MPH', '102 MPH', '100 MPH', '99 MPH', '97 MPH', '96 MPH', '95 MPH', '85 MPH', '80 MPH', '77 MPH', '75 MPH']
const defaultOption = options[0]
let selectedDistance = distances[0]
let selectedSpeed = clubSpeeds[0]

const Golf: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Noah's Golf Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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
                        <h2>Handicap: <span className="underlined underline-clip">--</span></h2>
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
                <tbody>
                    <tr>
                    <td>2/27/23</td>
                    <td>Fairways Golf Course</td>
                    <td>9</td>
                    <td>45</td>
                    <td>+9</td>
                    </tr>
                    <tr>
                    <td>2/26/23</td>
                    <td>Fairways Golf Course</td>
                    <td>18</td>
                    <td>87</td>
                    <td>+15</td>
                    </tr>
                    <tr>
                    <td>9/7/22</td>
                    <td>Fairways Golf Course</td>
                    <td>9</td>
                    <td>44</td>
                    <td>+8</td>
                    </tr>
                    <tr>
                    <td>8/26/22</td>
                    <td>Fairways Golf Course</td>
                    <td>9</td>
                    <td>40</td>
                    <td>+4</td>
                    </tr>
                    <tr>
                    <td>8/17/22</td>
                    <td>Fairways Golf Course</td>
                    <td>9</td>
                    <td>43</td>
                    <td>+7</td>
                    </tr>
                    <tr>
                    <td>8/10/22</td>
                    <td>Fairways Golf Course</td>
                    <td>9</td>
                    <td>44</td>
                    <td>+8</td>
                    </tr>
                    <tr>
                    <td>8/9/22</td>
                    <td>Fairways Golf Course</td>
                    <td>9</td>
                    <td>41</td>
                    <td>+5</td>
                    </tr>
                    <tr>
                    <td>8/8/22</td>
                    <td>Fairways Golf Course</td>
                    <td>9</td>
                    <td>43</td>
                    <td>+7</td>
                    </tr>
                    <tr>
                    <td>8/7/22</td>
                    <td>Fairways Golf Course</td>
                    <td>9</td>
                    <td>43</td>
                    <td>+7</td>
                    </tr>
                    <tr>
                    <td>8/6/22</td>
                    <td>Fairways Golf Course</td>
                    <td>18</td>
                    <td>85</td>
                    <td>+13</td>
                    </tr>
                    <tr>
                    <td>7/29/22</td>
                    <td>Fairways Golf Course</td>
                    <td>9</td>
                    <td>42</td>
                    <td>+6</td>
                    </tr>
                    <tr>
                    <td>7/7/22</td>
                    <td>Mahoney Golf Course</td>
                    <td>9</td>
                    <td>42</td>
                    <td>+7</td>
                    </tr>
                    <tr>
                    <td>7/5/22</td>
                    <td>Pioneers Golf Course</td>
                    <td>9</td>
                    <td>41</td>
                    <td>+6</td>
                    </tr>
                    <tr>
                    <td>7/1/22</td>
                    <td>Mahoney Golf Course</td>
                    <td>18</td>
                    <td>85</td>
                    <td>+15</td>
                    </tr>
                    <tr>
                    <td>6/28/22</td>
                    <td>Highlands Golf Course</td>
                    <td>9</td>
                    <td>41</td>
                    <td>+5</td>
                    </tr>
                    <tr>
                    <td>6/20/22</td>
                    <td>Mahoney Golf Course</td>
                    <td>18</td>
                    <td>88</td>
                    <td>+18</td>
                    </tr>
                    <tr>
                    <td>6/10/22</td>
                    <td>Mahoney Golf Course</td>
                    <td>9</td>
                    <td>40</td>
                    <td>+5</td>
                    </tr>
                    <tr>
                    <td>5/30/22</td>
                    <td>Holmes Golf Course</td>
                    <td>18</td>
                    <td>90</td>
                    <td>+18</td>
                    </tr>
                    <tr>
                    <td>5/28/22</td>
                    <td>Fairways Golf Course</td>
                    <td>9</td>
                    <td>44</td>
                    <td>+8</td>
                    </tr>
                    <tr>
                    <td>5/27/22</td>
                    <td>Highlands Golf Course</td>
                    <td>9</td>
                    <td>42</td>
                    <td>+6</td>
                    </tr>
                    <tr>
                    <td>5/21/22</td>
                    <td>Mahoney Golf Course</td>
                    <td>9</td>
                    <td>81</td>
                    <td>+11</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </section>
      </IonContent>
    </IonPage>
  );
};

export default Golf;

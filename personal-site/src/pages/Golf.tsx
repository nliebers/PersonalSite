import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Golf.css';

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
                        <h1>Noah <br/> Liebers</h1>
                    </div>
                    <div >
                            <img src="assets/media/headshot.jpg" alt="noah" width="15%"/>
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

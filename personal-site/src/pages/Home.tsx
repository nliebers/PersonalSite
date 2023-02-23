import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import  Slideshow  from '../components/Slideshow'
import './Home.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <article>
          <h1 id="bigText">Noah Liebers' Website</h1>
          <div id="homeTextDiv">
            <p>This is my new website, I am a senior software engineering major at the University of Nebraska-Lincoln.  
              I am from Farmington, Minnesota and moved to Lincoln, Nebraska after starting college.   In this website you can find projects 
              I have worked on, a bit more about me and my personal interests, and also my resume.
            </p>
          </div>
          <br></br>
        <h2>These are videos and pictures that relate to me.</h2>
        </article>
        <div id="homeMedia">
          <Slideshow/>
        </div>
        <h2>See more things below</h2>
        <br></br>
        <h2>My top 3 favorite things</h2>
        <div id="lists">
          <ol id="list">
            <h2>Colors</h2>
            <li><p className="listText1">Green</p></li>
            <li><p className="listText2">Blue</p></li>
            <li><p className="listText3">Red</p></li>
          </ol>
          <ol id="list">
            <h2>Games</h2>
            <li><p className="listText1">Half-Life</p></li>
            <li><p className="listText2">Mario Kart</p></li>
            <li><p className="listText3">The Last of Us</p></li>
          </ol>
          <ol id="list">
            <h2>Sports</h2>
            <li><p className="listText1">Baseball</p></li>
            <li><p className="listText2">Football</p></li>
            <li><p className="listText3">Golf</p></li>
          </ol>
        </div>
        <div >
          <h3>Contact Me</h3>
          <form>
            <fieldset>
                <table>
                  <tr>
                    <td>Email?:</td>
                    <td><input type="checkbox" name="yes?" value="yes?" title="yes?"/></td>
                    <td>Phone or Email:</td>
                    <td><input type="text" name="Cool Input" title="Cool input"/></td>
                    <td>Reason:</td>
                    <td><select name="Cool select" title="Cool select">
                      <option>Work</option>
                      <option>Personal</option>
                      <option>Other</option>
                    </select></td>
                    <td><input type="submit"/></td>
                    <td><input type="reset" /></td>
                  </tr>
                </table>
              </fieldset>
            </form>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

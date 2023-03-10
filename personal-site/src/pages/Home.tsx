import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import  Slideshow  from '../components/Slideshow'
import './Home.css';
import {
  IonToggle,
  IonIcon,
  IonLabel
} from '@ionic/react';
import { moon } from 'ionicons/icons';

let toggled = false;

const toggleDarkModeHandler = () => {
  const ids = ['homeBody', 'golfBody', 'movieBody', 'resumeBody', 'feedbackBody']
  for(let i = 0; i < ids.length; i++){
    let page = document.getElementById(ids[i]);
    if (page && !toggled) {
      page.style.color = 'rgb(74, 73, 71)';
      page.style.backgroundColor = 'rgb(74, 73, 71)';
      toggled = true;
    }
    else if (page && toggled) {
      page.style.color = 'white';
      page.style.backgroundColor = 'white';
      toggled = false;
    }
  }
};

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="header">
            <IonTitle>Home</IonTitle>
            <div className="toggleDark">
              <IonIcon slot="start" icon={moon} />
              <IonLabel>Dark Mode</IonLabel>
              <IonToggle
                slot="end"
                name="darkMode"
                onIonChange={toggleDarkModeHandler}
              />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div id="homeBody">
        <article>
          <h1 id="bigText">Noah Liebers' Website</h1>
          <div id="homeTextDiv">
            <p>This is my new website, I am a senior software engineering major at the University of Nebraska-Lincoln.  
              I am from Farmington, Minnesota and moved to Lincoln, Nebraska after starting college.   In this website you can find projects 
              I have worked on, a bit more about me and my personal interests, and also my resume.
            </p>
          </div>
          <br></br>
        <h2>These are images of my favorite golf courses.</h2>
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
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

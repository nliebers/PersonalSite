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
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

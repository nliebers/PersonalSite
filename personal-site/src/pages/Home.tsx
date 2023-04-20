import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import  Slideshow  from '../components/Slideshow'
import  DarkModeToggle  from '../components/DarkModeToggle'
import './Home.css';
import {
  IonIcon,
} from '@ionic/react';
import { logoGithub, logoLinkedin, logoSteam, logoTwitch, logoTwitter } from 'ionicons/icons';
import { Browser } from '@capacitor/browser';


const openWebpage = (url: string) => {
  Browser.open({ url: url });
}

let file: any = null;

const handleSubmission = () => {
  const formData = new FormData();

  formData.append('File', file);

  fetch(
    'https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formData,
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

const changeHandler = (event: any) => {
  file = event.target.files[0];
};


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="header">
            <IonTitle>Home</IonTitle>
            <DarkModeToggle/>
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
        </article>
        <h2>Follow me on my socials</h2>
        <div className="socialsContainer">
          <IonButton onClick={() => openWebpage("https://twitter.com/liebdog1224")}>
            <IonIcon aria-hidden="true" icon={logoTwitter}></IonIcon>
          </IonButton>
          <IonButton onClick={() => openWebpage("https://www.linkedin.com/in/noah-liebers-0048821a5/")}>
            <IonIcon aria-hidden="true" icon={logoLinkedin}></IonIcon>
          </IonButton>
          <IonButton onClick={() => openWebpage("https://www.twitch.tv/liebdog24")}>
            <IonIcon aria-hidden="true" icon={logoTwitch}></IonIcon>
          </IonButton>
          <IonButton onClick={() => openWebpage("https://github.com/nliebers")}>
            <IonIcon aria-hidden="true" icon={logoGithub}></IonIcon>
          </IonButton>
          <IonButton onClick={() => openWebpage("https://steamcommunity.com/profiles/76561198306503919/")}>
            <IonIcon aria-hidden="true" icon={logoSteam}></IonIcon>
          </IonButton>
        </div>
        <h2>These are images of my favorite golf courses.</h2>
        <div id="homeMedia">
          <Slideshow/>
        </div>
        <div>
      <h2>Add you own golf course images</h2>
			<input type="file" name="file" onChange={changeHandler}/>
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
        <br></br>
        <h2>My top 3 favorite things</h2>
        <div id="lists">
          <ol id="list">
            <h2>Fruit</h2>
            <li><p className="listText1">Apple</p></li>
            <li><p className="listText2">Orange</p></li>
            <li><p className="listText3">Banana</p></li>
          </ol>
          <ol id="list">
            <h2>Games</h2>
            <li><p className="listText1">Half-Life</p></li>
            <li><p className="listText2">Mario Kart Double Dash</p></li>
            <li><p className="listText3">Fallout 3</p></li>
          </ol>
          <ol id="list">
            <h2>Artists</h2>
            <li><p className="listText1">Ween</p></li>
            <li><p className="listText2">Red Hot Chili Peppers</p></li>
            <li><p className="listText3">The Strokes</p></li>
          </ol>
        </div>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

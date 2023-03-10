import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ResumeComp from '../components/Resume'
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Noah's Resume</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div id="resumeBody">
          <ResumeComp></ResumeComp>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Resume;

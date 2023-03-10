import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ContactForm from '../components/ContactForm';

const ContactMe: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Leave Feedback</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div id="feedbackBody">
          <ContactForm></ContactForm>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ContactMe;

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
        <ContactForm></ContactForm>
      </IonContent>
    </IonPage>
  );
};

export default ContactMe;

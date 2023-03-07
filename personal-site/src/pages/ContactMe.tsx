import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './ContactMe.css';
import ContactForm from '../components/ContactForm';

const ContactMe: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact Me</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ContactForm></ContactForm>
      </IonContent>
    </IonPage>
  );
};

export default ContactMe;

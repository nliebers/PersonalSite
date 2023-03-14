import {
    IonToggle,
    IonIcon,
    IonLabel
  } from '@ionic/react';
  import { moon } from 'ionicons/icons';
import './DarkModeToggle.css'

  const toggleDarkModeHandler = () => {
    document.body.classList.toggle('dark');
  };

const DarkModeToggle = () => {
    return (
        <div className="toggleDark">
          <IonIcon slot="start" icon={moon} />
          <IonLabel>Dark Mode</IonLabel>
          <IonToggle
            slot="end"
            name="darkMode"
            onIonChange={toggleDarkModeHandler}
          />
        </div>
    );
  };
  
  export default DarkModeToggle;
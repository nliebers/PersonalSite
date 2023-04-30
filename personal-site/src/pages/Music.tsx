import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MusicReview from '../components/MusicReview';

const Music: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Noah's Music Reviews</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div id="movieBody">
          <div>
            <h2>Noah's Recent Ablum Reviews</h2>
          </div>
          <MusicReview ratingImgLink={"assets/media/5stars.jpg"} imgLink={"assets/media/mollusk.jpg"} reviewContent={'Truly one of the greatest albums I have ever listened to.'} albumAuthor='The Mollusk-Ween'/>
          <MusicReview ratingImgLink={"assets/media/5stars.jpg"} imgLink={"assets/media/mothership.jpg"} reviewContent={'Certified Funk.'} albumAuthor='Mothership Connection-Parliament'/>
          <MusicReview ratingImgLink={"assets/media/5stars.jpg"} imgLink={"assets/media/calif.jpg"} reviewContent={'Back when Red Hot Chili Peppers made music.'} albumAuthor='Californication-Red Hot Chili Peppers'/>
          <MusicReview ratingImgLink={"assets/media/5stars.jpg"} imgLink={"assets/media/jim.jpg"} reviewContent={'Absolute classic.'} albumAuthor='I Got a Name-Jim Croce'/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Music;
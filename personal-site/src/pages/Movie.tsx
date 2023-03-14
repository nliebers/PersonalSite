import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MovieReview from '../components/MovieReview';

const Movie: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Noah's Movie Reviews</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div id="movieBody">
          <div>
            <h2>Noah's Recent Reviews</h2>
          </div>
          <MovieReview ratingImgLink={"assets/media/5stars.jpg"} imgLink={"assets/media/godfather.jpg"} reviewContent={'Those who have read the novel may be surprised to find Michael at the center of the movie, instead of Don Corleone. In fact, this is simply an economical way for Coppola to get at the heart of the Puzo story, which dealt with the transfer of power within the family. Marlon Brando, who plays the Godfather as a shrewd, unbreakable old man, actually has the character lead in the movie; Al Pacino, with a brilliantly developed performance as Michael, is the lead. But Brando’s performance is a skillful throwaway, even though it earned him an Academy Award for best actor. His voice is wheezy and whispery, and his physical movements deliberately lack precision; the effect is of a man so accustomed to power that he no longer needs to remind others. Brando does look the part of old Don Corleone, mostly because of acting and partly because of the makeup, although he seems to have stuffed a little too much cotton into his jowls, making his lower face immobile.'}/>
          <MovieReview ratingImgLink={"assets/media/5stars.jpg"} imgLink={"assets/media/nocountry.jpg"} reviewContent={'This movie is a masterful evocation of time, place, character, moral choices, immoral certainties, human nature and fate. It is also, in the photography by Roger Deakins, the editing by the Coens and the music by Carter Burwell, startlingly beautiful, stark and lonely. As McCarthy does with the Judge, the hairless exterminator in his "Blood Meridian" (Ridley Scotts next film), and as in his "Suttree," especially in the scene where the riverbank caves in, the movie demonstrates how pitiful ordinary human feelings are in the face of implacable injustice. The movie also loves some of its characters, and pities them, and has an ear for dialog not as it is spoken but as it is dreamed. Many of the scenes in "No Country for Old Men" are so flawlessly constructed that you want them to simply continue, and yet they create an emotional suction drawing you to the next scene. Another movie that made me feel that way was "Fargo." To make one such film is a miracle. Here is another.'}/>
          <MovieReview ratingImgLink={"assets/media/5stars.jpg"} imgLink={"assets/media/spinal.jpg"} reviewContent={'"This Is Spinal Tap," one of the funniest movies ever made, is about a lot of things, but one of them is the way the real story is not in the questions or in the answers, but at the edge of the frame. There are two stories told in the film: the story of what the rock band Spinal Tap thinks, hopes, believes or fears is happening, and the story of what is actually happening. The reason we feel such affection for its members is because they are so touching in their innocence and optimism. Intoxicated by the sheer fun of being rock stars, they perform long after their sell-by date, to smaller and smaller audiences, for less and less money, still seeking the roar of the crowd. The fake documentary, released in 1984, was the directorial debut of Rob Reiner, then famous as Meathead from "All in the Family," soon to become one of the most successful of Hollywood directors ("The Sure Thing", "The Princess Bride", "When Harry Met Sally...", "Misery", "The American President"). He plays Marty DiBergi, the dogged documentarian who follows along on Spinal Taps first U.S. tour in six years. He was first attracted to the band, he says, by its "unusual loudness," so perhaps he should be more grateful for Nigels technical secrets.'}/>
          <MovieReview ratingImgLink={"assets/media/5stars.jpg"} imgLink={"assets/media/shining.jpg"} reviewContent={'Stanley Kubricks cold and frightening "The Shining" challenges us to decide: Who is the reliable observer? Whose idea of events can we trust? In the opening scene at a job interview, the characters seem reliable enough, although the dialogue has a formality that echoes the small talk on the space station in "2001." We meet Jack Torrance (Jack Nicholson), a man who plans to live for the winter in solitude and isolation with his wife and son. He will be the caretaker of the snowbound Overlook Hotel. His employer warns that a former caretaker murdered his wife and two daughters, and committed suicide, but Jack reassures him: "You can rest assured, Mr. Ullman, thats not gonna happen with me. And as far as my wife is concerned, Im sure shell be absolutely fascinated when I tell her about it. Shes a confirmed ghost story and horror film addict.'}/>
          <MovieReview ratingImgLink={"assets/media/5stars.jpg"} imgLink={"assets/media/goodfella.jpg"} reviewContent={'What finally got to me after seeing this film - what makes it a great film - is that I understood Henry Hills feelings. Just as his wife Karen grew so completely absorbed by the Mafia inner life that its values became her own, so did the film weave a seductive spell. It is almost possible to think, sometimes, of the characters as really being good fellows. Their camaraderie is so strong, their loyalty so unquestioned. But the laughter is strained and forced at times, and sometimes its an effort to enjoy the party, and eventually, the whole mythology comes crashing down, and then the guilt - the real guilt, the guilt a Catholic like Scorsese understands intimately - is not that they did sinful things, but that they want to do them again.'}/>
          <MovieReview ratingImgLink={"assets/media/5stars.jpg"} imgLink={"assets/media/psycho.jpg"} reviewContent={'What makes "Psycho" immortal, when so many films are already half-forgotten as we leave the theater, is that it connects directly with our fears: Our fears that we might impulsively commit a crime, our fears of the police, our fears of becoming the victim of a madman, and of course our fears of disappointing our mothers.'}/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Movie;
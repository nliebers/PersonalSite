import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { document, film, golf, home, mail } from 'ionicons/icons';
import Tab1 from './pages/Home';
import Resume from './pages/Resume';
import ContactMe from './pages/ContactMe';
import Golf from './pages/Golf';
import Movie from './pages/Movie';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Home">
            <Tab1 />
          </Route>
          <Route exact path="/Resume">
            <Resume />
          </Route>
          <Route path="/Golf">
            <Golf />
          </Route>
          <Route path="/Movie">
            <Movie />
          </Route>
          <Route path="/ContactMe">
            <ContactMe />
          </Route>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Resume" href="/Resume">
            <IonIcon aria-hidden="true" icon={document} />
            <IonLabel>Resume</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Golf" href="/Golf">
            <IonIcon aria-hidden="true" icon={golf} />
            <IonLabel>Golf</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Movie" href="/Movie">
            <IonIcon aria-hidden="true" icon={film} />
            <IonLabel>Movie Reviews</IonLabel>
          </IonTabButton>
          <IonTabButton tab="ContactMe" href="/ContactMe">
            <IonIcon aria-hidden="true" icon={mail} />
            <IonLabel>Leave Feedback</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

import { AuthProvider, FirebaseProvider, FirestoreProvider } from './contexts/firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components'; 
import Theme from './contexts/theme/Theme';
import { ThemeStore } from './contexts/theme/ThemeContext';
import * as Routes from './routes';

import { HomePage, MoviePage, MoviesPage, TvShowPage, TvShowsPage, ProfilePage, WatchListPage, SignInPage, RegistrationPage, SearchPage } from './pages';

const AppContainer = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
`;


const App = () => {
  return (
    <div>
      <FirebaseProvider>
        <AuthProvider>
          <FirestoreProvider>
            <ThemeStore>
              <Theme>
                <AppContainer>
                  <Router basename={'/MovieWorld'}>
                    <Switch>
                        <Route exact path={Routes.LANDING} component={ HomePage }/>
                        <Route from={Routes.HOME} to={Routes.LANDING}/>
                        <Route exact path={Routes.MOVIES_DETAILS} component={ MoviePage }/>
                        <Route exact path={Routes.MOVIES} component={ MoviesPage }/>
                        <Route exact path={Routes.TV_SHOWS_DETAILS} component={ TvShowPage }/>
                        <Route exact path={Routes.TV_SHOWS} component={ TvShowsPage }/>
                        <Route exact path={Routes.PROFILE} component={ ProfilePage }/>
                        <Route exact path={Routes.WATCH_LIST} component={ WatchListPage }/>
                        <Route exact path={Routes.AUTH_SIGN_IN} component={ SignInPage }/>
                        <Route exact path={Routes.AUTH_REGISTRATION} component={ RegistrationPage }/>
                        <Route exact path={Routes.SEARCH} component={ SearchPage }/>
                    </Switch>
                  </Router>
                </AppContainer>
              </Theme>
            </ThemeStore> 
          </FirestoreProvider>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
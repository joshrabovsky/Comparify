import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import {ThemeProvider} from 'styled-components'


import SelectPlaylistsPage from './pages/SelectPlaylistsPage';
import ShowSongsPage from './pages/ShowSongsPage';

const theme = {
  colors: {
    main: "white"
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact component={SelectPlaylistsPage}></Route>
            <Route path="/results" exact component={ShowSongsPage}></Route>
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

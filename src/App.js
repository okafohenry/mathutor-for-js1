import {JsOneLessonPage, LandingPage, JsOneAdvance, ErrorPage } from './pages';
import {About} from './components';
import {Switch, Route} from 'react-router';

const  App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/classroom" component={JsOneLessonPage} />

        <Route path="/advance" component={JsOneAdvance} />

        <Route path="/about" component={About} />

        <Route path='*' exact={true} component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;

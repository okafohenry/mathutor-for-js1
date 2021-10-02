import {JsOneLessonPage, LandingPage} from './pages';
import {Switch, Route} from 'react-router';

const  App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/classroom" component={JsOneLessonPage} />
      </Switch>
    </div>
  );
}

export default App;

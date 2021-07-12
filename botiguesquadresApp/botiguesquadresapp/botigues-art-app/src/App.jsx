import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WelcomPage from './pages/WelcomPage'
import Botigues from './pages/Botigues'
import Botiga from './pages/Botiga'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FormnovaBotiga from './pages/FormnovaBotiga'
import Formmodificabotiga from './pages/Formmodificarbotiga'
import Formeliminarbotiga from './pages/Formeliminarbotiga';
import Formupdatequadre from './pages/Formupdatequadre';
import Formnouquadre from './pages/Formnouquadre';


const App = () => {


  return (

    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <WelcomPage />
        </Route>
        <Route path="/botigues" exact component={<Botigues />}>
          <Botigues />
        </Route>
        <Route path='/botiga/:id' exact component={<Botiga />}>
          <Botiga />
        </Route>
        <Route path='/novabotiga' exact component={<FormnovaBotiga />}>
          <FormnovaBotiga />
        </Route>
        <Route path='/modificabotiga' exact component={<Formmodificabotiga />}>
          <Formmodificabotiga />
        </Route>
        <Route path="/eliminarbotiga" exact component={<Formeliminarbotiga />}>
          <Formeliminarbotiga />
        </Route>
        <Route path='/botiga/:id/quadrenou' exact component={<Formnouquadre />}>
          <Formnouquadre />
        </Route>

        <Route path='/botiga/:id/modificarquadre' component={<Formupdatequadre />}>
          <Formupdatequadre />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );

}

export default App;

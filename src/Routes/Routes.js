import React from "react"
import { render } from "react-dom"
import { HashRouter, Switch, Route } from "react-router-dom"
import Start from "../Components/Start"
import Profile from "../Components/Profile"
import Projects from "../Components/Projects"
import ContactMe from "../Components/ContactMe"

const Routes = () => (
  <HashRouter> /{/* envolvemos nuestra aplicación en el Router  */}
    <Switch> {/* también la envolvemos en el componente Switch */}
      <Route path="/" component={Start} exact /> {/* y creamos nuestras rutas */}
      <Route path="/books" component={Profile} exact />
      <Route path="/books/:bookId" component={Projects} exact />
      <Route path="/books/:bookId" component={ContactMe} exact />
    </Switch>
  </HashRouter>
)

render(<Routes/>, document.getElementById("root"))
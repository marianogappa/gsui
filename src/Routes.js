import React from "react";
import "./Routes.css";
import { Folders } from "./views/Folders";
import { CitiesVisited } from "./views/CitiesVisited";
import { Events } from "./views/Events";
import { BooksRead } from "./views/BooksRead";
import { SongHighlights } from "./views/SongHighlights";
import { Friends } from "./views/Friends";
import { Route, Switch } from "react-router-dom";

export class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: props.folders,
      api: props.api
    };
  }

  async componentDidMount() {}

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Folders {...this.state} />} />
        <Route
          exact
          path="/f/cities_visited"
          render={() => <CitiesVisited {...this.state} />}
        />
        <Route
          exact
          path="/f/events"
          render={() => <Events {...this.state} />}
        />
        <Route
          exact
          path="/f/books_read"
          render={() => <BooksRead {...this.state} />}
        />
        <Route
          exact
          path="/f/song_highlights"
          render={() => <SongHighlights {...this.state} />}
        />
        <Route
          exact
          path="/f/friends"
          render={() => <Friends {...this.state} />}
        />
      </Switch>
    );
  }
}

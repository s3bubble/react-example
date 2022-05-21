import React from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import MediaList from '../MediaList/MediaList';
import MediaView from '../MediaView/MediaView';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Container>
                    <Jumbotron className="text-center">
                        <Link to="/">
                            <h2>S3Bubble React</h2>
                        </Link>
                    </Jumbotron>
                    <Switch>
                        <Route path="/media/:code/:type" component={MediaView} />
                        <Route path="/" component={MediaList} />
                    </Switch>
                </Container>
            </Router>
        );
    }
}
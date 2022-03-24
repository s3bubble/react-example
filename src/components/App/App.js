import React from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import ArticleList from '../ArticleList/ArticleList';
import ArticleView from '../ArticleView/ArticleView';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Container>
                    <Jumbotron className="text-center">
                        <Link to="/">
                            <h1>S3Bubble Demo</h1>
                        </Link>
                        <p>Basic S3Bubble react demo click a link.</p>
                    </Jumbotron>
                    <Switch>
                        <Route path="/media/:mediaId" component={ArticleView} />
                        <Route path="/" component={ArticleList} />
                    </Switch>
                </Container>
            </Router>
        );
    }
}
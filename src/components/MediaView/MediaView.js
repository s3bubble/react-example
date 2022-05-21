import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Player from '../Player/Player'
import { Link } from "react-router-dom";

export default class MediaView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { code, type } = this.props.match.params;
        return (
            <article>
                <Jumbotron>
                    <h3>Media</h3>
                    <Link to={{ pathname: `/` }}>Go Back</Link>
                    <Player code={code} type={type} />
                </Jumbotron>
            </article>
        );
    }
}
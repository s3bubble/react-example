import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from "react-router-dom";
export default class ArticleView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {}
        }
    }

    componentDidMount() {

        const link = document.createElement("link");
        link.href = "https://unpkg.com/@s3bubble/player@latest/dist/css/s3bubble.min.css";
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen,print";
        document.body.appendChild(link);

        const script = document.createElement("script");
        script.src = "https://unpkg.com/@s3bubble/player@latest/dist/js/s3bubble.min.js";
        script.async = true;
        document.body.appendChild(script);

    }

    render() {
        const { article } = this.state;
        const code = this.props.location.code;
        const type = this.props.location.type;
        return (
            <article>
                <Jumbotron>
                    <h3>Media</h3>
                    <div className="s3bmedia" data-code={`${code}`} data-type={`${type}`}></div>
                </Jumbotron>
            </article>
        );
    }
}
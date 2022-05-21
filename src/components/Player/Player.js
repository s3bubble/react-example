import React from "react";

export default class Player extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        // You can edit this component to suit your needs

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
        const { code, type } = this.props;
        return (<div className="s3bmedia" data-code={`${code}`} data-type={`${type}`}></div>);
    }
}
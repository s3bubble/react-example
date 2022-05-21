import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

export default class MediaList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            media: []
        }
    }

    componentDidMount() {

        this.setState({
            media: [{
                "code": "r9k0lz",
                "type": "audio",
                "title": "Audio Example",
                "body": "this is a audio example"
            },
            {
                "code": "r9k0ji",
                "type": "video",
                "title": "Video Example",
                "body": "this is a audio example"
            }]
        })

    }

    render() {
        const { media } = this.state;
        return (
            <ListGroup>
                {media.map(container =>
                    <ListGroup.Item key={container.code}>
                        <Link to={{
                            pathname: `/media/${container.code}/${container.type}`
                        }}>{container.title}
                        </Link>
                    </ListGroup.Item>
                )
                }
            </ListGroup>
        );
    }
}
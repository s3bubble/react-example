import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {

        this.setState({
            articles: [{
                "id": 1,
                "code": "r9k0lz",
                "type": "audio",
                "title": "Audio Example",
                "body": "this is a audio example"
            },
            {
                "id": 2,
                "code": "r9k0ji",
                "type": "video",
                "title": "Video Example",
                "body": "this is a audio example"
            }]
        })

    }

    render() {
        const { articles } = this.state;
        return (
            <ListGroup>
                {articles.map(article =>
                    <ListGroup.Item key={article.id}>
                        <Link to={{
                            pathname: `/media/${article.id}`,
                            code: `${article.code}`,
                            type: `${article.type}`
                        }}>{article.title}
                        </Link>
                    </ListGroup.Item>
                )
                }
            </ListGroup>
        );
    }
}
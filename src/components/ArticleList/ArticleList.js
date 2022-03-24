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
                "code": "r90cpu",
                "type": "audio",
                "title": "Audio Example",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "id": 2,
                "code": "r99rhj",
                "type": "video",
                "title": "Video Example",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
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
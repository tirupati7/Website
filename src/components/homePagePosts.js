import React, { Component } from 'react';
import { POSTS } from '../constants';
import firebase from '../firebase/config';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/post.css';
import cardSampleImg from '../cardSample.png';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"
import { storeAllPosts, updateSinglePost } from '../store/actions/postActions';

class HomePagePosts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        console.log('componentDidMount is called');
        const postRef = firebase.database().ref('posts');
        postRef.on('value', (snapshot) => {
            let posts = snapshot.val();
            let newStatePosts = [];
            for (let p in posts) {
                newStatePosts.push({
                    id: p,
                    title: posts[p].title,
                    desc: posts[p].desc,
                    image: posts[p].image,
                    createdAt: posts[p].createdAt
                });
            }
            this.setState({
                posts: newStatePosts
            },()=>{
                this.props.storeAllPosts(this.state.posts);
            });
        })
    }

    goToDetailedPost(post) {
        console.log('Route History ::: ' + JSON.stringify(this.props.history));
        console.log('Post details ::: ' + JSON.stringify(post));
        /* const history = useHistory();
        history.push(path); */
        this.props.updateSinglePost(post);
        let path = `/detailed-post-view`;
        this.props.history.push(path);
        
    }

    render() {
        return (
            <div className="posts-block">
                <div>{POSTS}</div>
                {this.state.posts.map((post, i) => {
                    return (
                        <div className="post-content" key={i}>
                            <Card style={{ width: '18rem', margin: '5px' }}>
                                <Card.Img variant="top" src={post.image ? post.image : cardSampleImg} width="100%" height="200px" />
                                <Card.Body height="200px">
                                    <Card.Title>{post.title && post.title.length > 45 ? post.title.substring(0, 45) + '...' : post.title}</Card.Title>
                                    <Card.Text style={{ height: '100px' }}>
                                        {post.desc && post.desc.length > 124 ? post.desc.substring(0, 124) + '...' : post.desc}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => this.goToDetailedPost(post)}>Read More...</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
        detailedPost: state.posts.detailedPost
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeAllPosts: (posts) => dispatch(storeAllPosts(posts)),
        updateSinglePost: (post) => dispatch(updateSinglePost(post))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePagePosts));
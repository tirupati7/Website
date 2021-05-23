import React, { Component } from "react";
import "../styles/home.css";
import "../styles/post.css";
import { connect } from "react-redux";
import Image from "react-bootstrap/Image";
class DetailedPostView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: "",
        };
    }

    componentDidMount() {
    }

    render() {
        const { detailedPost } = this.props;
        let desc = detailedPost.desc.split("_N");
        console.log("DESC::::: " + JSON.stringify(desc));
        return (
            <div className="navbar-wrapper home-wrapper detailed-post-wrapper">
                <div>
                    <div className="detailed-post-title">{detailedPost.title}</div>
                    <div className="detailed-post-img">
                        <Image
                            src={detailedPost.image}
                            fluid
                            width="1000px"
                            height="555px"
                        />
                    </div>
                    {desc.length > 0 &&
                        desc.map((para, i) => {
                            return <div className="detailed-post-desc">{para}</div>;
                        })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        detailedPost: state.posts.detailedPost,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailedPostView);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'services/firebase';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class RenderPosts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      expanded: {},
    };
  }

  componentDidMount() {
    firebase.database().ref('posts').on('value', (snapshot) => {
      this.setState({ posts: snapshot.val(), })
    });
  }

  toggleExpanded(i) {
    console.log(i)
    this.setState({
      expanded: {
        ...this.state.expanded,
        [i]: !this.state.expanded[i]
      }
    })
  }

  renderCardItems(post, i) {
    console.log(this.state.expanded)
    return (
      <Card key={i} onClick={() => this.toggleExpanded(i)} style={ this.state.expanded[i] ? {
        position: 'absolute',
        width: '100%',
        left: 0,
        right: 0,
        top: 0,
        bottom: -20,
        zIndex: 99999,
        overflowY: 'scroll',
      } : { maxWidth: this.props.isDesktop ? 400 : null, flex: 1, margin: 10 }}>
        <CardHeader
          title="Firescribe"
          subtitle="Admin"
          avatar="#"
        >
        </CardHeader>
        <CardMedia
          overlay={<CardTitle style={{ maxWidth: 600, margin: '0 auto' }} title={post.overlayTitle} subtitle={post.overlaySubtitle}/>}
        >
          <div style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${post.postImage})`, width: '100%', height: this.state.expanded[i] ? 400 : 200}}></div>
        </CardMedia>
        <CardTitle style={{ maxWidth: 600, margin: '0 auto' }} title={post.title} subtitle={post.subtitle}/>
        <CardText style={{ maxWidth: 600, margin: '0 auto' }} dangerouslySetInnerHTML={this.state.expanded[i] ? {__html: post.content} : {__html: post.excerpt}}>
        </CardText>
        <CardActions>
          <FlatButton label="Action1"/>
          <FlatButton label="Action2"/>
        </CardActions>
      </Card>
    )
  }

  render() {
    console.log(this.state)
    return (
      <div style={this.props.isDesktop ? { padding: 20, display: 'flex', alignContent: 'space-between' } : { display: 'flex', alignContent: 'center', flexDirection: 'column' }}>
        {this.state.posts && this.state.posts.map((post, i) => this.renderCardItems(post, i))}
      </div>
    );
  }
}

function select(state) {
  return {
    isDesktop: state.window.isDesktop,
    config: state.config,
  }
}

export default connect(select)(RenderPosts);

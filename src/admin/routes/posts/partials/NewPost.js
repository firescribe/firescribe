import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardWithToolbar from 'admin/components/CardWithToolbar';
import TextField from 'material-ui/TextField';

function NewPost() {
    return (
        <CardWithToolbar title="New Post" btnText="Save">
            <div>
                <TextField
                    hintText="Enter the title of your post"
                    floatingLabelText="Title"
                    style={{ width: '100%' }}
                /><br />
                <TextField
                    hintText="Enter the subtitle of your post"
                    floatingLabelText="Subtitle"
                    style={{ width: '100%' }}
                /><br />
                <TextField
                    hintText="Your thoughts here"
                    floatingLabelText="Body"
                    style={{ width: '100%' }}
                    multiLine={true}
                /><br />
            </div>
        </CardWithToolbar>
    );
}

function select(state) {
    return {
        isDesktop: state.window.isDesktop,
        config: state.config,
    }
}

export default connect(select)(NewPost);


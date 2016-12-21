<<<<<<< HEAD
{/*import React, { Component } from 'react';*/}
{/*import { connect } from 'react-redux';*/}
{/*import CardWithToolbar from 'admin/components/CardWithToolbar';*/}
{/*import TextField from 'material-ui/TextField';*/}

{/*class NewPost extends Component {*/}

    {/*constructor() {*/}
        {/*super();*/}
        {/*this.state = {*/}
            {/*text: 'initial content',*/}
        {/*}*/}
    {/*}*/}

    {/*render() {*/}
        {/*return (*/}
            {/*<CardWithToolbar title="Create new post" btnText="Save">*/}
                {/*<div>*/}
                    {/*<TextField*/}
                        {/*hintText="Enter the title of your post"*/}
                        {/*floatingLabelText="Title"*/}
                        {/*style={{ width: '100%' }}*/}
                    {/*/><br />*/}
                    {/*<TextField*/}
                        {/*hintText="Enter the subtitle of your post"*/}
                        {/*floatingLabelText="Subtitle"*/}
                        {/*style={{ width: '100%' }}*/}
                    {/*/><br />*/}
                    {/*<TextField*/}
                        {/*hintText="Your thoughts here"*/}
                        {/*floatingLabelText="Body"*/}
                        {/*style={{ width: '100%' }}*/}
                        {/*multiLine={true}*/}
                    {/*/><br />*/}
                    {/*<EditableDiv style={{ overflow: 'auto', width: 300, height: 100, maxHeight: 100 }} content={this.state.content} onChange={this.handleContentChange} />*/}
                {/*</div>*/}
            {/*</CardWithToolbar>*/}
        {/*);*/}
    {/*}*/}
{/*}*/}
=======
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
>>>>>>> 2570cc0c03b0c7bde9e72830f4a790ea915549d9

{/*function select(state) {*/}
    {/*return {*/}
        {/*isDesktop: state.window.isDesktop,*/}
        {/*config: state.config,*/}
    {/*}*/}
{/*}*/}

{/*export default connect(select)(NewPost);*/}


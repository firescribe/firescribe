import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';


function CardWithToolbar({ children, title, btnText }) {
    return (
        <Paper>
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <ToolbarTitle text={title} style={{ paddingLeft: 20 }}/>
                </ToolbarGroup>
                <ToolbarGroup lastChild={true}>
                    <FontIcon className="muidocs-icon-custom-sort"/>
                    <ToolbarSeparator />
                    <RaisedButton label={btnText} primary={true}/>
                </ToolbarGroup>
            </Toolbar>
            <div style={{ padding: 24, }}>{children}</div>
        </Paper>
    );
}

export default CardWithToolbar;

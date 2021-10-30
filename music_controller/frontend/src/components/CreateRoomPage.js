import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core/FormHelperText';
import { FormControl } from '@material-ui/core/FormControl';
import { Link } from 'react-router-dom/Link';
import { Radio } from '@material-ui/core/Radio';
import { RadioGroup } from '@material-ui/core/RadioGroup';
import { FormControlLabel } from '@material-ui/core/FormControlLabel';

export default class CreateRoomPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<Grid container spaceing={1}>
            <Grid item xs={12} align='center'>
                <Typography component='h4' variant='h4'>
                    Create A Room
                </Typography>
            </Grid>
        </Grid>);
    }
}
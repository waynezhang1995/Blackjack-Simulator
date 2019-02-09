import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./Card.css"

const css = {
    cardBody: 'card-body',
};

class CardBody extends Component {

    render() {
      return (
        <Card className={css.cardBody}>
            <CardContent>
                <Typography variant="h5" component="h2">
                Test
                </Typography>
                <Typography component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Card>
      );
    }
  }

export default CardBody;
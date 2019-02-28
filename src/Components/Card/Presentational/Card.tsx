import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './Card.css';

interface CradProps {
    card: {
        suit: String,
        number: String
    };
}

const css = {
    cardBody: 'card-body',
    card: 'card'
};

class CardBody extends Component<CradProps, {}> {

    getCrad() {
        const { card } = this.props;
        return css.card + ' ' + card.suit + card.number;
    }

    render() {
        return (
            <Card className={css.cardBody}>
                <div className={this.getCrad()}></div>
            </Card>
        );
    }
}

export default CardBody;
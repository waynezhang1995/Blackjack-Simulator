import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import "./Card.css"

const css = {
    cardBody: 'card-body',
    card: 'card'
};

class CardBody extends Component {

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
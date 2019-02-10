import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import "./Card.css"

const css = {
    cardBody: 'card-body',
    cardNumer: 'card-number',
    cardContent: 'card-content'
};

class CardBody extends Component {

    render() {
        const { number } = this.props;
        return (
            <Card className={css.cardBody}>
                <div className={css.cardContent}>
                    <span className={css.cardNumer}>
                        {number}
                    </span>
                </div>
            </Card>
        );
    }
}

export default CardBody;
import React, { useState, useCallback } from 'react'
import Card from './Card'
import update from 'immutability-helper'
import { Layout } from 'antd'
import { useDrag, useDrop } from 'react-dnd'

const Grid = (props) => {
    const [cards, setCards] = useState(props.images)
    const moveCard = useCallback(
        (dragIndex, hoverIndex) => {
            const dragCard = cards[dragIndex]
            setCards(
                update(cards, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragCard],
                    ],
                }),
            )
        },
        [cards],
    )

    const updateCards = () => {
        props.updateOrder(cards);
    }

    const renderCard = (card, index) => {
        return (
            <Card
                key={card.id}
                index={index}
                id={card.id}
                moveCard={moveCard}
                updateCards={updateCards}
                src={card.src}
                thumbnail={card.thumbnail}
            />
        )
    }
    return (
        <>
            <Layout.Content style={{ padding: '10px 50px' }}>
                {cards.map((card, i) => renderCard(card, i))}
            </Layout.Content>
        </>
    )
}

export default Grid;

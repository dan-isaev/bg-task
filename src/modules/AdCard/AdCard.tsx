import * as React from 'react';

export interface AdProps {
    title: string;
    description: string;
    town: string;
    phone: string;
}

export interface AdCardProps extends AdProps {
    id: number;
    onDeleteButtonClick: (id: number) => void;
}

export const AdCard = ({
    title,
    description,
    town,
    phone,
    id,
    onDeleteButtonClick
}: AdCardProps) => {
    return (
        <div className="adCard">
            <div className="adCard__title">{title}</div>
            <div className="adCard__description">{description}</div>
            <div className="adCard__town">Населенный пункт: {town}</div>
            <div className="adCard__phone">Телефон: {phone}</div>
            <button className="adCard_deleteButton" onClick={() => onDeleteButtonClick(id)}>Удалить объявление</button>
        </div>
    );
};

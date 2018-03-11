import * as React from 'react';

import { AdCard, AdProps } from '../AdCard';

interface MainProps {
    ads: AdProps[];
    localStorageNotAvailable: boolean;
    onAdDeleteButtonClick: (id: number) => void;
}

export const Main = ({
    ads,
    localStorageNotAvailable,
    onAdDeleteButtonClick
}: MainProps) => {
    return (
        <div className="main">
            {localStorageNotAvailable
            ? <div className="main__localStorageNotAvailable">Локальное хранилище недоступно!</div>
            : ads.map((ad, index) => 
                <AdCard
                    key={index}
                    id={index}
                    title={ad.title}
                    description={ad.description}
                    town={ad.town}
                    phone={ad.phone}
                    onDeleteButtonClick={onAdDeleteButtonClick}
                />
            )
            }
        </div>
    );
};

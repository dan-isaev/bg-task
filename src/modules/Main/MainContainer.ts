import * as React from 'react';
import autobind from 'autobind-decorator';

import { Main } from './Main';
import { AdProps } from '../AdCard';
import { storageAvailable } from '../Utils';

interface MainContainerProps {

}

interface MainContainerState {
    ads: AdProps[];
    localStorageNotAvailable: boolean;
}

export class MainContainer extends React.Component<MainContainerProps, MainContainerState> {
    constructor(props: MainContainerProps) {
        super(props);

        this.state = {
            ads: [],
            localStorageNotAvailable: false
        };
    }

    public render() {
        return React.createElement(Main, {
            ads: this.state.ads,
            localStorageNotAvailable: this.state.localStorageNotAvailable,
            onAdDeleteButtonClick: this.handleAdDeleteButtonClick
        });
    }

    public componentDidMount() {
        if (!storageAvailable('localStorage')) {
            this.setState({
                localStorageNotAvailable: true
            });

            return;
        }

        const ads = localStorage.getItem('bg_ads');

        if (ads === null) {
            return;
        }

        this.setState({
            ads: JSON.parse(ads)
        });
    }

    @autobind
    protected handleDeleteButtonClick(id: number) {

    }
}
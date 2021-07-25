import React from 'react';
import { GlobalStyles } from '../../styles/GlobalStyles';
import './loadingStyles'
import { LoadingContainer } from './loadingStyles';

const Loader = () => {
    return (
        <LoadingContainer>
            <GlobalStyles />
            <h1>DEBASIS SAIKIA</h1>
        </LoadingContainer>
    )
}

export default Loader

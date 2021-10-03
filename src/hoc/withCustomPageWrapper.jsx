import React from 'react';
import CustomPageWrapper from '../components/CustomPageWrapper/CustomPageWrapper';

export const withCustomPageWrapper = Component => props => (
    <CustomPageWrapper>
        <Component {...props} />
    </CustomPageWrapper>
);
import React from 'react';
import styled from '@emotion/styled';

import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

function FanSlider() {

    const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

    const IOSSlider = withStyles({
        root: {
            color: '#3880ff',
            height: 2,
            padding: '15px 0',
        },
        thumb: {
            height: 28,
            width: 28,
            backgroundColor: '#fff',
            boxShadow: iOSBoxShadow,
            marginTop: -14,
            marginLeft: -14,
            '&:focus,&:hover,&$active': {
                boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    boxShadow: iOSBoxShadow,
                },
            },
        },
        active: {},
        valueLabel: { opacity: 0 },
        track: {
            height: 2, backgroundColor: '#fff'
        },
        rail: {
            height: 2,
            opacity: 0.5,
            backgroundColor: '#fff',
        },
        mark: {
            backgroundColor: '#bfbfbf',
            height: 8,
            width: 1,
            marginTop: -3,
        },
        markActive: {
            opacity: 1,
            backgroundColor: 'currentColor',
        },
    })(Slider);

    return (
        <RelativeWrapper>
            <SlowLabel />
            <IOSSlider defaultValue={50} />
            <FastLabel />
        </RelativeWrapper>
    )

}

const RelativeWrapper = styled.div`position: relative;`;

const SlowLabel = styled.small`
    position: absolute;
    &::after {
        content: 'Slow';
    }
    bottom: 30px;
`;

const FastLabel = styled.small`
    position: absolute;
    &::after {
        content: 'Fast';
    }
    right: 0;
    bottom: 30px;
`;

export default FanSlider;
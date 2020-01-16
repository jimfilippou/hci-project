import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Flex } from '../Common/commons';
import { Flake, Fire } from './styles';

export default () => {

    const [mode, setMode] = useState('cold');
    const [checked, setChecked] = React.useState(false);

    return (
        <div>
            <Flex>
                <Flake
                    onClick={() => setMode('cold')}
                    active={mode === 'cold' && !checked}
                >
                    <i className="far fa-snowflake"></i>
                </Flake>
                <Fire
                    onClick={() => setMode('warm')}
                    active={mode === 'warm' && !checked}
                >
                    <i className="fas fa-fire"></i>
                </Fire>
            </Flex>
            <FormControlLabel
                style={{ marginTop: '24px' }}
                control={
                    <Checkbox
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        color="primary"
                    />
                }
                label="Auto"
            />
        </div>
    )

}

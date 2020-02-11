import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Flex } from '../Common/commons';
import { Flake, Fire } from './styles';

export default (props) => {

    const [mode, setMode] = useState('cold');
    const [checked, setChecked] = React.useState(false);

    function fun1(){
        setMode('warm');
        document.getElementById("audio").play();
    }

    function fun2(){
        setMode('cold');
        document.getElementById("audio").play();
    }

    return (
        <div>
            <Flex>
                <Flake
                    onClick={() => fun2()}
                    active={mode === 'cold' && !checked}
                >
                    <i className="far fa-snowflake"></i>
                </Flake>
                <Fire
                    onClick={() => fun1()}
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
                        onChange={() => {
                            setChecked(!checked);
                            if (checked) {
                                props.disable();
                            } else {
                                props.enable();
                            }
                            
                        }}
                        color="primary"
                    />
                }
                label="Auto"
            />
        </div>
    )

}

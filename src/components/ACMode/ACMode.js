import React, { useState } from 'react';

export default (params) => {

    const [active, setActive] = useState('cold');

    const disabled = { opacity: '0.5' };

    return (
        <div className="buttons">
            <div onClick={() => setActive('cold')} style={active == 'warm' ? disabled : {}} className="button flake">
                <i className="far fa-snowflake"></i>
            </div>
            <div onClick={() => setActive('warm')} style={active == 'cold' ? disabled : {}} className="button fire">
                <i className="fas fa-fire"></i>
            </div>
        </div>
    )

}

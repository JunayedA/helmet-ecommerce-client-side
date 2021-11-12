import React from 'react';
import { Placeholder } from 'react-bootstrap';

const Submit = () => {
    return (
        <div>
            <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
                </Placeholder>
                    <h1 className="text-dark">Submission successful. We'll let you know in your email within three days.</h1>
                <Placeholder as="p" animation="wave">
                <Placeholder xs={12} />
            </Placeholder>
        </div>
    );
};

export default Submit;
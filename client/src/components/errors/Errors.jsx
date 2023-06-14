import React from 'react';
import { useRouteError } from 'react-router-dom';

function Errors() {
    const error = useRouteError();

    return (
        <>
            <h2> { error.status } </h2>

            <h2>
                {
                    error.status === 404 ?
                        'The page you\'re looking for doesn\'t exist.'
                    :
                        'Something went wrong...'
                }
            </h2>
        </>
    );
}

export default Errors;

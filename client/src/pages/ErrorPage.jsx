import React from 'react';
import { Global, Errors } from '../components';

function ErrorPage() {
    return (
        <>
            <Global.Header />
            <Global.Main >
                <Errors />
            </Global.Main>
            <Global.Footer />
        </>
    );
}

export default ErrorPage;

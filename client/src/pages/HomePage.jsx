import React from 'react';
import { Global } from '../components';

function HomePage() {
    return (
        <>
            <Global.Header />
            <Global.Main>
                <ul>
                    <li>Home</li>
                </ul>
            </Global.Main>
            <Global.Footer />
        </>
    );
}

export default HomePage;

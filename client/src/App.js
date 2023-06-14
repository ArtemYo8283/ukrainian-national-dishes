import React from 'react';

//---------------- router imports ---------------//
import { RouterProvider } from 'react-router-dom';
import router from './router';
//-----------------------------------------------//

//----------------------- redux imports ----------------------//
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import exportStorage from './redux/store';
//------------------------------------------------------------//

function App() {
    return (
        <Provider store={ exportStorage.store }>
            <PersistGate loading={ null } persistor={ exportStorage.persistor }>
                <RouterProvider router={ router } />
            </PersistGate>
        </Provider>
    );
}

export default App;

import { persistStore } from 'redux-persist';
import createSagaMidleware from 'redux-saga';
import createStore from './createStore';
import persistReducers from './persistiReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
    process.env.NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;

const sagaMiddleware = createSagaMidleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };

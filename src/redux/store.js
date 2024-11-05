import { configureStore, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer"
import { loadState, saveState } from "../utils/storage";
import { addCard, totalCount, deletProduct } from "./reducers/productReducer";


const totalCountMiddleware = createListenerMiddleware();

totalCountMiddleware.startListening({
    matcher: isAnyOf(addCard, deletProduct),
    effect: (action, api) => {
        api.dispatch(totalCount());
    }
});


export const store = configureStore({
    reducer: {
        product: productReducer,
    },
    preloadedState: {
        product: loadState("products"),
    },
    middleware: (defaultMiddleware) => defaultMiddleware().prepend(totalCountMiddleware.middleware),
});

store.subscribe(() => {
    saveState("products", store.getState().product);
});
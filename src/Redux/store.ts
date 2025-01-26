import { configureStore } from "@reduxjs/toolkit";
import authSlice from './Feature/authSlice'
import { baseApi } from "./Api/baseApi";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";


const persistConfig = {
    key: 'auth',
    storage,
}

const persistedAuthReducer = persistReducer(persistConfig, authSlice)


export const store =configureStore({
    reducer:{
        auth: persistedAuthReducer,
        [baseApi.reducerPath]:baseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(baseApi.middleware),

})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
import { configureStore } from '@reduxjs/toolkit';
import setContinentSelectedReducer from './continent/reducer';
import { SelectedContinent } from './continent/action';

// import { loadingBarReducer } from 'react-redux-loading-bar';
// import authUserReducer from './authUser/reducer';
// import isPreloadReducer from './isPreload/reducer';
// import forumDetailReducer from './forumDetail/reducer';
// import forumsReducer from './forums/reducer';
// import usersReducer from './users/reducer';
// import modalThreadReducer from './modalThread/reducer';
// import filterCategoryReducer from './filterCategory/reducer';
// import getLeaderboardsReducer from './leaderboards/reducer';

interface RootState {
  continent: SelectedContinent
}

const store = configureStore({
  reducer: {
    // continent: setContinentSelectedReducer,
    // isPreload: isPreloadReducer,
    // users: usersReducer,
    // forums: forumsReducer,
    // forumDetail: forumDetailReducer,
    // loadingBar: loadingBarReducer,
    // modal: modalThreadReducer,
    // filterCategory: filterCategoryReducer,
    // leaderboards: getLeaderboardsReducer,
  },
});

export default store;

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
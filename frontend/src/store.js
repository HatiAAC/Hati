import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';
import accountReducer from './reducers/AccountReducer';
import playerReducer from './reducers/PlayerReducer';
import forumReducer from './reducers/ForumReducer';
import guildReducer from './reducers/GuildReducer';
import onlineReducer from './reducers/OnlineReducer';
import shopReducer from './reducers/ShopReducer';
import inventoryReducer from './reducers/InventoryReducer';
import pagarmeReducer from './reducers/PagarmeReducer';

const reducers = combineReducers({
  account: accountReducer,
  player: playerReducer,
  forum: forumReducer,
  guild: guildReducer,
  online: onlineReducer,
  shop: shopReducer,
  inventory: inventoryReducer,
  pagarme: pagarmeReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;

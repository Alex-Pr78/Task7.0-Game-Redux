import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Game } from './Game/Game';
import { ReduxRender } from './Game/redux-manager';
import { store } from './Game/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<ReduxRender store={store}>
		<Game />
	</ReduxRender>,
);

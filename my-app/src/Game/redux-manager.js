const reduxManager = {
	store: null,
	render: () => {},
}

export const ReduxRender = ({ children, store }) => {
	reduxManager.store = store;
	return children;
}

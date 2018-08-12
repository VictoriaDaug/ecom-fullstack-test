const productReducer = (state = [], action) => {

    switch (action.type) {
        case 'FETCH_SUCCESS':
            return [...state, ...action.products];
        default:
            return state;
    }
};

export default productReducer;

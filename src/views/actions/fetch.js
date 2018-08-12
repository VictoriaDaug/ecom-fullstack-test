export const fetchProductsSuccess = products => ({
    type: 'FETCH_SUCCESS',
    products
});

const APP_PORT_NUM = process.env.PORT || 3000;

export const fetchProducts = () => (dispatch, getState) =>
     fetch(`http://localhost:${APP_PORT_NUM}/api/products`, {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' }
     })
     .then(res => res.json())
     .then(data => dispatch(fetchProductsSuccess(data)))
     .catch(err => {
         console.error(`[fetchProducts] ${err}`);
     });

import { AGREGAR_ITEM, AUMENTAR_CANTIDAD, BORRAR_ITEM, REDUCIR_CANTIDAD } from "./actions";

const initialState = [];

const CartReducer = (state = initialState, action) => {
    let newState;
    let product;

    switch(action.type) {
        case AGREGAR_ITEM:
            product = state.find(item => (item.productId == action.payload.productId) && (item.size == action.payload.size) && (item.color == action.payload.color));

            if (product) {
                product.count++;
            } else {
                state.push({productId:action.payload.productId, size:action.payload.size, color:action.payload.color, count:1})
            }           

            return state;
        case BORRAR_ITEM:
            newState = state.filter(item => (item.productId != action.payload.productId) && (item.size != action.payload.size) && (item.color != action.payload.color));

            return newState;
        case AUMENTAR_CANTIDAD:
            product = state.find(item => (item.productId == action.payload.productId) && (item.size == action.payload.size) && (item.color == action.payload.color));
            product.count++;

            return [...state];
        case REDUCIR_CANTIDAD:
            product = state.find(item => (item.productId == action.payload.productId) && (item.size == action.payload.size) && (item.color == action.payload.color));

            if (product.count > 1) {
                product.count--;

                return [...state];
            } else {
                newState = state.filter(item => (item.productId != action.payload.productId) || (item.size != action.payload.size) || (item.color != action.payload.color));

                return newState;
            }
        default:
            return state;
    }
}

export default CartReducer
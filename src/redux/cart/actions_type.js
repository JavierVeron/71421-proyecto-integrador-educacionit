import { AGREGAR_ITEM, BORRAR_ITEM, AUMENTAR_CANTIDAD, REDUCIR_CANTIDAD } from "./actions";

export const agregarItem = (item) => (
    {
        type:AGREGAR_ITEM,
        payload:item
    }
)

export const borrarItem = (item) => (
    {
        type:BORRAR_ITEM,
        payload:item
    }
)

export const aumentarCantidad = (item) => (
    {
        type:AUMENTAR_CANTIDAD,
        payload:item
    }
)

export const reducirCantidad = (item) => (
    {
        type:REDUCIR_CANTIDAD,
        payload:item
    }
)
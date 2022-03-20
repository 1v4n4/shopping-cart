import { CartItemType } from "./types";

const getProducts = async (): Promise<CartItemType[]> =>
await (await fetch('https://fakestoreapi.com/products')).json();

export { getProducts };
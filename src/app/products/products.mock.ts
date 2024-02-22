export const productsList:Product[] = [
    {id: 1, name: 'Fanta', price: 10, description: 'prueba'},
    {id: 2, name: 'CocaCola', price: 15, description: 'prueba2'},
    {id: 3, name: 'Sprite', price: 12, description: 'prueba3'},
    {id: 4, name: 'Kas', price: 13},
    {id: 5, name: 'Pepsi', price: 11, description: 'prueba5'},

]

export interface Product{

    id: number | string;
    name: string;
    price: number;
    description?: string;
}
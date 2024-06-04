export interface CartItem {
    id:number,
    name:string
    price:{
        old:number
        current:number
    },
    quantity:number
}

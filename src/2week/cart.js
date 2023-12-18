const ShoppingCart = () => {
    let shopping_cart = [];


    const cartGetter = () => [...shopping_cart]
    
    const cartTotalGetter = () =>  shopping_cart.reduce((acc,item)=> acc + item.price, 0);
    
    const cartSetter = (action, item) => {
        switch(action){
            case 'add' :
                shopping_cart = [...shopping_cart, item]
                console.log(shopping_cart)
                break;
            case 'update' :
                
               break;
            case 'delete':

                break; 
            default :
                throw new Error('Action must be one of "add", "update", or "delete"')
            }
        }


    return {
        cartGetter,
        cartTotalGetter,
        cartSetter,
    }}

    export default ShoppingCart;
export const state = () => ({
    cart: [],
    cartTotal: 0
})
export const mutations = {
    addToCart(state, item) {
        let found = state.cart.find(product => product.productId === item.productId);
        if (found) {
            found.productQuantity = item.productQuantity
        } else {
            state.cart.push(item)
        }
    },
    buyNow(state, item) {
        
        state.cart.push(item)
        
    },

    cartTotals(state,sum) {
         sum = 0;
        state.cart.forEach(e => {
            sum += e.subTotal;
        });
        state.cartTotal = sum;
    },
    updateQuantity(state, item) {
        let found = state.cart.find(product => product.productId === item.productId);
        if (found) {
            found.productQuantity = item.productQuantity
            found.subTotal = found.price * found.productQuantity
            if (found.productQuantity < 1 || found.productQuantity === null) {
                let index = state.cart.indexOf(item);
                state.cart.splice(index, 1)
            }
        } else {
            return false;
        }
    },
    decreaseQuantity(state, item) {
        let found = state.cart.find(product => product.productId === item.productId);
        if (found) {
            found.productQuantity--
            found.subTotal = found.price * found.productQuantity
            if (found.productQuantity < 1) {
                let index = state.cart.indexOf(item);
                state.cart.splice(index, 1)
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    increaseQuantity(state, item) {
        let found = state.cart.find(product => product.productId === item.productId);
        if (found && found.productQuantity < 10) {
            found.productQuantity++
            found.subTotal = found.price * found.productQuantity
        } else {
            return false;
        }
    },
    removeFromCart(state, item) {
        let index = state.cart.indexOf(item);
        state.cart.splice(index, 1)

    },
    emptyCart(state) {
        state.cart=[]

    }
}

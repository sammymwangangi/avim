import {mapState} from "vuex";

export default {
    computed: {
        ...mapState({
            items: state => state.cart.cart,
        }),
        cartTotal() {
            let sum = 0;
            this.items.forEach(e => {
                sum += e.subTotal;
            });
            return sum
        }
    },
};

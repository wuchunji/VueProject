export default {
    namespaced: true,
    actions: {

    },
    mutations: {
        ADD(state, value) {
            // console.log(1);
            state.orderData.push(value);
        },
        DELETE(state, value) {
            // console.log(value);
            state.orderData = state.orderData.filter((item) => {
                return item.id != value;
            })
        }
    },
    state: {
        orderData:[]
    }
}
export default {
    namespaced: true,
    actions: {

    },
    mutations: {
        ADD(state, value) {
            // console.log(1);
            state.listData.push(value);
        },
        DELETE(state, value) {
            // console.log(value);
            state.listData = state.listData.filter((item) => {
                return item.id != value;
            })
        },
        INCREASE(state, value) {
            state.listData.forEach(item => {
                if(item.id == value) {
                    item.save++;
                }
            });
        },
        DECREASE(state, value) {
            state.listData.forEach(item => {
                if(item.id == value) {
                    item.save--;
                }
            });
        }
    },
    state: {
        listData:[
            {id:1, title:'黑色卫衣', save: 129, price: 299},
            {id:2, title:'黑色T恤', save: 141, price: 199},
            {id:3, title:'双色外套', save: 138, price: 399},
            {id:4, title:'白色卫衣', save: 132, price: 299},
        ]
    }
}
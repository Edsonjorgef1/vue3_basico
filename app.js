
const app = {
    data() {
        return {
            title: 'Curso basico de Vue 3',
            name: 'Edson',
            lastName: 'Francisco',
            products: [
                {
                    title: 'Filme 01',
                    description: 'Filme muito interessante',
                    image: './assets/img/img3.jpg',
                    stars: 3,
                },
                {
                    title: 'Filme 02',
                    description: 'Segundo filme na lista',
                    image: './assets/img/img1.jpg',
                    stars: 5,
                },
                {
                    title: 'Filme 03',
                    description: 'Outro filme interessante',
                    image: './assets/img/img2.jpg',
                    stars: 2,
                }
            ],
            cart: [],
        }
    },

    methods: {
        addCart(product) {
            // this.title = 'Changed'
            this.cart.push(product)
        },

        inCart(product) {
            return this.cart.indexOf(product) != 1
        },

        removeCart(product) {
            // this.cart = this.cart.filter((prod, index) => {
            //     return product != prod
            // })
            this.cart = this.cart.filter((prod, index) => product != prod );

        },
    }
}

Vue.createApp(app).mount('#app')

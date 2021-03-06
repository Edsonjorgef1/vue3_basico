
const myApp = {
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
            styles: {
                backgroundColor: '#000',
                color: '#fff',
            },
            themeBlack: true
        }
    },

    methods: {
        addCart(product) {
            // this.title = 'Changed'
            this.cart.push(product)
        },

        inCart(product) {
            return this.cart.indexOf(product) != -1
        },

        removeCart(product) {
            // this.cart = this.cart.filter((prod, index) => {
            //     return product != prod
            // })
            this.cart = this.cart.filter((prod, index) => product != prod );

        },

        toogleTheme () {
            this.themeBlack = ! !this.themeBlack

            if(this.themeBlack){
                this.styles.backgroundColor = '#000'
                this.styles.color = '#fff'
            } else {
                this.styles.backgroundColor = '#fff'
                this.styles.color = '#000'
            }
        }
    },

    computed: {
        fullName () {
            return this.name + ' ' + this.lastName
        }
    }
}

const app = Vue.createApp(myApp)

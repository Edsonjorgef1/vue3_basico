// Objecto que vai retornar a informacao no componente
const productDetail = {
    template: ` <p> {{product.title}}</p>
                    <img :src="product.image" :alt="product.title" style="max-width: 500px; max-height: 500px;">
                    <p> <strong v-if="product.stars > 0"> {{ product.stars }}&#9734; </strong> {{product.description}}</p>
                    <button
                            @click.prevent="addCart(product)"
                            :disabled="productInCart"
                            :class="{'button-disabled' : productInCart }">
                        ADD CART
                    </button>
    `,
    props: ['product', 'productInCart'],
    methods: {
        addCart(product){
            console.log('Add cart in component')
        }
    },

    data(){
        return {
            example: 123,
        }
    }
}

app.component('product-detail', productDetail)  // Registrando o componente
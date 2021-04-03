
const app = {
    data(){
        return {
            name: 'Edson',
            lastName: 'Francisco',
            product: {
                title: 'Filme 01',
                description: 'Filme muito interessante',
                image: './assets/img/img3.jpg',
            }
        }
    }

}

Vue.createApp(app).mount('#app')


const app = {
    data(){
        return {
            name: 'Edson',
            lastName: 'Francisco',
            product: {
                title: 'SmallVille',
                description: 'Filme muito interessante',
                image: './assets/img/img3.jpg',
            },
            product2: {
                title: 'Filme 02',
                description: 'Outro filme interessante',
                image: './assets/img/img2.jpg',
            }
        }
    }

}

Vue.createApp(app).mount('#app')

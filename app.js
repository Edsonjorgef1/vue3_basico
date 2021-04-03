
const app = {
    data(){
        return {
            name: 'Edson',
            lastName: 'Francisco',
            product: {
                title: 'SmallVille',
                description: 'Filme muito interessante',
                image: './assets/img/img3.jpg',
                stars: 3,
            },
            product2: {
                title: 'Filme 03',
                description: 'Segundo filme na lista',
                image: './assets/img/img1.jpg',
                stars: 5,
            },
            product3: {
                title: 'Filme 02',
                description: 'Outro filme interessante',
                image: './assets/img/img2.jpg',
                stars: 0,
            },
        }
    }

}

Vue.createApp(app).mount('#app')

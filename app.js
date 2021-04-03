
const app = {
    data(){
        return {
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
        }
    }

}

Vue.createApp(app).mount('#app')

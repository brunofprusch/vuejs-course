new Vue({
    el: '#desafio',
    data: {
        nome: 'Bruno Feldmann Prusch',
        idade: 28,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        idadeVezesTres() {
            return this.idade * 3;
        },
        numeroRandomico() {
            return Math.random();
        }
    }
})
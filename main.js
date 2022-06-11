const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
      updateCart(id) {
        this.cart.push(id)
      },
      removeFromCart(id) {
        for (let i = 0; i < this.cart.length; i++) {
          if (this.cart[i] === id) {
            console.log("CountDebugula 4");
            this.cart.splice(i,1)
            return
          }
        }
      }
    }
})

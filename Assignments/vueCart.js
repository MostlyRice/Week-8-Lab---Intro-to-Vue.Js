let app = Vue.createApp({
    data() {
        return {
            name: 'Hat',
            quantity: 1,
            unitPrice: 4.99,
            maxQuantity: 20,
            quantityError: ''
        }
    },
    computed: {
        total() {
            // set an error message if the new value of quantity is not valid
            if (!Number.isInteger(this.quantity)) {
                this.quantityError = 'Quantity must be a number'
            } else if (this.quantity < 0 || this.quantity > this.maxQuantity) {
                this.quantityError = 'Quantity must be between 0 and 20'
            }

            // Clear error if quantity is valid
            else {
                this.quantityError = ''

                // compute price
                let totalPrice = this.quantity * this.unitPrice
                let formattedPrice = totalPrice.toFixed(2)
                return formattedPrice
            }
        }
    }
})

app.mount('#app')
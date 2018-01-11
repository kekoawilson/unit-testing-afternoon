const cart = require('./cart')
    , cars = require('./data/cars')

describe('Cart Properties:', () => {

    test('cart should be empty array', () => {
        expect(typeof cart.cart).toEqual('object')
        expect(cart.cart.length).toBe(0)
    })

    test('total prop should be 0', () => {
        expect(cart.total).toEqual(0)
    })
})

describe('Cart Methods:', () => {
    afterEach(() => {
        cart.cart = []
        cart.total = 0
    })

    test('add to the cart', () => {
        cart.addToCart(cars[0])
        cart.addToCart(cars[1])
        cart.addToCart(cars[2])

        expect(cart.cart.length).toEqual(3)
        expect(cart.cart[0]).toEqual(cars[0])
        expect(cart.cart[1]).toEqual(cars[1])
    })

    test('add to the cart should increase total', () => {
        cart.addToCart(cars[3])
        cart.addToCart(cars[4])
        cart.addToCart(cars[5])

        expect(cart.total).toEqual(cars[3].price + cars[4].price + cars[5].price)
    })

    test('should remove a car object from the cart array.', () => {
        cart.addToCart( cars[0] );
        cart.addToCart( cars[1] );
        cart.addToCart( cars[2] );
      
        cart.removeFromCart( 1, cars[1].price );
      
        expect( cart.cart.length ).toEqual( 2 );
        expect( cart.cart[0] ).toEqual( cars[0] );
        expect( cart.cart[1] ).toEqual( cars[2] );
      });
    
      test('removeFromCart() should decrease the total property.', () => {
        cart.addToCart( cars[0] );
        cart.addToCart( cars[8] );
        cart.addToCart( cars[2] );
    
        cart.removeFromCart( 0, cars[0].price );
        cart.removeFromCart( 1, cars[2].price );
    
        expect( cart.total ).toEqual( cars[8].price );
      });
    
      test('checkout() shoud empty the cart array and set total to 0.', () => {
        cart.addToCart( cars[0] );
        cart.addToCart( cars[1] );
        cart.addToCart( cars[2] );
        cart.addToCart( cars[3] );
    
        cart.checkout();
    
        expect( cart.cart.length ).toEqual( 0 );
        expect( cart.total ).toEqual( 0 );
      });
    

})
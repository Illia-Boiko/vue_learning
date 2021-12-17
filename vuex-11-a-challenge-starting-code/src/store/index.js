import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      products: [
        {
          id: 'p1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: 'p2',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: 'p3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
      ],
      cart: { items: [], total: 0, qty: 0 },
    };
  },

  getters: {
    getIsLoggedIn(state) {
      return state.isLoggedIn;
    },

    getProducts(state) {
      return state.products;
    },

    getCart(state) {
      return state.cart;
    },
  },

  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },

    setCartItems(state, payload) {
      state.cart.items.push(payload);
    },

    deleteCartItem(state, payload) {
      state.cart.items.splice(payload, 1);
    },

    addCartQty(state) {
      state.cart.qty++;
    },

    deleteCartQty(state, payload) {
      state.cart.qty -= payload.qty;
    },

    addCartTotal(state, payload) {
      state.cart.total += payload;
    },

    deleteCartTotal(state, payload) {
      state.cart.total -= payload.price * payload.qty;
    },

    setCartItemQty(state, payload) {
      state.cart.items[payload].qty++;
    },
  },

  actions: {
    authorization(context, payload) {
      context.commit('setIsLoggedIn', payload);
    },

    addProductToCart({ commit, getters }, payload) {
      const productInCartIndex = getters.getCart.items
        .findIndex((cartItem) => cartItem.productId === payload.id);

      if (productInCartIndex >= 0) {
        commit('setCartItemQty', productInCartIndex);
      } else {
        const newItem = {
          productId: payload.id,
          title: payload.title,
          image: payload.image,
          price: payload.price,
          qty: 1,
        };
        commit('setCartItems', newItem);
      }

      commit('addCartQty');
      commit('addCartTotal', payload.price);
    },

    removeProductFromCart({commit, getters}, payload) {
      const productInCartIndex = getters.getCart.items
        .findIndex((cartItem) => cartItem.productId === payload
      );
      const prodData = getters.getCart.items[productInCartIndex];
      commit('deleteCartItem', productInCartIndex);
      commit('deleteCartQty', prodData);
      commit('deleteCartTotal', prodData);
    },
  },
})

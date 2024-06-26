const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
      user: {},
      products: [],
      product: {},
      categories: [],
      shoppingCarts: {},
      shoppingCartItems: [],
      currentItemCart: { quantity: 0 },
      bill: {},
      bills: [],
      billsItems: [],
      offers: [],
      suscriptions: [],
      upload: '',
      reviews: [],
      favorites: [],
      isLogin: false,
      stripePublicKey: '',
      message: null,
      demo: [{ title: "FIRST", background: "white", initial: "white" },
      { title: "SECOND", background: "white", initial: "white" }]
    },
    actions: {
      logout: () => {
        setStore({
          users: [],
          user: {},
          shoppingCarts: {},
          shoppingCartItems: [],
          currentItemCart: { quantity: 0 },
          bill: {},
          bills: [],
          billsItems: [],
          suscriptions: [],
          upload: '',
          favorites: [],
          isLogin: false,
          stripePublicKey: ''
        })
      },
      getEditProduct: async (productID) => {
        const url = process.env.BACKEND_URL + "/api/edit-product/" + productID;
        const options = {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data;
          setStore({ product: detail });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },

      updateUser: ({ id, name, lastName, email, address, idNumber, typeIdNumber }) => {
        setStore({ user: { id, first_name: name, last_name: lastName, email, address, identification_number: idNumber, identification_type: typeIdNumber } })
      },
      currentItems: () => {
        const cartItem = data.results.item ? data.results.item : []
        setStore({ shoppingCartItems: cartItem });
      },
      currentItemCart: (pricing, shippingPrice, productID, quantity) => {
        setStore({
          currentItemCart: {
            item_price: pricing,
            shipping_item_price: shippingPrice,
            product_id: productID,
            quantity: quantity
          }
        })
      },
      loginData: (data) => {
        setStore({ user: data.results.user });
        const cart = data.results.cart ? data.results.cart : []
        setStore({ shoppingCarts: cart });
        const cartItem = data.results.item ? data.results.item : []
        setStore({ shoppingCartItems: cartItem });
        const billList = data.results.bills ? data.results.bills : []
        setStore({ bills: billList })
        // store.billsItem =
        setStore({ isLogin: true });
      },
      getUsers: async () => {
        const url = process.env.BACKEND_URL + "/api/users";
        const token = localStorage.getItem("token")
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data.results;
          setStore({ users: detail });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      getMyUsers: async (userId) => {
        const url = process.env.BACKEND_URL + "/api/users" + userId;
        const token = localStorage.getItem("token")
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data.results;
          setStore({ user: detail });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      }, // falta el PUT
      putMyUsers: async () => {
        const store = getStore();
        const userId = store.user.id
        const dataToSend = {
          email: store.user.email,
          is_active: true,
          first_name: store.user.first_name,
          last_name: store.user.last_name,
          address: store.user.address,
          identification_number: store.user.identification_number,
          identification_type: store.user.identification_type
        }
        const url = process.env.BACKEND_URL + "/api/users/" + userId;
        const token = localStorage.getItem("token")
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(dataToSend)
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data.results;
          setStore({ user: detail });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      getProducts: async () => {
        const url = process.env.BACKEND_URL + "/api/products";
        const options = {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data.results;
          setStore({ products: detail });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      getOneProducts: async (productID) => {
        const url = process.env.BACKEND_URL + "/api/products/" + productID;
        const options = {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data;
          setStore({ product: detail });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      postProducts: async ({ name, description, productDetail, pricing, stripeCode, weight, stock, subscribeable, imageUrl, category }) => {
        const url = process.env.BACKEND_URL + "/api/products";
        const token = localStorage.getItem("token")
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            name, description, products_detail: productDetail, pricing, stripe_price: stripeCode, weight, stock, subscribeable,
            image_url: imageUrl, categorie_id: category
          })
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data.results;
          console.log(detail);
          setStore({ products: detail });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      }, // falta el PUT y DELETE de /products/<int:products_id>'
      putOneProduct: async () => {
        const store = getStore();
        const productId = store.product.id
        const dataToSend = {
          name: store.product.name,
          description: store.product.description,
          pricing: store.product.pricing,
          stripe_price: store.product.stripe_price,
          weight: store.product.weight,
          stock: store.product.stock,
          image_url: store.product.image_url,
          categorie_id: store.product.categorie_id,
          products_detail: store.product.products_detail,
          subscribeable: false
        }
        const url = process.env.BACKEND_URL + "/api/products/" + productId;
        const token = localStorage.getItem("token")
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(dataToSend)
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data.results;
          setStore({ product: detail });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      updateProduct: ({ id, name, description, pricing, stripe, weight, stock, imageUrl, categorie, productDetail }) => {
        setStore({ product: { id, name, description, pricing, stripe_price: stripe, weight, stock, image_url: imageUrl, categorie_id: categorie, products_detail: productDetail } })
      },
      deleteOneProduct: async () => {
        const store = getStore();
        const productId = store.product.id
        console.log(productId);
        const url = process.env.BACKEND_URL + "/api/products/" + productId;
        const token = localStorage.getItem("token")
        const options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data.results;
          // setStore({ product: detail });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      getCategories: async () => {
        const url = process.env.BACKEND_URL + "/api/categories";
        const options = {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data.results;
          setStore({ categories: detail });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      getShoppingcarts: async () => {
        const url = process.env.BACKEND_URL + "/api/shoppingcarts";
        const token = localStorage.getItem("token")
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data.results;
          setStore({ shoppingCarts: detail.cart });
          setStore({ shoppingCartItems: detail.items });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      getMyShoppingcarts: async (shoppingCardId) => {
        const url = process.env.BACKEND_URL + "/api/shopping-carts/" + shoppingCardId;
        const token = localStorage.getItem("token")
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data.results;
          setStore({ shoppingCarts: detail.cart });
          setStore({ shoppingCartItems: detail.items });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      postShoppingCartItem: async (productID) => {
        const store = getStore();
        const url = process.env.BACKEND_URL + "/api/shopping-cart-items/" + productID;
        const token = localStorage.getItem("token")
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(store.currentItemCart)
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          setStore({ currentItemCart: {} })
          setStore({ currentItemCart: { quantity: 0 } })
          // actualizar el store shoppingCartItems
          setStore({ shoppingCartItems: data.results.item })
          setStore({ shoppingCarts: data.results.cart })
          console.log(data);
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      deleteShoppingCartItem: async (userId, cartItemId) => {
        const url = process.env.BACKEND_URL + "/api/users/" + userId + "/shopping-cart-items/" + cartItemId;
        const token = localStorage.getItem("token")
        const options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          setStore({ shoppingCartItems: data.results.item });
          setStore({ shoppingCarts: data.results.cart });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      updateQuantityItemCart: (cartItemId, quantity) => {
        const dataToStore = { id: cartItemId, quantity: quantity }
        setStore({ currenItemCart: dataToStore })
      },
      putShoppingCarts: async () => {
        const store = getStore();
        const dataToSend = { quantity: store.currenItemCart.quantity }
        const userId = store.user.id
        const cartItemId = store.currenItemCart.id
        const url = process.env.BACKEND_URL + "/api/users/" + userId + "/shopping-cart-items/" + cartItemId;
        const token = localStorage.getItem("token");
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(dataToSend)
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          setStore({ currentItemCart: {} })
          setStore({ currentItemCart: { quantity: 0 } })
          // actualizar el store shoppingCartItems
          setStore({ shoppingCartItems: data.results.item })
          setStore({ shoppingCarts: data.results.cart })
          console.log(data);
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      getbills: async () => {
        const url = process.env.BACKEND_URL + "/api/bills";
        const token = localStorage.getItem("token")
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data.results;
          setStore({ bills: detail });
          setStore({ billsItems: detail.items });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      getMybills: async (userId) => {
        const url = process.env.BACKEND_URL + "/api/users/" + userId + "/bills";
        const token = localStorage.getItem("token")
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data.results;
          setStore({ bills: detail });
          setStore({ billsItems: detail.items });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      postBills: async () => { // verificar con hector
        const store = getStore();
        const url = process.env.BACKEND_URL + "/api/bills";
        const token = localStorage.getItem("token")
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({})
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          setStore({ shoppingCartItems: [] })
          setStore({ shoppingCarts: {} })
          console.log(data);
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      getOffers: async () => {
        const url = process.env.BACKEND_URL + "/api/offers";
        const options = {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data.results;
          setStore({ offers: detail });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      getSuscriptions: async () => {
        const url = process.env.BACKEND_URL + "/api/suscriptions";
        const options = {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data.results;
          setStore({ suscriptions: detail });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      getUpload: async () => {
        const url = process.env.BACKEND_URL + "/api/upload";
        const options = {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data.results;
          setStore({ upload: detail });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      getReviews: async () => {
        const url = process.env.BACKEND_URL + "/api/Reviews";
        const options = {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          const detail = data.results;
          setStore({ Reviews: detail });
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      uploadFile: async fileToUpload => {
        let data = new FormData();
        data.append("image", fileToUpload);
        const url = process.env.BACKEND_URL + '/api/upload';
        const options = {
          method: "POST",
          body: data,
          headers: {
            Authorization: `Basic ${process.env.API_KEY}:${process.env.API_SECRET}`,
          },
        };
        console.log(options)
        const response = await fetch(url, options)
        if (response.ok) {
          const data = await response.json();
          const detail = data.results;
          setStore({ upload: detail });
          console.log(data)
        } else {
          console.log('error', response.status, response.text)
        }
      },
      putBillPaid: async () => {
        const dataToSend = {};
        const store = getStore();
        const bill = localStorage.getItem('bill');
        const url = process.env.BACKEND_URL + "/api/bills/" + bill;
        const token = localStorage.getItem("token");
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(dataToSend)
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } else {
          console.log("ERROR:", response.status, response.statusText);
        }
      },
      setCurrentitemCart: (pricing, id) => {
        const store = getStore();
        store.currentItemCart = {
          item_price: pricing,
          shipping_item_price: 0,
          product_id: id
        }
      },
      setNewBill: (data) => {
        setStore({ bill: data })
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getMessage: async () => {
        try {
          // Fetching data from the backend
          // const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
          // const data = await resp.json()
          // setStore({ message: data.message })
          // return data;  // Don't forget to return something, that is how the async resolves
        } catch (error) {
          // console.log("Error loading message from backend", error)
        }
      },
      changeColor: (index, color) => {
        const store = getStore();  // Get the store
        // We have to loop the entire demo array to look for the respective index and change its color
        const demo = store.demo.map((element, i) => {
          if (i === index) element.background = color;
          return element;
        });
        // Reset the global store
        setStore({ demo: demo });
      }
    }
  };
};


export default getState;

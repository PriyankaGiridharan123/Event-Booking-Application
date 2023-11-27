import React, { useState } from 'react';
import './Selection.css';
import { useNavigate } from 'react-router-dom';
const Selection = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjEPVbyFce239VokJYJWHp5JB4H-YLRYmhQ&usqp=CAU", 
      name: "BRONZE",
      description:
        "Basic entry ticket.",
      price: 1000,
      available: 50
    },
    {
        id: 2,
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLiNIbJLpYHtm7OX_ApHUpMqYUVtzEpOYVQ&usqp=CAU",
        name: "SILVER",
        description: "Silver ticket: Standard access to the event.",
        price: 1500,
        available: 100
      },
      {
        id: 3,
        imgSrc: "https://media.istockphoto.com/id/886545368/vector/gold-ticket-golden-token-with-star-magical-background.jpg?s=612x612&w=0&k=20&c=CqTeAW6HP-w29N7MSFjXbMW8EWZSt-sM8BbDNbdL49g=",
        name: "GOLD",
        description: "Gold tickets are often associated with a higher price point, offering attendees a luxurious and memorable event experience.",
        price: 2000,
        available: 110
      }
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [isCartView, setIsCartView] = useState(false);
  const [pageTitle, setPageTitle] = useState("Book Your Comfort!");
  const nav = useNavigate(); 
  const displayCartView = () => {
    setIsCartView(true);
    setPageTitle("Choose your comfort seats");
  };

  const goToHomePage = () => {
    setIsCartView(false);
    setPageTitle("Book Your Comfort");
  };

  const getCartItems = (product) => {
    if (cartItems.length > 0) {
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].item.id === product.id) {
          cartItems[i].quantity++;
          setCartItems([...cartItems]);
          return;
        }
      }
    }

    setCartItems([...cartItems, { item: product, quantity: 1 }]);
  };

  const addProdToCart = (product) => {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].item.id === product.id) {
        cartItems[i].quantity++;
        setCartItems([...cartItems]);
        return;
      }
    }

    setCartItems([...cartItems, { item: product, quantity: 1 }]);
    product.available--;
    setProducts([...products]);
  };

  const increaseQuantity = (product) => {
    product.quantity++;
    product.item.available--;
    setCartItems([...cartItems]);
    setProducts([...products]);
  };

  const removeProdFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item !== product);
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (product) => {
    product.quantity--;
    product.item.available++;
    setCartItems([...cartItems]);
    setProducts([...products]);

    if (product.quantity <= 0) {
      removeProdFromCart(product);
    }
  };

  const checkout = () => {
    setCartItems([]);
    nav("/pay")
  };

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].item.price * cartItems[i].quantity;
    }
    return total;
  };

  return (
    <div className='selection-page'>
    <div id="app">
      <header>
        <div className="container alignment-container">
          <div className="logo">
            <h1 className="logo__title">
              <a className="logo__title-link" href="/" onClick={goToHomePage}>
                Unplugged <br /> Events
              </a>
            </h1>
          </div>
          <div className="cart-header-info">
            <span className="cart-header-info__text">
              You have selected {cartItems.length} 
            </span>
            <button
              className="cart-header-info__link"
              onClick={displayCartView}
            >
              View Booking
            </button>
          </div>
        </div>
      </header>
      <main>
        <h2 className="page-title">{pageTitle}</h2>
        <div className="container products-container">
          {isCartView ? (
            <div className="cart">
              {cartItems.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th>Seating</th>
                      <th>Ticket</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((prod) => (
                      <tr key={prod.item.id}>
                        <td>{prod.item.name}</td>
                        <td>
                          <span className="cart__qty-text">{prod.quantity}</span>
                          <button
                            className="cart__add-qty"
                            onClick={() => increaseQuantity(prod)}
                            disabled={prod.item.available === 0}
                          >
                            +
                          </button>
                          <button
                            className="cart__remove-qty"
                            onClick={() => decreaseQuantity(prod)}
                            disabled={prod.quantity === 0}
                          >
                            -
                          </button>
                        </td>
                        <td>Rs:{prod.item.price}</td>
                      </tr>
                    ))}
                    <tr className="cart__total">
                      <td colSpan="2">Total:</td>
                      <td>Rs:{calculateTotal()}</td>
                    </tr>
                    <tr>
                      <td colSpan="2"></td>
                      <td>
                        <button className="cart__checkout-btn" onClick={checkout}>
                          Payment
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <div className="empty-cart">
                  <h3 className="empty-cart__message">Not booked any seats</h3>
                </div>
              )}
            </div>
          ) : (
            <div>
              {products.map((product) => (
                <div className="prod-card" key={product.id}>
                  <img
                    src={product.imgSrc}
                    alt=""
                    className="prod-card__image"
                  />
                  <div className="prod-card__info">
                    <h4 className="prod-card__title">{product.name}</h4>
                    <p className="prod-card__description">
                      {product.description}
                    </p>
                    <div className="alignment-container">
                      <p className="prod-card__price">Rs:{product.price}</p>
                      <p
                        className={`prod-card__in-stock ${
                          product.available === 0 ? "not-in-stock" : ""
                        }`}
                      >
                        Available: {product.available}
                      </p>
                    </div>
                    <button
                      className="prod-card__btn"
                      id="add-to-cart"
                      type="button"
                      onClick={() => addProdToCart(product)}
                      disabled={product.available === 0}
                    >
                      Book Your Comfort
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
    </div>
  );
};

export default Selection;

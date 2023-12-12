import React from 'react';

const Shop = () => {
  const shopProducts = [
    {
      id: 1,
      name: 'BBs Smack Shack T-shirt',
      description: 'Show your love for seafood with our stylish and comfortable T-shirt.',
      price: '$19.99'
    //   imageUrl: '/images/tshirt.jpg', // Placeholder image URL
    },
    {
      id: 2,
      name: 'Seafood Lovers Apron',
      description: 'Cook in style with our premium apron featuring seafood-inspired designs.',
      price: '$24.99'
    //   imageUrl: '/images/apron.jpg', // Placeholder image URL
    },
    // Add more products as needed
  ];

  return (
    <section className="shop-page">
      <h2 className="section-title">Shop BB's Merchandise</h2>
      <p className="section-description">
        Explore our collection of merchandise and take a piece of BB's Smack Shack with you.
      </p>

      <div className="shop-products">
        {shopProducts.map((product) => (
          <div key={product.id} className="shop-product">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;

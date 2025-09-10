import React from 'react'

function ProductCard({ title, price, oldPrice, image, discount }) {
  return (
    <div className="product">
      {discount ? <span className="product__badge">-{discount}%</span> : null}
      <div className="product__image">
        <img src={image} alt={title} />
      </div>
      <div className="product__info">
        <div className="product__price">
          <span className="product__price-current">{price} ₽</span>
          {oldPrice ? <span className="product__price-old">{oldPrice} ₽</span> : null}
        </div>
        <div className="product__title">{title}</div>
        <div className="product__rating">★★★★★</div>
        <button className="btn btn--primary">В корзину</button>
      </div>
    </div>
  )
}

export default ProductCard



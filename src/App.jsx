import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

const mockImage = 'https://via.placeholder.com/220x140?text=Product'

function App() {
  const products = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    title: `Товар №${i + 1}`,
    price: (44.5 + i).toFixed(2),
    oldPrice: (50 + i).toFixed(2),
    image: mockImage,
    discount: 50,
  }))

  return (
    <div className="page">
      <Header />
      <Hero />

      <main className="main">
        <Section id="deals" title="Акции" actionText="Все акции">
          <div className="products-grid">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </Section>

        <Section id="new" title="Новинки" actionText="Все новинки">
          <div className="products-grid">
            {products.map((p) => (
              <ProductCard key={`n-${p.id}`} {...p} />
            ))}
          </div>
        </Section>

        <Section id="bought" title="Покупали раньше" actionText="Все покупки">
          <div className="products-grid">
            {products.map((p) => (
              <ProductCard key={`b-${p.id}`} {...p} />
            ))}
          </div>
        </Section>

        <Section id="offers" title="Специальные предложения">
          <div className="offers">
            <div className="offer-card">Оформите карту «Северяночка»</div>
            <div className="offer-card">Покупайте акционные товары</div>
          </div>
        </Section>

        <Section id="shops" title="Наши магазины">
          <div className="map-placeholder">[Тут будет карта]</div>
        </Section>

        <Section id="articles" title="Статьи" actionText="Все статьи">
          <div className="articles">
            <article className="article-card">
              <div className="article-card__image" />
              <div className="article-card__body">
                <h3>Режим использования масок и перчаток</h3>
                <button className="btn">Подробнее</button>
              </div>
            </article>
            <article className="article-card">
              <div className="article-card__image" />
              <div className="article-card__body">
                <h3>Весеннее настроение для каждой</h3>
                <button className="btn">Подробнее</button>
              </div>
            </article>
            <article className="article-card">
              <div className="article-card__image" />
              <div className="article-card__body">
                <h3>ЗОЖ или ФАСТФУД. А вы на чьей стороне?</h3>
                <button className="btn">Подробнее</button>
              </div>
            </article>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}

export default App

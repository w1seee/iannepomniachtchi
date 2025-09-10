import React from 'react'

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="brand">
          <span className="brand__logo">🙂</span>
          <span className="brand__name">Северяночка</span>
        </div>
        <nav className="nav">
          <a href="#deals">Акции</a>
          <a href="#new">Новинки</a>
          <a href="#bought">Покупали раньше</a>
          <a href="#offers">Предложения</a>
          <a href="#articles">Статьи</a>
        </nav>
      </div>
    </header>
  )
}

export default Header



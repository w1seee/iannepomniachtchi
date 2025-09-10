import React from 'react'

function Section({ id, title, children, actionText }) {
  return (
    <section className="section" id={id}>
      <div className="section__head">
        <h2 className="section__title">{title}</h2>
        {actionText ? <a className="section__action" href="#">{actionText}</a> : null}
      </div>
      <div className="section__content">
        {children}
      </div>
    </section>
  )
}

export default Section



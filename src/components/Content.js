import ShoppingList from './ShoppingList';
import Cart from './Cart';
import '../styles/Content.css';
import { useState } from 'react';

function Content() {
  const [cart, updateCart] = useState([]);
  return (
    <div className="merch">
      <section className="merch__hero">
        <div className="merch__hero-text">
          <div className="merch__eyebrow">Collection</div>
          <h2 className="merch__title">Zikeo Merch</h2>
          <p className="merch__subtitle">
            Pieces limites, textures confort et vibes neon pour la scene.
          </p>
          <div className="merch__actions">
            <button className="btn">Decouvrir</button>
            <button className="btn btn--ghost">Voir le panier</button>
          </div>
        </div>
        <div className="merch__hero-card card">
          <div className="merch__hero-glow" />
          <div className="merch__hero-label">Drop #01</div>
          <div className="merch__hero-name">Neo Wave</div>
          <div className="merch__hero-price">A partir de 8 €</div>
        </div>
      </section>

      <div className="merch__layout">
        <div className="merch__products">
          <ShoppingList cart={cart} updateCart={updateCart} />
        </div>
        <aside className="merch__cart">
          <Cart cart={cart} updateCart={updateCart} />
        </aside>
      </div>
    </div>
  );
}

export default Content;

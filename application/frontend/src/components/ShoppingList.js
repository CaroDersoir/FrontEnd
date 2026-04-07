import '../styles/ShoppingList.css';
import { itemList } from '../datas/itemList';
import { useState, useEffect } from 'react';


function ShoppingList({ cart, updateCart }) {
  function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      const updatedCart = (cart.map((item) =>
        item.name === name ? { ...item, amount: item.amount + 1 } : item
      ));
      updateCart(updatedCart);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  const [itemsList, setItemsList] = useState(itemList);
  // useEffect(() => {
  //   fetch('http://localhost:3001/')
  //     .then(response => response.json())
  //     .then(data => setItemsList(data))
  //     .catch(error => console.error('Erreur lors de la récupération des données :', error));
  // }, []);

  return (
    <div className="catalog">
      <div className="catalog__header">
        <div>
          <h2 className="catalog__title">Boutique</h2>
          <p className="catalog__subtitle">Selection neon du moment</p>
        </div>
        <div className="catalog__meta">{itemsList.length} articles</div>
      </div>

      {/* Affichage de la liste des articles */}
      <ul className="catalog__grid">
        {itemsList.map((item) => (
          <li className='catalog__card' key={item.id ?? item.name}>
            <div className="catalog__media">
              {item.cover ? (
                <img src={item.cover} alt={item.name} />
              ) : (
                <div className="catalog__media-placeholder" />
              )}
              {item.onSale && <span className="catalog__badge">Promo</span>}
            </div>
            <div className="catalog__body">
              <div className="catalog__name">{item.name}</div>
              <div className="catalog__info">
                {item.size && <span>Taille {item.size}</span>}
                <span>Comfort {item.comfort}</span>
              </div>
              <div className="catalog__footer">
                <div className="catalog__price">{item.price} €</div>
                <button className="btn btn--ghost" onClick={() => addToCart(item.name, item.price)}>
                  Ajouter
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}




export default ShoppingList

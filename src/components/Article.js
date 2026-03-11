function Article(props) {
    const coverValue = props.cover
    const nameValue = props.name
    const sizeValue = props.size
    const priceValue = props.price
    const comfortValue = props.comfort
    const onSaleValue = props.onSale

    const updateCart = props.updateCart
    const cart = props.cart

    const sizeRange = ['M', 'L']
    return (
        <div>
            <img className='item-cover' src={coverValue} alt={nameValue} /><br />
            Name : {nameValue}<br />
            {sizeRange.map((rangeElem) => sizeValue == rangeElem ? <span>Taille : {rangeElem.toString()}</span> : null)}
            Comfort : {comfortValue}<br />
            Price : {priceValue} €<br />
            {onSaleValue && <span>En soldes !</span>}
            <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
        </div>
    )
}

export default Article
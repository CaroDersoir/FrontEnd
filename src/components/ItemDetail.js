import { useParams } from 'react-router-dom';

function ItemDetail() {
    const { idArticle } = useParams();

    return (
        <div>
            <h1>Détails du produit</h1>
            <p>Voici les détails du produit sélectionné.</p>
            <p>ID de l'article : {idArticle}</p>
        </div>
    )
}

export default ItemDetail
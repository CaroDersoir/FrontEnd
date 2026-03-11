import tshirt from '../assets/tshirt.jpg'
import pull from '../assets/pull.jpg'
import pantalon from '../assets/pantalon.jpg'
export const itemList = [
     {
         name: 't-shirt',
        category: 'haut',
         id: '1',
        onSale: true,
        size : 'XS',
        comfort : 1,
        cover:tshirt,
        price:8
     },
     {
         name: 'pull',
         category: 'haut',
         id: '2',
        onSale : true,
        size : 'S',
        comfort : 2,
        cover:pull,
        price:15
     },
    {
         name: 'pantalon',
         category: 'bas',
         id: '3',
        onSale: false,
        size : 'M',
        comfort : 3,
        cover:pantalon,
        price:20
     },
     {
         name: 'casquette',
         category: 'accessoire',
         id: '4',
        onSale: true,
        size : 'none',
        comfort : 3,
        //cover:casquette,
        price:15
     },
     {
         name: 'lunettes',
         category: 'accessoire',
         id: '5',
        onSale: false,
        size : 'M',
        comfort : 3,
        //cover:lunettes,
        price:10    
     }
]
              
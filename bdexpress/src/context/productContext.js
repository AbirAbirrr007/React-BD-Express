import React, { createContext, useState } from 'react';


export const productContext = createContext();

const GlobalProductContext = (props) =>{
     
    const [products]=useState([
        {
            id:1,
            img:"https://m.media-amazon.com/images/I/713lu+ONcjL._AC_UL320_.jpg",
            category:"Electronics",
            name:"Jabra Evolve2 65 UC Wireless",
            desc:"Jabra Evolve2 65 UC Wireless Headphones",
            price:204,
            productStatus:"Hot"
        }
        ,{
            id:2,
            img:"https://m.media-amazon.com/images/I/41WzHq0SkRL._AC_UL320_.jpg",
            category:"Electronics",
            name:"COWIN E7",
            desc:"Headphones Bluetooth Headphones with Microphone ",
            price:219,
            productStatus:"Hot"
        }
        ,{
            id:3,
            img:"https://static-01.daraz.com.bd/p/2a539a8d550262dd27cb21b50d3a2cfa.jpg",
            category:"Fashion",
            name:"Jp Cotton",
            desc:"Jp Cotton Short Sleeve T-Shirt for Men",
            price:10,
            productStatus:"Hot"
        }
        ,{
            id:4,
            img:"https://static-01.daraz.com.bd/p/2287fa3e4513fc4ef716de952df4240b.png",
            category:"Fashion",
            name:"Cotton Short",
            desc:"Cotton Short Sleeve T-Shirt For Man",
            price:29,
            productStatus:"New"
        }
        ,{
            id:5,
            img:"https://static-01.daraz.com.bd/p/a1bec93547f15b5cd6f03cde75acb9b9.jpg",
            category:"Fashion",
            name:"Quicksilver Black Cotton ",
            desc:"Quicksilver Black Cotton Long Sleeve Tshirt For Men-",
            price:19,
            productStatus:"New"
        }
        ,{
            id:6,
            img:"https://static-01.daraz.com.bd/p/b3efa7395eb42dda5a4149f4a4b3a085.jpg",
            category:"Electronics",
            name:"24'' SONY PLUS ",
            desc:"24'' SONY PLUS HD LED TV ( 4k SUPPORTED )",
            price:229,
            productStatus:"Hot"
        }
        ,{
            id:7,
            img:"https://static-01.daraz.com.bd/p/f207fe6dfef7aa95b28d76c75a377ce7.jpg",
            category:"Electronics",
            name:"Intel® Core i5 RAM",
            desc:"Intel® Core i5 RAM 8GB HDD 1000GB Graphics 2GB ",
            price:559,
            productStatus:"New"
        }
        ,{
            id:8,
            img:"https://static-01.daraz.com.bd/p/a23de32b9baa9e730a6a93eb4143f7f6.jpg",
            category:"Electronics",
            name:"Realme 8 - 8+128 GB",
            desc:"Realme 8 - 8+128 GB - Helio G95 Smartphone",
            price:319,
            productStatus:"New"
        }
        ,{
            id:9,
            img:"https://static-01.daraz.com.bd/p/0add4c2e2a6fb7d50f97c9fd7a8cc397.jpg",
            category:"Electronics",
            name:"Samsung Galaxy A01",
            desc:"Samsung Galaxy A01 - 2GB RAM/16GB ROM - 5.7",
            price:219,
            productStatus:"New"
        }
        ,{
            id:10,
            img:"https://static-01.daraz.com.bd/p/29da81dd395bbae7b67b987c7655f1a2.jpg",
            category:"Electronics",
            name:"Sony PlayStation 5",
            desc:"Sony PlayStation 5 Gaming Console",
            price:1109,
            productStatus:"Hot"
        }
        ,{
            id:11,
            img:"https://static-01.daraz.com.bd/p/212fc6d576d7abfd8e544f425b582747.jpg",
            category:"Fashion",
            name:"Black Jeans Pant",
            desc:"Black Jeans Pants for Men (wash premium jeans pant)",
            price:19,
            productStatus:"Hot"
        }
        
        ,{
            id:12,
            img:"https://static-01.daraz.com.bd/p/410bdd86ebb8d7861c3121332bfd5a85.jpg",
            category:"Vehicle",
            name:"FKM Street Fighter",
            desc:"FKM Street Fighter 165cc Motorcycle - Blue",
            price:2219,
            productStatus:"New"
        }
        ,{
            id:13,
            img:"https://static-01.daraz.com.bd/p/e1af5f5d11fee29213a6667c9d1bbc13.jpg",
            category:"Vehicle",
            name:"HondaCBR 150R",
            desc:"HondaCBR 150R MotoGP Edition (Repsol) 2019",
            price:5819,
            productStatus:"New"
        }
    ])
    return(
    <productContext.Provider value={{products}}>
        {props.children}
    </productContext.Provider>
    )
}

export default GlobalProductContext;

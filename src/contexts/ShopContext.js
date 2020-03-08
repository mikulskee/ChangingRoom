import React, { createContext, useState, useEffect } from "react";
import mainTshirt from "../images/t-shirts.jpg";
import mainShirt from "../images/shirts.jpg";
import mainPants from "../images/pants.jpg";
import mainHoodie from "../images/hoodies.jpg";
import mainSkirt from "../images/skirts.jpg";
import mainJacket from "../images/jackets.jpg";
import mainBag from "../images/bags.jpg";
import tshirt1 from "../images/products/t-shirts/1.jpg";
import tshirt2 from "../images/products/t-shirts/2.jpg";
import tshirt3 from "../images/products/t-shirts/3.jpg";
import tshirt4 from "../images/products/t-shirts/4.jpg";
import tshirt5 from "../images/products/t-shirts/5.jpg";
import shirts1 from "../images/products/shirts/1.jpg";
import shirts2 from "../images/products/shirts/2.jpg";
import shirts3 from "../images/products/shirts/3.jpg";
import shirts4 from "../images/products/shirts/4.jpg";
import shirts5 from "../images/products/shirts/5.jpg";
import pants1 from "../images/products/pants/1.jpg";
import pants2 from "../images/products/pants/2.jpg";
import pants3 from "../images/products/pants/3.jpg";
import pants4 from "../images/products/pants/4.jpg";
import pants5 from "../images/products/pants/5.jpg";
import hoodies1 from "../images/products/hoodies/1.jpg";
import hoodies2 from "../images/products/hoodies/2.jpg";
import hoodies3 from "../images/products/hoodies/3.jpg";
import hoodies4 from "../images/products/hoodies/4.jpg";
import hoodies5 from "../images/products/hoodies/5.jpg";
import skirts1 from "../images/products/skirts/1.jpg";
import skirts2 from "../images/products/skirts/2.jpg";
import skirts3 from "../images/products/skirts/3.jpg";
import skirts4 from "../images/products/skirts/4.jpg";
import skirts5 from "../images/products/skirts/5.jpg";
import jackets1 from "../images/products/jackets/1.jpg";
import jackets2 from "../images/products/jackets/2.jpg";
import jackets3 from "../images/products/jackets/3.jpg";
import jackets4 from "../images/products/jackets/4.jpg";
import jackets5 from "../images/products/jackets/5.jpg";
import bags1 from "../images/products/bags/1.jpg";
import bags2 from "../images/products/bags/2.jpg";
import bags3 from "../images/products/bags/3.jpg";
import bags4 from "../images/products/bags/4.jpg";
import bags5 from "../images/products/bags/5.jpg";

export const ShopContext = createContext();

const ShopContextProvider = props => {
  const [shopItems, setShopItems] = useState(() => {
    const localData = JSON.parse(localStorage.getItem("shop-items"));
    return localData
      ? localData
      : [
          {
            sectionPL: "Strona Główna",
            section: "",
            link: "/"
          },
          {
            sectionPL: "T-shirty",
            section: "tshirts",
            link: "/products/tshirts",
            products: [
              {
                description: "Morski t-shirt basic",
                img: tshirt1,
                price: 69,
                selected: false
              },
              {
                description: "Biały t-shirt basic",
                img: tshirt2,
                price: 59,
                selected: false
              },
              {
                description: "Czerwony t-shirt basic",
                img: tshirt3,
                price: 59,
                selected: false
              },
              {
                description: "Różowy t-shirt basic",
                img: tshirt4,
                price: 59,
                selected: false
              },
              {
                description: "Żółty t-shirt basic",
                img: tshirt5,
                price: 59,
                selected: false
              }
            ],
            mainImg: mainTshirt
          },
          {
            sectionPL: "Koszule & Bluzki",
            section: "shirts",
            link: "/products/shirts",
            products: [
              {
                description: "Biała bluzka kaktus",
                img: shirts1,
                price: 79,
                selected: false
              },
              {
                description: "Kraciasta koszula autumn",
                img: shirts2,
                price: 79,
                selected: false
              },
              {
                description: "Biała koszula w paski",
                img: shirts3,
                price: 79,
                selected: false
              },
              {
                description: "Bordowa bluzka z wiązaniem",
                img: shirts4,
                price: 79,
                selected: false
              },

              {
                description: "Biała bluzka oversize",
                img: shirts5,
                price: 79,
                selected: false
              }
            ],
            mainImg: mainShirt
          },
          {
            sectionPL: "Spodnie",
            section: "pants",
            link: "/products/pants",
            products: [
              {
                description: "Spodnie khaki",
                img: pants1,
                price: 99,
                selected: false
              },
              {
                description: "Spodnie w prążki",
                img: pants2,
                price: 99,
                selected: false
              },
              {
                description: "Granatowe spodnie jeansowe",
                img: pants3,
                price: 99,
                selected: false
              },
              {
                description: "Spodnie skórzane",
                img: pants4,
                price: 99,
                selected: false
              },
              {
                description: "Łososiowe spodnie jeansowe",
                img: pants5,
                price: 99,
                selected: false
              }
            ],
            mainImg: mainPants
          },
          {
            sectionPL: "Bluzy",
            section: "hoodies",
            link: "/products/hoodies",
            products: [
              {
                description: "Różowa bluza basic",
                img: hoodies1,
                price: 89,
                selected: false
              },
              {
                description: "Szara bluza ze wzorem",
                img: hoodies2,
                price: 89,
                selected: false
              },
              {
                description: "Czarna bluza Space",
                img: hoodies3,
                price: 89,
                selected: false
              },
              {
                description: "Czarna bluza Space Babe",
                img: hoodies4,
                price: 89,
                selected: false
              },
              {
                description: "Zielona bluza Forest",
                img: hoodies5,
                price: 99,
                selected: false
              }
            ],
            mainImg: mainHoodie
          },
          {
            sectionPL: "Sukienki & Spódnice",
            section: "skirts",
            link: "/products/skirts",
            products: [
              {
                description: "Kwiaciasta sukienka Flower",
                img: skirts1,
                price: 99,
                selected: false
              },
              {
                description: "Spódnicza mini w cekiny",
                img: skirts2,
                price: 99,
                selected: false
              },
              {
                description: "Sukienka khaki",
                img: skirts3,
                price: 99,
                selected: false
              },
              {
                description: "Czarna wieczorowa sukienka",
                img: skirts4,
                price: 99,
                selected: false
              },
              {
                description: "Sukienka w panterkę",
                img: skirts5,
                price: 99,
                selected: false
              }
            ],
            mainImg: mainSkirt
          },
          {
            sectionPL: "Kurtki & Marynarki",
            section: "jackets",
            link: "/products/jackets",
            products: [
              {
                description: "Kurtka bomber basic",
                img: jackets1,
                price: 199,
                selected: false
              },
              {
                description: "Katana jeansowa",
                img: jackets2,
                price: 199,
                selected: false
              },
              {
                description: "Granatowa kurtka puchowa",
                img: jackets3,
                price: 199,
                selected: false
              },
              {
                description: "Granatowy żakiet",
                img: jackets4,
                price: 199,
                selected: false
              },
              {
                description: "Kraciasty żakiet",
                img: jackets5,
                price: 99,
                selected: false
              }
            ],
            mainImg: mainJacket
          },
          {
            sectionPL: "Torebki",
            section: "bags",
            link: "/products/bags",
            products: [
              {
                description: "Czarna torebka Flow",
                img: bags1,
                price: 129,
                selected: false
              },
              {
                description: "Szara torebka Grey",
                img: bags2,
                price: 129,
                selected: false
              },
              {
                description: "Biała torebka True Gold",
                img: bags3,
                price: 129,
                selected: false
              },
              {
                description: "Torebka w kwiecisty wzór",
                img: bags4,
                price: 129,
                selected: false
              },
              {
                description: "Torebka Mosaic",
                img: bags5,
                price: 129,
                selected: false
              }
            ],
            mainImg: mainBag
          }
        ];
  });
  useEffect(() => {
    localStorage.setItem("shop-items", JSON.stringify(shopItems));
  }, [shopItems]);
  const setItemSelected = product => {
    const newShopItems = [...shopItems];
    const objectToChange = [].concat
      .apply(
        [],
        newShopItems.filter(item => item.products).map(item => item.products)
      )
      .filter(item => item.description === product.description)[0];

    objectToChange["selected"] = true;
    setShopItems(newShopItems);
  };
  return (
    <ShopContext.Provider value={{ shopItems, setItemSelected }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

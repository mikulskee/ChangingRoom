import React, { createContext, useState } from "react";
import mainTshirt from "../images/t-shirts.jpg";
import mainShirt from "../images/shirts.jpg";
import mainPants from "../images/pants.jpg";
import mainHoodie from "../images/hoodies.jpg";
import mainSkirt from "../images/skirts.jpg";
import mainJacket from "../images/jackets.jpg";
import mainBag from "../images/bags.jpg";
import mainAdditives from "../images/additives.jpg";
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
import additives1 from "../images/products/additives/1.jpg";
import additives2 from "../images/products/additives/2.jpg";
import additives3 from "../images/products/additives/3.jpg";
import additives4 from "../images/products/additives/4.jpg";
import additives5 from "../images/products/additives/5.jpg";

export const ShopContext = createContext();

const ShopContextProvider = props => {
  const [shopItems] = useState([
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
          description: "Czerwony t-shirt z orłem",
          img: tshirt1,
          price: 69,
          selected: false
        },
        {
          description: "Zółty t-shirt z orłem",
          img: tshirt2,
          price: 59,
          selected: false
        },
        {
          description: "Łososiowy t-shirt z orłem",
          img: tshirt3,
          price: 59,
          selected: false
        },
        {
          description: "Biały t-shirt z orłem",
          img: tshirt4,
          price: 59,
          selected: false
        },
        {
          description: "Czarny t-shirt z orłem",
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
          description: "Biała bluzka z ornamentem",
          img: shirts1,
          price: 79,
          selected: false
        },
        {
          description: "Granatowa bluzka z kwiecistym wzorem",
          img: shirts2,
          price: 79,
          selected: false
        },
        {
          description: "Biała bluzka z kwiecistym wzorem",
          img: shirts3,
          price: 79,
          selected: false
        },
        {
          description: "Biała koszula ze wzorem",
          img: shirts4,
          price: 79,
          selected: false
        },

        {
          description: "Koszula z kwiecistym wzorem",
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
          description: "Kraciaste spodnie",
          img: pants1,
          price: 99,
          selected: false
        },
        {
          description: "Spodnie moro",
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
          description: "Czarne spodnie",
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
          description: "Szara bluza z misiem Stacy",
          img: hoodies1,
          price: 89,
          selected: false
        },
        {
          description: "Czarna bluza z królikiem",
          img: hoodies2,
          price: 89,
          selected: false
        },
        {
          description: "Szara bluza z misiem Joy",
          img: hoodies3,
          price: 89,
          selected: false
        },
        {
          description: "Biała bluza z misiem",
          img: hoodies4,
          price: 89,
          selected: false
        },
        {
          description: "Kremowa bluza z kołnierzem",
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
          description: "Szara sukienka z kokardą",
          img: skirts1,
          price: 99,
          selected: false
        },
        {
          description: "Szara sukienka z koronką",
          img: skirts2,
          price: 99,
          selected: false
        },
        {
          description: "Czarna sukienka z orientalnym wzorem",
          img: skirts3,
          price: 99,
          selected: false
        },
        {
          description: "Biało szara sukienka",
          img: skirts4,
          price: 99,
          selected: false
        },
        {
          description: "Sukienka z biało czarnym wzorem",
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
          description: "Klasyczny granatowy żakiet",
          img: jackets1,
          price: 199,
          selected: false
        },
        {
          description: "Kremowy płaszcz z czarnym dodatkiem",
          img: jackets2,
          price: 199,
          selected: false
        },
        {
          description: "Klasyczna czarna ramoneska",
          img: jackets3,
          price: 199,
          selected: false
        },
        {
          description: "Parka khaki",
          img: jackets4,
          price: 199,
          selected: false
        },
        {
          description: "Kraciasty płaszcz z kapturem",
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
          description: "Biała torebka",
          img: bags1,
          price: 129,
          selected: false
        },
        {
          description: "Niebieska torebka",
          img: bags2,
          price: 129,
          selected: false
        },
        {
          description: "Czarna/Biała aktówka",
          img: bags3,
          price: 129,
          selected: false
        },
        {
          description: "Czarna skórzana aktówka",
          img: bags4,
          price: 129,
          selected: false
        },
        {
          description: "Biało czarna torebka",
          img: bags5,
          price: 129,
          selected: false
        }
      ],
      mainImg: mainBag
    },
    {
      sectionPL: "Dodatki",
      section: "additives",
      link: "/products/additives",
      products: [
        {
          description: "Łososiowa apaszka w serca",
          img: additives1,
          price: 49,
          selected: false
        },
        {
          description: "Biała czapka z szarym pomponem",
          img: additives2,
          price: 59,
          selected: false
        },
        {
          description: "Srebrny naszyjnik",
          img: additives3,
          price: 99,
          selected: false
        },
        {
          description: "Kolczyki & Naszyjnik Listki",
          img: additives4,
          price: 99,
          selected: false
        },
        {
          description: "Złoty naszyjnik z kolczykami",
          img: additives5,
          price: 119,
          selected: false
        }
      ],
      mainImg: mainAdditives
    }
  ]);
  return (
    <ShopContext.Provider value={{ shopItems }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

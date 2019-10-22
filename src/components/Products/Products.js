import React, { useEffect } from "react";
import styled from "styled-components";
import mainTshirt from "../../images/t-shirts.jpg";
import mainShirt from "../../images/shirts.jpg";
import mainPants from "../../images/pants.jpg";
import mainHoodie from "../../images/hoodies.jpg";
import mainSkirt from "../../images/skirts.jpg";
import mainJacket from "../../images/jackets.jpg";
import mainBag from "../../images/bags.jpg";
import mainAdditives from "../../images/additives.jpg";
import tshirt1 from "../../images/products/t-shirts/1.jpg";
import tshirt2 from "../../images/products/t-shirts/2.jpg";
import tshirt3 from "../../images/products/t-shirts/3.jpg";
import tshirt4 from "../../images/products/t-shirts/4.jpg";
import tshirt5 from "../../images/products/t-shirts/5.jpg";
import shirts1 from "../../images/products/shirts/1.jpg";
import shirts2 from "../../images/products/shirts/2.jpg";
import shirts3 from "../../images/products/shirts/3.jpg";
import shirts4 from "../../images/products/shirts/4.jpg";
import shirts5 from "../../images/products/shirts/5.jpg";
import pants1 from "../../images/products/pants/1.jpg";
import pants2 from "../../images/products/pants/2.jpg";
import pants3 from "../../images/products/pants/3.jpg";
import pants4 from "../../images/products/pants/4.jpg";
import pants5 from "../../images/products/pants/5.jpg";
import hoodies1 from "../../images/products/hoodies/1.jpg";
import hoodies2 from "../../images/products/hoodies/2.jpg";
import hoodies3 from "../../images/products/hoodies/3.jpg";
import hoodies4 from "../../images/products/hoodies/4.jpg";
import hoodies5 from "../../images/products/hoodies/5.jpg";
import skirts1 from "../../images/products/skirts/1.jpg";
import skirts2 from "../../images/products/skirts/2.jpg";
import skirts3 from "../../images/products/skirts/3.jpg";
import skirts4 from "../../images/products/skirts/4.jpg";
import skirts5 from "../../images/products/skirts/5.jpg";
import jackets1 from "../../images/products/jackets/1.jpg";
import jackets2 from "../../images/products/jackets/2.jpg";
import jackets3 from "../../images/products/jackets/3.jpg";
import jackets4 from "../../images/products/jackets/4.jpg";
import jackets5 from "../../images/products/jackets/5.jpg";
import bags1 from "../../images/products/bags/1.jpg";
import bags2 from "../../images/products/bags/2.jpg";
import bags3 from "../../images/products/bags/3.jpg";
import bags4 from "../../images/products/bags/4.jpg";
import bags5 from "../../images/products/bags/5.jpg";
import additives1 from "../../images/products/additives/1.jpg";
import additives2 from "../../images/products/additives/2.jpg";
import additives3 from "../../images/products/additives/3.jpg";
import additives4 from "../../images/products/additives/4.jpg";
import additives5 from "../../images/products/additives/5.jpg";
import Product from "../Product/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import { ProductsWrapper } from "../ProductsWrapper/ProductsWrapper";

const shop = [
  {
    section: "tshirts",
    products: [
      { description: "Czerwony t-shirt z orłem", img: tshirt1, price: 69 },
      { description: "Zółty t-shirt z orłem", img: tshirt2, price: 59 },
      { description: "Łososiowy t-shirt z orłem", img: tshirt3, price: 59 },
      { description: "Biały t-shirt z orłem", img: tshirt4, price: 59 },
      { description: "Czarny t-shirt z orłem", img: tshirt5, price: 59 }
    ],
    mainImg: mainTshirt
  },
  {
    section: "shirts",
    products: [
      { description: "Biała bluzka z ornamentem", img: shirts1, price: 79 },
      {
        description: "Granatowa bluzka z kwiecistym wzorem",
        img: shirts2,
        price: 79
      },
      {
        description: "Biała bluzka z kwiecistym wzorem",
        img: shirts3,
        price: 79
      },
      { description: "Biała koszula ze wzorem", img: shirts4, price: 79 },
      { description: "Koszula z kwiecistym wzorem", img: shirts5, price: 79 }
    ],
    mainImg: mainShirt
  },
  {
    section: "pants",
    products: [
      { description: "Kraciaste spodnie", img: pants1, price: 99 },
      {
        description: "Spodnie moro",
        img: pants2,
        price: 99
      },
      {
        description: "Granatowe spodnie jeansowe",
        img: pants3,
        price: 99
      },
      { description: "Spodnie skórzane", img: pants4, price: 99 },
      { description: "Czarne spodnie", img: pants5, price: 99 }
    ],
    mainImg: mainPants
  },
  {
    section: "hoodies",
    products: [
      { description: "Szara bluza z misiem Stacy", img: hoodies1, price: 89 },
      {
        description: "Czarna bluza z królikiem",
        img: hoodies2,
        price: 89
      },
      {
        description: "Szara bluza z misiem Joy",
        img: hoodies3,
        price: 89
      },
      { description: "Biała bluza z misiem", img: hoodies4, price: 89 },
      { description: "Kremowa bluza z kołnierzem", img: hoodies5, price: 99 }
    ],
    mainImg: mainHoodie
  },
  {
    section: "skirts",
    products: [
      { description: "Szara sukienka z kokardą", img: skirts1, price: 99 },
      {
        description: "Szara sukienka z koronką",
        img: skirts2,
        price: 99
      },
      {
        description: "Czarna sukienka z orientalnym wzorem",
        img: skirts3,
        price: 99
      },
      { description: "Biało szara sukienka", img: skirts4, price: 99 },
      {
        description: "Sukienka z biało czarnym wzorem",
        img: skirts5,
        price: 99
      }
    ],
    mainImg: mainSkirt
  },
  {
    section: "jackets",
    products: [
      { description: "Klasyczny granatowy żakiet", img: jackets1, price: 199 },
      {
        description: "Kremowy płaszcz z czarnym dodatkiem",
        img: jackets2,
        price: 199
      },
      {
        description: "Klasyczna czarna ramoneska",
        img: jackets3,
        price: 199
      },
      { description: "Parka khaki", img: jackets4, price: 199 },
      { description: "Kraciasty płaszcz z kapturem", img: jackets5, price: 99 }
    ],
    mainImg: mainJacket
  },
  {
    section: "bags",
    products: [
      { description: "Biała torebka", img: bags1, price: 129 },
      {
        description: "Niebieska torebka",
        img: bags2,
        price: 129
      },
      {
        description: "Czarna/Biała aktówka",
        img: bags3,
        price: 129
      },
      { description: "Czarna skórzana aktówka", img: bags4, price: 129 },
      { description: "Biało czarna torebka", img: bags5, price: 129 }
    ],
    mainImg: mainBag
  },
  {
    section: "additives",
    products: [
      { description: "Łososiowa apaszka w serca", img: additives1, price: 49 },
      {
        description: "Biała czapka z szarym pomponem",
        img: additives2,
        price: 59
      },
      {
        description: "Srebrny naszyjnik",
        img: additives3,
        price: 99
      },
      {
        description: "Kolczyki & Naszyjnik Listki",
        img: additives4,
        price: 99
      },
      {
        description: "Złoty naszyjnik z kolczykami",
        img: additives5,
        price: 119
      }
    ],
    mainImg: mainAdditives
  }
];

const Container = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  max-width: 1366px;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    padding-top: 100px;
    align-items: flex-start;
  }
  @media only screen and (min-width: 768px) {
    padding-top: 130px;
  }
`;

const Products = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleFav = e => {
    e.target.classList.toggle("active");
  };
  const handleAdd = e => {
    e.target.classList.add("disabled");
  };

  if (props.match.params.section_id === "tshirts") {
    const newProducts = shop
      .filter(section => section.section === "tshirts")[0]
      .products.map(product => (
        <Product key={product.description} bg={product.img}>
          <div className="cover"></div>
          <p className="description">{product.description}</p>
          <p className="price">{product.price} zł</p>
          <div className="buttons">
            <button className="add" onClick={handleAdd}>
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
            <button className="fav" onClick={handleFav}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </Product>
      ));

    return (
      <ProductsWrapper>
        <Container>{newProducts}</Container>
        <Footer />
      </ProductsWrapper>
    );
  } else if (props.match.params.section_id === "shirts") {
    const newProducts = shop
      .filter(section => section.section === "shirts")[0]
      .products.map(product => (
        <Product key={product.description} bg={product.img}>
          <div className="cover"></div>
          <p className="description">{product.description}</p>
          <p className="price">{product.price} zł</p>
          <div className="buttons">
            <button className="add" onClick={handleAdd}>
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
            <button className="fav" onClick={handleFav}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </Product>
      ));

    return (
      <ProductsWrapper>
        <Container>{newProducts}</Container>
        <Footer />
      </ProductsWrapper>
    );
  } else if (props.match.params.section_id === "pants") {
    const newProducts = shop
      .filter(section => section.section === "pants")[0]
      .products.map(product => (
        <Product key={product.description} bg={product.img}>
          <div className="cover"></div>
          <p className="description">{product.description}</p>
          <p className="price">{product.price} zł</p>
          <div className="buttons">
            <button className="add" onClick={handleAdd}>
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
            <button className="fav" onClick={handleFav}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </Product>
      ));

    return (
      <ProductsWrapper>
        <Container>{newProducts}</Container>
        <Footer />
      </ProductsWrapper>
    );
  } else if (props.match.params.section_id === "hoodies") {
    const newProducts = shop
      .filter(section => section.section === "hoodies")[0]
      .products.map(product => (
        <Product key={product.description} bg={product.img}>
          <div className="cover"></div>
          <p className="description">{product.description}</p>
          <p className="price">{product.price} zł</p>
          <div className="buttons">
            <button className="add" onClick={handleAdd}>
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
            <button className="fav" onClick={handleFav}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </Product>
      ));

    return (
      <ProductsWrapper>
        <Container>{newProducts}</Container>
        <Footer />
      </ProductsWrapper>
    );
  } else if (props.match.params.section_id === "skirts") {
    const newProducts = shop
      .filter(section => section.section === "skirts")[0]
      .products.map(product => (
        <Product key={product.description} bg={product.img}>
          <div className="cover"></div>
          <p className="description">{product.description}</p>
          <p className="price">{product.price} zł</p>
          <div className="buttons">
            <button className="add" onClick={handleAdd}>
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
            <button className="fav" onClick={handleFav}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </Product>
      ));

    return (
      <ProductsWrapper>
        <Container>{newProducts}</Container>
        <Footer />
      </ProductsWrapper>
    );
  } else if (props.match.params.section_id === "jackets") {
    const newProducts = shop
      .filter(section => section.section === "jackets")[0]
      .products.map(product => (
        <Product key={product.description} bg={product.img}>
          <div className="cover"></div>
          <p className="description">{product.description}</p>
          <p className="price">{product.price} zł</p>
          <div className="buttons">
            <button className="add" onClick={handleAdd}>
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
            <button className="fav" onClick={handleFav}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </Product>
      ));

    return (
      <ProductsWrapper>
        <Container>{newProducts}</Container>
        <Footer />
      </ProductsWrapper>
    );
  } else if (props.match.params.section_id === "bags") {
    const newProducts = shop
      .filter(section => section.section === "bags")[0]
      .products.map(product => (
        <Product key={product.description} bg={product.img}>
          <div className="cover"></div>
          <p className="description">{product.description}</p>
          <p className="price">{product.price} zł</p>
          <div className="buttons">
            <button className="add" onClick={handleAdd}>
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
            <button className="fav" onClick={handleFav}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </Product>
      ));

    return (
      <ProductsWrapper>
        <Container>{newProducts}</Container>
        <Footer />
      </ProductsWrapper>
    );
  } else if (props.match.params.section_id === "additives") {
    const newProducts = shop
      .filter(section => section.section === "additives")[0]
      .products.map(product => (
        <Product key={product.description} bg={product.img}>
          <div className="cover"></div>
          <p className="description">{product.description}</p>
          <p className="price">{product.price} zł</p>
          <div className="buttons">
            <button className="add" onClick={handleAdd}>
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
            <button className="fav" onClick={handleFav}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </Product>
      ));

    return (
      <ProductsWrapper>
        <Container>{newProducts}</Container>
        <Footer />
      </ProductsWrapper>
    );
  }
};
export default Products;

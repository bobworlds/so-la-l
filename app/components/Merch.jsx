import {Button, Card} from 'react-bootstrap';
import merchProduct from '../datas/merch.json';

function Merch() {
  const renderImages = () => {
    return merchProduct.map((product) => {
      return (
        // <a
        //   href={`/products/${product.url}`}
        //   rel="noopener noreferrer"
        //   className="card"
        //   key={product.title}
        // >
        <Card style={{width: '18rem'}}>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <a href={`/products/${product.url}`}>
              <Button variant="dark">COMMANDER</Button>
            </a>
          </Card.Body>
        </Card>
        //    <article className="card__link">
        //     <img
        //       src={product.image}
        //       alt={product.title}
        //       className="card__img"
        //     />

        //     <h2 className="card__title">{product.title}</h2>
        //   </article>
        // </a>
      );
    });
  };

  return <div className="container containerMerch">{renderImages()}</div>;
}

export default Merch;
const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`;

const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    totalInventory
    options {
      name
      values
    }
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    variants(first: 1) {
      nodes {
        ...ProductVariant
      }
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;

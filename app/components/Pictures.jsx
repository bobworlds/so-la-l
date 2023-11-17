import imageData from '../datas/images.json';

function Pictures() {
  const renderImages = () => {
    return imageData.map((product) => {
      return (
        <a
          href={`/products/${product.title}`}
          rel="noopener noreferrer"
          className="card"
          key={product.titsle}
        >
          <article className="card__link">
            <img src={product.src} alt={product.title} className="card__img" />

            {/* <p className='compteur'>{tirage}/200</p> */}
            <h2 className="card__title">{product.title}</h2>
          </article>
        </a>
      );
    });
  };

  return <div className="container">{renderImages()}</div>;
}

export default Pictures;
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

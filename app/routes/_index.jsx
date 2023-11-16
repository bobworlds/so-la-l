import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import ParallaxBan from '../components/ParallaxBan';
import ParallaxBanD from '~/components/ParallaxBanD';
import Pictures from '~/components/Pictures';
import Water from '~/components/Water';
import Parallax2 from '~/components/Parallax2';
import {useEffect, useRef, useState} from 'react';
import anime from 'animejs';
import Video1 from '../images/goutte.webm';
import Video2 from '../images/goutte2.webm';
import Rain from '../images/rain.mp4';
/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({context}) {
  const {storefront} = context;
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  const featuredCollection = collections.nodes[0];
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);

  return defer({featuredCollection, recommendedProducts});
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  const [videos, setVideos] = useState([]);
  const [videoKey, setVideoKey] = useState(0);

  const firstVideoAnimated = useRef(false);

  const handleClick = (event) => {
    const {clientX, clientY} = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const rotation = Math.floor(Math.random() * (360 - 0) + 1) + 'deg';
    const scale = Math.random() * (1 - 0.5) + 0.5;
    const randomVideo = Math.random() < 0.5 ? Video1 : Video2;

    const newVideo = {
      x,
      y,
      key: videoKey,
      paused: false,
      rotation,
      scale,
      videoName: randomVideo,
      opacity: 1,
    };

    setVideos((prevVideos) => [...prevVideos, newVideo]);
    setVideoKey(videoKey + 1);

    anime({
      targets: newVideo,
      opacity: 0,
      duration: 1000,
      easing: 'linear',
      delay: 1000,
      complete: () => {
        setVideos((prevVideos) =>
          prevVideos.filter((video) => video !== newVideo),
        );
      },
    });
  };

  useEffect(() => {
    if (!firstVideoAnimated.current && videos.length > 0) {
      const firstVideo = videos[0];
      anime({
        targets: firstVideo,
        opacity: 0,
        duration: 1000,
        easing: 'linear',
        delay: 1000,
        complete: () => {
          setVideos((prevVideos) =>
            prevVideos.filter((video) => video !== firstVideo),
          );
        },
      });
      firstVideoAnimated.current = true;
    }
  }, [videos]);

  return (
    <section className="goutte" onClick={handleClick}>
      {videos.map((video) => (
        <video
          key={video.key}
          src={video.videoName}
          alt="VIDEO"
          style={{
            position: 'absolute',
            top: video.y - 250 + 'px',
            left: video.x - 230 + 'px',
            transform: `rotate(${video.rotation}) scale(${video.scale})`,
            opacity: video.opacity || 1,
          }}
          className={video.paused ? 'videoClick paused' : 'videoClick'}
          autoPlay={!video.paused}
        ></video>
      ))}

      {/* <video autoPlay loop playsInline muted id="rain">
        <source src={Rain} type="mp4" />
      </video> */}

      {/* <FeaturedCollection collection={data.featuredCollection} />
      <RecommendedProducts products={data.recommendedProducts} />  */}
      <div>
        <Parallax2 />
        <Pictures />
      </div>
    </section>
  );
}

/**
 * @param {{
 *   collection: FeaturedCollectionFragment;
 * }}
 */
function FeaturedCollection({collection}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h1>{collection.title}</h1>
    </Link>
  );
}

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery>;
 * }}
 */
function RecommendedProducts({products}) {
  return (
    <div className="recommended-products">
      <h2>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div className="recommended-products-grid">
              {products.nodes.map((product) => (
                <Link
                  key={product.id}
                  className="recommended-product"
                  to={`/products/${product.handle}`}
                >
                  <Image
                    data={product.images.nodes[0]}
                    aspectRatio="1/1"
                    sizes="(min-width: 45em) 20vw, 50vw"
                  />
                  <h4>{product.title}</h4>
                  <small>
                    <Money data={product.priceRange.minVariantPrice} />
                  </small>
                </Link>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */

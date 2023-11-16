import imageData from '../datas/images.json';

function Pictures() {
  const renderImages = () => {
    return imageData.map((product) => {
      const tirage = product.tirage;
      const id = product.id;
      return (
        <article className="card" key={id}>
          <a
            href={`/products/${product.title}`}
            rel="noopener noreferrer"
            className="card__link"
          >
            <img src={product.src} alt={product.title} className="card__img" />
          </a>
          {/* <p className='compteur'>{tirage}/200</p> */}
        </article>
      );
    });
  };

  return <div className="container">{renderImages()}</div>;
}

export default Pictures;

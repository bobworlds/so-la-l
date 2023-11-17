import imageData from '../datas/images.json';

function Pictures() {
  const renderImages = () => {
    return imageData.map((product) => {
      const tirage = product.tirage;
      const id = product.id;
      return (
        <a
          href={`/products/${product.title}`}
          rel="noopener noreferrer"
          className="card"
          key={product.title}
        >
          <article className="card__link">
            <img src={product.src} alt={product.title} className="card__img" />

            {/* <p className='compteur'>{tirage}/200</p> */}
          </article>
        </a>
      );
    });
  };

  return <div className="container">{renderImages()}</div>;
}

export default Pictures;

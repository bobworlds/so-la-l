import imageData from '../datas/images.json';

function Card({title, src}) {
  return (
    <a
      href={`/products/${title}`}
      rel="noopener noreferrer"
      className="card"
      key={title}
    >
      <article className="card__link">
        <img src={src} alt={title} className="card__img" />

        {/* <p className='compteur'>{tirage}/200</p> */}
      </article>
    </a>
  );
}

export default Card;

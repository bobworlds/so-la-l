import {useState} from 'react';
import Left from '../images/arrow-left.png';
import Right from '../images/arrow-right.png';

function Carrousel({slider}) {
  const [sliding, setSliding] = useState(0); //variable d'état => état initial
  const slideLength = slider.length;

  function Previous() {
    /*permet au slide de revenir à l'image précédente 
    ou à la dernière image si le slide est déja à la première image */
    setSliding(sliding === 0 ? slideLength - 1 : sliding - 1);
  }

  function Next() {
    /* permet au slide d'aller vers l'image suivante 
    ou de revenir à la première image si le slide est déjà sur la dernière image  */
    setSliding(sliding === slideLength - 1 ? 0 : sliding + 1);
  }

  return (
    <div className="carousel">
      {slideLength > 1 ? ( // ces éléments apparaissent seulement si le nombre de slide est supérieur à 1
        <div className="carousel__arrows">
          <img
            className="carousel__previousSlide"
            src={Left}
            alt="Précédent"
            onClick={() => Previous()}
          />
          <img
            className="carousel__nextSlide"
            src={Right}
            alt="Suivant"
            onClick={() => Next()}
          />
          <p className="carousel__point">
            {' '}
            {sliding + 1 + '/' + slider.length}
          </p>
        </div>
      ) : null}

      {slider.map((image, index) => {
        return (
          <div className="carousel__content" key={index}>
            {index === sliding && (
              <img
                className="carousel__content__image"
                src={image}
                alt="Location"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Carrousel;

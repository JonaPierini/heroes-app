import { useMemo, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { heroes } from "../../heroes/data/heroes";

export const Hero = () => {
  const [hero, setHero] = useState([]);

  //nombre que le puse en el path hero => hero:id
  const { id } = useParams();

  const navigate = useNavigate()
  
  const handleBack = () => {
    navigate(-1)
 }

  //Esto se puede hacer dentro de helpers con la misma estructura
  const getData = () => {
    const respuesta = heroes.find((elem) => elem.id == id);
    setHero(respuesta);
  };

  //SE puede hacer con useMemo pero tmb con useEffect
  useMemo(() => getData(), [id])

  if(!hero){
    return <Navigate to = {'/'}></Navigate>
  }

  return (
        <div className="row mt-5">
          {/* Library animated.css */}
          <div className="col-4 animate__animated animate__fadeInLeft">
            <img
              src={`/assets/heroes/${hero.id}.jpg`}
              alt={hero.id}
              className="img-thumbnail"
              style={{height: '500px'}}
            />
          </div>
        

        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
            <li className="list-group-item"><b>Alter ego: </b>{hero.publisher}</li>
            <li className="list-group-item"><b>Alter ego: </b>{hero.first_appearance}</li>
          </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{hero.characters}</p>

          <button onClick={handleBack} className="btn btn-outline-primary">
            Regresar
          </button>
        </div>
        </div>
  );
};

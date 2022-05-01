import React from "react";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();

  const hero = getHeroById(heroeId);

  if (!hero) {
    return <Redirect to="/" />;
  }
  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const handleReturn = () => {
    // El history.lenght me sirve para leer el historial usado en esta APP, y asi poder regresar a una pagina raiz,
    // se utiliza cuando ya tenemos un link especifico de un heroe en este caso
    if (history.length <= 2) {
      history.push("/");
    } else {
      //nos sirve para regresar exactamente a la pagina anterior
      history.goBack();
    }
  };

  return (
    <div>
      <h1> HeroScreen </h1>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-thumbnail"
            src={`../assets/heroes/${heroeId}.jpg`}
            alt={superhero}
          />
        </div>

        <div className="col-md-6">
          <h4> Information </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item">
              <b> superhero: </b> {superhero}
            </li>
            <li className="list-group-item">
              <b>publisher: </b> {publisher}
            </li>
            <li className="list-group-item">
              <b>alter_ego: </b> {alter_ego}
            </li>
            <li className="list-group-item">
              <b>first_appearance: </b> {first_appearance}
            </li>
            <li className="list-group-item">
              <b>characters: </b> {characters}
            </li>
          </ul>
          <button className="btn btn-primary" onClick={handleReturn}>
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

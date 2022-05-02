import React, { useMemo } from "react";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { useLocation } from "react-router-dom";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  //   console.log(location);
  //   console.log(history);
  const { q = "" } = queryString.parse(location.search);
  //   console.log(q);

  const [values, handleInputChange] = useForm({ search: q });
  const { search } = values;

  //   const heroesList = getHeroesByName(search);
  const heroesList = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(search);
    // reset();
    history.push(`?q=${search}`);
  };

  //   RETURN
  return (
    <div>
      <h1> SearchScreen </h1>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <h5> Search Form </h5>
          <hr />

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="search"
                placeholder="Search hero"
                autoComplete="off"
                value={search}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">
                search
              </button>
            </div>
          </form>
        </div>

        {/* result */}
        <div className="col-md-8">
          <h5> Hero Found </h5>
          <hr />

          {q === "" && (
            <div className="alert alert-success" role="alert">
              Search a hero
            </div>
          )}

          {q !== "" && heroesList.length === 0 && (
            <div className="alert alert-danger" role="alert">
              There is not superhero with this name
            </div>
          )}
          <div className="row">
            {heroesList.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

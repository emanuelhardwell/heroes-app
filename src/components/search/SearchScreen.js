import React from "react";
import queryString from "query-string";
import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { useLocation } from "react-router-dom";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  //   console.log(location);
  //   console.log(history);
  const { q = "" } = queryString.parse(location.search);
  //   console.log(q);

  const [values, handleInputChange] = useForm({ search: q });
  const { search } = values;

  const heroesList = heroes;

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

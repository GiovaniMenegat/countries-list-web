import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Header from '../../components/Header';

import { Button, CountryInfo } from './styles';
import api from '../../services/api';

interface CountryParams {
  country: string;
}

interface CountryInterface {
  alpha2Code: string;
  capital: string;
  flag: string;
  name: string;
  nativeName: string;
  region: string;
  population: number;
  languages: Lenguages[];
  subregion: string;
  topLevelDomain: [];
  currencies: Currencies[];
  borders: [];
}

interface Lenguages {
  name: string;
}

interface Currencies {
  name: string;
}

const Country: React.FC = () => {
  const [country, setCountry] = useState<CountryInterface[] | null>(null);

  const { params } = useRouteMatch<CountryParams>();

  useEffect(() => {
    api.get(`name/${params.country}?fullText=true`).then(response => {
      setCountry(response.data);
    });
  }, [params.country]);

  return (
    <>
      <Header />
      <Link to="/">
        <Button type="button">
          <FiArrowLeft size={22} /> Back
        </Button>
      </Link>

      {country && (
        <CountryInfo>
          <img src={country[0].flag} alt={country[0].name} />
          <div className="information">
            <h2>{country[0].name}</h2>
            <div className="information-detail">
              <div className="left-div">
                <p>
                  <strong>Native Name: </strong>
                  {country[0].nativeName}
                </p>
                <p>
                  <strong>Population: </strong>
                  {Intl.NumberFormat().format(country[0].population)}
                </p>
                <p>
                  <strong>Region: </strong>
                  {country[0].region}
                </p>
                <p>
                  <strong>Sub Region: </strong>
                  {country[0].subregion}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {country[0].capital}
                </p>
              </div>

              <div className="right-div">
                <p>
                  <strong>Top Level Domain: </strong>
                  {country[0].topLevelDomain.map(
                    (t, index) => (index ? ', ' : '') + t,
                  )}
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {country[0].currencies.map(
                    (c, index) => (index ? ', ' : '') + c.name,
                  )}
                </p>
                <p>
                  <strong>Lenguages: </strong>
                  {country[0].languages.map(
                    (c, index) => (index ? ', ' : '') + c.name,
                  )}
                </p>
              </div>
            </div>
          </div>
        </CountryInfo>
      )}
    </>
  );
};

export default Country;

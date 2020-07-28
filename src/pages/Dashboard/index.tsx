import React, { useEffect, useState, FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { FormContainer, Form, Button, Country, CountrySection } from './styles';

interface CountryInterface {
  alpha2Code: string;
  capital: string;
  flag: string;
  name: string;
  region: string;
  population: number;
}

const Dashboard: React.FC = () => {
  const [countries, setCountries] = useState<CountryInterface[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [regionValue, setRegionValue] = useState('');

  useEffect(() => {
    api.get('/all').then(response => {
      setCountries(response.data);
    });
  }, []);

  async function handleTextFilter(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    try {
      const response = await api.get<CountryInterface[]>(`name/${searchValue}`);

      setCountries(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    if (regionValue) {
      try {
        api.get<CountryInterface[]>(`region/${regionValue}`).then(response => {
          setCountries(response.data);
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [regionValue]);

  function handleCleanFilters() {
    setSearchValue('');
    setRegionValue('');
    api.get('/all').then(response => {
      setCountries(response.data);
    });
  }

  return (
    <>
      <FormContainer>
        <Form onSubmit={handleTextFilter}>
          <div>
            <FiSearch size={28} />
            <input
              type="text"
              placeholder="Search for a country"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
          </div>
        </Form>
        <Form>
          <label htmlFor="filter">
            <select
              name="region"
              id="filter"
              defaultValue={regionValue}
              onChange={e => setRegionValue(e.target.value)}
            >
              <option value="" disabled hidden>
                Filter by Region:
              </option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </label>
          <Button onClick={handleCleanFilters}>Clean filters</Button>
        </Form>
      </FormContainer>

      <CountrySection>
        {countries &&
          countries.map(country => (
            <Link to={`/country/${country.name}`} key={country.alpha2Code}>
              <Country>
                <img src={country.flag} alt={country.name} />
                <div>
                  <h4>{country.name}</h4>
                  <p>
                    <strong>Population: </strong>
                    {Intl.NumberFormat().format(country.population)}
                  </p>
                  <p>
                    <strong>Region: </strong>
                    {country.region ? country.region : '-'}
                  </p>
                  <p>
                    <strong>Capital:</strong>{' '}
                    {country.capital ? country.capital : '-'}
                  </p>
                </div>
              </Country>
            </Link>
          ))}
      </CountrySection>
    </>
  );
};

export default Dashboard;

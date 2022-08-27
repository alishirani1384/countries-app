import React from "react";
import Card from "./Card";



const Cards = ({ countries, countryName }: any) => {
  if (countryName) {
    return countries
      .filter((coun: { name: { common: string; }; }) => coun.name.common.toLowerCase() == countryName)
      .map((country: { area: React.Key | null | undefined; flags: { svg: string; }; name: { common: string; }; population: number; region: string; capital: string[]; cca2: string; }) => {
        return (
          <div key={country.area} className="grid my-10 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
            <Card
            flag={country.flags.svg}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            code={country.cca2}
          />
          </div>
        );
      });
  }
  return (
    <div className="grid my-10 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
      {countries.slice(0, 20).map((country: any) => {
        return (
          <Card
            key={country.area}
            flag={country.flags.svg}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            code={country.cca2}
          />
        );
      })}
    </div>
  );
};

export default Cards;

import axios from "axios";
import Image from "next/image";
import React from "react";
import { BackIcon } from "../components/Icons";
import { useRouter } from "next/router";

const CountryPage = ({ countryInfo }: any) => {
  const country = countryInfo[0];
  const router = useRouter();
  return (
    <div className="mt-5">
      <button
        onClick={() => router.back()}
        className="bg-white shadow-xl rounded-lg text-lg w-24 h-10 p-2 flex items-center justify-between">
        <BackIcon />
        back
      </button>
      <div className="space-y-5">
        <div className="mt-3 max-w-md shadow-lg">
          <Image
            src={country.flags.svg}
            width="100%"
            height="100%"
            layout="responsive"
            alt={country.name.common}
            className="shadow-lg"
          />
        </div>
        <h2 className="text-xl font-bold">{country.name.common}</h2>
        <p className="text-sm font-bold">
          Native name:{" "}
          <span className="font-light">{country.name.official}</span>
        </p>
        <p className="text-sm font-bold">
          Population: <span className="font-light">{country.population}</span>
        </p>
        <p className="text-sm font-bold">
          Region: <span className="font-light">{country.region}</span>
        </p>
        <p className="text-sm font-bold">
          SubRegion: <span className="font-light">{country.subregion}</span>
        </p>
        <p className="text-sm font-bold">
          Capital: <span className="font-light">{country.capital}</span>
        </p>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }: any) {
  const countryInfo = axios.get(
    `https://restcountries.com/v3.1/alpha/${params.slug}`
  );
  return {
    props: { countryInfo: (await countryInfo).data },
  };
}

export default CountryPage;

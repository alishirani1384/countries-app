import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface card {
  flag: string;
  name: string;
  region: string;
  population: number;
  capital: string[];
  code: string;
}

const Card = ({ flag, name, region, population, capital, code }: card) => {
  const router = useRouter();
  return (
    <div
      className="w-64 flex flex-col shadow-lg rounded-lg cursor-pointer"
      onClick={() => router.push(`${code}`)}>
      <Image
        src={flag}
        width="250px"
        height="200px"
        className="rounded-t-lg"
        alt={name}
      />
      <div className="bg-white rounded-lg p-3 space-y-2">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm font-bold">
          Population: <span className="font-light">{population}</span>
        </p>
        <p className="text-sm font-bold">
          Region: <span className="font-light">{region}</span>
        </p>
        <p className="text-sm font-bold">
          Capital: <span className="font-light">{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;

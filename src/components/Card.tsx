import React from "react";

interface CardProps {
  movieName: string;
  movieRating: string;
  Image: string;
  imdb: string;
}

const handleLink = (imdb_url: string) => {
  window.open(imdb_url, "_blank", "noopener,noreferrer");
};

const Card = ({ movieName, movieRating, Image, imdb }: CardProps) => {
  return (
    <div className="main group border border-neutral-700 rounded-lg overflow-hidden text-neutral-400 hover:text-white w-[200px] h-[280px] transition-transform duration-300 ease-in-out hover:scale-105 shadow-xl mx-auto relative">
      <div className="cardImage relative">
        <img
          src={Image}
          alt={movieName}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <h1 className="absolute bottom-5 w-full text-center bg-black bg-opacity-60 py-2 text-lg font-semibold transition-all duration-500 group-hover:translate-y-full">
          {movieName}
        </h1>
      </div>
      <div className="cardDetails absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium">⭐ {movieRating}/10</p>
          <button
            className="text-sm font-medium text-blue-500 hover:text-blue-300 transition-colors"
            onClick={() => handleLink(imdb)}
          >
            IMDb
          </button>
        </div>
        <h1 className="text-lg font-semibold text-center leading-snug break-words">
          {movieName}
        </h1>
      </div>
    </div>
  );
};

export default Card;

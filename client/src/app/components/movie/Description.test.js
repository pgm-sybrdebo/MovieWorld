import React from "react";
import Description from "./Description";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";


const mockData = {
  "adult": false,
  "backdrop_path": "/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
  "belongs_to_collection": {
  "id": 837007,
  "name": "Cruella Collection",
  "poster_path": null,
  "backdrop_path": null
  },
  "budget": 200000000,
  "genres": [
  {
  "id": 35,
  "name": "Comedy"
  },
  {
  "id": 10751,
  "name": "Family"
  }
  ],
  "homepage": "https://movies.disney.com/cruella",
  "id": 337404,
  "imdb_id": "tt3228774",
  "original_language": "en",
  "original_title": "Cruella",
  "overview": "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
  "popularity": 5771.292,
  "poster_path": "/rTh4K5uw9HypmpGslcKd4QfHl93.jpg",
  "production_companies": [
  {
  "id": 2,
  "logo_path": "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
  "name": "Walt Disney Pictures",
  "origin_country": "US"
  }
  ],
  "production_countries": [
  {
  "iso_3166_1": "US",
  "name": "United States of America"
  }
  ],
  "release_date": "2021-05-26",
  "revenue": 129300000,
  "runtime": 134,
  "spoken_languages": [
  {
  "english_name": "English",
  "iso_639_1": "en",
  "name": "English"
  }
  ],
  "status": "Released",
  "tagline": "Hello Cruel World",
  "title": "Cruella",
  "video": false,
  "vote_average": 8.6,
  "vote_count": 2601
};



describe('Description', () => {
 test('Renders the description of a movie with image based on a received movie object', async () => {
  await act(async () => render(<BrowserRouter>
   <Description movie={mockData} />
  </BrowserRouter>));
  expect(screen.getByText('In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.')).toBeInTheDocument();
  expect(screen.getByText('2021-05-26')).toBeInTheDocument();
 })
});
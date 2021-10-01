import React from "react";
import Card from "./Card";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";


const mockData = {
  "adult": false,
  "backdrop_path": "/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
  "genre_ids": [
  35,
  10751
  ],
  "id": 337404,
  "original_language": "en",
  "original_title": "Cruella",
  "overview": "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
  "popularity": 6234.63,
  "poster_path": "/rTh4K5uw9HypmpGslcKd4QfHl93.jpg",
  "release_date": "2021-05-26",
  "title": "Cruella",
  "video": false,
  "vote_average": 8.6,
  "vote_count": 2602
  };


describe('Cast', () => {
 test('Renders the Card of a movie with image based on a received cast object', async () => {
  await act(async () => render(<BrowserRouter>
   <Card movie={mockData} />
  </BrowserRouter>));
  expect(screen.getByText('Cruella')).toBeInTheDocument();
 })
});
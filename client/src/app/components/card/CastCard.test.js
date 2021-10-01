import React from "react";
import CastCard from "./CastCard";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";


const mockData = {
  "adult": false,
  "gender": 1,
  "id": 54693,
  "known_for_department": "Acting",
  "name": "Emma Stone",
  "original_name": "Emma Stone",
  "popularity": 43.611,
  "profile_path": "/2hwXbPW2ffnXUe1Um0WXHG0cTwb.jpg",
  "cast_id": 0,
  "character": "Estella / Cruella",
  "credit_id": "59a50d419251412f02004a64",
  "order": 0
};



describe('Cast', () => {
 test('Renders the castCard of an actor of a movie with image based on a received cast object', async () => {
  await act(async () => render(<BrowserRouter>
   <CastCard person={mockData} />
  </BrowserRouter>));
  expect(screen.getByText('Emma Stone')).toBeInTheDocument();
  expect(screen.getByText('Estella / Cruella')).toBeInTheDocument();
 })
});
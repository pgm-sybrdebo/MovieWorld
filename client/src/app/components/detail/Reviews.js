import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFirestore } from "../../contexts/firebase/firestore.context";
import Loading from '../loading/Loading';
import Review from './Review';

const PrimButton = styled.div`

  margin: 1.5rem 0;

  @media (min-width: 52rem) {
    display: block;
    max-width: 16rem;
    margin: 1.5rem auto;
  }  

  button {
    width: 100%;
    color: #dfe1ec;
    outline: none;
    border: 3px solid #e52626;
    background-color: #e52626;
    transition: all 0.2s ease-in-out;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 3px;
    font-size: 1rem;

    &:hover {
      background-color: transparent;
      color: ${props => props.theme.secondaryColor}
    }
  }
`;


const ReviewsStyle = styled.div`
  padding: 3rem 1rem 0 1rem;

  h2 {
    padding: 1.5rem 0;
  }
  @media (min-width: 52rem) {
    padding: 3rem 2rem 0 2rem;
  }
`;

const ReviewsList = styled.ul`
  list-style: none;

  @media (min-width: 52rem) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;



const NewReviewStyle = styled.div`
  display: ${props => props.open === true ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.primaryColor};
  width: 100%;
  height: 100%;
  z-index: 100000;


  h3 {
    font-size: 2rem;
  }
`;

const FormContainer= styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid ${props => props.theme.secondaryColor};
  padding: 1rem;
  min-width: 18rem;
  width: 80%;
  max-width: 56rem;
`;



const ReviewForm = styled.form`
  label {
    display: block;
    margin-top: 1.5rem;
  }

  input, textarea {
    display: block;
    margin-top: 1rem;
    background-color: ${props => props.theme.primaryColor};
    outline: none;
    border: 3px solid #e52626;
    color: ${props => props.theme.secondaryColor};
    padding: 0.5rem 1rem;
    font-size: 1rem
  }

  textarea {
    height: 10rem;
    width: 100%;
  }
`;


const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent; 
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: rotate(90deg);
  }

`;

const Reviews = ({id, cat='movies'}) => {
  const [reviews, setReviews] = useState();
  const [newReview, setNewReview] = useState(false);
  const { getReviews, addReview } = useFirestore();
  const userId= localStorage.getItem('userId');

  const [formData, setFormData] = useState({
    rating: 0,
    review: 'Write here your review ...',
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getReviews(id.toString(), cat);
      setReviews(data);

    };

    fetchData();
  }, [id, cat, getReviews]);
  const handleOnClick = (e) => {
    setNewReview(true);
  }

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleClose = (e) => {
    setNewReview(false);
  }


  const handleOnSubmit = (e) => {
    e.preventDefault();
    setNewReview(false);
    const newReview = {
      rating: parseInt(formData.rating),
      review: formData.review,
      createdAt: Date.now(),
      deletedAt: null,
      modified: null,
    };
    addReview(id.toString(), newReview, userId, cat);
  }

  return (
    <ReviewsStyle>
      <h2>Reviews</h2>
      {
        reviews ? 
        (
          <ReviewsList>
            {reviews.map(review => {
              return (
                <Review key={review.uid} review={review} />
              )
            })}
          </ReviewsList> 
        ) : (<Loading />)
      }
      <PrimButton>
        <button onClick={handleOnClick}>Add review</button>
      </PrimButton>
      <NewReviewStyle open={newReview}>
        <CloseButton onClick={handleClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path data-name="close (1)" d="M14.2 12l9.345-9.345a1.556 1.556 0 00-2.2-2.2L12 9.801 2.655.456a1.556 1.556 0 10-2.2 2.2L9.8 12 .456 21.345a1.556 1.556 0 102.2 2.2L12 14.199l9.345 9.345a1.556 1.556 0 102.2-2.2zm0 0" fill="#dfe1ec"/></svg>
        </CloseButton>
        <FormContainer>
          <h3>Your Review</h3>
          <ReviewForm onSubmit={handleOnSubmit}>
            <label>
              Your rating (between 0 and 100): <input type="number" min="0" max="100" value={formData.rating} onChange={handleOnChange} name="rating"/>
            </label>
            <label>
              Your review: <textarea value={formData.review} name="review" onChange={handleOnChange} />
            </label>
            <PrimButton>
              <button type="submit">Submit</button>
            </PrimButton>
          </ReviewForm>
        </FormContainer>
      </NewReviewStyle>
    
    </ReviewsStyle>
  )
}

export default Reviews

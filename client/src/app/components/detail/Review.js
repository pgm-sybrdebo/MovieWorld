import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useFirestore } from "../../contexts/firebase/firestore.context";
import Loading from '../loading/Loading';
import { Circle } from '../Rating';


const ReviewStyle = styled.li`
  padding: 1rem 0;

  @media (min-width: 52rem) {
    width: 48%;
  }
`;

const ReviewHead = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 3px solid ${props => props.theme.secondaryColor};
    margin-right: 1.5rem;
  }
  
  p {
    margin-right: 1.5rem;
  }
`;

const Review = ({review}) => {
  const [user, setUser] = useState();
  const { getUserById } = useFirestore();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserById(review.uid);
      setUser(data);
    };

    fetchData();
  }, [review, getUserById]);
  return (
    
    <ReviewStyle>
      {
        user ? 
        (
          <ReviewHead>
            <img src={user.image} alt={user.username} />
            <p>{user.username}</p>
            <Circle rating={ review.rating / 10 } d={3}/>
          </ReviewHead>
        ) : (<Loading />)
      }
      <p>{review.review}</p>
    </ReviewStyle>
  )
}

export default Review

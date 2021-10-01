import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useFirestore } from "../../contexts/firebase/firestore.context";
import Loading from '../loading/Loading';

const AnswerStyle = styled.li`
  padding: 1.5rem;

  h3 {
    padding-bottom: 1rem;
    font-size: 1.2rem;
  }

  @media (min-width: 52rem) {
    font-size: 1.2rem;
  }
`;

const AnswerHead = styled.div`
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

const AnswerAnswer = ({answerAnswer, answerId, discussionId, id, cat}) => {
  const [user, setUser] = useState();
  const { getUserById } = useFirestore();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserById(answerAnswer[0].uid);
      setUser(data);
    };

    fetchData();
  }, [answerAnswer, getUserById]);
  return (
    
    <AnswerStyle>
      <div>
        {
          user ? 
          (
            <AnswerHead>
              <img src={user.image} alt={user.username} />
              <p>{user.username}</p>
            </AnswerHead>
          ) : (<Loading />)
        }
        <p>{answerAnswer[0].discussion}</p>
      </div>
    </AnswerStyle>
  )
}

export default AnswerAnswer;

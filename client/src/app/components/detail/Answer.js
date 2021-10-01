import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useFirestore } from "../../contexts/firebase/firestore.context";
import Loading from '../loading/Loading';

import AnswerAnswer from './AnswerAnswer';

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

const AnswerAnswers = styled.ul`
  list-style: none;
`;

const Answer = ({answer, discussionId, id, cat}) => {
  const [user, setUser] = useState();
  const [answerAnswers, setAnswersAnswers] = useState();
  const { getUserById, getDiscussionAnswersAnswers } = useFirestore();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserById(answer.uid);
      setUser(data);
    };

    fetchData();
  }, [answer, getUserById]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDiscussionAnswersAnswers(id.toString(), discussionId, answer.uid, cat);
      setAnswersAnswers(data);
    };

    fetchData();
  }, [answer, discussionId, id, cat, getDiscussionAnswersAnswers]);
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
        <p>{answer.discussion}</p>
      </div>
      <AnswerAnswers>
        {
          answerAnswers ?
          (
            answerAnswers.map(answerAnswer => {
              return (
                <AnswerAnswer key={answerAnswer.uid} answerAnswer={answerAnswers} id={id} answerId={answer.uid} discussionId={discussionId} cat={cat}/>
              )
            })
          ) : (<Loading />)
        }
      </AnswerAnswers>
    </AnswerStyle>
  )
}

export default Answer;

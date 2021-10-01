import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useFirestore } from "../../contexts/firebase/firestore.context";
import Loading from '../loading/Loading';
import Answer from './Answer';


const DiscussionStyle = styled.li`
  padding: 1rem;

  h3 {
    padding-bottom: 1rem;
    font-size: 1.2rem;
  }

  @media (min-width: 52rem) {
    font-size: 1.2rem;
  }

  @media (min-width: 52rem) {
    padding: 1rem 2rem;
  }
`;

const DiscussionHead = styled.div`
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

const DiscussionAnswers = styled.ul`
  list-style: none;
`;

const Discussion = ({discussion, id, cat}) => {
  const [user, setUser] = useState();
  const [answers, setAnswers] = useState();
  const { getUserById, getDiscussionAnswers } = useFirestore();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserById(discussion.uid);
      setUser(data);
    };

    fetchData();
  }, [discussion, getUserById]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDiscussionAnswers(id.toString(), discussion.uid, cat);
      setAnswers(data);
    };

    fetchData();
  }, [discussion, id, cat, getDiscussionAnswers]);
  return (
    
    <DiscussionStyle>
      <div>
        {
          user ? 
          (
            <DiscussionHead>
              <img src={user.image} alt={user.username} />
              <p>{user.username}</p>
            </DiscussionHead>
          ) : (<Loading />)
        }
        <h3>{discussion.title}</h3>
        <p>{discussion.discussion}</p>
      </div>
      <DiscussionAnswers>
        {
          answers ?
          (
            answers.map(answer => {
              return (
                <Answer key={answer.uid} answer={answer} id={id} discussionId={discussion.uid} cat={cat} />
              )
            })
          ) : (<Loading />)
        }
      </DiscussionAnswers>
      
    </DiscussionStyle>
  )
}

export default Discussion;

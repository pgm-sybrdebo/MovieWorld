import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFirestore } from "../../contexts/firebase/firestore.context";
import PrimaryButton from '../buttons/PrimaryButton';
import Loading from '../loading/Loading';
import Discussion from './Discussion';


const DiscussionsStyle = styled.div`
  padding-top: 3rem;

  ul {
    list-style: none;
  }

  h2 {
    padding: 1rem;
    
    @media (min-width: 52rem) {
      padding: 1rem 2rem;
    }
  }
`;

const DiscussionButton = styled.div`
  margin: 1.5rem 0;
  padding: 0 1rem;

  @media (min-width: 52rem) {
    display: block;
    max-width: 16rem;
    margin: 1.5rem auto;
  }
`;


const Discussions = ({id, cat='movies'}) => {
  const [discussions, setDiscussions] = useState();
  const { getDiscussions } = useFirestore();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDiscussions(id.toString(), cat);
      setDiscussions(data);

    };

    fetchData();
  }, [id, cat, getDiscussions]);
  return (
    <DiscussionsStyle>
      <h2>Discussions</h2>
      {
        discussions ? 
        (
          <ul>
            {discussions.map(discussion => {
              return (
                <Discussion key={discussion.uid} discussion={discussion} id={id} cat={cat}/>
              )
            })}
          </ul> 
        ) : (<Loading />)
      }
      <DiscussionButton>
        <PrimaryButton width={'100%'} content={'Add discussion'} />
      </DiscussionButton>
    </DiscussionsStyle>
  )
}

export default Discussions;

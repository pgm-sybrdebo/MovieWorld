import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFirestore } from "../../contexts/firebase/firestore.context";
import DarkModeSwitch from './DarkModeSwitch';
import { useAuth } from '../../contexts/firebase/auth.context';
import Loading from '../loading/Loading';

const Profile = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  img {
    width: 12rem;
    height: 12rem;
    margin: 0 1rem 1.5rem 1rem;
    object-fit: cover;
    object-position: top;
    display: block;
    border: 3px solid ${props => props.theme.secondaryColor};
    border-radius: 50%;
  }

  h3{
    margin-bottom: 1.5rem;
    width: 100%;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 52rem) {
    width: 50%;
    margin-bottom: 1.5rem;
  }
`;

const PersonalInformationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 52rem) {
    width: 50%;
    margin-bottom: 1.5rem;
    order: 1;
  }
`;

const ContactInformationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 52rem) {
    width: 50%;
    margin-bottom: 1.5rem;
    order: 0;
  }
`;

const Lab = styled.span`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Value = styled.span`
  display:block;
  font-weight: bold;
`;

const ProfileDetailItem = styled.div`
  width: 48%;
  margin-bottom: 1.5rem;
`;

const ContactDetail = styled.div`
  margin-bottom: 1.5rem;
  margin-right: 1.5rem;
`;

const Settings = styled.div`
  padding: 0 1rem 1rem 1rem;

  div {
    display: flex;
    align-items: center;
    p {
      margin-right: 1.5rem;
    }
  }

  @media (min-width: 52rem) {
    width: 50%;
    order: 3;
  }
`;

const ProfileDetail = () => {
  const {currentUser} = useAuth();
  const [profile, setProfile] = useState();
  const { getProfileById } = useFirestore();
  const userId= localStorage.getItem('userId');
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProfileById(userId);
      setProfile(data);
    };

    fetchData();
  }, [getProfileById, userId, profile])
  
  
  return (
    <div>
      {profile ? 
      (
        <Profile>
          <ProfileContainer>
            <img src={currentUser.photoURL} alt={currentUser.email} />
          </ProfileContainer>
          <PersonalInformationContainer>
            <h3>Personal information</h3>
            <ProfileDetailItem>
              <Lab>Firstname</Lab>
              <Value>{profile.firstName}</Value>
            </ProfileDetailItem>
            <ProfileDetailItem>
              <Lab>Lastname</Lab>
              <Value>{profile.lastName}</Value>
            </ProfileDetailItem>
            <ProfileDetailItem>
              <Lab>Street</Lab>
              <Value>{profile.street}</Value>
            </ProfileDetailItem>
            <ProfileDetailItem>
              <Lab>Number</Lab>
              <Value>{profile.number}</Value>
            </ProfileDetailItem>
            <ProfileDetailItem>
              <Lab>Zip-code</Lab>
              <Value>{profile.zipCode}</Value>
            </ProfileDetailItem>
            <ProfileDetailItem>
              <Lab>City</Lab>
              <Value>{profile.city}</Value>
            </ProfileDetailItem>
            <ProfileDetailItem>
              <Lab>Country</Lab>
              <Value>{profile.country}</Value>
            </ProfileDetailItem>
          </PersonalInformationContainer>
          <ContactInformationContainer>
            <h3>Contact Information</h3>
            <ContactDetail>
              <Lab>Email</Lab>
              <Value>{currentUser.email}</Value>
            </ContactDetail>
            <ContactDetail>
              <Lab>Phone</Lab>
              <Value>{profile.phone}</Value>
            </ContactDetail>
          </ContactInformationContainer>
          <Settings>
            <h3>Settings</h3>
            <div>
              <p>Theme mode</p>
              <DarkModeSwitch />
            </div>
          </Settings>
        </Profile>
      ) : (<Loading />)}
    </div>
  )
}

export default ProfileDetail

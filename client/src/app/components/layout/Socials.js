import styled from 'styled-components';

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  width: 100%;

  @media (min-width: 48rem) {
    width: 33.33%;
    max-width: 26rem;
  }

  h3 {
    color: ${props => props.theme.primaryColor};
    padding-bottom: 1rem;
  }

  a {
    margin: 0 0.5rem;

    path {
      fill: ${props => props.theme.primaryColor};
      transition: all 0.2s ease-in-out;
    }

    &:hover path {
      fill: #e52626;
    }
  }
`;


const Socials = () => {
  return (
    <SocialsContainer>
      <h3>Socials</h3>
      <div>
        <a href="https://www.facebook.com/arteveldehogeschool/">
          <svg xmlns="http://www.w3.org/2000/svg" width="19.281" height="36"><path data-name="Icon awesome-facebook-f" d="M18.018 20.25l1-6.515h-6.252V9.507c0-1.782.873-3.52 3.673-3.52h2.842V.44A34.658 34.658 0 0014.237 0C9.091 0 5.723 3.12 5.723 8.769v4.965H0v6.516h5.723V36h7.043V20.25z" fill="#191a32"/></svg>
        </a>
          
        <a href="https://twitter.com/ArteveldehsGent?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="29.239"><path data-name="Icon awesome-twitter" d="M32.3 7.287c.023.32.023.64.023.959 0 9.754-7.424 20.992-20.992 20.992A20.85 20.85 0 010 25.926a15.263 15.263 0 001.782.091 14.776 14.776 0 009.16-3.152 7.391 7.391 0 01-6.9-5.117 9.3 9.3 0 001.393.114 7.8 7.8 0 001.942-.251 7.379 7.379 0 01-5.916-7.241v-.091a7.431 7.431 0 003.339.94 7.389 7.389 0 01-2.287-9.872 20.972 20.972 0 0015.213 7.721 8.329 8.329 0 01-.183-1.69A7.385 7.385 0 0130.312 2.33 14.526 14.526 0 0034.995.548a7.358 7.358 0 01-3.244 4.066A14.791 14.791 0 0036 3.472a15.86 15.86 0 01-3.7 3.815z" fill="#191a32"/></svg>
        </a>

        <a href="https://www.instagram.com/arteveldehogeschool/?hl=nl">
          <svg xmlns="http://www.w3.org/2000/svg" width="31.518" height="31.511" viewBox="0 0 31.518 31.511">
            <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M15.757,9.914a8.079,8.079,0,1,0,8.079,8.079A8.066,8.066,0,0,0,15.757,9.914Zm0,13.331a5.252,5.252,0,1,1,5.252-5.252,5.262,5.262,0,0,1-5.252,5.252ZM26.051,9.584A1.884,1.884,0,1,1,24.166,7.7,1.88,1.88,0,0,1,26.051,9.584ZM31.4,11.5a9.325,9.325,0,0,0-2.545-6.6,9.387,9.387,0,0,0-6.6-2.545c-2.6-.148-10.4-.148-13,0a9.373,9.373,0,0,0-6.6,2.538,9.356,9.356,0,0,0-2.545,6.6c-.148,2.6-.148,10.4,0,13a9.325,9.325,0,0,0,2.545,6.6,9.4,9.4,0,0,0,6.6,2.545c2.6.148,10.4.148,13,0a9.325,9.325,0,0,0,6.6-2.545,9.387,9.387,0,0,0,2.545-6.6c.148-2.6.148-10.392,0-12.994ZM28.041,27.281a5.318,5.318,0,0,1-3,3c-2.074.823-7,.633-9.288.633s-7.221.183-9.288-.633a5.318,5.318,0,0,1-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318,5.318,0,0,1,3-3c2.074-.823,7-.633,9.288-.633s7.221-.183,9.288.633a5.318,5.318,0,0,1,3,3c.823,2.074.633,7,.633,9.288S28.863,25.214,28.041,27.281Z" transform="translate(0.005 -2.238)" fill="#191a32"/>
          </svg>
        </a>

        <a href="https://www.youtube.com/user/Arteveldehogeschool">
          <svg xmlns="http://www.w3.org/2000/svg" width="36.5" height="25.664"><path data-name="Icon awesome-youtube" d="M35.737 4.016A4.586 4.586 0 0032.51.768C29.664 0 18.25 0 18.25 0S6.836 0 3.99.768A4.586 4.586 0 00.763 4.016C0 6.881 0 12.858 0 12.858s0 5.977.763 8.842a4.518 4.518 0 003.227 3.2c2.847.768 14.26.768 14.26.768s11.414 0 14.26-.768a4.518 4.518 0 003.227-3.2c.763-2.865.763-8.842.763-8.842s0-5.977-.763-8.842zm-21.22 14.269V7.431l9.54 5.427-9.54 5.427z" fill="#191a32"/></svg>
        </a>
      </div>
    </SocialsContainer>
  )
}

export default Socials

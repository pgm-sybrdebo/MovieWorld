import { useHistory } from "react-router-dom";

import * as Routes from '../routes';

const NotFoundPage = () => {
  const history = useHistory();

  return (
    <main>
      <div>
        <div >
          <button onClick={() => history.push(Routes.LANDING, { from: "NotFoundPage" })}>Home</button>
          <button onClick={() => history.goBack() }>Back</button>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div className="loading-spinner d-flex justify-content-center align-items-center" style={{height:'100vh'}} >
      <Spinner animation="border" role="status" style={{width:'50px',height:'50px',color:'yellowgreen'}} >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;

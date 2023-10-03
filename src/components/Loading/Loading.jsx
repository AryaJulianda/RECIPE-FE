import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => {
  return <Player 
    src='/sleeping_cat.json'
    className="player" loop autoplay 
    style={{ height: '170px', width: '170px' }}/>
}
export default Loading;
  
// import { Spinner } from 'react-bootstrap';
  // <div className="loading-spinner d-flex justify-content-center align-items-center" style={{height:'100vh'}} >
  //   <Spinner animation="border" role="status" style={{width:'50px',height:'50px',color:'yellowgreen'}} >
  //     <span className="visually-hidden">Loading...</span>
  //   </Spinner>
  // </div>
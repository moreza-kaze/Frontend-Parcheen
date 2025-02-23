import Lottie from 'react-lottie-player';
import loading from '../../../../public/circle-loading.json';
function LoadingButton() {
   return (
      <>
         <Lottie
            loop
            animationData={loading}
            play
            style={{ width: 24, height: 24 }}
         />
      </>
   );
}

export default LoadingButton;

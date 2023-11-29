import './loading.css'
import skullSvg from './resources/skull-head-svgrepo-com.svg';

export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center  flex-col">
      <img src={skullSvg} alt="OverLoad" className="animate-bounce-spin"/>
    </div>
  )
}
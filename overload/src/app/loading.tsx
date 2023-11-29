import './loading.css'
import skullSvg from './resources/skull-head-svgrepo-com.svg';
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center  flex-col">
      <Image src={skullSvg} alt="OverLoad" className="animate-bounce-spin"/>
    </div>
  )
}
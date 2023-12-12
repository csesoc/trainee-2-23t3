import './loading.css'
import skullSvg from './resources/skull-head-svgrepo-com.svg';
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center  flex-col">
      <div className="w-1/4 h-1/4">
        <Image src={skullSvg} alt="OverLoad" className="animate-spin colored-svg"/>
      </div>
    </div>
  )
}
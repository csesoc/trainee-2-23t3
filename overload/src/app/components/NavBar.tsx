// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  // You can add any additional props if needed
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="flex justify-between items-center h-16 px-4 bg-white text-black">
      <div className="flex items-center">
        <Link href="/">
            <Image className='bg-black rounded-full' src="/resources/realskull.jpg" alt="Skull Logo" width={40} height={40} />
        </Link>
        <Link href="/">
            <span className='ml-2'>Home</span>
        </Link>
        <Link href="/course-rating">
            <span  className='ml-2'>Course Rating</span>
        </Link>
      </div>
      <div className="flex items-center">
        {/* Add your profile picture icon */}
        <img src="/profile-icon.png" alt="Profile Icon" className="w-8 h-8 rounded-full object-cover bg-black" />
      </div>
    </nav>
  );
};

export default Navbar;

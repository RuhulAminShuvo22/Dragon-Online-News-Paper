
import Image from 'next/image'
import logo from '@/assets/logo.png'

const Header = () => {
  return (
    <div className='text-center py-8 space-y-4'>
      <Image className="mx-auto" src={logo} width={300} height={200} alt="Logo" />
      <p>Journalism With Fear or Favour</p>
      <p>Date</p>
      
    </div>
  );
};

export default Header;
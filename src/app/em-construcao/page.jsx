import Image from 'next/image';
import UnderConstructionImage from '../../../public/under-construction.avif';

export default function UnderConstruction() {
  return (
    <main className="flex justify-center">
      <Image src={UnderConstructionImage} alt="Em Construção" className="opacity-30 h-screen w-auto" />
      <h1 className='fixed top-1/3 text-4xl md:text-5xl font-bold uppercase text-center'>em<br />construção</h1>
    </main>
  );
}

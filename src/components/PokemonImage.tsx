'use client';
import Image from 'next/image';

interface PokemonImageProps {
  image: string;
  name: string;
}

const PokemonImage: React.FC<PokemonImageProps> = ({ image, name }) => {
  return (
    <Image
      src={image}
      alt={'Picture of ' + name}
      priority
      fill
      style={{ objectFit: 'contain' }}
      className="transition-opacity opacity-0 duration-[2s]"
      onLoadingComplete={(image) => image.classList.remove('opacity-0')}
    />
  );
};
export default PokemonImage;

import { ArrowRightIcon } from '@heroicons/react/solid';

interface PokemonCardProps {
  name: string;
}
const PokemonCard: React.FC<PokemonCardProps> = ({ name }) => {
  return (
    <div className="group bg-slate-50 rounded-lg mt-4 mr-0 lg:mr-7 md:mr-7 sm:mr-7 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <a href={name}>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      </a>

      <a href={name} className="text-xs flex items-center text-blue-600 ">
        Details
        <ArrowRightIcon className="text-xs w-3.5 h-5 ml-1" />
      </a>
    </div>
  );
};
export default PokemonCard;

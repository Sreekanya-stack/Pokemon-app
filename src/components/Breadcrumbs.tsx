import Link from 'next/link';

const Breadcrumb = ({ pokemonName }: { pokemonName?: string }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="list-none p-0 flex text-gray-700">
        <li>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <span className="mx-2">/</span>
        </li>
        <li>
          {pokemonName && (
            <>
              <span className="text-gray-500">{pokemonName}</span>
            </>
          )}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;

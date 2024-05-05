import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-16">
      <h2 className="text-4xl font-bold mb-4">Not Found</h2>
      <p className="text-lg mb-6">Sorry, the requested resource could not be found.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;

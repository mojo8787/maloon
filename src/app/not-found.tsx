import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-brand-gray mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-brand-gray mb-4">Page Not Found</h2>
        <p className="text-dark-light mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="bg-brand-green hover:bg-brand-green-s text-white px-6 py-3 rounded-md font-medium text-center transition-colors inline-block"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
} 
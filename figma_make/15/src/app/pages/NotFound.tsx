import { Link } from 'react-router';
import { Home, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

export function NotFound() {
  return (
    <div className="container px-4 py-20 text-center">
      <AlertCircle className="mx-auto mb-4 h-16 w-16 text-gray-400" />
      <h1 className="mb-2 text-4xl">404</h1>
      <h2 className="mb-4 text-2xl">Page Not Found</h2>
      <p className="mb-8 text-gray-600">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button size="lg" className="gap-2">
          <Home className="h-5 w-5" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}

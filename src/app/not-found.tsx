import type { Metadata } from 'next';
import LostPage from './not-found/lost-page';

export const metadata: Metadata = {
  title: 'Page not found — Roger Twan',
  description: 'The page you were looking for could not be found.',
};

export default function NotFound() {
  return <LostPage />;
}

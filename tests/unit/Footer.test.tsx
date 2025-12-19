import { render, screen } from '@testing-library/react';

// Mock SVG imports
jest.mock('@public/icons/email.svg', () => (props: any) => (
  <svg {...props} data-testid="email-icon" />
));
jest.mock('@public/icons/phone.svg', () => (props: any) => (
  <svg {...props} data-testid="phone-icon" />
));
jest.mock('@public/icons/linkedin.svg', () => (props: any) => (
  <svg {...props} data-testid="linkedin-icon" />
));
jest.mock('@public/icons/github.svg', () => (props: any) => (
  <svg {...props} data-testid="github-icon" />
));
jest.mock('@public/icons/instagram.svg', () => (props: any) => (
  <svg {...props} data-testid="instagram-icon" />
));
jest.mock('@public/icons/facebook.svg', () => (props: any) => (
  <svg {...props} data-testid="facebook-icon" />
));

import Footer from '@/components/Footer';

describe('Footer', () => {
  it('renders the current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(`© ${currentYear} Roger Twan. All rights reserved.`),
    ).toBeInTheDocument();
  });

  it('renders the "Quick Links" heading', () => {
    render(<Footer />);
    expect(
      screen.getByRole('heading', { name: /Quick Links/i }),
    ).toBeInTheDocument();
  });
});

import IconLinkedin from '@public/icons/linkedin.svg';
import IconGithub from '@public/icons/github.svg';
import IconInstagram from '@public/icons/instagram.svg';
import IconFacebook from '@public/icons/facebook.svg';

export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/roger-twan',
    icon: <IconLinkedin />,
    backgroundColor: 'bg-blue-600',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/roger-twan',
    icon: <IconGithub />,
    backgroundColor: 'bg-neutral-800',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/roger.twan',
    icon: <IconInstagram />,
    backgroundColor: 'bg-red-500',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/roger.twan',
    icon: <IconFacebook />,
    backgroundColor: 'bg-blue-500',
  },
];

export default function SocialMedia() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition"
        >
          <span
            className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-white ${link.backgroundColor}`}
          >
            <div className="size-5">{link.icon}</div>
          </span>
        </a>
      ))}
    </div>
  );
}

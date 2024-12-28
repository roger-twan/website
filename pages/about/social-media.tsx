import GitHubIcon from '@/public/icons/github.svg'
import LinkedInIcon from '@/public/icons/linkedin.svg'
import InstagramIcon from '@/public/icons/instagram.svg'
import FacebookIcon from '@/public/icons/facebook.svg'
import EmailIcon from '@/public/icons/email.svg'

const buttonClasses =
  'text-white bg-gray-800 hover:bg-gray-900 rounded-full p-3 mx-2 mb-2 shadow-lg'
const SocialMedia = ({ className }: { className?: string }) => {
  return (
    <div className={`px-4 ${className}`}>
      <button
        className={buttonClasses}
        onClick={() => window.open('https://github.com/roger-twan', '_blank')}
      >
        <GitHubIcon className="size-6" />
      </button>
      <button
        className={buttonClasses}
        onClick={() =>
          window.open('https://www.linkedin.com/in/roger-twan', '_blank')
        }
      >
        <LinkedInIcon className="size-6" />
      </button>
      <button
        className={buttonClasses}
        onClick={() =>
          window.open('https://instagram.com/roger.twan', '_blank')
        }
      >
        <InstagramIcon className="size-6" />
      </button>
      <button
        className={buttonClasses}
        onClick={() => window.open('https://facebook.com/roger.twan', '_blank')}
      >
        <FacebookIcon className="size-6" />
      </button>
      <button
        className={buttonClasses}
        onClick={() => window.open('mailto:roger.twan@gmail.com')}
      >
        <EmailIcon className="size-6" />
      </button>
    </div>
  )
}

export default SocialMedia

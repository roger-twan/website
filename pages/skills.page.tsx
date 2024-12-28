import { useSearchParams } from 'next/navigation'
import Skills from './about/skills'

const PageSkills = () => {
  const searchParams = useSearchParams()
  const hideYear = searchParams.get('hideYear')

  return <Skills showYear={hideYear === null} />
}

export default PageSkills

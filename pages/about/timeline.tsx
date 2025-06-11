import { format, sub } from 'date-fns'

const data = [
  {
    type: 'education',
    title: 'BCS',
    unit: 'Yunan Minzu University',
    location: 'Kunming, China',
    startDate: new Date(2010, 9),
    endDate: new Date(2014, 7),
  },
  {
    type: 'work',
    title: 'Front-End Developer',
    unit: 'Yixintang Pharmaceutical Group Co., Ltd.',
    location: 'Kunming, China',
    startDate: new Date(2014, 7),
    endDate: new Date(2016, 3),
  },
  {
    type: 'work',
    title: 'Front-End Engineer',
    unit: 'Shenzhen Jiuxi Technology Co., Ltd.',
    location: 'Shenzhen, China',
    startDate: new Date(2016, 4),
    endDate: new Date(2018, 6),
  },
  {
    type: 'work',
    title: 'Senior Web Engineer',
    unit: 'Klook Travel Technology Co., Ltd.',
    location: 'Shenzhen, China',
    startDate: new Date(2018, 6),
    endDate: new Date(2022, 6),
  },
  {
    type: 'work',
    title: 'Full-Stack Developer',
    unit: 'Freelance',
    location: 'Remote',
    startDate: new Date(2022, 6),
    endDate: new Date(2024, 12),
  },
  {
    type: 'education',
    title: 'IMD Diploma',
    unit: 'Algonquin College',
    location: 'Ottawa, Canada',
    startDate: new Date(2024, 1),
    endDate: new Date(2025, 8),
  },
  {
    type: 'work',
    title: 'Software Engineer',
    unit: 'Toropal',
    location: 'Remote',
    startDate: new Date(2024, 12),
    endDate: new Date(),
  },
]

const TimeLine = ({ className }: { className?: string }) => {
  const formattedData = data.map((item: any) => {
    return {
      ...item,
      startDate: sub(item.startDate, { months: 1 }),
      endDate: sub(item.endDate, { months: 1 }),
    }
  })
  const minDate = Math.min(
    ...formattedData.map((item: any) => item.startDate.getTime())
  )
  const maxDate = Math.max(
    ...formattedData.map((item: any) => item.endDate.getTime())
  )
  const SCALE_VALUE = 5

  return (
    <div className={`${className} relative -translate-x-5`}>
      {formattedData.map((item, index) => {
        const position =
          ((item.startDate.getTime() - minDate) / (maxDate - minDate)) * 100
        const height =
          ((item.endDate.getTime() - item.startDate.getTime()) /
            (maxDate - minDate)) *
          100
        const isOdd = index % 2 === 0

        return (
          <div
            key={index}
            className={`absolute w-10 flex justify-center rounded-full ${
              item.type === 'education' ? 'bg-red-400' : 'bg-blue-400'
            } opacity-90`}
            style={{
              top: `${position * SCALE_VALUE}px`,
              height: `${height * SCALE_VALUE}px`,
            }}
          >
            <div className={`absolute -top-3 ${isOdd ? 'right-5' : 'left-5'}`}>
              <div
                className={`flex items-center text-nowrap ${
                  isOdd && 'flex-row-reverse'
                } `}
              >
                <span
                  className={`w-14 h-px bg-black ${isOdd ? 'ml-1' : 'mr-1'}`}
                />
                {format(item.startDate.toDateString(), 'MMMM yyyy')}
              </div>
              <ul
                className={`${
                  isOdd ? 'pl-4 sm:pl-3' : 'ml-16 pl-3 sm:pl-2'
                } w-28 text-xs list-disc ${isOdd && ''} leading-none`}
              >
                <li className="mb-1">{item.title}</li>
                <li className="mb-1">{item.unit}</li>
                <li className="mb-1">{item.location}</li>
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TimeLine

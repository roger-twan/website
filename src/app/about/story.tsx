const stories = [
  {
    title: 'The Beginning',
    p1: 'My journey into the world of digital creation began with a simple curiosity about how websites work. What started as tinkering with HTML and CSS has evolved into a passion for creating meaningful and stable digital experiences.',
    p2: 'I believe that great design and technology should work together seamlessly to solve real problems and create value for users.',
  },
  {
    title: 'My Philosophy',
    p1: 'I treat every project as my own, taking initiative and responsibility from concept to launch, with a strong focus on user needs and product excellence.',
    p2: 'Collaboration and continuous learning are at the heart of my work ethic. I&apos;m always exploring new technologies and design trends to stay ahead of the curve.',
  },
];

export default function storyModule() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">My Story</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {stories.map((story, index) => (
          <div key={index}>
            <h5 className="font-bold mb-4 text-center">{story.title}</h5>
            <p className="mb-4">{story.p1}</p>
            <p>{story.p2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

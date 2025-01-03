const Loading = () => {
  return (
    <span className="flex h-8 w-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-8 w-8 bg-lime-400"></span>
    </span>
  )
}

export default Loading

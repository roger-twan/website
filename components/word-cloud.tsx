import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import cloud from 'd3-cloud'

interface Word {
  text: string
  size: number
}

const WordCloud = ({ words }: { words: Word[] }) => {
  const svgRef = useRef<any>()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight / 3,
      })

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const svg = d3.select(svgRef.current)
    svg
    svg.selectAll('*').remove()

    const layout = cloud()
      .size([dimensions.width, dimensions.height])
      .words(words.map((d) => ({ text: d.text, size: d.size })))
      .padding(5)
      .rotate(() => ~~(Math.random() * 2) * 45)
      .font('Impact')
      .fontSize((d: Word) => d.size)
      .on('end', draw)

    layout.start()

    function draw(words: Word[]) {
      svg
        .attr('width', dimensions.width)
        .attr('height', dimensions.height)
        .append('g')
        .attr(
          'transform',
          `translate(${dimensions.width / 2},${dimensions.height / 2})`
        )
        .selectAll('text')
        .data(words)
        .enter()
        .append('text')
        .style('font-size', (d: Word) => `${d.size}px`)
        .style('font-family', 'Impact')
        .style(
          'fill',
          () => d3.schemeCategory10[Math.floor(Math.random() * 10)]
        )
        .attr('text-anchor', 'middle')
        .attr(
          'transform',
          (d: any) => `translate(${d.x},${d.y})rotate(${d.rotate})`
        )
        .text((d: Word) => d.text)
    }
  }, [dimensions])

  return <svg ref={svgRef} />
}

export default WordCloud

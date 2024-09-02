import { visit } from 'unist-util-visit'

const rehypeVideoPlugin = () => {
  return (tree: any) => {
    visit(tree, 'element', (node: any) => {
      const videoReg = /https?:\/\/youtu\.be/
      if (node.tagName === 'img' && videoReg.test(node.properties.src)) {
        node.tagName = 'iframe'
        node.properties = {
          src: node.properties.src.replace(
            videoReg,
            'https://www.youtube.com/embed/'
          ),
          allow: 'fullscreen',
          frameborder: 0,
          width: '100%',
          height: '420px',
        }
      }
    })
  }
}

export default rehypeVideoPlugin

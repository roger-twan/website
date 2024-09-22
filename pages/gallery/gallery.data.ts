import { notesRepoReq } from '@/utils/octokit'
import metadataParser from 'markdown-yaml-metadata-parser'
import ExifReader from 'exifreader'
import { compareAsc } from 'date-fns'

interface Exif {
  camera: string
  len: string
  aperture: string
  focalLength: string
  shutterSpeed: string
  iso: string
  radio: number
}

export interface Photo {
  index: number
  title: string
  date: string
  description: string
  link: string
  total: number
  exif: Exif
}

let _data: Photo[] = []

const _getPhotoExif = async (link: RequestInfo | URL) => {
  let info: Exif = {
    camera: '',
    len: '',
    aperture: '',
    focalLength: '',
    shutterSpeed: '',
    iso: '',
    radio: 0,
  }

  try {
    const response = await fetch(link)
    const buffer = await response.arrayBuffer()
    const tags = ExifReader.load(buffer)

    const shutterSpeed = tags['ExposureTime']?.description || ''
    const focalLength = tags['FocalLength']?.description || ''
    const aperture = tags['FNumber']?.description || ''
    const iso = tags['ISOSpeedRatings']?.description || ''
    const len = tags['LensSpecification']?.description || ''
    const make = tags['Make']?.description || ''
    const model = tags['Model']?.description || ''
    const width = tags['Image Width']?.value || 0
    const height = tags['Image Height']?.value || 0

    info = {
      camera: `${make} ${model}`,
      len: len,
      aperture: aperture,
      focalLength: focalLength,
      shutterSpeed: shutterSpeed,
      iso: 'ISO: ' + iso,
      radio: Number(height) / Number(width),
    }
  } catch (error) {
    console.error('Error fetching image metadata:', error)
  }

  return info
}

const _fetchPhotos = async () => {
  const result: Photo[] = []

  const folderData = await notesRepoReq('/contents/{path}', {
    path: 'Gallery',
  })

  for (const album of folderData.data) {
    const albumData = await notesRepoReq(
      '/contents/{path}',
      {
        path: album.path,
      },
      {
        Accept: 'application/vnd.github.v3.raw',
      }
    )

    const { content, metadata } = metadataParser(albumData.data)
    const title = album.name.replace('.md', '')
    const matches = content.match(/\(([^)]+)\)/g)
    const photos = matches.map((match: string) => match.slice(1, -1))

    for (const [index, link] of photos.entries()) {
      const exif = await _getPhotoExif(link)
      result.push({
        index: index + 1,
        title: title,
        date: String(metadata.date || ''),
        description: metadata.description || '',
        total: photos.length,
        link: link,
        exif: exif,
      })
    }
  }

  _data = result.sort((a: Photo, b: Photo) =>
    compareAsc(new Date(b.date), new Date(a.date))
  )
}

const getPhotos = async () => {
  !_data.length && (await _fetchPhotos())

  return _data
}

export default getPhotos

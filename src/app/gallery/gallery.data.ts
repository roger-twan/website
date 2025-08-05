import path from 'path';
import fs from 'fs';

import { fetchNotesRepo } from '@/utils/octokit';
import metadataParser from 'markdown-yaml-metadata-parser';
import ExifReader from 'exifreader';
import { compareAsc } from 'date-fns';
import rawPhotoExifData from '@/data/photoExif.json';

interface Exif {
  camera: string;
  len: string;
  aperture: string;
  focalLength: string;
  shutterSpeed: string;
  iso: string;
  radio: number;
}

type PhotoExifData = {
  [key: string]: Exif;
};

export interface Photo {
  index: number;
  title: string;
  date: string;
  description: string;
  link: string;
  total: number;
  exif: Exif;
}

let _data: Photo[] = [];
const photoExifData = rawPhotoExifData as PhotoExifData;

const _getPhotoExif = async (link: RequestInfo | URL) => {
  let info: Exif = {
    camera: '',
    len: '',
    aperture: '',
    focalLength: '',
    shutterSpeed: '',
    iso: '',
    radio: 0,
  };

  if (photoExifData[link.toString()]) {
    return photoExifData[link.toString()];
  }

  try {
    const response = await fetch(link);
    const buffer = await response.arrayBuffer();
    const tags = ExifReader.load(buffer);

    const shutterSpeed = tags['ExposureTime']?.description || '';
    const focalLength = tags['FocalLength']?.description || '';
    const aperture = tags['FNumber']?.description || '';
    const iso = tags['ISOSpeedRatings']?.description || '';
    const len = tags['LensModel']?.description || '';
    const make = tags['Make']?.description || '';
    const model = tags['Model']?.description || '';
    const width = tags['Image Width']?.value || 0;
    const height = tags['Image Height']?.value || 0;

    info = {
      camera: `${make} ${model}`,
      len: len,
      aperture: aperture,
      focalLength: focalLength,
      shutterSpeed: shutterSpeed,
      iso: 'ISO: ' + iso,
      radio: Number(height) / Number(width),
    };
  } catch (error) {
    console.error('Error fetching image metadata:', error);
  }

  return info;
};

const _savePhotoExif = async (list: Photo[]) => {
  const content: PhotoExifData = {};

  for (const photo of list) {
    content[photo.link] = photo.exif;
  }

  fs.writeFile(
    path.join(process.cwd(), 'src/data/photoExif.json'),
    JSON.stringify(content),
    (err) => {
      if (err) {
        console.error('Error writing photo exif data:', err);
      }
    },
  );
};

const _fetchPhotos = async () => {
  const result: Photo[] = [];

  const folderData = await fetchNotesRepo('/contents/{path}', {
    path: 'Gallery',
  });
  const albums = folderData.data;

  for (const album of albums) {
    const albumData = await fetchNotesRepo(
      '/contents/{path}',
      {
        path: album.path,
      },
      {
        Accept: 'application/vnd.github.v3.raw',
      },
    );

    const { content, metadata } = metadataParser(albumData.data);
    const title = album.name.replace('.md', '');
    const matches = content.match(/\(([^)]+)\)/g);
    const photos = matches.map((match: string) => match.slice(1, -1));

    for (const [index, link] of photos.entries()) {
      const exif = await _getPhotoExif(link);
      result.push({
        index: index + 1,
        title: title,
        date: String(metadata.date || ''),
        description: metadata.description || '',
        total: photos.length,
        link: link,
        exif: exif,
      });
    }
  }

  _data = result.sort((a: Photo, b: Photo) =>
    compareAsc(new Date(b.date), new Date(a.date)),
  );

  _savePhotoExif(_data);
};

const getPhotos = async () => {
  !_data.length && (await _fetchPhotos());

  return _data;
};

export default getPhotos;

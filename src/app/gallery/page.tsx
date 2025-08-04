import getPhotos, { Photo } from './gallery.data';
import GalleryModule from './gallery.module';

export default async function Gallery() {
  const photoData: Photo[] = await getPhotos();

  return (
    <div className="w-full p-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center animate__animated animate__fadeInDown">
              My Photos
            </h1>
            <p className="text-lg mb-8 text-center max-w-2xl animate__animated animate__flipInX">
              A collection of my favorite photos from my travels and daily life.
              I enjoy capturing the beauty of the world around me and sharing it
              with others.
            </p>
          </div>
        </div>
      </section>

      <GalleryModule list={photoData} />
    </div>
  );
}

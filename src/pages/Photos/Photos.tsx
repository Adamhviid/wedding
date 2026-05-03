import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import { RowsPhotoAlbum } from "react-photo-album";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/rows.css";

type Photo = { src: string; width: number; height: number };

const filenames = [
  "IMG_0004.jpg",
  "IMG_0013.jpg",
  "IMG_0022.jpg",
  "IMG_0027.jpg",
  "IMG_0037.jpg",
  "IMG_0051.jpg",
  "IMG_0075.jpg",
  "IMG_0171.jpg",
  "IMG_0176.jpg",
  "IMG_0195.jpg",
  "IMG_0200.jpg",
  "IMG_0147.jpg",
  "IMG_0205.jpg",
  "IMG_0219.jpg",
  "IMG_0224.jpg",
  "IMG_0098.jpg",
  "IMG_0152.jpg",
  "IMG_0248.jpg",
  "IMG_0258.jpg",
  "IMG_0123.jpg",
  "IMG_0128.jpg",
  "IMG_0272.jpg",
  "IMG_0277.jpg",
  "IMG_0284.jpg",
  "IMG_0104.jpg",
  "IMG_0109.jpg",
  "IMG_0296.jpg",
  "IMG_0301.jpg",
  "IMG_0320.jpg",
];

const slides = filenames.map((name) => ({ src: `/gallery/${name}` }));

function Photos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    filenames.forEach((name) => {
      const src = `/gallery/${name}`;
      const img = new Image();
      img.onload = () =>
        setPhotos((prev) => [
          ...prev,
          { src, width: img.naturalWidth, height: img.naturalHeight },
        ]);
      img.onerror = () =>
        setPhotos((prev) => [...prev, { src, width: 3, height: 2 }]);
      img.src = src;
    });
  }, []);

  return (
    <div>
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={150}
        render={{ image: (props) => <img {...props} loading="lazy" /> }}
        onClick={({ index: current }: { index: number }) => setIndex(current)}
      />
      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
  );
}

export default Photos;

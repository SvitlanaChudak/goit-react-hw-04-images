import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt, largeImageURL, openModal }) => {
  return (
    <li onClick={() => openModal(largeImageURL)}>
      <Image src={src} alt={alt} />
    </li>
  )
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string,
};
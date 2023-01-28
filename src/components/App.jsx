import { useState, useEffect } from "react";
import { fetchImages } from "services/api";
import { SearchBar } from "./Searchbar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { Loader } from './Loader/Loader';
import { animateScroll } from 'react-scroll';
import { Container } from "./App.styled";
import {toast, Toaster} from 'react-hot-toast';


export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const per_page = 12;

  useEffect(() => {
      const getImages = async (searchQuery, page) => {
    if (!searchQuery) {
      return;
    }
      setIsLoading(true);
      try {
        const { hits, totalHits } = await fetchImages(searchQuery, page);
        if (hits.length > 0) {
          setImages(prevImages => [...prevImages, ...hits]);
          setLoadMore(page < Math.ceil(totalHits / per_page));
        toast.success('Images found');
        }
        else {
        toast.error('Images not found');
      }
      }
    catch (error) {
        setError(error);
        toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };
    getImages(searchQuery, page);
  }, [searchQuery, page]);

  

    const onFormSubmit = searchQuery => {
      setSearchQuery(searchQuery);
      setImages([]);
      setPage(1);
      setLoadMore(false);
  };

    const onloadMore = () => {
    setPage(prevPage => prevPage + 1);
    scrollOnMoreButton();
  };

    const scrollOnMoreButton = () => {
    animateScroll.scrollToBottom({
      duration: 1000,
      delay: 10,
      smooth: 'linear',
    });
  };

  const openModal = largeImageURL => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
  };

  const closeModal = () => {
setShowModal(false);
  };

    return (
      <Container>
        <Toaster />

        <SearchBar onSubmit={onFormSubmit} />
          
        {error && <p>{error}</p>}
        
        {isLoading && <Loader />}
        
        <ImageGallery images={images} openModal={openModal} />
          
        {loadMore && <Button onloadMore={onloadMore} page={page} />}

        {showModal && (<Modal largeImageURL={largeImageURL} onClose={closeModal} />)}
        
      </Container>
    );
}
/**
 * useImageModal Hook
 * 
 * A custom hook to manage image modal state and interactions.
 * Reduces boilerplate code across components that need expandable images.
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { expandedImage, handleImageClick, closeModal } = useImageModal();
 * 
 *   return (
 *     <>
 *       <div onClick={() => handleImageClick('/image.jpg', 'Alt text')}>
 *         <img src="/image.jpg" alt="Alt text" />
 *       </div>
 *       
 *       {expandedImage && (
 *         <ImageModal
 *           imageSrc={expandedImage.src}
 *           imageAlt={expandedImage.alt}
 *           onClose={closeModal}
 *         />
 *       )}
 *     </>
 *   );
 * }
 * ```
 */

import { useState, useCallback } from 'react';

interface ImageModalState {
  src: string;
  alt: string;
}

interface UseImageModalReturn {
  /** Current expanded image state (null if no image is expanded) */
  expandedImage: ImageModalState | null;
  
  /** Function to open modal with an image */
  handleImageClick: (src: string, alt: string) => void;
  
  /** Function to close the modal */
  closeModal: () => void;
  
  /** Whether the modal is currently open */
  isOpen: boolean;
}

/**
 * Hook for managing image modal state
 */
export function useImageModal(): UseImageModalReturn {
  const [expandedImage, setExpandedImage] = useState<ImageModalState | null>(null);

  const handleImageClick = useCallback((src: string, alt: string) => {
    console.log('Image clicked:', { src, alt });
    setExpandedImage({ src, alt });
  }, []);

  const closeModal = useCallback(() => {
    console.log('Closing modal');
    setExpandedImage(null);
  }, []);

  const isOpen = expandedImage !== null;

  return {
    expandedImage,
    handleImageClick,
    closeModal,
    isOpen
  };
}

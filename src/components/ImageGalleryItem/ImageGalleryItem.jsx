export const ImageGalleryItem = ({ item }) => {
  return (
    <li class="gallery-item">
      <img src={item.webformatURL} alt={item.user} width="300" />
    </li>
  );
};

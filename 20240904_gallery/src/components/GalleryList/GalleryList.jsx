import "./GalleryList.css";

export default function GalleryList({
  id,
  title,
  description,
  imageUrl,
  dateTaken,
  location,
  children,
  onSelect,
  isSelected,
}) {
  return (
    <div
      className={isSelected ? "photo-card active" : "photo-card"}
      onClick={onSelect}
    >
      <img src={imageUrl} alt={title} />
      <div className="photo-card-content">
        <h2>{title}</h2>
        <div>{dateTaken}</div>
        <div>{location}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}

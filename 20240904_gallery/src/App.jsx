import galleryItems from "./data";
import { useState } from "react";
import GalleryList from "./components/GalleryList/GalleryList";

function App() {
  const [description, setDescription] = useState("사진을 선택해주세요.");
  const [backgroundImg, setBackgroundImg] = useState(
    "https://images.unsplash.com/photo-1725064646779-73d9f86168f1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  function backgroundImagePrint(img) {
    setBackgroundImg(img);
  }

  function descriptionPrint(description) {
    setDescription(description);
  }

  return (
    <div style={{ backgroundImage: `url(${backgroundImg})` }}>
      <p>{description}</p>
      <div className="photo-grid">
        {galleryItems.map((data) => (
          <GalleryList
            {...data}
            key={data.id}
            onSelect={() => {
              descriptionPrint(data.description);
              backgroundImagePrint(data.imageUrl);
            }}
            isSelected={data.description === description}
          >
            {data.tags.map((tags) => (
              <p key={tags}>{tags}</p>
            ))}
          </GalleryList>
        ))}
      </div>
    </div>
  );
}

export default App;

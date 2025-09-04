const imgs = [
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?2",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de",
  "https://images.unsplash.com/photo-1541542684-4a7a9a3d5fa5",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327",
];

export default function Gallery() {
  return (
    <>
      <h1>Gallery</h1>
      <div className="grid grid-3">
        {imgs.map((src, i) => (
          <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: 12 }} />
        ))}
      </div>
    </>
  );
}

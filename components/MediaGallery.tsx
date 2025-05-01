export default function MediaGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      <img src="https://placekitten.com/400/300" alt="Cyber Cat" className="rounded-xl" />
      <video controls className="rounded-xl">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

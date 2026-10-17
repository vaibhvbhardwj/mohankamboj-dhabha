import type { ReferenceImage } from "@/data/images";

export function FoodPhotoCredit({ photo }: { photo: ReferenceImage }) {
  if (!photo.license) return null;
  return (
    <p className="food-photo-credit">
      Photo: <a href={photo.source} target="_blank" rel="noopener noreferrer">{photo.credit}</a>
      {" · "}<a href={photo.license.url} target="_blank" rel="noopener noreferrer">{photo.license.name}</a>
      {photo.modifications ? ` · ${photo.modifications}` : ""}
    </p>
  );
}

export const updatedProductQuery = `
*[_type == "products"] {
  _id,
  name,
  price,
  description,
  "imageUrl": image.asset->url,
  category,
  discountPercent,
  new,
  colors,
  sizes
}
`;

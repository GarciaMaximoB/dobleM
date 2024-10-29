const images = import.meta.glob("./LOGOS/*.png", { eager: true });
const imageArray = Object.values(images).map((module) => module.default);

const excludeList = ["44.png"];

const filteredImages = imageArray.filter((imgPath) => {
  return !excludeList.some((excludeName) => imgPath.includes(excludeName));
});

export default filteredImages;

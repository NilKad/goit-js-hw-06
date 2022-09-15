const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(".gallery");
console.log(galleryRef);

//**************** v1 *****************//
const makeLiImagesOptions = (options) => {
  return options.map(({ url, alt }) => {
    const liRef = document.createElement("li");
    liRef.classList = "gallery__item";

    const imgRef = document.createElement("img");
    imgRef.src = url;
    imgRef.alt = alt;
    imgRef.classList = "gallery__img";
    imgRef.width = "600";

    liRef.append(imgRef);
    return liRef;
  });
};
galleryRef.append(...makeLiImagesOptions(images));

// src/utils/importImages.js

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

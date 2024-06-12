// analyzeImageColors.js
import RGBaster from 'rgbaster';

const analyzeImageColors = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      RGBaster(event.target.result)
        .then((payload) => {
          const colorMap = new Map();
          payload.forEach((colorObj) => {
            const colorKey = colorObj.color;
            colorMap.set(colorKey, colorObj.count);
          });
          resolve(colorMap);
        })
        .catch((error) => reject(error));
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

export default analyzeImageColors;

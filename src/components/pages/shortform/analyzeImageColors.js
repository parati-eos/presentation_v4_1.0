const analyzeImageColors = (file) => {
    return new Promise((resolve) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.src = url;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
  
        const colorSet = new Set();
        for (let i = 0; i < data.length; i += 4) {
          const [r, g, b] = data.slice(i, i + 3);
          const color = `${r},${g},${b}`;
          colorSet.add(color);
        }
  
        URL.revokeObjectURL(url);
        resolve(colorSet.size);
      };
    });
  };
  
  export default analyzeImageColors;
  
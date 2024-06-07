import axios from 'axios';
import analyzeImageColors from './analyzeImageColors';

const removeBackground = async (file) => {
  try {
    const colorCount = await analyzeImageColors(file);
    console.log('Number of colors in the image:', colorCount);

    if (colorCount <= 2) {
      // If the image has two or fewer colors, return the original file
      return file;
    }

    // Proceed with background removal if the image has more than two colors
    const formData = new FormData();
    formData.append('image_file', file);
    formData.append('size', 'auto');

    const response = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
      headers: {
        'X-Api-Key': 'c9mbNMxV6TABgkSLEgkY9SHU', // replace with your actual Remove.bg API key
      },
      responseType: 'blob',
    });

    console.log('Background removal response:', response);

    // Ensure the blob type is set to 'image/png'
    const blob = new Blob([response.data], { type: 'image/png' });
    return new File([blob], file.name.replace(/\.[^/.]+$/, ".png"), { type: 'image/png' }); // Ensure the filename ends with .png
  } catch (error) {
    console.error('Error removing background:', error);
    throw error;
  }
};

export default removeBackground;

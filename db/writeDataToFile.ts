import * as fs from 'fs/promises';

const writeDataToFile = async (filePath: string, data: any): Promise<void> => {
  try {
    if (typeof data === 'undefined') {
      throw new Error('Data is not defined');
    }

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Data has been written to ${filePath}`);
  } catch (error: any) {
    console.error(`Error writing data to ${filePath}: ${error.message}`);
    throw error; 
  }
};

export default writeDataToFile;
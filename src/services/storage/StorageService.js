const fs = require('fs');

class StorageService {
  constructor(folder) {
    this._folder = folder;

    if (!fs.existsSync(folder)) {
      // recursive option makes mkdirSync works as recursive
      fs.mkdirSync(folder, { recursive: true });
    }
  }

  writeFile(file, meta) { // file for Readable and meta for object that contains information from file that could be written as the file name, content-type, etc.
    const filename = +new Date() + meta.filename;
    const path = `${this._folder}/${filename}`;

    const fileStream = fs.createWriteStream(path);

    return new Promise((resolve, reject) => {
      fileStream.on('error', (error) => reject(error));
      file.pipe(fileStream);
      file.on('end', () => resolve(filename));
    });
  }
}

module.exports = StorageService;
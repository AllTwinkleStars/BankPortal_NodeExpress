const fs = require('fs');
const path = require('path');

describe('`index.ejs` exists', () => {
  it('`index.ejs` should exist  @index-ejs-create-view-file', () => {
    try {
      fs.readFileSync(path.join(process.cwd(), 'src/views/index.ejs'), 'utf8');
    } catch (err) {
      assert(err.code !== 'ENOENT', 'The `index.ejs` view file does not exist.');
    }
  });
});

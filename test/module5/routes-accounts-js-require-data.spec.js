const fs = require('fs');
const path = require('path');
const rewire = require('rewire');

describe('Require `data.js` - accounts', () => {
  it('should contain `accounts` const @routes-accounts-js-require-data', () => {
    assert(typeof app === 'function', '`app` const has not been created in `app.js`.');
    assert(fs.existsSync(path.join(process.cwd(), 'src/routes/accounts.js')), 'The `src/routes/accounts.js` file does not exist.');
    let accounts;
    try {
      const accountsModule = rewire('../../src/routes/accounts');
      accounts = accountsModule.__get__('accounts');
    } catch (err) {
      assert(accounts !== undefined, 'Has the `data.js` been required and `accounts` const been created `src/routes/accounts.js`?');
    }
    assert(typeof accounts === 'object', 'Is the `accounts` const an object?');
  });
});

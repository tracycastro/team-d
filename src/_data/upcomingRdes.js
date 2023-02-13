const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async function () {
  try {
    // https://benborgers.com/posts/google-sheets-json
    let ride = await Cache(
      'https://opensheet.elk.sh/17TgFpnV48ZjGvCwXtwSjh_HwkkiAyllDIWOzjhMlcrg/1',
      {
        duration: '1h', // 1 day
        type: 'json', // also supports "text" or "buffer"
      }
    );
    return ride;
  } catch (e) {
    console.log('Failed getting google sheet ride info, returning 0');
    return [];
  }
};

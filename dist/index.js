/*!
 * name: @jswork/next-fetch-with-delay
 * description: Fetch with delay options.
 * homepage: https://github.com/afeiship/next-fetch-with-delay
 * version: 1.0.0
 * date: 2020-11-20 22:29:13
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxDelay = nx.delay || require('@jswork/next-delay');
  var DEFAULT_OPTIONS = { delay: 0 };

  nx.fetchWithDelay = function (inFetch) {
    return function (inUrl, inOptions) {
      var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
      var fetchRes = inFetch(inUrl, options);
      return options.delay ? fetchRes.then(nxDelay(options.delay)) : fetchRes;
    };
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fetchWithDelay;
  }
})();

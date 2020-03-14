const httpToHttps = (url) => {
  return url.match('^http://') ? url.replace('http://', 'https://') : url
}

export {
  httpToHttps
}

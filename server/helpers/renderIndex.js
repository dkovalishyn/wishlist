import path from 'path';

export default (req, res, next) => {
  console.log('index');
  if (/\/[^.]*$/.test(req.url)) {
    res.sendFile(path.resolve(__dirname, '../dist/public/index.html'));
  } else {
    next();
  }
};

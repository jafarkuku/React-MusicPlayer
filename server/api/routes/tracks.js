const express = require('express');

const router = express.Router();
const request = require('request');


const config = {
  url: 'https://s3-eu-west-1.amazonaws.com/fuse-public-assets/Public+assets/jafar/tracks.json',
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Accept-Charset': 'utf-8',
    'User-Agent': 'my-client',
  },
};

router.get('/api/tracks', (req, res) => {
  request(config, (err, output, body) => {
    const json = JSON.parse(body);
    res.json(json);
  });
});

module.exports = router;

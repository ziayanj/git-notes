const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/authenticate", async (req, res) => {
  const { code } = req.body;

  const response = await axios.post('https://github.com/login/oauth/access_token', {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code
  });

  const params = new URLSearchParams(response.data);
  const access_token = params.get("access_token");

  const userInfo = await axios.get('https://api.github.com/user', { headers: { 'Authorization': `Bearer ${access_token}` } });

  res.json({
    user: userInfo.data,
    token: access_token,
  });
});

module.exports = router;

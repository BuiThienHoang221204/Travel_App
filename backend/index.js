const express = require('express')
const auth = require('./routes/auth/public.auth.router')

const router = express()

router.use(auth)

router.get("/", (req, res) => {
    res.send('<a href="/auth/google">Đăng nhập bằng Google</a><br/><a href="/auth/facebook">Đăng nhập bằng Facebook</a>');
});

module.exports = router
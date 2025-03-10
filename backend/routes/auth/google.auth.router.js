const express = require("express")
const passport = require("../../config/auth/google.config")
const session = require('../../config/session/session.config')

const router = express()

router.use(session)
router.use(passport.initialize())
router.use(passport.session())

router.get("/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
        accessType: "offline",
        prompt: "consent"
    })
)

router.get("/auth/google/account",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        res.status(200).json({
            user: req.user,
            accessToken: req.user.accessToken,
            refreshToken: req.user.refreshToken
        })
    }
)

module.exports = router

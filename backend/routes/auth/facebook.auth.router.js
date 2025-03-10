const express = require("express")
const passport = require('../../config/auth/facebook.config')
const session = require('../../config/session/session.config')

const router = express()

router.use(session)
router.use(passport.initialize())
router.use(passport.session())

router.get("/auth/facebook", passport.authenticate("facebook", {
    scope: ["email", "public_profile"],
    accessType: "offline",
    prompt: "consent"
}))

router.get("/auth/facebook/account",
    passport.authenticate("facebook", { failureRedirect: "/" }),
    (req, res) => {
        res.status(200).json({
            user: req.user,
            accessToken: req.user.accessToken,
            refreshToken: req.user.refreshToken
        })
    }
)

module.exports = router
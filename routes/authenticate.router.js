// const express = require("express");
// const passport = require("passport");
// const router = express.Router();
// const jwt = require("jsonwebtoken");

// router.post(
//   "/signup",
//   passport.authenticate("signup", { session: false }),
//   async (req, res) => {
//     res.json({
//       message: "Signup successful",
//       user: req.user,
//     });
//   }
// );

// router.post("/login", async (req, res) => {
//   passport.authenticate("login", async (err, user, info) => {
//     try {
//       if (err || !user) {
//         const error = new Error("Wrong password\n");
//         return next(error);
//       }

//       req.login(
//         user,
//         { session: false }, //false
//         async (error) => {
//           if (error) return next(error);
//           const body = {
//             _id: user._id,
//             email: user.email,
//           };

//           const token = jwt.sign({ user: body }, "TOP_SECRET");
//           return res.json({ token });
//         }
//       );
//     } catch (error) {
//       return next(error);
//     }
//   })(req, res);
// });

// module.exports = router;

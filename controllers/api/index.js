const router = require("express").Router();
const commentRoutes = require("./commentRoutes");
const blogRoutes = require("./blogRoutes");

router.use("/comments", commentRoutes);
router.use("/blog", blogRoutes);

module.exports = router;
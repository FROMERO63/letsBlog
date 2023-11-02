const router = require("express").Router();
const commentRoutes = require("/comment-Routes");
const blogRoutes = require("/blog-Routes");

router.use("/comments", commentRoutes);
router.use("/blog", blogRoutes);

module.exports = router;
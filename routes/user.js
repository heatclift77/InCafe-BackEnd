const middleUpload = require("../middleware/upload");
const user = require("../controllers/user");
const { AuthAdmin, Auth } = require("../middleware/auth");

const router = require("express").Router();

router.post("/", user.register);
router.get("/", user.getProfile);
router.put("/", Auth, middleUpload("avatar"), user.update);
router.post("/reset", user.requestResetPassword);
router.put("/reset", user.resetPassword);
router.get("/verify", user.verify);
router.post("/login", user.login);
router.delete("/:id", AuthAdmin, user.deleteUser);

module.exports = router;

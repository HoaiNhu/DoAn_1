const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post("/sign-up", userController.createUser);
router.post("/sign-in", userController.loginUser);
router.put("/update-user/:id", userController.updateUser);
router.delete("/delete-user/:id", authMiddleware, userController.deleteUser); //xoá user
router.get("/getAll", authMiddleware, userController.getAllUser); //lấy info user
router.get("/get-details/:id",  userController.getDetailsUser); //lấy info user

module.exports = router;

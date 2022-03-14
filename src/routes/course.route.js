import { Router } from "express";
import * as courseCtrl from "../controllers/courses.controller";

const router = Router();

router.get("/", courseCtrl.getCourses);
router.get("/:id", courseCtrl.getCourseById);
router.post("/", courseCtrl.createCourse);
router.put("/:id", courseCtrl.updateCourseById);
router.delete("/:id", courseCtrl.deleteCourseById);

export default router;

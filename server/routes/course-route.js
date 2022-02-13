const router = require("express").Router();
const Course = require("../models").courseModel;
const courseValidation = require("../validation").courseValidation;

router.use((req, res, next) => {
  console.log("A request is coming into api...");
  next();
});

router.post("/", async (req, res) => {
  // validate the inputs before making a new course
  const { error } = courseValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let { title, description, price } = req.body;
  if (req.user.isStudent()) {
    return res.status(400).send("Only instructor can post a new course.");
  }

  let newCourse = new Course({
    title,
    description,
    price,
  });

  try {
    await newCourse.save();
    res.status(200).send("New course has been saved.");
  } catch (err) {
    res.status(400).send("Cannot save course.");
  }
});

module.exports = router;

const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

describe("Skills API", () => {
  let token;
  // Before running the tests, connect to the test database
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI_TEST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const testUser = new User({
      username: "testuser",
      email: "testuser@example.com",
      password: "testpassword",
    });
    await testUser.save();
    token = jwt.sign({ user: { id: testUser._id } }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
  });

  // After all the tests are done, close the database connection
  afterAll(async () => {
    await mongoose.connection.close();
  });

  // Test case to check if a new skill can be added successfully
  it("should add a new skill", async () => {
    // Define the data for the new skill
    const newSkill = {
      skillName: "hairdresser",
      description:
        "do  haircuts, chemical treatments, permanent hair extensions, and hair coloring",
      value: 100,
      sampleWorkImage: "http://example.com/hair-sample.jpg",
    };

    // Make a POST request to add the skill
    const res = await request(app)
      .post("/api/skills/add") // The endpoint for adding skills
      .send(newSkill) // Send the new skill data in the request body
      .set("Authorization", `Bearer ${token}`);

    // Expect the status code to be 201, which means "Created"
    expect(res.statusCode).toEqual(201);

    // Check if the response contains the newly created skill
    expect(res.body).toHaveProperty("skillName", "hairdresser");
    expect(res.body).toHaveProperty(
      "description",
      "do  haircuts, chemical treatments, permanent hair extensions, and hair coloring"
    );
    expect(res.body).toHaveProperty("value", 100);
    expect(res.body).toHaveProperty(
      "sampleWorkImage",
      "http://example.com/hair-sample.jpg"
    );
  });

  // Test case for adding a skill with missing fields
  it("should return 400 if skill data is incomplete", async () => {
    // Define an incomplete skill object
    const incompleteSkill = {
      skillName: "hairdresser",
      // Missing other required fields
    };

    // Make a POST request with the incomplete skill
    const res = await request(app)
      .post("/api/skills/add")
      .send(incompleteSkill)
      .set("Authorization", `Bearer ${token}`);

    // Expect the status code to be 400, which means "Bad Request"
    expect(res.statusCode).toEqual(400);

    // Check if the error message is appropriate
    expect(res.body).toHaveProperty(
      "msg",
      "Validation error: Missing required fields"
    );
  });
});

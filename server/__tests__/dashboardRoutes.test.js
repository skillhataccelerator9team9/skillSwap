const request = require("supertest");
const app = require("../app"); // Your Express app
const mongoose = require("mongoose");
const User = require("../models/User");
const Skill = require("../models/Skill");

let token;
let requesterId;
let providerId;
let skillId;
let serviceId;

beforeAll(async () => {
  // Set up a connection to the test database
  await mongoose.connect(process.env.MONGO_URI_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Create test users
  const requester = new User({
    username: "requester",
    email: "requester@test.com",
    password: "123456",
  });
  const provider = new User({
    username: "provider",
    email: "provider@test.com",
    password: "123456",
  });

  await requester.save();
  await provider.save();

  requesterId = requester._id;
  providerId = provider._id;

  // Create a skill
  const skill = new Skill({
    skillName: "Guitar Lesson",
    description: "Learn to play guitar",
    value: 50,
    tradingPreference: "inPerson",
    category: "Music",
  });
  await skill.save();
  skillId = skill._id;

  // Associate the skill with the provider
  provider.skills.push(skillId);
  await provider.save();

  // Get auth token for requester
  const res = await request(app)
    .post("/api/auth/login")
    .send({ email: "requester@test.com", password: "123456" });

  token = res.body.token;
});

afterAll(async () => {
  await User.deleteMany();
  await Skill.deleteMany();
  await mongoose.disconnect();
});

describe("Dashboard Routes", () => {
  test("Request a Service", async () => {
    const res = await request(app)
      .post(`/api/dashboard/request/${skillId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(201);
    expect(res.body.msg).toBe("Service requested successfully");
    serviceId = res.body.skill._id;
  });

  test("Accept a Service Request", async () => {
    const providerToken = await request(app)
      .post("/api/auth/login")
      .send({ email: "provider@test.com", password: "123456" })
      .then((res) => res.body.token);

    const res = await request(app)
      .put(`/api/dashboard/service/${serviceId}/accept`)
      .set("Authorization", `Bearer ${providerToken}`)
      .send({ action: "accept" });

    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe("Service accepted successfully");
  });

  test("Complete a Service", async () => {
    const res = await request(app)
      .put(`/api/dashboard/complete/${serviceId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ role: "requester" });

    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe("Service status updated");
  });

  test("Add a Review", async () => {
    const res = await request(app)
      .post(`/api/dashboard/review/${serviceId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ rating: 5, reviewText: "Great experience!" });

    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe("Review added successfully");
  });

  test("Get Requested Services by Status", async () => {
    const res = await request(app)
      .get("/api/dashboard/requests")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.waiting).toBeDefined();
    expect(res.body.inProgress).toBeDefined();
    expect(res.body.completed).toBeDefined();
  });

  test("Cancel a Service Request", async () => {
    const res = await request(app)
      .delete(`/api/dashboard/request/${serviceId}/cancel`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.msg).toBe("Service request canceled successfully");
  });
});

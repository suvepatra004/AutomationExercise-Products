export function createUser() {
  const stamp = Date.now();
  return {
    name: `user${stamp}`,
    email: `user${stamp}@test.com`,
    password: "Test@1234",
    day: "10",
    month: "May",
    year: "1995",
    firstName: "Test",
    lastName: "User",
    company: "QA Labs",
    address: "12 Test Street",
    country: "United States",
    state: "California",
    city: "Los Angeles",
    zipcode: "90001",
    mobile: "9876543210",
  };
}

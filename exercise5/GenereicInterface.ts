// 2. Generic Interface
interface ApiResult<T> {
  status: string;
  data: T;
}

// Case 1: ApiResult with string data
const stringResponse: ApiResult<string> = {
  status: "success",
  data: "User registered successfully"
};

// Case 2: ApiResult with custom object data
const userResponse: ApiResult<{ id: number; name: string }> = {
  status: "success",
  data: {
    id: 101,
    name: "Sabir Ibrahim"
  }
};

console.log("--- Exercise 5.3 Results ---");
console.log("String Response Data:", stringResponse.data);
console.log("User Response Data:", userResponse.data.name);
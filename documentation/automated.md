# Manual

## 1. Validate that the API returns the correct HTTP status code (e.g., 200 OK) for a successful GET request.

### Steps:
1. Send a GET request to: http://localhost:3000/api/venue

### Expected result
- Status code: 200 OK

### Result
- Status code: 200 OK

## 2. Verify that the API returns the expected data format (e.g., JSON, XML) in the response.

### Steps:
1. Implement test code to check the request is JSON format
2. Send a GET request to: http://localhost:3000/api/guest

### Expected result
- Response body expected to be in JSON format

### Result
- All the test went through with JSON format:
```
 {
        "_id": "6626e0fa2ad36acaa2adeb79",
        "name": "Dewey Klocko",
        "email": "Keshaun48@yahoo.com",
        "event": "6626e0fa2ad36acaa2adeb75",
        "__v": 0
    }
```

## 3. Ensure that the API returns the correct HTTP status code (e.g., 400 Bad Request) for an invalid requests.

### Steps:
1. Implement test code for bad request
2. Send a GET request to: http://localhost:3000/api/guest/%

### Expected result
- Expect that the status code should 400

### Result
- Status code: 400 Bad Request

## 4. Create an automated test that sends a request with specific filters or search criteria and checks if the API returns the correct data.

### Steps:
1. Implement test code that filert and check the data is correct.
2. Send a Get request to: http://localhost:3000/api/event?marketing=social media 

### Expected result
- Expect the respose return all object with "social media" as marketing.

### Result
- The response conatins only object with "social media" as marketing.
- The test pass

## 5. Write an automated test to verify that the API returns paginated results when a large number of records are requested.

### Steps:
1. Implement test code that check if the paginated result conatins some property
2. Send a Get request to: http://localhost:3000/api/event?page=1&limit=3

### Expected result
- Expect the response to match the pagination parameters 

### Result
- The response contain pagination list of information according what the URL are set: page = 1, limit = 3
- The pagination result cointain: ex page, limit, totalPages

## 6. Test if the API handles special characters and non-English text correctly in input data and returned responses using an automated testing tool.

### Steps:
1. Implement test code that check response accept special caracters
2. Send a POST request: http://localhost:3000/api/event , with name: "åäö"
3. send a GET request: http://localhost:3000/api/event?name=åäö


### Expected result
- The GET response return the right data according to the parameters.

### Result
- API handles special characters.
```
{
            "_id": "6626e246c859bfaff2f7a766",
            "name": "åäö",
            "date": "2024-11-03T00:00:00.000Z",
            "marketing": "nätet",
            "venue": "6626e0fa2ad36acaa2adeb70",
            "__v": 0
        }
```

## 7. Develop an automated test that sends concurrent requests to the API to ensure that it can handle multiple users and maintain data consistency.

### Steps:
1. Create a Postman folder or collection with multiple POST request to "Guest" list the same time.
2. Implement test code that check if the POST request went through
3. Run the folder

### Expected result
- The API can handle multiple request

### Result
- All test went through 
- status code 200 OK, on all

## 8. Create an automated test and test if the API correctly handles different HTTP methods (GET, POST, PUT, DELETE) for each endpoint and returns appropriate status codes and responses for each method.

### Steps:
1. Create a folder
2. Implement test code one every request (GET, POST, PUT, DELETE) to check if it is the correct status code
3. Run the folder

### Expected result
- Expect all test should go through with the correct status code

### Result
- GET status code: 200 OK
- POST status code: 201 Created
- PUT status code: 200 OK
- DELETE statuscode 200 OK

## 9. Write an automated test to check if the API correctly handles updates to existing records, ensuring that changes are saved and reflected in subsequent requests.

### Steps:
1. GET all event and choose a event and save the object_id
2. PUT to update the the event name by using the object_id and add the new name
3. GET the specific object_id to dubble check the change are made and correct 

### Expected result
- Change should be made with correct data

### Result
- The specific event was updated with correct data and status code 200 OK

## 10. Design an automated performance test that simulates a large number of users making requests simultaneously to check the API’s performance under heavy load.

### Steps:
1. Create folder that containes multiple GET request
2. Implement test code to check correct status code
3. Run folder with 100 iteration 

### Expected result

### Result
- All the test pass with status code: 200 OK
- Duration: 8s 536ms 
- Avg. Resp. Time: 12ms

## 11. Create an automated test that verifies the API can recover gracefully from failures, such as database connection issues or third-party service outages, without compromising data integrity.

### Steps:
1. Implement test code for checking status code and response body message
2. Create a parameters to disconnect from MongoDB: http://localhost:3000/api/event?disconnect=true
3. Do a POST request
4. Reconnect by doing a GET request

### Expected result
- Expect when disconnected that the POST request wont go through

### Result
- Status code 500 Internal Server Error
- Terminal error message: MongoNotConnectedError: Client must be connected before running operations
- Response body message:  

## 12. Develop an automated test to handle edge cases, such as requests with missing or invalid parameters, and ensure that appropriate error messages are returned.

### Steps:
1. Create a event GET request with a invalid parameters
2. Implement a test code to check if the message = "No event found"

### Expected result
- An error massage

### Result
- Status code 404 Not Found
- The response body return a message
```
{
    "message": "No event found"
}
```

## 13. 

### Steps:

### Expected result

### Result
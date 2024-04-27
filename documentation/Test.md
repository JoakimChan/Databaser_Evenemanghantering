# Evenemanghantering Tester

## 1.
### task
- Manual: Verify that the API returns the correct HTTP status code (e.g., 200 OK) for a successful GET request.

- Automated: Validate that the API returns the correct HTTP status code (e.g., 200 OK) for a successful GET request.

### Steps
1. Create a GET API request for the list you want to retrieve data from
2. Implement a test code to check the status code
3. Send: /Test /1. /GET-request - getAllVenue

### Expected result
- Expect a response to return all the venue that exists in the database and the status code to be correct.

### Result
- Status code: 200 OK

## 2.
### task
- Manual: Check if the API returns the expected data format (e.g., JSON, XML) in the response.

- Automated: Verify that the API returns the expected data format (e.g., JSON, XML) in the response.

### Steps
1. Create a Get API request for the list you want to retrieve data from
2. Implement test code to check the request is in JSON format
3. Send: /Test /2. /GET-request - getAllGuest

### Expected result
- Expect that the API response body should be in JSON format and the test code should go through

### Result
- All the tests went through and with response body where in JSON format, for example:
```
 {
        "_id": "662b60f322c849d7abb79192",
        "name": "Alberta Morar",
        "email": "Johann_VonRueden@gmail.com",
        "__v": 0
    }
```

## 3.
### task
- Manual: Ensure that the API returns the correct HTTP status code (e.g., 400 Bad Request) for an invalid request.

- Automated: Ensure that the API returns the correct HTTP status code (e.g., 400 Bad Request) for an invalid requests.

### Steps
1. Create a Get API request with "/%" at the end
2. Implement test code to check for bad request
3. Send: /Test /3. /GET-request - badRequest

### Expected result
- Expect that the status code should 400 Bad Request

### Result
- VS code terminal and response body return an error message
- Status code: 400 Bad Request

## 4.
### task
- Manual: Test if the API returns the correct data when querying with specific filters or search criteria.

- Automated: Create an automated test that sends a request with specific filters or search criteria and checks if the API returns the correct data.

### Steps
1. Create a Get API request that retrieves specific data by filter
2. Code in VSCode to filter the API, event.js:
```
      let query = {}; 

      if (req.query.name) {
        query.name = req.query.name;
      }
      if (req.query.marketing) {
        query.marketing = req.query.marketing;
      }
``` 
3. Implement a test code that checks if the return body is correct
4. Send: /Test /4. /GET-request - filterEvent

### Expected result
- Expect the response to return all objects with "social media" as marketing.

### Result
- The response contains only objects with "social media" as marketing.
- The test pass

## 5.
### task
- Manual: Verify that the API returns paginated results when a large number of records are requested.

- Automated: Write an automated test to verify that the API returns paginated results when a large number of records are requested.

### Steps
1. Create a Get API request that according to the pagination parameters
2. Code in VSCode to implement pagination and retrieve the value from the API, event.js:
```
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10

    const events = await Event.paginate(query, { page: page, limit: limit });
```
3. Implement a test code that checks if the response body contains some properties
4. Send: /Test /5. /GET-request - pagination

### Expected result
- Expect the response to match the pagination parameters

### Result
- The response contains a pagination list of information according to what the URL is set: page = 1, limit = 3 
example:
```
"totalDocs": 7,
    "limit": 3,
    "totalPages": 3,
    "page": 1,
    "pagingCounter": 1,
    "hasPrevPage": false,
    "hasNextPage": true,
    "prevPage": null,
    "nextPage": 2
```

## 6.
### task
- Manual: Check if the API handles special characters and non-English text correctly in input data and returned responses.

- Automated: Test if the API handles special characters and non-English text correctly in input data and returned responses using an automated testing tool.

### Steps
1.  Create API requests that POST, GET data that contains special characters and non-English
2.  Implement a test code that checks the status code 201 created and if the GET contains special characters and non-English
3.  Send: /Test /6. /GET-request - getAllEvent (to store tempVenue and tempGuest)
4.  Send: /Test /6. /POST-request - postSpecialCharacters
5.  Send: /Test /6. /GET-request - getSpecialCharacters

### Expected result
- Expect that the GET and POST requests should handle special characters and non-English text

### Result
- Status code: 201 Created
- API should handle special characters and non-English text, for example:
```
{
            "_id": "662c386f9abfae4f6fe51fc0",
            "name": "åäö",
            "date": "2024-11-03T00:00:00.000Z",
            "marketing": "nätet",
            "venue": "662b60f322c849d7abb7918b",
            "guestList": [
                "662b60f322c849d7abb79192"
            ],
            "__v": 0
        }
```

## 7.
### task
- Manual: Test the API’s response when sending concurrent requests to ensure that it can handle multiple users and maintain data consistency.

- Automated: Develop an automated test that sends concurrent requests to the API to ensure that it can handle multiple users and maintain data consistency.

### Steps
1.  Create API few POST requests in a folder
2.  Implement a test code that checks the status code 201 created
3.  Run folder: /Test /7.

### Expected result
- The API should be able to handle and respond to all requests correctly and should be added with no missing data and no conflicts

### Result
- All the requests went through with status code: 201 Created
- Avg. Resp. Time: 20 ms

## 8.
### task
- Manual: Test if the API correctly handles different HTTP methods (GET, POST, PUT, DELETE) for each endpoint and returns appropriate status codes and responses for each method.

- Automated: Create an automated test and test if the API correctly handles different HTTP methods (GET, POST, PUT, DELETE) for each endpoint and returns appropriate status codes and responses for each method.

### Steps
1.  Create API requests that GET, POST, PUT, and DEL
2.  Implement a test code that checks the correct status
3.  Send: /Test /8. /GET-request - getAllEvent
4.  Send: /Test /8. /POST-request - createEvent
5.  Send: /Test /8. /PUT-request - updateEvent
6.  Send: /Test /8. /DEL-request - deleteEvent

### Expected result
- Expect all the tests to go through with the correct status code

### Result
- GET status code: 200 OK
- POST status code: 201 Created
- PUT status code: 200 OK
- DEL status code: 200 OK

## 9.
### task
- Manual: Check if the API correctly handles updates to existing records, ensuring that changes are saved and reflected in subsequent requests.

- Automated: Write an automated test to check if the API correctly handles updates to existing records, ensuring that changes are saved and reflected in subsequent requests.

### Steps
1.  Create API GET, and PUT requests
2.  Implement a test code that checks the correct status and if the data is correct
3.  Send: /Test /9. /GET-request - getAllEvent (to store tempID)
4.  Send: /Test /9. /PUT-request - updateEvent
5.  Send: /Test /9. /GET-request - getOneEvent

### Expected result
- Expect changes to be made with correct data

### Result
- The specific event was updated with the correct data and status code: 200 OK

## 10.
### task
- Manual: Test the API’s performance under heavy load, simulating a large number of users making requests simultaneously.

- Automated: Design an automated performance test that simulates a large number of users making requests simultaneously to check the API’s performance under heavy load.

### Steps
1. Create a folder that contains multiple GET request
2. Implement test codes to check the correct status code
3. Run folder: /Test /10.  (with 100 iterations)

### Expected result
- Expect the API will perform under heavy load

### Result
- All the tests pass with the status code: 200 OK
- Duration: 8s 536ms
- Avg. Resp. Time: 12ms

## 11.
### task
- Manual: Verify that the API can recover gracefully from failures, such as database connection issues without compromising data integrity.

- Automated: Create an automated test that verifies the API can recover gracefully from failures, such as database connection issues or third-party service outages, without compromising data integrity.

### Steps
1. Create an API that disconnects from the server
2. Code in VSCode to handle the API disconnection, event.js:
```

```
3. Implement test codes to check the correct status code and message
4. Send: /Test /11. /GET-request - getAllEventDisconnect (disconnect)
5. Send: /Test /11. /POST-request - postEvent (try to POST while disconnected)
6. Send: /Test /11. /GET-request - getAllEven (reconnect)

### Expected result
- Expect when disconnected should not be able to POST or else until reconnected
  
### Result
- Status code: 500, Internal Server Error
- Vscode terminal: 
- The response body includes an error message.
  
## 12.
### task
- Manual: Test the API’s ability to handle edge cases, such as requests with missing or invalid parameters, and ensure that appropriate error messages are returned.

- Automated: Develop an automated test to handle edge cases, such as requests with missing or invalid parameters, and ensure that appropriate error messages are returned.

### Steps
 1. Create a GET API request with an invalid parameter
 2. Code in VSCode to handle invalid parameters, event.js:
```

```
3. implement test codes to check the correct status code and message
4. Send: /Test /12. /GET-request - invalidParameter

### Expected result
- Expect an error message to be returned

### Result
- Status code 404 Not Found
- The response body returns a message:
```
{
    "message": "No event found"
}
```
## 13.
### task
- Manual:

- Automated: 

### Steps

### Expected result

### Result

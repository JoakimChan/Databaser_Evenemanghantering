# Manual

## 1. Verify that the API returns the correct HTTP status code (e.g., 200 OK) for a successful GET request.

### Steps:
1. Send a GET request to: http://localhost:3000/api/venue

### Expected result
- Status code: 200 OK

### Result
- Status code: 200 OK

## 2. Check if the API returns the expected data format (e.g., JSON, XML) in the response.

### Steps:
1. Send a GET request to: http://localhost:3000/api/guest

### Expected result
- The response contains in JSON format.

### Result
- The response match with the expectated result.
```
[
    {
        "_id": "6625a46fa97d77ebc8d7c24a",
        "name": "Seasons in the Sun",
        "date": "2024-06-26T03:42:10.762Z",
        "marketing": "social media",
        "venue": "6625a46ea97d77ebc8d7c247",
        "__v": 0
    }
]
```

## 3. Ensure that the API returns the correct HTTP status code (e.g., 400 Bad Request) for an invalid request.

### Steps:
1. Send a GET request to: http://localhost:3000/api/guest/%

### Expected result
- Status code: 400 Bad Request

### Result
- Status code: 400 Bad Request

## 4. Test if the API returns the correct data when querying with specific filters or search criteria.

### Steps:
1. Send a GET request to: http://localhost:3000/api/event?marketing=social media

### Expected result
- Return data for event with the marketing: "social media".

### Result
- All the respone object contain marketing: "social media" and the other without are not showned. 

## 5. Verify that the API returns paginated results when a large number of records are requested.

### Steps:
1. Send a GET request to: http://localhost:3000/api/event?page=1&limit=3

### Expected result
- The response should contain pagination list of information according to the pagination parameters.

### Result
- The response contain pagination list of information according what the URL are set: page = 1, limit = 3
```
"totalDocs": 5,
    "limit": 3,
    "totalPages": 2,
    "page": 1,
    "pagingCounter": 1,
    "hasPrevPage": false,
    "hasNextPage": true,
    "prevPage": null,
    "nextPage": 2
```

## 6. Check if the API handles special characters and non-English text correctly in input data and returned responses.

### Steps:
1. POST to http://localhost:3000/api/event, somthing with a name = 'åäö'.
2. Get http://localhost:3000/api/event?name=åäö

### Expected result
- The response should return all with object name = 'åäö'.

### Result
- The API can handles special characters and non-English.
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
## 7. Test the API’s response when sending concurrent requests to ensure that it can handle multiple users and maintain data consistency.

### Steps:
1. Create a Postman folder or collection with multiple POST request to "Guest" list the same time.
2. Run the folder

### Expected result
- All the request should go through without conflictstions and mix/miss data.

### Result
- All the request went through with status code: 201

## 8. Test if the API correctly handles different HTTP methods (GET, POST, PUT, DELETE) for each endpoint and returns appropriate status codes and responses for each method.

### Steps:
1. Create a Postman folder or collection that conatian test with all the methods (GET, POST, PUT, DELETE).
2. Run the folder/collection.

### Expected result
- All the test request should go thorough with the correct status code.

### Result
- GET - 200
- POST - 201
- PUT - 200
- DELETE - 200

## 9. Check if the API correctly handles updates to existing records, ensuring that changes are saved and reflected in subsequent requests.

### Steps:
1. GET all event and choose object-ID that you wish for.
2. PUT (update) object-ID with new data
3. GET the same event object-ID and check for changes

### Expected result
- The event data will be updated.

### Result
- The update went succesfully with status code: 200 OK

## 10. Test the API’s performance under heavy load, simulating a large number of users making requests simultaneously.

### Steps:
1. Create folder that containes multiple GET request
2. Run the folder with 100 iteration 

### Expected result
-  The API will perform in heavy load

### Result
- All the test pass with status code: 200 OK
- Duration: 8s 536ms 
- Avg. Resp. Time: 12ms

## 11. Verify that the API can recover gracefully from failures, such as database connection issues without compromising data integrity.

### Steps:
1. Create a parameters to disconnect from MongoDB: http://localhost:3000/api/event?disconnect=true
2. Do a POST request
3. Reconnect by doing a GET request

### Expected result
- Expect when disconnected that the POST request wont go through

### Result
- Status code 500 Internal Server Error
- Terminal error message: MongoNotConnectedError: Client must be connected before running operations
- Response body message:  

## 12. Test the API’s ability to handle edge cases, such as requests with missing or invalid parameters, and ensure that appropriate error messages are returned.

### Steps:
1. Create a event GET request with a invalid parameters

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

## 13. Verify that the API correctly implements rate limiting or throttling mechanisms to prevent abuse or excessive use of resources.

### Steps:

### Expected result

### Result
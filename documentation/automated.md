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
- Expect response 

### Result
- The response contain pagination list of information according what the URL are set: page = 1, limit = 3
- The pagination result cointain: ex page, limit, totalPages

## 6.

### Steps:

### Expected result

### Result


## 7. 

### Steps:

### Expected result

### Result


## 8. 

### Steps:

### Expected result

### Result


## 9. 

### Steps:

### Expected result

### Result


## 10. 

### Steps:

### Expected result

### Result


## 11. 

### Steps:

### Expected result

### Result


## 12. 

### Steps:

### Expected result

### Result


## 13. 

### Steps:

### Expected result

### Result
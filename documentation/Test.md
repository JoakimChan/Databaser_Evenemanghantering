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
- All the tests went through and with response body where in JSON format, example:
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
2. Code in VSCode to filter the API
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
2. Code in VSCode to implement pagination and retrieve the value from the API
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
- API should handle special characters and non-English text, example:
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
- Manual:

- Automated: 

### Steps

### Expected result

### Result

## 8.
### task
- Manual:

- Automated: 

### Steps

### Expected result

### Result

## 9.
### task
- Manual:

- Automated: 

### Steps

### Expected result

### Result

## 10.
### task
- Manual:

- Automated: 

### Steps

### Expected result

### Result

## 11.
### task
- Manual:

- Automated: 

### Steps

### Expected result

### Result

## 12.
### task
- Manual:

- Automated: 

### Steps

### Expected result

### Result

## 13.
### task
- Manual:

- Automated: 

### Steps

### Expected result

### Result

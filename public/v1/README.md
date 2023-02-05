# Groceries API

- Data `groceries` akan di-_reset_ secara berkala.\*

## Endpoint

https://groceries-api.netlify.app/

### Get All

- URL
  - `/groceries`
- Method
  - GET
- Response

  ```json
  {
    "message": "Groceries retrieved successfully",
    "groceries": [
      {
        "id": 1,
        "name": "Egg",
        "quantity": 12,
        "created_at": "2023-02-01T01:43:52.008442+00:00",
        "updated_at": "2023-02-01T01:43:52.008442+00:00"
      },
      {
        "id": 2,
        "name": "Milk",
        "quantity": 3,
        "created_at": "2023-02-01T09:38:06.442063+00:00",
        "updated_at": "2023-02-01T09:38:06.442063+00:00"
      },
      {
        "id": 3,
        "name": "Bread",
        "quantity": 1,
        "created_at": "2023-01-31T10:33:10.9573+00:00",
        "updated_at": "2023-01-31T10:33:10.9573+00:00"
      }
    ]
  }
  ```

### Get By Id

- URL
  - `/groceries/:id`
- Method
  - GET
- Params
  - `id` as `number`
- Response
  ```json
  {
    "error": false,
    "message": "Grocery with id 1 retrieved successfully",
    "grocery": {
      "id": 1,
      "name": "Bread",
      "quantity": 1,
      "created_at": "2023-01-31T10:33:10.9573+00:00",
      "updated_at": "2023-01-31T10:33:10.9573+00:00"
    }
  }
  ```

### Add New Grocery

- URL
  - `/groceries/store`
- Method
  - POST
- Request Body
  - `name` as `string`
  - `quantity` as `number`
- Response
  ```json
  {
    "error": false,
    "message": "New grocery added successfully"
  }
  ```

### Update Existing Grocery

- URL
  - `/groceries/update/:id`
- Method
  - POST
- Params
  - `id` as `number`
- Request Body
  - `name` as `string`
  - `quantity` as `number`
- Response
  ```json
  {
    "error": false,
    "message": "New grocery added successfully"
  }
  ```

### Delete Grocery

- URL
  - `/groceries/destroy/:id`
- Method
  - DELETE
- Params
  - `id` as `number`
- Response
  ```json
  {
    "error": false,
    "message": "Grocery with id 1 deleted successfully"
  }
  ```

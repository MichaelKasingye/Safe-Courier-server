# Safe-Courier-server
Safe Courier is a courier service that helps users deliver parcels to different destinations. Safe
Courier provides courier quotes based on weight categories.

### End points
These end points carry out these functions.
1. GET- https://safecourier.herokuapp.com/api/v1/parcel  - Fetch all parcel delivery orders
2. GET- https://safecourier.herokuapp.com/api/v1/parcels/<parcelId>  - Fetch a specific parcel delivery order
3. GET- https://safecourier.herokuapp.com/api/v1/users/<userId>/parcels   - Fetch all parcel delivery orders by a specific user
4. PUT- https://safecourier.herokuapp.com/api/v1/parcels/<parcelId>/cancel - Cancel the specific parcel delivery order
  ```
  {
      "isCancelled":true
  }
  ```
5. POST- https://safecourier.herokuapp.com/api/v1/POST /parcel - Create a parcel delivery order
  ```
   {
           "parcelName": "2kg of rice",
        "pickUp": "Kampala",
        "destination": "Kololo",
        "status": "OnBoarded"
    }
  ```
6. POST- https://safecourier.herokuapp.com/api/v1/auth/signup - Register a user
  ```
  {
    "name": "eky",
    "email": "e@mail.com",
    "password": "123456"
}
 ```
 7. POST- https://safecourier.herokuapp.com/api/v1/auth/login - login a user  
  ```
  {
    "name": "eky",
    "password": "123456"
}
  ```
8. PUT- https://safecourier.herokuapp.com/api/v1/parcels/<parcelId>/destination - Change the location of a specific parcel delivery order by user
  ```
  {
     "destination":"karamoja"
}
  ```
9. PUT-  https://safecourier.herokuapp.com/api/v1/parcels/<parcelId>/status - Change the status of a specific parcel delivery order by admin
  ```
  {
     "status":"on route"
}
  ```
10. PUT- https://safecourier.herokuapp.com/api/v1/parcels/<parcelId>/presentLocation - Change the present location of a specific parcel delivery order by admin
 ``` {
     "pickUp":"nairobi"
}```

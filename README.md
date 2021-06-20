# Safe-Courier-server
Safe Courier is a courier service that helps users deliver parcels to different destinations. Safe
Courier provides courier quotes based on weight categories.

### End points
These end points carry out these functions.
1. GET- https://safecourier.herokuapp.com/api/v1/parcel  - Fetch all parcel delivery orders
2. GET- https://safecourier.herokuapp.com/api/v1/parcels/<parcelId>  - Fetch a specific parcel delivery order
3. GET- https://safecourier.herokuapp.com/api/v1/users/<userId>/parcels   - Fetch all parcel delivery orders by a specific user
4. PUT- https://safecourier.herokuapp.com/api/v1/parcels/<parcelId>/cancel - Cancel the specific parcel delivery order
5. POST- https://safecourier.herokuapp.com/api/v1/POST /parcels - Create a parcel delivery order
6. POST- https://safecourier.herokuapp.com/api/v1/auth/signup - Register a user
7. POST- https://safecourier.herokuapp.com/api/v1/auth/login - login a user  
8. PUT- https://safecourier.herokuapp.com/api/v1/parcels/<parcelId>/destination - Change the location of a specific parcel delivery order by user
9. PUT-  https://safecourier.herokuapp.com/api/v1/parcels/<parcelId>/status - Change the status of a specific parcel delivery order by admin
10. PUT- https://safecourier.herokuapp.com/api/v1/parcels/<parcelId>/presentLocation - Change the present location of a specific parcel delivery order by admin

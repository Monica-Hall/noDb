*** FRONTEND CHECKLIST ***

 - reset.css
 - change our title (in HTML)

*package-json setup*
 - add proxy
 - add main

*dependencies*
 - axios

*folder structure*
- src/
    - App.js => class component with state
    - components/
        - Button.js
        - Tracker.js
        - AddToTracker.js


*** BACKEND CHECKLIST***

*dependencies*
 - express

*server folder structure*
 - server/
    - index.js
    - controller/
        - trackerController.js

*endpoints*
 - get: 
    "/api/water_tracker"

 - post: 
    "/api/add_water"

 - put: 
    "/api/update_water/:id"

 - delete: 
    "/api/delete_water/:id"

*data*
 -How will we structure our data?
 ```js
 {
     "id": 1
     "goal": 64, 
     "day": "Monday", 
     "actualIntake": 64, 
     }
```

What will the app do? 
    - keep track of how much water I drink per day. 
        - can get how much water i had for that day (GET)
        - can add water (POST)
                - can edit  (PUT) What am i editing?!!!  
        - can remove water (DELETE)

1. Please refer to the Structure.jpg file in the public folder. 

2. Before minification tracker.js is about 2kb in size. After tracker is minified through a online .js minifier the minified tracker.js is about 1kb in size.

3. Endpoint #1:
    assignSessionId assigns a random id to each session. It expects a stringified JSON entry object that contains all data collected from a single session.
   Endpoint #2:
    updateData updates data stored in the databae. It expects a stringified JSON entry object that contains all data collected from a single session.

4. Data storage used: Firestore
    Database structure:
    Users -> sessionID #1
             sessionID #2
             sessionID #3 -> clicks: ...
             sessionID #4    userAgent: ...
             ...             connectionType: ...
                             javacript: ...
                             *Other static and dynamic data...
    For picture of the database refer to database.jpg file in the public folder.

Index page url: https://cse135-hw3-35020.firebaseapp.com/
Firebase Project Id: cse135-hw3-3650c
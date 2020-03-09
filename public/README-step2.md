Website: https://cse135-hw4-5666d.firebaseapp.com/index.html
Authorized User: cse135grader@gmail.com
Team member: Youliang Liu, Xiaochun Lyu



Brief overview of the authentication code:
We used firebase google authentication, so that google will handle the sign in part which is safe and easy to integrate. 
Since google only handles the authentication but not authorization, so once a user is authenticated through google, we
will know the user's identity through his or her email. Then we wrote code to decide whether the user is authorized to 
login to the data analysis page. If the user is authorized, then the user will get directed to the dashboard page. If not
then the user will be send back to the index page with a message saying that he or she is not a authorized user.

Diagram that shows how your PoC examples work together including their routes:
Please refer to the wireframe.pdf for details. 

Details about authentication code:
In index.html we call js/auth.js incorporate the sign in script.

js/auth.js is responsible for handling google sign in in which it triggers the google sign-in once the sign-in button on 
index.html is clicked. We used the redirect method for googe sign in because it works better on mobile. However the downside
is that the redirect sign-in will return to index.html shortly before the user is actually signed in to dashboard, which is 
less seamless than other sign in methods. Once the user passed google authentication auth.js will know the user's info including
the user's E-mail. Then auth.js will redirect the user to dashboard if the user is allowed to view it or send the user back to
index.html if the user is not allowed to view the analytics. 


Discussion of grid library:
We use W2ui as our grid library because it is easy to use (easy to implement search/filter and other functions)and does not 
require a lot of dependencies (it only requires Jquery).


Discussion of chart library:
We use Chartist as our chart library because it is also easy to use, requires no dependencies and is responsive. Another reason 
is that the Chartist Library comes with many different choices of the type of charts and all other details with the charts that 
can better fulfill our needs when representing our data. And also there are extensive documentation and vedio references for the
usage of chartist. Also the Chartist library is capable of creating responsive charts and the responsiveness would come useful when
we want to implement some interactive charts for our final project.

Brief overview of the authentication code:
We used firebase google authentication, so that google will handle the sign in part which is safe and easy to integrate. 
Since google only handles the authentication but not authorization, so once a user is authenticated through google, we
will know the user's identity through his or her email. Then we wrote code to decide whether the user is authorized to 
login to the data analysis page. If the user is authorized, then the user will get directed to the dashboard page. If not
then the user will be send back to the index page with a message saying that he or she is not a authorized user. 
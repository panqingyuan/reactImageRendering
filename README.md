# React Image Rendering Exercise

Develop a react component to retrieve data and render images from the test URL below, implement additional capabilities listed below:
https://reqres.in/api/users?delay=3
* Render the component first (with some static text), invoke the API above after render
* During the time the API call is in process, display loading status in the screen
* Render response with name, image and email id
* Implement a global filter which can filter the results either based on name or email id
* Add a button to simulate delay of 5 seconds, which needs to be passed to the API URL above
* Handle time out error in 3 seconds and show time out error in the screen
* Display last data load time in the screen

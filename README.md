The dependencies that need to be installed are-
angular-cli 
angular material
angular flex layout

To run:
ng serve

Code Description:
The main directory starts from home-screen folder it is divided into
1. NavBar Component
2.SelectionMenu Component- to display the main selection menu
3.Filter Component- calls the filter sevice to filter the resources
4. Display Component 
    4.1 Array Component- currently empty- the code is written in the parent component-Display 
    4.2 List Component- to display resources as a table
    4.3 Map Component- currently empty
5. App Component- entry point for the application
6. Services
    6.1 Filter- service to perform filtering of resources
    6.2 IsoList- service to get list of TSOs
    6.3 StatusList- service to get list of statuses
    6.4 Vehicle- service used to connect to API for resource data (most important)
7. app-routing module- currently routes to SelectionMenu Component
8. vehicle.ts- contains te vehicle (resource) interface

known issues-
The key does not get cleared upon selected the clear button. Needs to be fixed.
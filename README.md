# mr-regression-UAT
This repository houses detailed regression test cases, automation scripts, and test data for our software. It ensures thorough testing, early defect detection, and prevention of regression issues, supporting our commitment to quality and user satisfaction.

Test Cases
1. Authentication
   - Validate sign in form fields
   - Sign in with an invalid email/username and invalid password
   - Sign in with a valid email/username and invalid password
   - Signin with an invalid email/username and valid password
   - Verify that password length is 8 max
   - Verify that password character combination criteria matches
   - When signed in, clicking on the log out button should sign the user out of - the app
   - Verify forgot password function works
   - Verify Update password works within the web app
   
2. Incident Management
   - Verify an incident can be Saved
   - Verify incident is Submitted
   - Verify user can Edit draft incidents
   - Verify user can Edit submitted incidents
   - Verify user can Delete draft Incidents
   - Verify Search works on the incidents list
   
3. User Management
   - Validation of the user creation form
   - Verify MRA can invite Mitigate Risk Customer (MRC) by providing required info e.g Name, Email, phone, Address, Title, Facility etc
   - Verify Email is sent when MRC is invited
   - Verify User MRC/RS can be assigned to specific profiles
   - Verify User MRC/RS can be assigned to default Roles
   - Verify User MRC/RS can be assigned to default Roles (Roles are available based on selected profile/Facility)"
   - Verify User MRC/RS can be assigned Titles
   - Edit User (MRC/RS) profile
   - Edit User MRC/(RS) Roles
   - Verify MRC details can be Edited
   - Verify MRC is able to create Resident Staff (RS) With email
   - Verify MRC is able to create Resident Staff (RS) without email
   - Verify that User (RS) details can be Edited by MRC/Self
   - Delete User Roles/Permissions
   - Verify that MRC able to reset passwords or unlock staff from my workforce, Who has been locked out due to incorrect information So that they can regain access to the portal. "
   
   
4. Reporting
   - Verify there's an Analytic button to access the analytic page
   - Verify analytics reports can be generated and shared in different formats
        a. pdf format
        b. CSV format
   - Verify repeat incidents has Falls, Behavior/Alleged Abuse (Combined), Skin
   
5. Dashboard
   - Verify items on the dashboard can be interacted with
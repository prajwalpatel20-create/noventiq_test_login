# Functional Test Cases - Login Page

## Test Application
**URL:** https://practicetestautomation.com/practice-test-login/

## Valid Test Credentials
- **Username:** student
- **Password:** Password123

---

## Positive Test Cases

### TC_001: Verify Successful Login with Valid Credentials ✅ (Automated)
| Field | Value |
|-------|-------|
| **Test Case ID** | TC_001 |
| **Test Case Name** | Verify successful login with valid credentials |
| **Priority** | High |
| **Test Type** | Positive |
| **Preconditions** | User has valid login credentials |
| **Test Steps** | 1. Navigate to login page URL<br>2. Enter valid username "student"<br>3. Enter valid password "Password123"<br>4. Click the Submit button |
| **Expected Result** | User is redirected to success page with message "Logged In Successfully" |
| **Automation Status** | ✅ Automated |

---

### TC_002: Verify Login Page Elements Display Correctly ✅ (Automated)
| Field | Value |
|-------|-------|
| **Test Case ID** | TC_002 |
| **Test Case Name** | Verify login page loads correctly with all elements |
| **Priority** | High |
| **Test Type** | Positive |
| **Preconditions** | Application is accessible |
| **Test Steps** | 1. Navigate to login page URL<br>2. Verify username input field is visible<br>3. Verify password input field is visible<br>4. Verify Submit button is visible<br>5. Verify page title contains "Test login" |
| **Expected Result** | All login page elements are displayed correctly |
| **Automation Status** | ✅ Automated |

---

### TC_003: Verify Logout Functionality After Successful Login ✅ (Automated)
| Field | Value |
|-------|-------|
| **Test Case ID** | TC_003 |
| **Test Case Name** | Verify logout functionality after successful login |
| **Priority** | Medium |
| **Test Type** | Positive |
| **Preconditions** | User is logged in successfully |
| **Test Steps** | 1. Login with valid credentials<br>2. Verify success page is displayed<br>3. Click the "Log out" button<br>4. Verify user is redirected to the main page |
| **Expected Result** | User is successfully logged out and redirected |
| **Automation Status** | ✅ Automated |

---

### TC_004: Verify Congratulations Message After Successful Login ✅ (Automated)
| Field | Value |
|-------|-------|
| **Test Case ID** | TC_004 |
| **Test Case Name** | Verify congratulations message appears on successful login |
| **Priority** | Medium |
| **Test Type** | Positive |
| **Preconditions** | Valid credentials available |
| **Test Steps** | 1. Navigate to login page<br>2. Enter valid credentials<br>3. Click Submit button<br>4. Verify congratulations message is displayed |
| **Expected Result** | "Congratulations" message is visible on the success page |
| **Automation Status** | ✅ Automated |

---

### TC_005: Verify Input Fields Accept Text Entry ✅ (Automated)
| Field | Value |
|-------|-------|
| **Test Case ID** | TC_005 |
| **Test Case Name** | Verify user can enter text in username and password fields |
| **Priority** | High |
| **Test Type** | Positive |
| **Preconditions** | Login page is accessible |
| **Test Steps** | 1. Navigate to login page<br>2. Enter text in username field<br>3. Enter text in password field<br>4. Verify entered values are displayed in respective fields |
| **Expected Result** | Both fields accept and display entered text |
| **Automation Status** | ✅ Automated |

---

## Negative Test Cases

### TC_006: Verify Error Message for Invalid Username ✅ (Automated)
| Field | Value |
|-------|-------|
| **Test Case ID** | TC_006 |
| **Test Case Name** | Verify error message for invalid username |
| **Priority** | High |
| **Test Type** | Negative |
| **Preconditions** | Login page is accessible |
| **Test Steps** | 1. Navigate to login page<br>2. Enter invalid username "invaliduser"<br>3. Enter valid password "Password123"<br>4. Click Submit button |
| **Expected Result** | Error message "Your username is invalid!" is displayed |
| **Automation Status** | ✅ Automated |

---

### TC_007: Verify Error Message for Invalid Password ✅ (Automated)
| Field | Value |
|-------|-------|
| **Test Case ID** | TC_007 |
| **Test Case Name** | Verify error message for invalid password |
| **Priority** | High |
| **Test Type** | Negative |
| **Preconditions** | Login page is accessible |
| **Test Steps** | 1. Navigate to login page<br>2. Enter valid username "student"<br>3. Enter invalid password "wrongpassword"<br>4. Click Submit button |
| **Expected Result** | Error message "Your password is invalid!" is displayed |
| **Automation Status** | ✅ Automated |

---

### TC_008: Verify Error When Username is Empty ✅ (Automated)
| Field | Value |
|-------|-------|
| **Test Case ID** | TC_008 |
| **Test Case Name** | Verify error when submitting with empty username |
| **Priority** | Medium |
| **Test Type** | Negative |
| **Preconditions** | Login page is accessible |
| **Test Steps** | 1. Navigate to login page<br>2. Leave username field empty<br>3. Enter any password<br>4. Click Submit button |
| **Expected Result** | Error message is displayed indicating invalid credentials |
| **Automation Status** | ✅ Automated |

---

### TC_009: Verify Error When Password is Empty ✅ (Automated)
| Field | Value |
|-------|-------|
| **Test Case ID** | TC_009 |
| **Test Case Name** | Verify error when submitting with empty password |
| **Priority** | Medium |
| **Test Type** | Negative |
| **Preconditions** | Login page is accessible |
| **Test Steps** | 1. Navigate to login page<br>2. Enter any username<br>3. Leave password field empty<br>4. Click Submit button |
| **Expected Result** | Error message is displayed indicating invalid credentials |
| **Automation Status** | ✅ Automated |

---

### TC_010: Verify Error When Both Fields are Empty ✅ (Automated)
| Field | Value |
|-------|-------|
| **Test Case ID** | TC_010 |
| **Test Case Name** | Verify error when both fields are empty |
| **Priority** | Medium |
| **Test Type** | Negative |
| **Preconditions** | Login page is accessible |
| **Test Steps** | 1. Navigate to login page<br>2. Leave both username and password fields empty<br>3. Click Submit button |
| **Expected Result** | Error message is displayed indicating invalid credentials |
| **Automation Status** | ✅ Automated |

---

## Test Summary

| Category | Count |
|----------|-------|
| Total Test Cases | 10 |
| Positive Test Cases | 5 |
| Negative Test Cases | 5 |
| Automated Test Cases | 10 |
| Manual Test Cases | 0 |

---

## Test Coverage

| Feature | Covered |
|---------|---------|
| Valid Login | ✅ |
| Invalid Username | ✅ |
| Invalid Password | ✅ |
| Empty Fields | ✅ |
| Page Elements | ✅ |
| Logout | ✅ |
| Success Message | ✅ |
| Error Messages | ✅ |


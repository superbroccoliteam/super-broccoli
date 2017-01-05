define({ "api": [
  {
    "type": "GET",
    "url": "/user/:userId",
    "title": "Get user by Id",
    "name": "Get_user_information",
    "group": "Authorization",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT <code>token</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Headers",
          "content": "{\n   \"token\": \"JWT token\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The Id of the requested user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/UserController.js",
    "groupTitle": "Authorization"
  },
  {
    "description": "<p>logs the user off.</p>",
    "type": "POST",
    "url": "/authorization/logout",
    "title": "Sign out",
    "name": "Log_out___Sign_out",
    "group": "Authorization",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT <code>token</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Headers",
          "content": "{\n    \"Authorization\": \"JWT token\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/AuthorizationController.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "POST",
    "url": "/authorization/register",
    "title": "Create new user.",
    "name": "Register",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>The first name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>The lastName of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Represents the nickname of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sports",
            "description": "<p>The users favorite sport.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n    \"first_name\": \"Johny\",\n    \"last_name\": \"Brave\",\n    \"email\": \"j.brav0@email.com\",\n    \"password\": \"Password-1\",\n    \"nickname\": \"Bravz420\",\n    \"sports\": \"id1,id2,id3\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/AuthorizationController.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "POST",
    "url": "/user/changepassword",
    "title": "",
    "name": "change_password",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>The old password from the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>The new password of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n    \"oldPassword\": \"Password-1\",\n    \"newPassword\": \"Password-2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/UserController.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "POST",
    "url": "/authorization/login",
    "title": "Authenticate user.",
    "name": "login",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n    \"email\": \"j.brav0@email.com\",\n    \"password\": \"Password-1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "{\n     \"email\": \"j.brav0@email.com\",\n     \"token\": \"JWT token\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/AuthorizationController.js",
    "groupTitle": "Authorization"
  }
] });

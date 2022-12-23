export default {
  'POST /oauth/token': {
    code: "200",
    data: {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsib2F1dGgtcmVzb3VyY2UiXSwidXNlcl9pZCI6MSwidXNlcl9uYW1lIjoiYWRtaW4iLCJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNjcxNzk0NzE4LCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl0sImp0aSI6IjE5NzRmZDg1LTE3MjQtNGMyZC04YmNmLTc5OTUxZDg1NzZjMyIsImNsaWVudF9pZCI6Iml5eWlzaCJ9.jCSi0MYm6Ykp1n69BStZ22x5rg5XlOlhGWJmnlGxIEU",
      "token_type": "bearer",
      "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsib2F1dGgtcmVzb3VyY2UiXSwidXNlcl9pZCI6MSwidXNlcl9uYW1lIjoiYWRtaW4iLCJzY29wZSI6WyJhbGwiXSwiYXRpIjoiMTk3NGZkODUtMTcyNC00YzJkLThiY2YtNzk5NTFkODU3NmMzIiwiZXhwIjoxNjcyMDQzMTE4LCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl0sImp0aSI6IjUwMGFhMzE5LTkyNmItNDkyMC05ZTM2LWQ5OTdiN2I5NDM4YSIsImNsaWVudF9pZCI6Iml5eWlzaCJ9.JEGmRh5jF49X0G4puaolc8H9oBcDJ8_3k5zHncoAtpw",
      "expires_in": 10799,
      "scope": "all",
      "user_id": 1,
      "jti": "1974fd85-1724-4c2d-8bcf-79951d8576c3"
    },
    msg: ""
  },

  'POST /oauth/current': {
    code: "200",
    data: {
      username: "admin",
      authorities: [
        "ROLE_ADMIN"
      ]
    },
    msg: ""
  },
};

declare namespace UMS {
  type LoginParams = {
    grant_type?: string,
    client_id?: string,
    client_secret?: string,
    username?: string,
    password?: string,
    code?: string
  }

  type LoginResult = {
    code?: string,
    data?: {
      access_token?: string,
      refresh_token?: string
    },
    msg?: string
  }

  type AccessToken = {
    access_token?: string,
    refresh_token?: string
  }

  type CurrentUser = {
    username?: string,
    authorities?: [string]
  }
}

class HttpResponse {

  static success(data, message) {
    return {
      status: 200,
      message,
      data,
    };
  }

  static fail(message) {
    return {
      status: 400,
      message,
      data: null
    };
  }

  static error(error) {
    return {
      status: 500,
      message: "Internal server error",
      error,
    };
  }

  static result(data) {
    return {
      status: data.status,
      message: data.message,
      data: data.data,
    };
  }

  static auth(data, token, refreshToken) {
    return {
      status: 200,
      message: "Login successful",
      data,
      token,
      refreshToken
    }
  }

  static authFail(message) {
    return {
      status: 400,
      message,
      data: null
    }
  }

  static resultAuth(data) {
    return {
      status: data.status,
      message: data.message,
      data: {
        fullname: data.data?.fullname,
        roleID: data.data?.roleID
      },
      token: data.token,
      refreshToken: data.refreshToken
    }
  }
}

module.exports = HttpResponse;

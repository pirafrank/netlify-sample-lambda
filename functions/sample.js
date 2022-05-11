const responseBody = { status: "fine" }

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  })
}


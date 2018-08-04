const admin = require("firebase-admin")
const functions = require("firebase-functions")

admin.initializeApp(functions.config().firebase)

var db = admin.firestore()

exports.newGroup = functions.https.onCall((data, ctx) => {})

exports.newIssue = functions.https.onCall((data, ctx) => {})

exports.newArgument = functions.https.onCall((data, ctx) => {})

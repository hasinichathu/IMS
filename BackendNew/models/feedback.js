// Import database connection
const sql = require("./database.js");

exports.getMultipleFeedback = (studentId, sendFeedbacks) => {
  var sqlString =
    "SELECT FeedbackId, BatchId, IndexNumber FROM feedback WHERE IndexNumber = ?";
  sql.query(sqlString, [studentId], (err, result) => {
    if (err) {
      sendFeedbacks(err, null);
    } else {
      sendFeedbacks(null, { data: result });
    }
  });
};

exports.getMultipleFeedbackByBatch = (studentId, batchId, sendFeedbacks) => {
  var sqlString =
    "SELECT FeedbackId, BatchId, IndexNumber FROM feedback WHERE IndexNumber = ? AND BatchId = ?";
  sql.query(sqlString, [studentId, batchId], (err, result) => {
    if (err) {
      sendFeedbacks(err, null);
    } else {
      sendFeedbacks(null, { data: result });
    }
  });
};

exports.Feedback = function(feedback) {
  this.FeedbackId = feedback.FeedbackId;
  this.BatchId = feedback.BatchId;
  this.IndexNumber = feedback.IndexNumber;
  this.SubmittedDate = feedback.SubmittedDate;
  this.CompanyId = feedback.CompanyId;
  this.StartDate = feedback.StartDate;
  this.ProjectBrief = feedback.ProjectBrief;
  this.Mentor = feedback.Mentor;
  this.IsGivenAdequateWork = feedback.IsGivenAdequateWork;
  this.WorkEnvironment = feedback.WorkEnvironment;
  this.EmployeeSupportiveness = feedback.EmployeeSupportiveness;
  this.ManagementSupportiveness = feedback.ManagementSupportiveness;
  this.SeniorEngineerCount = feedback.SeniorEngineerCount;
  this.IsPayed = feedback.IsPayed;
  this.Payment = feedback.Payment;
  this.Problems = feedback.Problems;
  this.Suggesions = feedback.Suggesions;
  this.OverallComment = feedback.OverallComment;
  this.Satisfaction = feedback.Satisfaction;
  this.IsRecommended = feedback.IsRecommended;
  this.ContactPerson = feedback.ContactPerson;
  this.ContactPersonPhoneNumber = feedback.ContactPersonPhoneNumber;
  this.ContactPersonEmail = feedback.ContactPersonEmail;
  this.ContactPersonDesignation = feedback.ContactPersonDesignation;
  this.MentorName = feedback.MentorName;
  this.MentorPhoneNumber = feedback.MentorPhoneNumber;
  this.MentorEmail = feedback.MentorEmail;
  this.MentorDesgnation = feedback.MentorDesgnation;
};

exports.createFeedback = (feedback, isCreated) => {
  var feedbackSql = "INSERT INTO feedback SET ?";
  sql.query(feedbackSql, feedback, (err, result) => {
    if (err) {
      console.log("error: ", err);
      isCreated(err, null);
    } else {
      console.log("created student: ", { id: result.insertId, ...student });
      isCreated(null, result);
    }
  });
};

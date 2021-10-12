var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "meetup",
  // port : 3307
});
connection.connect();

const dropDatabase = "DROP DATABASE IF EXISTS meetup";
connection.query(dropDatabase, function (err, result) {
  if (err) throw err;
  console.log("Database deleted");
});

connection.query("CREATE DATABASE meetup", function (err, result) {
  if (err) throw err;
  console.log("Database created");
});

connection.query("use meetup", function (err, result) {
  if (err) throw err;
  console.log("Database selected");
});

const createInviteeTableQuery =
  "CREATE TABLE invitee (invitee_no int, invitee_name varchar(50), invited_by varchar(50))";

connection.query(createInviteeTableQuery, function (error, results, fields) {
  if (error) {
    throw error;
  }
  console.log("the reply is ", results);
});
const createInviteeSql = "INSERT INTO invitee VALUES ?";
const inviteeValues = [
  [101, "Daniel Smith", "Roger Moore"],
  [102, "James Bond", "Smith Bryan"],
  [103, "Jon Snow", "Roger Moore"],
  [104, "Rober De Niro", "Tom Bright"],
  [105, "Stephen King", "David Hamilton"],
];
connection.query(createInviteeSql, [inviteeValues], (error, results) => {
  if (error) {
    throw error;
  }
  console.log("the reply is ", results);
});
const createRoomTableQuery =
  "CREATE TABLE Room (room_no int, room_name varchar(50), floor_no int)";

connection.query(createRoomTableQuery, function (error, results, fields) {
  if (error) {
    throw error;
  }
  console.log("the reply is ", results);
});
const createRoomSql = "INSERT INTO Room VALUES ?";
const roomValues = [
  [215, "The White House", 2],
  [216, "Shire", 1],
  [217, "The Panic Room", 3],
  [218, "Haunted Room", 3],
  [219, "Pentagon", 4],
];
connection.query(createRoomSql, [roomValues], (error, results) => {
  if (error) {
    throw error;
  }
  console.log("the reply is ", results);
});

const createMeetingTableQuery =
  "CREATE TABLE Meeting (meeting_no int, meeting_title varchar(50), starting_time time, room_no int)";

connection.query(createMeetingTableQuery, function (error, results, fields) {
  if (error) {
    throw error;
  }
  console.log("the reply is ", results);
});
const createMeetingSql = "INSERT INTO Meeting VALUES ?";
const meetingValues = [
  [1001, "Operation Diamond", "11:10:00", 215],
  [1001, "Opening Ceremony", "12:00:00", 216],
  [1001, "Project 007 review", "13:00:00", 217],
  [1001, "CEO keynote", "15:10:00", 218],
  [1001, "Operation Black Sea", "11:00:00", 219],
];
connection.query(createMeetingSql, [meetingValues], (error, results) => {
  if (error) {
    throw error;
  }
  console.log("the reply is ", results);
});
connection.end();

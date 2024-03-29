export class User {
  username = "";
  password = "";
  email = "";
  genrer = "";
  birthdate = "";
  location = "";
  avatar = "";
  points = 0;
  lives = 5;
  boost = 1;
  role = "";
  isBlocked = false;

  /**
   * @description Creates an instance of User.
   * @param {string} username - The username of the user
   * @param {string} password - The password of the user
   * @param {string} email - The email of the user
   * @param {string} genrer - The genrer of the user
   * @param {string} birthdate - The birthdate of the user
   * @param {string} location - The location of the user
   * @param {string} avatar - The avatar of the user
   * @param {number} points - The points of the user
   * @param {number} lives - The daily lives of the user
   * @param {number} boost - The daily boost of the user
   * @param {string} role - The role of the user
   * @param {boolean} isBlocked - The status of the user
   * @memberof User
   * @constructs User
   * @returns {User}
   *
   */

  constructor(
    username,
    password,
    email,
    genrer,
    birthdate,
    location,
    avatar,
    points,
    lives,
    boost,
    role,
    isBlocked
  ) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.genrer = genrer;
    this.birthdate = birthdate;
    this.location = location;
    this.avatar = avatar;
    this.points = points;
    this.lives = lives;
    this.boost = boost;
    this.role = role;
    this.isBlocked = isBlocked;
  }
}

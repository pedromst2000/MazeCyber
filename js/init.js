init();

/**
 * @description Initialize the application
 * @function init
 * @returns {void}
 */

function init() {
  // Users
  if (!localStorage.users) {
    const users = [
      {
        id: 1,
        username: "admin",
        password: "123admin",
        email: "admin@hotmail.com",
        genrer: "male",
        birthdate: "",
        location: "Vila Nova de Gaia",
        avatar: "../assets/images/avatars/avatar01.jpg",
        points: 500,
        lives: 15,
        boost: 1,
        role: "admin",
        isBlocked: false,
      },
      {
        id: 2,
        username: "pedromst",
        password: "123pedro",
        email: "pedromst@hotmail.com",
        genrer: "male",
        birthdate: "2000-11-05",
        location: "Vila do Conde",
        avatar: "../assets/images/avatars/avatar02.jpg",
        points: 50,
        lives: 5,
        boost: 1,
        role: "admin",
        isBlocked: false,
      },
    ];

    localStorage.setItem("users", JSON.stringify(users));
  }
}
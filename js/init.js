
/**
 * @description Initialize the application
 * @function init
 * @returns {void}
 */

function init() {
  // Users
  if (!localStorage.users) {
    const users = [];

    localStorage.setItem("users", JSON.stringify(users));
  }
}

init();

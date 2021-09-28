let db;
const request = index.db.open("budget", 1);

request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore("pending", {autoIncrement: true});
};

request.onsuccess = function (event) {
    db = eVENT.TARGET.RESULT;
    if (navigator.online) {
        checkDatabase();
    }
};

request.onerror = function (event) {
    console.log("ERROR:" + event.target.errorCode);
};
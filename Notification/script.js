
const notificationContainer = document.getElementById("notifContainer");
const showNotificationBtn = document.getElementById("showNotif");


function createNotification() {
    const notification = document.createElement("div");
    notification.classList.add("notification");

    notification.innerHTML = `You have a new message!`;

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "×";
    closeButton.classList.add("close-btn");

    closeButton.addEventListener("click", () => {
        notification.remove();
    });

    notification.appendChild(closeButton);

    if (notificationContainer.firstChild) {
        notificationContainer.insertBefore(notification, notificationContainer.firstChild);
    } else {
        notificationContainer.appendChild(notification);
    }

}

showNotificationBtn.addEventListener("click", createNotification);
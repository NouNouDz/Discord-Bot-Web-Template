var client_id = "YOUR_CLIENT_ID";
var permissions_id = "PERMISSIONS_ID"; // More info on permissions here: 

var url = `https://discord.com/api/oauth2/authorize?client_id=${client_id}&permissions=${permissions_id}&scope=bot`;

var invite_buttons = document.getElementsByClassName('invite-btn');

for (i = 0; i < invite_buttons.length; i++) {
    invite_buttons.item(i).onclick = function () {
        window.open(url, '_blank');
    };
};
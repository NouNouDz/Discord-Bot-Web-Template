const {
    client_id,
    permissions_id
} = require('../../config.json');

var url = `https://discord.com/api/oauth2/authorize?client_id=${client_id}&permissions=${permissions_id}&scope=bot`;

function openInviteLink() {
    window.open(url, '_blank');
};
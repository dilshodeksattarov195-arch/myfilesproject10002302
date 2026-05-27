const filterSenderConfig = { serverId: 3503, active: true };

const filterSenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_3503() {
    return filterSenderConfig.active ? "OK" : "ERR";
}

console.log("Module filterSender loaded successfully.");
export function validateIp(ip) {
    const validateExp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (validateExp.test(ip)) {
        return true;
    }

    alert('You have to enter valid IP-adress');
    return false;
}
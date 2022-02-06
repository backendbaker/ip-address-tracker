export async function getAddress(ip = '80.92.32.0'){
    const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_PSx2clyFN6O8duE0ElxWqPuiCgCFc&ipAddress=${ip}`);
    
    return await response.json();
}
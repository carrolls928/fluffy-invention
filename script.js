function updateTime() {
    const now = new Date();

    // UTC time
    const utcTime = now.toUTCString().split(" ")[4];
    document.getElementById('utc-time').textContent = utcTime;

    // PST time
    const pstOffset = -8 * 60; // PST is UTC-8
    const pstTime = new Date(now.getTime() + pstOffset * 60000).toUTCString().split(" ")[4];
    document.getElementById('pst-time').textContent = pstTime;

    // EST time
    const estOffset = -5 * 60; // EST is UTC-5
    const estTime = new Date(now.getTime() + estOffset * 60000).toUTCString().split(" ")[4];
    document.getElementById('est-time').textContent = estTime;

    // JST time
    const jstOffset = 9 * 60; // JST is UTC+9
    const jstTime = new Date(now.getTime() + jstOffset * 60000).toUTCString().split(" ")[4];
    document.getElementById('jst-time').textContent = jstTime;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately on load
updateTime();
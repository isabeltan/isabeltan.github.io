// Function to update date and time in the specified format on one line
const updateDateTime = () => {
    const now = new Date();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[now.getDay()];

    const formattedDate = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }); // Date in "Month Day, Year" format

    const formattedTime = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }); // 12-hour format without seconds

    const dateTimeString = `${dayName}, ${formattedDate}, ${formattedTime}`;

    document.getElementById('dateAndTime').innerText = dateTimeString;
};


setInterval(updateDateTime, 1000); // Update every second
updateDateTime(); // Display immediately when the page loads











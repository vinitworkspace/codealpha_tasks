document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var dob = new Date(document.getElementById('dob').value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var monthDifference = today.getMonth() - dob.getMonth();
    var dayDifference = today.getDate() - dob.getDate();
    
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
        monthDifference += 12;
    }
    
    if (dayDifference < 0) {
        monthDifference--;
        dayDifference += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    
    document.getElementById('result').textContent = 'Your age is: ' + age + ' years';
    document.getElementById('details').textContent = 'You are ' + age + ' years, ' + monthDifference + ' months, and ' + dayDifference + ' days old.';
});

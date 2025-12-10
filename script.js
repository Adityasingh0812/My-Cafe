document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // 1. AUTHENTICATION CHECK (Gatekeeper)
    // ============================================
    // Checks if user is on the reservation page. If not logged in, kicks them out.
    if (window.location.pathname.includes('reservation.html')) {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            alert('🔒 You must Login or Sign Up to book a table.');
            window.location.href = 'login.html';
        } else {
            // OPTIONAL: Auto-fill the name field if we know who it is
            const savedName = localStorage.getItem('userName');
            const nameInput = document.getElementById('name');
            if (savedName && nameInput) {
                nameInput.value = savedName;
            }
        }
    }

    // ============================================
    // 2. LOGIN FORM LOGIC
    // ============================================
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            
            // For a real app, you would check a database here. 
            // For this demo, we assume any input is valid.
            
            // Save session data
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            // We'll use a placeholder name for login since there's no name field in login
            localStorage.setItem('userName', 'Valued Customer'); 

            alert('Login Successful! Redirecting to reservation...');
            window.location.href = 'reservation.html';
        });
    }

    // ============================================
    // 3. SIGNUP FORM LOGIC
    // ============================================
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            
            // Save session data
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', name); // We save the real name here

            alert('Account Created! Redirecting to reservation...');
            window.location.href = 'reservation.html';
        });
    }

    // ============================================
    // 4. LOGOUT LOGIC
    // ============================================
    const logoutBtn = document.getElementById('logoutBtn');
    if(logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.clear(); // Wipes the "logged in" status
            alert('You have logged out.');
            window.location.href = 'index.html';
        });
    }

    // ============================================
    // 5. RESERVATION FORM SUBMISSION
    // ============================================
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;

            alert(`✅ Success!\n\nTable reserved for ${name}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`);
            reservationForm.reset();
        });
    }

    // ============================================
    // 6. REVIEW FORM LOGIC
    // ============================================
    const reviewForm = document.getElementById('reviewForm');
    const reviewList = document.getElementById('reviewList');

    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const rName = document.getElementById('rName').value;
            const rText = document.getElementById('rText').value;
            const rRating = document.getElementById('rRating').value;

            // Create new review HTML
            const newReview = document.createElement('div');
            newReview.classList.add('review-card');
            newReview.innerHTML = `
                <h3>${rName} <small>(${rRating} Stars)</small></h3>
                <p>"${rText}"</p>
            `;

            // Add to list
            reviewList.insertBefore(newReview, reviewList.firstChild);
            
            alert('Thank you for your review!');
            reviewForm.reset();
        });
    }
});

// ============================================
// 7. HELPER: TOGGLE LOGIN/SIGNUP
// ============================================
function toggleAuth() {
    const loginSection = document.getElementById('loginSection');
    const signupSection = document.getElementById('signupSection');
    
    if (loginSection.classList.contains('hidden')) {
        loginSection.classList.remove('hidden');
        signupSection.classList.add('hidden');
    } else {
        loginSection.classList.add('hidden');
        signupSection.classList.remove('hidden');
    }
}
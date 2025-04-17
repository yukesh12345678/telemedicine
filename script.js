// Doctor Data
const doctors = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "General Practice",
        experience: "12 years",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        bio: "Board-certified family medicine physician with extensive experience in primary care."
    },
    {
        id: 2,
        name: "Dr. Michael Chen",
        specialty: "Pediatrics",
        experience: "8 years",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1128&q=80",
        bio: "Pediatric specialist focused on child health and development."
    },
    {
        id: 3,
        name: "Dr. Emily Rodriguez",
        specialty: "Psychiatry",
        experience: "10 years",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        bio: "Mental health professional specializing in anxiety and depression."
    },
    {
        id: 4,
        name: "Dr. James Wilson",
        specialty: "Cardiology",
        experience: "15 years",
        image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        bio: "Cardiologist with expertise in heart disease prevention and treatment."
    },
    {
        id: 5,
        name: "Dr. Lisa Park",
        specialty: "Dermatology",
        experience: "9 years",
        image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        bio: "Skin care specialist with focus on acne, eczema, and cosmetic dermatology."
    },
    {
        id: 6,
        name: "Dr. Robert Taylor",
        specialty: "Orthopedics",
        experience: "14 years",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1128&q=80",
        bio: "Orthopedic surgeon specializing in sports injuries and joint replacements."
    }
];

// DOM Elements
const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const confirmationModal = document.getElementById('confirmation-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
const closeConfirmation = document.getElementById('close-confirmation');
const doctorsContainer = document.getElementById('doctors-container');
const doctorSelect = document.getElementById('doctor-select');
const appointmentForm = document.getElementById('appointment-form');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Load Doctors
function loadDoctors() {
    doctorsContainer.innerHTML = '';
    doctors.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.className = 'box';
        doctorCard.innerHTML = `
            <img src="${doctor.image}" alt="${doctor.name}">
            <h3>${doctor.name}</h3>
            <span>${doctor.specialty} | ${doctor.experience} experience</span>
            <p>${doctor.bio}</p>
            <div class="share">
                <a href="#appointments" class="btn btn-primary book-btn" data-id="${doctor.id}">Book Now</a>
            </div>
        `;
        doctorsContainer.appendChild(doctorCard);
    });
    
    // Populate doctor select in appointment form
    doctorSelect.innerHTML = '<option value="">Choose a doctor</option>';
    doctors.forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor.id;
        option.textContent = `${doctor.name} - ${doctor.specialty}`;
        doctorSelect.appendChild(option);
    });
}

// Event Listeners
menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
});

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

signupBtn.addEventListener('click', () => {
    signupModal.style.display = 'block';
});

closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
        confirmationModal.style.display = 'none';
    });
});

showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    signupModal.style.display = 'block';
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.style.display = 'none';
    loginModal.style.display = 'block';
});

closeConfirmation.addEventListener('click', () => {
    confirmationModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === signupModal) {
        signupModal.style.display = 'none';
    }
    if (e.target === confirmationModal) {
        confirmationModal.style.display = 'none';
    }
});

// Appointment Form Submission
appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const doctorId = document.getElementById('doctor-select').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const reason = document.getElementById('reason').value;
    
    const selectedDoctor = doctors.find(d => d.id == doctorId);
    
    // Format date
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Format time
    const formattedTime = new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    
    // Set confirmation details
    document.getElementById('confirmation-details').innerHTML = `
        <p><strong>Patient:</strong> ${name}</p>
        <p><strong>Doctor:</strong> ${selectedDoctor.name} (${selectedDoctor.specialty})</p>
        <p><strong>Date:</strong> ${formattedDate} at ${formattedTime}</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <p>A confirmation has been sent to ${email}</p>
    `;
    
    // Show confirmation modal
    confirmationModal.style.display = 'block';
    
    // Reset form
    appointmentForm.reset();
});

// Login Form Submission
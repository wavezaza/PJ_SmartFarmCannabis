import Swal from 'sweetalert2';

export const handleAPI = async (username, password) => {
    const response = await fetch('http://localhost:3008/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (data.success === true) {
        Swal.fire({
            icon: 'success',
            title: 'เข้าสู่ระบบสำเร็จ',
            showConfirmButton: false,
            timer: 2000
        });
        localStorage.setItem('isAuthenticated', true);
        return true;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'เข้าสู่ระบบล้มเหลว',
            text: 'กรุณากรอก Username/Password ให้ถูกต้อง',
            showConfirmButton: false,
            timer: 2000
        });
        return false;
    }
};

export const handleSubmit = async (event, username, password, handleCloseModal, navigate) => {
    event.preventDefault();
    // Validate input
    if (!username || !password) {
        Swal.fire({
            icon: 'error',
            title: 'กรุณากรอก Username/Password',
            showConfirmButton: false,
            timer: 2000
        });
        return;
    }
    const isLoginSuccess = await handleAPI(username, password);
    if (isLoginSuccess) {
        setTimeout(() => {
            console.log(localStorage.getItem('isAuthenticated'));
            const url = new URL('/dashboard', window.location.href);
            window.location.href = url.toString();
        }, 3000);
    }
    handleCloseModal();
};

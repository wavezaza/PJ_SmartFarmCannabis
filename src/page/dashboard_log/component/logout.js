import Swal from 'sweetalert2';

export const handleLogout = (navigate) => {
    Swal.fire({
        title: 'คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ใช่, ออกจากระบบ',
        cancelButtonText: 'ยกเลิก'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('isAuthenticated');
            navigate('/');
        }
    });
};
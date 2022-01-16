// var sinhVien = {
//     maSinhVien: '',
//     tenSinhVien: '',
//     email: '',
//     matKhau: '',
//     ngaySinh: '',
//     khoaHoc: '',
// }
document.getElementById('btnThemSV').onclick = function() {
        //Lấy thông tin người dùng
        // sinhVien.maSinhVien = document.querySelector('#txtMaSV').value;
        // sinhVien.tenSinhVien = document.querySelector('#txtTenSV').value;
        // sinhVien.email = document.querySelector('#txtEmail').value;
        // sinhVien.matKhau = document.querySelector('#txtPass').value;
        // sinhVien.ngaySinh = document.querySelector('#txtNgaySinh').value;
        // sinhVien.khoaHoc = document.querySelector('#khSV').value;
        kiemtraNhapTen();
        kiemtraMaSV();
        kiemtraEmail();
        kiemtraPass();
        kiemtraDate();
        kiemtraKH();
    }
    // KIỂM TRA TÊN SINH VIÊN
function kiemtraNhapTen() {
    var ten = document.getElementById('txtTenSV').value;
    var thongBaoTen = document.getElementById('spanTenSV');
    if (ten === "") {
        thongBaoTen.innerHTML = "Vui lòng nhập tên";
    } else {
        thongBaoTen.innerHTML = "";
    }
}



//KIỂM TRA MÃ SINH VIÊN
function kiemtraMaSV() {
    var ten = document.getElementById('txtMaSV').value;
    var thongBaoMaSV = document.getElementById('spanMaSV');
    if (ten === "") {
        thongBaoMaSV.innerHTML = "Vui lòng nhập mã sinh viên";
    } else {
        thongBaoMaSV.innerHTML = "";
    }
}
//KIỂM TRA EMAIL
function kiemtraEmail() {
    var ten = document.getElementById('txtEmail').value;
    var thongBaoEmail = document.getElementById('spanEmailSV');
    var kq = false;
    if (ten === "") {
        thongBaoEmail.innerHTML = "Vui lòng nhập Email";
    } else {
        kq = true;
        thongBaoEmail.innerHTML = "";

    }
    // if (ten === "") {
    //     thongBaoEmail.innerHTML = "Vui lòng nhập Email";
    // } else {
    //     thongBaoEmail.innerHTML = "";
    // }
}
//KIỂM TRA MẬT KHẨU
function kiemtraPass() {
    var ten = document.getElementById('txtPass').value;
    var thongBaoPass = document.getElementById('spanMatKhau');
    if (ten === "") {
        thongBaoPass.innerHTML = "Vui lòng nhập Mật Khẩu";
    } else if (ten.length < 6) {
        thongBaoPass.innerHTML = "Mật khẩu quá ngắn ( Mật khẩu phải > 6 ký tự < 20 )";
    } else if (ten.length > 20) {
        thongBaoPass.innerHTML = "Mật khẩu quá dài ( Mật khẩu phải > 6 ký tự < 20 )";
    } else {
        thongBaoPass.innerHTML = "";
    }
}
//KIỂM TRA NGÀY SINH
function kiemtraDate() {
    var ten = document.getElementById('txtNgaySinh').value;
    var thongBao = document.getElementById('spanNgaySinh');
    if (ten === "") {
        thongBao.innerHTML = "Vui lòng nhập Mật Khẩu";
    } else {
        thongBao.innerHTML = "";
    }
}
//KIỂM TRA KHOÁ HỌC
function kiemtraKH() {
    var tenKH = document.getElementById('khSV');
    var thongBao = document.getElementById('spanKhoaHoc');
    if (tenKH.value === "Chọn khóa học") {
        thongBao.innerHTML = "Vui lòng chọn khoá học";
    } else {
        thongBao.innerHTML = "";
    }
}
//

document.querySelector('#btnThemSV').onclick = function() {
    //Lấy thông tin từ giao diện
    var sinhVien = new SinhVien();
    sinhVien.maSinhVien = document.querySelector('#txtMaSV').value;
    sinhVien.tenSinhVien = document.querySelector('#txtTenSV').value;
    sinhVien.email = document.querySelector('#txtEmail').value;
    sinhVien.matKhau = document.querySelector('#txtPass').value;
    sinhVien.ngaySinh = document.querySelector('#txtNgaySinh').value;
    sinhVien.khoaHoc = document.querySelector('#khSV').value;
    sinhVien.diemToan = document.querySelector('#txtDiemToan').value;
    sinhVien.diemLy = document.querySelector('#txtDiemLy').value;
    sinhVien.diemHoa = document.querySelector('#txtDiemHoa').value;
    //Kiểm tra
    console.log('sinhvien', sinhVien);

    //Mỗi sinh viên tạo ra 1 thẻ tr
    var trSinhVien = document.createElement('tr');

    var tdMaSinhVien = document.createElement('td');
    tdMaSinhVien.innerHTML = sinhVien.maSinhVien;

    var tdTenSinhVien = document.createElement('td');
    tdTenSinhVien.innerHTML = sinhVien.tenSinhVien;

    var tdEmail = document.createElement('td');
    tdEmail.innerHTML = sinhVien.email;

    // var tdMatKhau = document.createElement('td');
    // tdMatKhau.innerHTML = sinhVien.matKhau;

    var tdNgaySinh = document.createElement('td');
    tdNgaySinh.innerHTML = sinhVien.ngaySinh;

    var tdKhoaHoc = document.createElement('td');
    tdKhoaHoc.innerHTML = sinhVien.khoaHoc;

    var tdDiemToan = document.createElement('td');
    tdDiemToan.innerHTML = sinhVien.diemToan;

    var tdDiemLy = document.createElement('td');
    tdDiemLy.innerHTML = sinhVien.diemLy;

    var tdDiemHoa = document.createElement('td');
    tdDiemHoa.innerHTML = sinhVien.diemHoa;

    tdDiemTrungBinh = document.createElement('td');
    tdDiemTrungBinh.innerHTML = sinhVien.tinhDiemTB();
    //td  Chức năng
    var tdChucNang = document.createElement('td');

    var buttonXoa = document.createElement('button');
    buttonXoa.innerHTML = 'xoá';
    buttonXoa.className = 'btn btn-danger';
    buttonXoa.onclick = function() {
        // console.log('Xoá Nhé!');
        // var tdButton = buttonXoa.parentElement;
        // var trSV = tdButton.parentElement;
        // trSV.remove();
        var tr = buttonXoa.closest('tr');
        tr.remove();
    }


    // Đưa button vào td chức năng
    tdChucNang.appendChild(buttonXoa);
    //Bỏ thẻ td vào tr
    trSinhVien.appendChild(tdMaSinhVien);
    trSinhVien.appendChild(tdTenSinhVien);
    trSinhVien.appendChild(tdEmail);
    // trSinhVien.appendChild(tdMatKhau);
    trSinhVien.appendChild(tdNgaySinh);
    trSinhVien.appendChild(tdKhoaHoc);
    trSinhVien.appendChild(tdDiemTrungBinh);
    trSinhVien.appendChild(tdChucNang);

    //Bỏ thẻ tr vào tbody
    document.querySelector('#tbodySinhVien').appendChild(trSinhVien);
}





// var sinhVienA = 'A';
// var sinhVienB = sinhVienA;
// sinhVienB.tenSinhVien = 'B';
// console.log('sinhvien', sinhVienA);
// console.log('sinhvien', sinhVienB);


// var sinhVienA = new SinhVien();
// sinhVienA.tenSinhVien = 'A';
// var sinhVienB = sinhVienA;
// sinhVienB.tenSinhVien = 'B';
// console.log('sinhvien', sinhVienA);
// console.log('sinhvien', sinhVienB);
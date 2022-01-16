//

var mangSinhVien = [];
var kiemTra = new Validation();
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
    console.log('sinhvien', sinhVien);

    // Bắt Validation (bắt lỗi dữ liệu input không hợp lệ)
    var valid = true;
    // kiểm tra r
    valid &= kiemTra.kiemTraRong(sinhVien.maSinhVien, '#spanMaSV') &
        kiemTra.kiemTraRong(sinhVien.tenSinhVien, '#spanTenSV') &
        kiemTra.kiemTraRong(sinhVien.email, '#spanEmailSV') &
        kiemTra.kiemTraRong(sinhVien.matKhau, '#spanMatKhau') &
        kiemTra.kiemTraRong(sinhVien.ngaySinh, '#spanNgaySinh') &
        kiemTra.kiemTraRong(sinhVien.khoaHoc, '#spanKhoaHoc') &
        kiemTra.kiemTraRong(sinhVien.diemToan, '#spanToan') &
        kiemTra.kiemTraRong(sinhVien.diemLy, '#spanLy') &
        kiemTra.kiemTraRong(sinhVien.diemHoa, '#spanHoa');

    //Kiểm tra tất cả là ký tự
    valid &= kiemTra.kiemTraTatCaKyTu(sinhVien.tenSinhVien, '#erro_allLetter_tenSinhVien');
    // Kiểm tra tất cả là số
    valid &= kiemTra.kiemTraTatCaSo(sinhVien.diemToan, '#erro_allLetter_diemToan') &
        kiemTra.kiemTraTatCaSo(sinhVien.diemLy, '#erro_allLetter_diemLy') &
        kiemTra.kiemTraTatCaSo(sinhVien.diemHoa, '#erro_allLetter_diemHoa');
    //Kiểm tra min max
    valid &= kiemTra.kiemTraGiaTri(sinhVien.diemToan, '#erro_minMaxValue_diemToan', 0, 10) &
        kiemTra.kiemTraGiaTri(sinhVien.diemLy, '#erro_minMaxValue_diemLy', 0, 10) &
        kiemTra.kiemTraGiaTri(sinhVien.diemHoa, '#erro_minMaxValue_diemHoa', 0, 10);


    valid &= kiemTra.kiemTraDoDai(sinhVien.maSinhVien, '#erro_minMaxLength_maSinhVien', 4, 6)
    if (!valid) {
        //Nếu valid không phải true => false
        return;
    }


    //Lưu thông tin sinh viên vào mảng
    mangSinhVien.push(sinhVien); // [sinhVien1,sinhVien2,...]
    //=> [{...}{...}{...}{maSinhVien: '',tenSinhVien}]

    //Luw mảng sinh viên vào localstorage
    luuStorage();

    console.log('mangsinhVien', mangSinhVien);
    //Gọi hàm tạo table sinh viên từ mang sinh vien
    renderTable(mangSinhVien);
}

function renderTable(arrSinhVien) {
    //input là 1 mảng sinh viên [{maSinhVien:'1',tenSinhVien,...}]
    //Duyệt mảng qua đẻ tạo thẻ tr
    var ketQua = '';
    for (var index = 0; index < arrSinhVien.length; index++) {
        //Mỗi lần duyệt lấy ra 1 sinh viên
        var sv = arrSinhVien[index];

        var sinhVien = new SinhVien(
            sv.maSinhVien, sv.tenSinhVien, sv.email, sv.matKhau, sv.ngaySinh, sv.khoaHoc,
            sv.diemToan, sv.diemLy, sv.diemHoa
        );
        // sinhVien.maSinhVien = sv.maSinhVien;
        // sinhVien.tenSinhVien = sv.tenSinhVien;
        // sinhVien.email = sv.email;
        // sinhVien.diemHoa = sv.diemHoa;
        // sinhVien.diemToan = sv.diemToan;
        // sinhVien.diemLy = sv.diemLy;
        // sinhVien.matKhau = sv.matKhau;
        // sinhVien.ngaySinh = sv.ngaySinh;
        console.log('sinhVien', sinhVien);

        //Từ biến sinh viên => tạo ra các thẻ tr bằng chuỗi
        ketQua += `
        <tr>
            <td>${sinhVien.maSinhVien}</td>
            <td>${sinhVien.tenSinhVien}</td>
            <td>${sinhVien.email}</td>
            <td>${sinhVien.ngaySinh}</td>
            <td>${sinhVien.khoaHoc}</td>
            <td>${sinhVien.tinhDiemTB().toFixed(2)}</td>
            <td>
            <button class="btn btn-primary" onclick="chinhSua('${sv.maSinhVien}')">Chỉnh Sửa</button>
            <button class="btn btn-danger" onclick="xoaSV('${sv.maSinhVien}')">Xoá</button>
            </td>
        </tr>`
            //
    }
    document.querySelector('#tbodySinhVien').innerHTML = ketQua;
    return ketQua; //OUtPUT '<tr></tr> ...<tr></tr>'
}

function xoaSV(maSinhVienClick) {
    console.log('maSVClick', maSinhVienClick);
    for (var index = 0; index < mangSinhVien.length; index++) {
        //mỗi lần duyệt lấy ra 1 sinh viên
        var sv = mangSinhVien[index];
        if (sv.maSinhVien === maSinhVienClick) { //Nếu sinhVien trong mảng có mã = với lại mã người dùng click nút xoá -> xoá thằng trong mảng dựa vào index
            mangSinhVien.splice(index, 1);
        }
    }
    //Sau khi xoá
    renderTable(mangSinhVien);
}
//CHỈNH SỬA SINH VIÊN
function chinhSua(maSinhVienClick) {
    console.log(maSinhVienClick);
    for (var index = 0; index < mangSinhVien.length; index++) {
        var sv = mangSinhVien[index];
        if (sv.maSinhVien === maSinhVienClick) {
            //láy thông tin đó gán ngược lại các input phía trên
            document.querySelector('#txtMaSV').value = sv.maSinhVien;
            document.querySelector('#txtTenSV').value = sv.tenSinhVien;
            document.querySelector('#txtEmail').value = sv.email;
            document.querySelector('#txtNgaySinh').value = sv.ngaySinh;
            document.querySelector('#khSV').value = sv.khoaHoc;
            document.querySelector('#txtDiemToan').value = sv.diemToan;
            document.querySelector('#txtDiemLy').value = sv.diemLy;
            document.querySelector('#txtDiemHoa').value = sv.diemHoa;
            //khoá không cho người dùng chỉnh sửa mã sinh viên
            document.querySelector('#txtMaSV').disabled = true;

        }
    }
}

//CẬP NHẬT SINH VIÊN
document.querySelector("#btnCapNhatSV").onclick = function() {
    var sinhVienCapNhat = new SinhVien();
    //lấy dữ liệu sau khi người dùng bấm vào nút cập nhật
    sinhVienCapNhat.maSinhVien = document.querySelector('#txtMaSV').value;
    sinhVienCapNhat.tenSinhVien = document.querySelector('#txtTenSV').value;
    sinhVienCapNhat.email = document.querySelector('#txtEmail').value;
    sinhVienCapNhat.matKhau = document.querySelector('#txtPass').value;
    sinhVienCapNhat.ngaySinh = document.querySelector('#txtNgaySinh').value;
    sinhVienCapNhat.khoaHoc = document.querySelector('#khSV').value;
    sinhVienCapNhat.diemToan = document.querySelector('#txtDiemToan').value;
    sinhVienCapNhat.diemLy = document.querySelector('#txtDiemLy').value;
    sinhVienCapNhat.diemHoa = document.querySelector('#txtDiemHoa').value;
    // console.log('cập nhật', sinhVienCapNhat);
    //Tìm ra sinh viên cần cập nhật
    for (var index = 0; index < mangSinhVien.length; index++) {
        //Mỗi làn duyệt lấy ra một sinh viên
        var sv = mangSinhVien[index];
        // sv = sinhVienCapNhat;
        if (sv.maSinhVien === sinhVienCapNhat.maSinhVien) {

            sv.tenSinhVien = sinhVienCapNhat.tenSinhVien;
            sv.email = sinhVienCapNhat.email;
            sv.matKhau = sinhVienCapNhat.matKhau;
            sv.ngaySinh = sinhVienCapNhat.ngaySinh;
            sv.khoaHoc = sinhVienCapNhat.khoaHoc;
            sv.diemToan = sinhVienCapNhat.diemToan;
            sv.diemLy = sinhVienCapNhat.diemLy;
            sv.diemHoa = sinhVienCapNhat.diemHoa;
            //lưu mảng sinh viên vào vào localstorage
            luuStorage();
            //Gọi hàm tạo lại bảng
            renderTable(mangSinhVien);
            //Clear các input đi
            clearInput();
            // console.log('sinh viên thao tác', sv);
            // console.log('sinh viên2', mangSinhVien[1]);
        }
    }
}

function clearInput() {
    document.querySelector('#txtMaSV').disabled = false;
    document.querySelector('#txtTenSV').value = '';
    document.querySelector('#txtEmail').value = '';
    document.querySelector('#txtPass').value = '';
    // document.querySelector('#txtNgaySinh').value = '';
    document.querySelector('#txtDiemToan').value = '';
    document.querySelector('#txtDiemLy').value = '';
    document.querySelector('#txtDiemHoa').value = '';
}

//Viết hàm lưu thông tin mangNguoiDung
function luuStorage() {
    //Miếng đối mảng sinh viên thành chuỗi [] => '[]'
    var sMangSinhVien = JSON.stringify(mangSinhVien);
    //lưu vào localstorage
    localStorage.setItem('mangSinhVien', sMangSinhVien);
}

// Lấy dữ liệu từ localstorage ra table

function layStorage() {
    //trước khi lấy kiểm tra
    if (localStorage.getItem('mangSinhVien')) {
        //Lấy giá trị từ localstorage ra => chuỗi
        var sMangSinhVien = localStorage.getItem('mangSinhVien');
        //Biến chuỗi thành mảng gán cho biến mangSinhVien
        mangSinhVien = JSON.parse(sMangSinhVien);

        // console.log('mảng sinh viên', sMangSinhVien);
        // console.log('mảng sinh viên', mangSinhVien);

        //gọi hàm tạo bảng từ mảng sinh viên
        renderTable(mangSinhVien);
    }
}
layStorage()
    // Xử Lý tìm kiếm

document.querySelector('#btnSearch').onclick = function() {
    //Toạ ra 1 mảng sv chứa kết quả tìm kiếm
    var mangSinhVienTimKiem = [];
    //lấy từ khoá người dùng gõ vào
    var tuKhoa = document.querySelector('#txtSearch').value;

    for (var index = 0; index < mangSinhVien.length; index++) {
        //Mỗi lần duyejt sẽ lấy ra sinh viên
        var sv = mangSinhVien[index];
        //toLowerCase() Biến các chuỗi chữ thường chữ Hoa
        if (sv.tenSinhVien.trim().toLowerCase().search(tuKhoa.trim()) !== -1) {
            //Láy ra tên tìm coi có chứa cụm từ khoá hay nesu không có thì bỏ oject sinhVien đó vào mangSinhVienTimKiem

            mangSinhVienTimKiem.push(sv);
        }
    }
    //RenderTable => viết lại cái bảng
    renderTable(mangSinhVienTimKiem);
}


// localStorage.setItem('zxc', 'Hello Friend');

// var result = localStorage.setItem('abc');
// document.querySelector('tbodySinhVien').innerHTML = result;

// //Xoá 1 giá trị ra khỏi storage
// localStorage.removeItem('abc');
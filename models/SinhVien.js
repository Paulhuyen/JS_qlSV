/*
  Định nghũa một kiểu dữ liệu lưu trữ nhiều thông tin
  Thuật ngữ : Prototype hoặc class ( lớp đối tượng )
 */

function SinhVien(maSV, tenSV, email, matKhau, ngaySinh, khoaHoc, diemToan, diemLy, diemHoa) {
    this.maSinhVien = maSV;
    this.tenSinhVien = tenSV;
    this.email = email;
    this.matKhau = matKhau;
    this.ngaySinh = ngaySinh;
    this.khoaHoc = khoaHoc;
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
    this.tinhDiemTB = function() {
        var diemTB = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
        return diemTB;
    }
}
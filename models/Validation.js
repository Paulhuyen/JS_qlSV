// Xây dựng class (prototype) cho việc kiểm tra dữ liệu input
function Validation() {

    this.kiemTraRong = function(value, selectorError) {
        if (value.trim() === '') {
            document.querySelector(selectorError).innerHTML = 'Không được bỏ trống';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    this.kiemTraTatCaKyTu = function(value, selectorError) {
        var regexLetter = /^[A-Z a-z]+$/;
        if (regexLetter.test(value)) {
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = 'Tất cả phải là ký tự';
        return false;
    }

    this.kiemTraTatCaSo = function(value, selectorError) {
        var regexNumber = /^[0-9]+$/;
        if (regexNumber.test(value)) {
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = 'Tất cả phải là số';
        return false;
    }

    this.kiemTraGiaTri = function(value, selectorError, minValue, maxValue) {
        if (Number(value) > maxValue || Number(value) < minValue) {
            document.querySelector(selectorError).innerHTML = 'giá trị từ ' + minValue + '-' + maxValue;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;

    }

    this.kiemTraDoDai = function(value, selectorError, minLength, maxLength) {
        if (value.length < minLength || value.length > maxLength) {
            document.querySelector(selectorError).innerHTML = 'giá trị từ ' + minLength + '-' + maxLength;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

}
// bài 1 Tính Tiền Thuế
document.getElementById("btnTinhThue").onclick = function () {
    var Names = document.getElementById("Names").value;
    var Sum = document.getElementById("Sum").value * 1;
    var People = document.getElementById("People").value * 1;
    var thuNhapChiuThue = 0;
    var thueThunhap = 0;

    //xu ly


    thuNhapChiuThue = Sum - (4e+6) - People * (1.6e+6);
    if (thuNhapChiuThue < 60e+6) {
        thueThunhap = 60e+6 * 0.05 + (Sum - (60e+6)) * 0.1
    } else {
        if (thuNhapChiuThue > 60e+6 && thuNhapChiuThue == 120e+6) {
            thueThunhap = 60e+6 * 0.1 + (Sum - (60e+6)) * 0.1
        } else {
            if (thuNhapChiuThue > 120e+6 && thuNhapChiuThue == 210e+6) {
                thueThunhap = 120e+6 * 0.15 + (Sum - (60e+6)) * 0.1
            } else {
                if (thuNhapChiuThue > 210e+6 && thuNhapChiuThue == 384e+6) {
                    thueThunhap = 210e+6 * 0.2 + (Sum - (60e+6)) * 0.1
                } else {
                    if (thuNhapChiuThue > 384e+6 && thuNhapChiuThue == 624e+6) {
                        thueThunhap = 384e+6 * 0.25 + (Sum - (60e+6)) * 0.1
                    } else {
                        if (thuNhapChiuThue > 624e+6 && thuNhapChiuThue == 960e+6) {
                            thueThunhap = 624e+6 * 0.3 + (Sum - (60e+6)) * 0.1
                        } else {
                            thueThunhap = 960e+6 * 0.35 + (Sum - (60e+6)) * 0.1
                        }
                    }
                }
            }
        }
    }
    var result = "";
    result += "<p>Họ Tên : " + Names + "số tiền cần đóng: " + thueThunhap + "vnd</p>";
    //Show kết quả
    document.getElementById("infoTinh").innerHTML = result;
};
//style
document.getElementById("infoTinh").classList.add("alert-success");

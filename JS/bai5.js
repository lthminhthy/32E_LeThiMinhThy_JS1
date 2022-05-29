/** Bài 5
 * Đầu vào:
- n= 27

 *Xử lý:
 - Tách lấy hàng chục => n/10;
 - Tách lấy hàng đơn vị => n%10;
 - Tổng = hàng chục = hàng don vi
 *Đầu ra:
 - Tổng = ?
 */

 var n = 27;
 var hangDonVi = Math.floor(n % 10);
 var hangChuc =Math.floor(n / 10);
 var tong = hangDonVi + hangChuc;
 console.log("Tong la: "+ tong);
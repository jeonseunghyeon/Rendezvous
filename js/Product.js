//0. a클릭시 위로 튕기는 이벤트 제거
$(document).on('click', 'a[href="#"]',function(e) {
    e.preventDefault();
}) ;
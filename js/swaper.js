$(document).ready(function(){
    $('#r1').click(function(){
        $('.parent').empty()
        $('.parent').append(
            '<div class="Parenttext"><span>مبلغ مورد نظر را وارد کنید و بر روی ادامه کلیک کنید</span><input class="MINP"type="text"name="money"id="money"placeholder="مبلغ مورد نظر را وارد کنید..."/><img class="withdraw" src="./img/whitdraw.png" alt="" /><button class="pay"><i class="bx bx-credit-card"></i>ادامه</button></div>'
        )
        $('.menuTitle').text("شارژ حساب")
        $('.topIMG3').attr('src','./img/money.png')
    })
    $('#r2').click(function(){
        $('.parent').empty()
        $('.parent').append(
            '<div class="Parenttext2"><span class="pt2">مقدار دلخواه از امتیاز های خود را به پول تبدیل کنید و راحت ترتراکنش کنید.</span><img class="swapIMG" src="./img/swap.png" alt="" /><div class="swapINP"><div class="PointINP"><div class="PointINPText"><img src="./img/star.png" alt="" /><span>امتیاز</span></div><input type="number"name="PointAmount"id="PointAmount"placeholder="مقدار امتیاز..." autocomplete="off" /></div><div class="PointINP"><div class="PointINPText"><img src="./img/moneyicon.png" alt="" /><span>پول</span></div><div class="MoneyAmount"><span class="MoneyAmountText">مقدار پول...</span></div></div></div><button class="pay2"><img src="./img/swapIcon.png" alt="" /><span>تبدیل</span></button></div>'
        )
        $('.menuTitle').text("تبدیل امتیاز")
        $('.topIMG3').attr('src','./img/swapTop.png')
    })
})
$("#PointAmount").on("input", function () {
    // Print entered value in a div box
    let inputVal = $(this).val()
    if($.isNumeric(inputVal)){
        $('.MoneyAmountText').text((inputVal * 100));
    }
    else if(inputVal===""){
        $('.MoneyAmountText').text("مقدار پول ...");
    }
    else{
        $('.MoneyAmountText').text("مقدار امتیاز نامعتبر است");
    }
});
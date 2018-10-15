////////// in info pages
$('.menu_img').click(function(){
    event.stopPropagation();
    $('.dropDownMenu').toggleClass('hidden');
    console.log('lick');
});

$(window).click(function(){
    $('.dropDownMenu').addClass('hidden');
});


$('.dropDownMenu').click(function(){
    event.stopPropagation();
});


//////show filter and hid it/////////
$('#filterShow').click(function(){
    $('.filterForm').toggleClass('hidden');
});
////////////////////////////////////


//for drop menu
$('.profil_imgMin').click(function (event) {
    event.stopPropagation();
    $('.profile_menu').toggleClass('hidden');
});

$(window).click(function () {
    $('.profile_menu').addClass('hidden');
    $('.addNewPostContainer').addClass('hidden');
    $('.examSettingContainer').addClass('hidden');
});

$('.profile_menu').click(function (event) {
    event.stopPropagation();
});

$('.examSettingContainer').click(function (event) {
    event.stopPropagation();
});
//////////////////////////////////////



//////////////////////////////////////
//add & remove edu skill etc..
$('#eduAddLabel').click(function(){
    $('#edus').append(copyElement('#edu'));
})

$('#expAddLabel').click(function(){
    $('#exps').append(copyElement('#exp'));
})

$('#skillAddLabel').click(function(){
    $('#skills').append(copyElement('#skill'));
})

$('#languageAddLabel').click(function(){
    $('#languages').append(copyElement('#language'));
})

function copyElement(x) {

    var element = $(x).clone(true);

    var del = $("<label class='delete'></label>").text('Delete')

    var ln = $("<hr class='line'>");

    $(element).prepend(ln);

    $(del).click(function(e){
        $(this).parent().remove();
    });

    $(element).append(del);

    return element;
}

//////////////////////////////////////
// edu add & remove
$('#edu_label').click(function(){
    $('#edu_container').append(copyElement('#edu'));
})

$('#lbl_addExp').click(function(){
    $('#exp_container').append(copyElement('#exp'));
})

$('#lbl_addSkill').click(function(){
    $('#skill_container').append(copyElement('#skill'));
})

$('#lbl_addLang').click(function(){
    $('#language_container').append(copyElement('#language'));
})




//////////////////////////////////////



//////////////////////////////////////
//////////tabbing/////////////////////

$('.bodyTab').click(function(){
    $(".bodyTab").removeClass("activeLabel");
    $(this).addClass('activeLabel');

    var index = $(".bodyTab").index(this);
    var targetTab = ".tabA" + ":eq(" + index + ")";

    $(".tabA" ).addClass('hidden');
    $(targetTab).removeClass('hidden');
});

$('.tab').click(function(){
    $(".tab").removeClass("activeLabel");
    $(this).addClass('activeLabel');

    var index = $(".tab").index(this);

    switch (index) {
        case 3:
            index = 0;
            break;
        case 4:
            index = 1;
            break;
        case 5:
            index = 2;
            break;
        default:
            break;
    }

    var targetTab = ".profileBody" + ":eq(" + index + ")";

    $(".profileBody" ).addClass('hidden');
    $(targetTab).removeClass('hidden');
});

//////////////////////////////////////


/////////review replaced imgs/////////
function set_img(input, id) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            //alert(e.target.result);
            document.getElementById(id).setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }

}
//////////////////////////////////////


////////////////signup validation//////////////////////


function sigup_validation() {
    var flag=true;
    var email = document.getElementsByName('email')[0];
    var password = document.getElementsByName('password')[0];
    var repassword = document.getElementsByName('password_confirmation')[0];
    var user_type = document.getElementsByName('type')[0];

    email.classList.remove('err');
    password.classList.remove('err');
    repassword.classList.remove('err');
    user_type.classList.remove('err');

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //pasword validation
    if (password.value.length < 8 ||password.value.length == 0) {
        password.classList.add('err');
        flag=false;

    } else if (password.value !== repassword.value){
        alert("the two passwords not identicall");
        password.classList.add('err');
        repassword.classList.add('err');
        flag=false;

    }

    // console.log(re.test(email.value)  );
    //email validation
    if (!(re.test(email.value.toLowerCase()))) {
        email.classList.add('err');
        flag=false;

    }

    //type validation
    if(user_type.value==-1)
    {
        user_type.classList.add('err');
        flag=false;

    }
    console.log(flag);

    return flag;
}


function login_validation(){

    var flag=true;

    var email = document.getElementsByName('email')[0];
    var password = document.getElementsByName('password')[0];

    email.classList.remove("err");
    password.classList.remove("err");

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //pasword validation
    if (password.value.length < 8 ||password.value.length == 0) {
        alert("password is too short" );
        password.classList.add("err");
        flag=false;
    }

    //email validation
    if (!(re.test(email.value.toLowerCase()))) {
        email.classList.add("err");
        flag=false;
    }

    if(flag){
        ///redirect if every thing is ok
        return true;
    }else {
        return false;
    }

}



//////////////////////company wall/////////////////////
/////////add post show or hidden///////
$('.addNewPostBtn').click(function (event) {
    event.stopPropagation();
    $('.addNewPostContainer').removeClass('hidden');

});

$('.addnewpost').click(function(){
    event.stopPropagation();
});




/////////////////////////form content info /////////////

$('#qesAddLabel').click(function(){
    var element = $('.copyFeild').clone(true);
    element.removeClass('hidden');
    element.removeClass('copyFeild');
    $(element).insertBefore('.add_question');
});

$('.feildRemover').click(function(){
    // event.preventDefault();
    $(this).parent().remove();
});

////////////////////////////////////////////////////////


/////////////////exam form///////////////////
$('.questionRemover').click(function(){
    // event.preventDefault();
    $(this).parent().parent().remove();
});

$('#questionAddLabel').click(function(){
    var element = $('.copyQuest').clone(true);
    element.removeClass('hidden');
    element.removeClass('copyQuest');
    $(element).insertBefore('.addQuestion');
});

$('#exameSettingButton').click(function(event){
    event.stopPropagation();
    $('.examSettingContainer').removeClass('hidden');
});

/////////////////////////////////////////////



/////add 5/7/////
$('.apply').click(function(){
    $(".applyFinished").show().delay(3000).fadeOut();
});


///// make this code at end of page to avoid some errors
////slider code  (info)
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var list = document.getElementById("menu").getElementsByTagName("li");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < list.length; i++) {
        list[i].className = list[i].className.replace("finished_list", "");
    }

    for (i = 0; i < slideIndex; i++) {
        list[i].className = "finished_list";
    }

    slides[slideIndex - 1].style.display = "block";
}
//////end of slider code

/////////////////////////////
////slider code for profile setting
var slideIndex1 = 1;
showSlides(slideIndex1);

function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var list = document.getElementById("slidMenu").getElementsByTagName("li");

    if (n > slides.length) {
        slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < list.length; i++) {
        list[i].className = list[i].className.replace("active_setting", "");
    }



    list[slideIndex1 - 1].className = "active_setting";

    slides[slideIndex1 - 1].style.display = "block";
}

///////////////////////////////////////////////////////








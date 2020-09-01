module.exports = {
    HTML:function(title, list, body, control){
      return `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <a href="/author">author</a>
        ${list}
        ${control}
        ${body}
      </body>
      </html>
      `;
    },list:function(crews){
        var list = '<ul>';
        var i = 0;
        while(i < crews.length){
          list = list + `<div class="todays-crew-info">
          <li class="time">${crews[i].start_time}</li>
          <div class="info">
            <span class="title">${crews[i].crew_name}</span>
          <a href="/?id=${crews[i].id}" class="joinbtn">참여하기</a>
          </div>`;
          i = i + 1;
        }
        list = list+'</ul>';
        return list;
    },home:function(list){
      return `
      <!DOCTYPE html>
      <html>
      <head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>GADAMGADAM</title>
	<link href="../gadamfront/css/style.css" rel="stylesheet" type="text/css"/>
	<script src="https://kit.fontawesome.com/8603b8406e.js" crossorigin="anonymous">
	</script>
	<script src="../gadamfront/js/script.js" defer>
	</script>

	<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="../gadamfront/css/flexslider.css" type="text/css" media="screen" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
	 crossorigin="anonymous">
	</script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.7.2/jquery.flexslider.min.js" integrity="sha512-DMVsZXgX4yFXz69Stig0g783PuBnl245OQV2qj5gSHTVUAuSeqRolBbaqiungKghnEPYee081WTTN6WA4BPYww=="
	 crossorigin="anonymous">
	</script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.7.2/flexslider.min.css" integrity="sha512-c7jR/kCnu09ZrAKsWXsI/x9HCO9kkpHw4Ftqhofqs+I2hNxalK5RGwo/IAhW3iqCHIw55wBSSCFlm8JP0sw2Zw=="
	 crossorigin="anonymous" />

      </head>
      <body>
	<!--Header-->
	<nav class="navbar">
		<div class="navbar_logo">
			<i class="fab fa-goodreads-g"></i>
            <a href="index.html">GADAM GADAM</a>
        </div>

         <ul class="navbar_mypage">
            <li><a href="login.html">LOGIN/JOIN</a></li>
            <li><a href="mypage.html" class="far fa-user"></a></li>
        </ul>
      </nav>
   
 <!--main_menu_ctr-->
  <div class="mainpage">
     <div class="main">
     <div class="main_control">
      <div class="main_control_btn">
          <a class="selected" href="/">HOME</a>
          <a href="findcrew.html">FIND CREW</a>
        </div>        
      </div>
    </div>


  <div class="center_body">
        <!--hotcrew_image-->
    <section class="slider">
        <div class="flexslider">
          <ul class="slides">
            <li><a href="detailinfo.html">
  	    	    <img src="images/blog-1.jpg" width="10%" height="10%"/>
  	    		</a></li>
  	    		<li>
  	    	    <img src="images/blog-4.jpg" />
  	    		</li>
  	    		<li>
  	    	    <img src="images/blog-6.jpg" />
  	    		</li>
          </ul>
        </div>
      </section>


      <script>
      $(function() {
        $('.flexslider').flexslider({
          animation: "slide"
        });
      });
      </script>
    
      <!--todays_crew-->
    <section class="todays-crew">
      <div class="todays-crew-nav">
        <span>오늘의 크루</span>
        <span class="filter_btn" id="filter_btn">
        <a class="fas fa-filter"></a>
        </span>
      </div>

     <!-- 팝업 될 레이어 --> 
     <div class="modal"> 
         <div class="modal-content"> 
            카테고리
             <span class="close-button">&times;</span>
             <div class="filter_item">
               <ul class="list">
                  <h4 class="sex_filter">성별</h4>
                    <li>
                      <input type="checkbox" v-model="checkedSex" class="filterCheck grey" id="sex_m" value="1">
                      <label for="sex_m" class="checkLabel">남성</label>
                     </li>
                     <li>
                       <input type="checkbox" v-model="checkedSex" class="filterCheck grey" id="sex_w" value="-1">
                       <label for="sex_w" class="checkLabel">여성</label>
                      </li>
                      <li>
                       <input type="checkbox" v-model="checkedSex" class="filterCheck grey" id="sex_u" value="0">
                       <label for="sex_u" class="checkLabel">무관</label>
                     </li>
                 </ul>
                 <ul class="list">
                    <h4 class="age_filter">나이</h4>
                      <li>
                       <input type="checkbox" v-model="checkedAge" class="filterCheck grey" id="type_match" value="4">
                       <label for="type_match" class="checkLabel">10대</label>
                      </li>
                      <li>
                       <input type="checkbox" v-model="checkedAge" class="filterCheck grey" id="type_match" value="5">
                       <label for="type_cup" class="checkLabel">20대</label>
                      </li>
                      <li>
                       <input type="checkbox" v-model="checkedAge" class="filterCheck grey" id="type_match" value="6">
                       <label for="type_cup" class="checkLabel">30대</label>
                      </li>
                      <li>
                       <input type="checkbox" v-model="checkedAge" class="filterCheck grey" id="type_match" value="7">
                       <label for="type_cup" class="checkLabel">40대</label>
                      </li>
                    <!-- 추가하고시픙ㄴ데 너무 비좁아 
                          <li>
      <input type="checkbox" v-model="checkedAge" class="filterCheck grey" id="type_match" value="8">
      <label for="type_cup" class="checkLabel">50대 이상</label>
      </li>-->

                 </ul>
                 </div>
               <input type="button" id="cancel" value="취소"> 
               <input type="submit" id="submit" value="적용하기"> 
             </form> 
         </div> 
     </div>

    <script type="text/javascript"> 
         var modal = document.querySelector(".modal"); 
         var trigger = document.querySelector(".filter_btn"); 
         var closeButton = document.querySelector(".close-button"); 
         var cancelButton = document.querySelector("#cancel");

        function toggleModal() { 
             modal.classList.toggle("show-modal"); 
         }

        function windowOnClick(event) { 
             if (event.target === modal) { 
                 toggleModal(); 
             } 
         }

         trigger.addEventListener("click", toggleModal); 
         closeButton.addEventListener("click", toggleModal); 
         cancel.addEventListener("click", toggleModal); 
         window.addEventListener("click", windowOnClick); 
     </script>


    <hr>


    <div class="time-filter">
      <ul class="time-filter-btn">
         <li><a href="#">전체</a></li>
     <li><a href="#">7:00</a></li>
      <li><a href="#">8:00</a></li>
       <li><a href="#">9:00</a></li>
       <li><a href="#">10:00</a></li>
       <li><a href="#">11:00</a></li>
       <li><a href="#">12:00</a></li>
       <li><a href="#">13:00</a></li>
       <li><a href="#">14:00</a></li>
       <li><a href="#">15:00</a></li>
       <li><a href="#">16:00</a></li>
        <li><a href="#">17:00</a></li>
       <li><a href="#">18:00</a></li>
       <li><a href="#">19:00</a></li>
       <li><a href="#">20:00</a></li>
       <li><a href="#">21:00</a></li>
       <li><a href="#">22:00</a></li>
      </ul>
    </div>

    <hr>

    <div class="region-filter">
      <ul class="region-filter-btn">
        <li>
          <a href="/region/1/matches/">전체</a>
        </li>
        <li>
          <a href="/region/1/matches/">서울</a>
        </li>
        <li>
          <a href="/region/3/matches/">경기</a>
        </li>
        <li>
          <a href="/region/8/matches/">인천</a>
        </li>
        <li>
          <a href="/region/7/matches/">대전</a>
        </li>
        <li>
          <a href="/region/13/matches/">충북</a>
        </li>
        <li>
          <a href="/region/6/matches/">광주</a>
        </li>
        <li>
          <a href="/region/2/matches/">대구</a>
        </li>
        <li>
          <a href="/region/11/matches/">울산</a>
        </li>
        <li>
          <a href="/region/10/matches/">부산</a>
        </li>
      </ul>

    <hr>
    ${list}

 <!--stickybutton-->
 <div class="stickybutton" style="z-index: 2;">
    <a href="makecrew.html">
      <p><b>크루모집</b></p>
      <span class="mainjoin">나만의 크루를 모집해보세요!</span>
    </a>
  </div>

  <div class="main-paging">
   <div class="todayscrew-paging">
      <a class="prev" href="#"><</a>
      <a href="#" class="checknum">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a class="next" href="#">></a>
   </div>
</div>

</div>
</div>
       <footer class="bottomarea">
            <i href="">Duksung</i>
      </footer>
  </body>
      </html>
      `;
    }
}
window.addEventListener('DOMContentLoaded', function(){

  // Color 변수
  const colorWhite = "#FFF";
  const colorMainPink1 = "#FB4D8D";
  const colorMainPink2 = "#FC7AAA";
  const colorMainPink3 = "#E12568";
  const colorMainBlack1 = "#322D2D";
  const colorMainBlack2 = "#848181";
  const colorMainBlack3 = "#D6D5D5";
  const colorSubPink1 = "#FDEFF3";
  const colorSubPink2 = "#FFE7EE";
  const colorSubPink3 = "#FCB1C4";
  const colorSubYellow1 = "#FAD475";
  const colorSubGreen1 = "#9BDEAC";
  const colorSubGreen2 = "#6ABAA4";
  const colorSubBlue1 = "#67DEF8";

  // 옵션 페이지에 각 옵션들을 생성하는 클래스
  class OptionButton{ 
    constructor(optionId, optionWord){
        this.optionId = optionId 
        this.optionWord = optionWord;
    }
    //Plus Minus button event
    btnOptionSmallClick(idOption, btnMinus, btnPlus, minValue, maxValue, stepValue){
        $(`#${btnMinus}`).click(function(){ 
            let optionOutput = Number($(`#${btnMinus}`).siblings("p").html()); 
            $(`#${idOption}>div`).children().css("box-shadow", "0 0 0 0.2rem #848181"); 
            $(`#${idOption}>div>article`).find("p").css("color", colorMainBlack3);
            $(`#${idOption}>div>article`).find("button").removeClass("buttonSmallDesign");
            $(this).closest(`.classForBtn`).css("box-shadow", "0 0 0 0.2rem #FB4D8D"); 
            $(this).closest(`.classForBtn`).find("p").css("color", "#FB4D8D"); 
            $(this).closest(`.classForBtn`).find("button").addClass("buttonSmallDesign");
            if(optionOutput <= stepValue ){
                $(this).removeClass("buttonSmallDesign");
                $(this).siblings("p").html(minValue);
                $(`#${btnPlus}`).addClass("buttonSmallDesign");
                return false;
            } else if(optionOutput > minValue){
                $(this).siblings("p").html(optionOutput-stepValue); 
                $(this).addClass("buttonSmallDesign");
                $(`#${btnPlus}`).addClass("buttonSmallDesign");
                return false;
            }
        });
        $(`#${btnPlus}`).click(function(){
            let optionOutput = Number($(this).siblings("p").html()); 
            $(`#${idOption}>div`).children().css("box-shadow", "0 0 0 0.2rem #848181"); 
            $(`#${idOption}>div>article`).find("p").css("color", colorMainBlack3);
            $(`#${idOption}>div>article`).find("button").removeClass("buttonSmallDesign");
            $(this).closest(`.classForBtn`).css("box-shadow", "0 0 0 0.2rem #FB4D8D"); 
            $(this).closest(`.classForBtn`).find("p").css("color", "#FB4D8D"); 
            $(this).closest(`.classForBtn`).find("button").addClass("buttonSmallDesign");
            if(optionOutput >= maxValue - stepValue ){
                $(this).siblings("p").html(maxValue);
                $(this).removeClass("buttonSmallDesign");
                $(`#${btnMinus}`).addClass("buttonSmallDesign");
                return false;
            } else if(optionOutput < maxValue){
                $(this).siblings("p").html(optionOutput+stepValue);
                $(this).addClass("buttonSmallDesign");
                $(`#${btnMinus}`).addClass("buttonSmallDesign");
                return false;
            }
        });
    }
    //each option button click event
    btnOptionClick(idOption){
        $(`#${idOption}>div`).children().eq(0).css("box-shadow", "0 0 0 0.2rem #FB4D8D"); 
        $(`#${idOption}>div`).children().eq(0).css("box-shadow", "0 0 0 0.2rem #FB4D8D"); 
        $(`#${idOption}>div`).children().eq(0).find("p").css("color", "#FB4D8D");
        $(`#${idOption}>div`).children().eq(0).find("button").addClass("buttonSmallDesign");
        let i = 0;
        while(i<$(`#${idOption}>div`).children().length){
            $(`#${idOption}>div`).children().eq(i).click(function(){ 
                
                $(`#${idOption}>div`).children().css("box-shadow", "0 0 0 0.2rem #848181"); 
                $(`#${idOption}>div>article`).find("p").css("color", colorMainBlack3);
                $(`#${idOption}>div>article`).find("button").removeClass("buttonSmallDesign");
                $(this).css("box-shadow", "0 0 0 0.2rem #FB4D8D"); 
                $(this).find("p").css("color", "#FB4D8D"); 
                $(this).find("button").addClass("buttonSmallDesign"); 
            });
            i++;
        }       
    }
    //포장 옵션
    makePackageButton(){
        this.optionId.append(`<section id='packageOption${this.optionWord}'></section>`);
        $(`#packageOption${this.optionWord}`).append("<article><article></article><p>포장</p></article>");
        $(`#packageOption${this.optionWord}>article`).find("article").css("background-image", "url('/build/img/iconPackage.png')");
        $(`#packageOption${this.optionWord}`).append("<div id=optionPackageAll></div>");
        $(`#packageOption${this.optionWord}>div`).append("<article><p>포장 안함</p></article>");
        $(`#packageOption${this.optionWord}>div`).append(`<article class=classForBtn><article><p>아이스 포장</p><p>(*최대 60분)</p></article><article><button id='btnPackageMinus60${this.optionWord}'><i class='xi-minus'></i></button><p>10</p><button id='btnPackagePlus60${this.optionWord}'><i class='xi-plus'></i></button></article><article>`); 
        $(`#packageOption${this.optionWord}>div`).append(`<article class=classForBtn><article><p>보냉백 포장</p><p>(*최대 90분)</p></article><article><button id='btnPackageMinus90${this.optionWord}'><i class='xi-minus'></i></button><p>10</p><button id='btnPackagePlus90${this.optionWord}'><i class='xi-plus'></i></button></article><article>`);

        this.btnOptionSmallClick(`packageOption${this.optionWord}`,`btnPackageMinus60${this.optionWord}`, `btnPackagePlus60${this.optionWord}`, 0, 60, 5);
        this.btnOptionSmallClick(`packageOption${this.optionWord}`, `btnPackageMinus90${this.optionWord}`, `btnPackagePlus90${this.optionWord}`, 0, 90, 5);
        this.btnOptionClick(`packageOption${this.optionWord}`);
    }
    //포장 심플 옵션, 포장 안함, 포장 으로 나뉘어짐
    makePackageButtonSimple(){
        this.optionId.append(`<section id='packageOptionSimple${this.optionWord}'></section>`);
        $(`#packageOptionSimple${this.optionWord}`).append("<article><article></article><p>포장</p></article>"); 
        $(`#packageOptionSimple${this.optionWord}>article`).find("article").css("background-image", "url('/build/img/iconPackage.png')");
        $(`#packageOptionSimple${this.optionWord}`).append("<div id=optionPackageSimpleAll></div>");
        $(`#packageOptionSimple${this.optionWord}>div`).append("<article><p>포장 안함</p></article>");       
        $(`#packageOptionSimple${this.optionWord}>div`).append("<article><p>포장하기</p></article>");
        
        this.btnOptionClick(`packageOptionSimple${this.optionWord}`);
    }
    //스푼 옵션
    makeSpoonButton(optionSpoonCount){
        this.optionId.append(`<section id='spoonOption${this.optionWord}'></section>`);
        $(`#spoonOption${this.optionWord}`).append("<article><article></article><p>스푼</p></article>"); 
        $(`#spoonOption${this.optionWord}>article`).find("article").css("background-image", "url('/build/img/iconSpoon.png')");
        $(`#spoonOption${this.optionWord}`).append("<div id=optionSpoonAll></div>");
        $(`#spoonOption${this.optionWord}>div`).append("<article><p>스푼 없음</p></article>");
        $(`#spoonOption${this.optionWord}>div`).append(`<article class=classForBtn><article><p>스푼 추가</p><p>(일회용)</p></article><article><button id='btnSpoonMinus${this.optionWord}'><i class='xi-minus'></i></button><p>${optionSpoonCount}</p><button id='btnSpoonPlus${this.optionWord}'><i class='xi-plus'></i></button></article><article>`);
        this.btnOptionClick(`spoonOption${this.optionWord}`);
        this.btnOptionSmallClick(`spoonOption${this.optionWord}`, `btnSpoonMinus${this.optionWord}`, `btnSpoonPlus${this.optionWord}`, 1, 99, 1);
    }
    //초 옵션
    makeCandleButton(){
        this.optionId.append(`<section id='candleOption${this.optionWord}'></section>`);
        $(`#candleOption${this.optionWord}`).append("<article><article></article><p>초</p></article>");
        $(`#candleOption${this.optionWord}>article`).find("article").css("background-image", "url('/build/img/iconCandle.png')");
        $(`#candleOption${this.optionWord}`).append("<div id=optionCandleAll></div>");
        $(`#candleOption${this.optionWord}>div`).append(`<article class=classForBtn><article><p>큰 초</p><p>(*최대 15개)</p></article><article><button id='btnBigCandleMinus${this.optionWord}'><i class='xi-minus'></i></button><p>0</p><button id='btnBigCandlePlus${this.optionWord}'><i class='xi-plus'></i></button></article><article>`);        
        $(`#candleOption${this.optionWord}>div`).append(`<article class=classForBtn><article><p>작은 초</p><p>(*최대 15개)</p></article><article><button id='btnSmallCandleMinus${this.optionWord}'><i class='xi-minus'></i></button><p>0</p><button id='btnSmallCandlePlus${this.optionWord}'><i class='xi-plus'></i></button></article><article>`);       
        $(`#candleOption${this.optionWord}>div`).children().css("box-shadow", "0 0 0 0.2rem #FB4D8D"); 
        $(`#candleOption${this.optionWord}>div`).children().find("p").css("color", "#FB4D8D");
        $(`#candleOption${this.optionWord}>div`).children().find("button").addClass("buttonSmallDesign");
        let i = 0;
        while(i<$(`#candleOption${this.optionWord}>div`).children().length){
            $(`#candleOption${this.optionWord}>div`).children().eq(i).click(function(){ 
                $(this).css("box-shadow", "0 0 0 0.2rem #FB4D8D"); 
                $(this).find("p").css("color", "#FB4D8D"); 
                $(this).find("button").addClass("buttonSmallDesign"); 
            });
            i++;
        }
        function btnSmallClick(btnMinus, btnPlus, minValue, maxValue, stepValue){
            $(`#${btnMinus}`).click(function(){ 
                let optionOutput = Number($(`#${btnMinus}`).siblings("p").html()); 
                $(this).closest(`.classForBtn`).css("box-shadow", "0 0 0 0.2rem #FB4D8D"); 
                $(this).closest(`.classForBtn`).find("p").css("color", "#FB4D8D"); 
                $(this).closest(`.classForBtn`).find("button").addClass("buttonSmallDesign");
                if(optionOutput <= stepValue ){
                    $(this).removeClass("buttonSmallDesign");
                    $(this).siblings("p").html(minValue);
                    $(`#${btnPlus}`).addClass("buttonSmallDesign");
                    return false;
                } else if(optionOutput > minValue){
                    $(this).siblings("p").html(optionOutput-stepValue); 
                    $(this).addClass("buttonSmallDesign");
                    $(`#${btnPlus}`).addClass("buttonSmallDesign");
                    return false;
                }
            });
            $(`#${btnPlus}`).click(function(){ 
                let optionOutput = Number($(this).siblings("p").html()); 
                $(this).closest(`.classForBtn`).css("box-shadow", "0 0 0 0.2rem #FB4D8D"); 
                $(this).closest(`.classForBtn`).find("p").css("color", "#FB4D8D"); 
                $(this).closest(`.classForBtn`).find("button").addClass("buttonSmallDesign");
                if(optionOutput >= maxValue - stepValue ){
                    $(this).siblings("p").html(maxValue);
                    $(this).removeClass("buttonSmallDesign");
                    $(`#${btnMinus}`).addClass("buttonSmallDesign");
                    return false;
                } else if(optionOutput < maxValue){
                    $(this).siblings("p").html(optionOutput+stepValue);
                    $(this).addClass("buttonSmallDesign");
                    $(`#${btnMinus}`).addClass("buttonSmallDesign");
                    return false;
                }
            });
        }
        btnSmallClick(`btnBigCandleMinus${this.optionWord}`, `btnBigCandlePlus${this.optionWord}`, 0, 15, 1);
        btnSmallClick(`btnSmallCandleMinus${this.optionWord}`, `btnSmallCandlePlus${this.optionWord}`, 0, 15, 1);
    }
    //샷 옵션
    makeShotButton(){
        this.optionId.append(`<section id='shotOption${this.optionWord}'></section>`);
        $(`#shotOption${this.optionWord}`).append("<article><article></article><p>샷</p></article>");
        $(`#shotOption${this.optionWord}>article`).find("article").css("background-image", "url('/build/img/iconShot.png')");
        $(`#shotOption${this.optionWord}`).append("<div id=optionShotAll></div>");
        $(`#shotOption${this.optionWord}>div`).append("<article><p>샷 추가 없음</p></article>");
        $(`#shotOption${this.optionWord}>div`).append("<article class=classForBtn><article><p>샷 추가</p><p></p></article><article><button id='btnShotMinus'><i class='xi-minus'></i></button><p>1</p><button id='btnShotPlus'><i class='xi-plus'></i></button></article><article>");       
        this.btnOptionClick(`shotOption${this.optionWord}`);
        this.btnOptionSmallClick(`shotOption${this.optionWord}`,"btnShotMinus", "btnShotPlus", 1, 10, 1);
    }
    //시럽 옵션
    makeSyrupButton(){
        this.optionId.append(`<section id='syrupOption${this.optionWord}'></section>`);
        $(`#syrupOption${this.optionWord}`).append("<article><article></article><p>시럽</p></article>");
        $(`#syrupOption${this.optionWord}>article`).find("article").css("background-image", "url('/build/img/iconSyrup.png')");
        $(`#syrupOption${this.optionWord}`).append("<div id=optionSyrupAll></div>");
        $(`#syrupOption${this.optionWord}>div`).append("<article><p>시럽 추가 없음</p></article>");
        $(`#syrupOption${this.optionWord}>div`).append("<article class=classForBtn><article><p>시럽 추가</p><p></p></article><article><button id=btnSyrupMinus><i class='xi-minus'></i></button><p>1</p><button id=btnSyrupPlus><i class='xi-plus'></i></button></article><article>");       
        this.btnOptionClick(`syrupOption${this.optionWord}`);
        this.btnOptionSmallClick(`syrupOption${this.optionWord}`,"btnSyrupMinus", "btnSyrupPlus", 1, 10, 1);
    }
    //콘, 컵 옵션
    makeCupButton(){
        this.optionId.append(`<section id='cupOption${this.optionWord}'></section>`);
        $(`#cupOption${this.optionWord}`).append("<article><article></article><p>콘 / 컵</p></article>");
        $(`#cupOption${this.optionWord}>article`).find("article").css("background-image", "url('/build/img/iconconecup.png')");
        $(`#cupOption${this.optionWord}`).append("<div id=optionCupAll></div>");
        $(`#cupOption${this.optionWord}>div`).append("<article><i class=iconConeActive></i><p>콘</p></article>");
        $(`#cupOption${this.optionWord}>div`).append("<article><i class=iconCup></i><p>컵</p></article>");
        $(`#cupOption${this.optionWord}>div`).children().eq(0).css("box-shadow", "0 0 0 0.2rem #FB4D8D"); 
        $(`#cupOption${this.optionWord}>div`).children().eq(0).find("p").css("color", "#FB4D8D");
        $(`#optionCupAll`).children().eq(0).click(function(){ 
            
            $(`#optionCupAll`).children().eq(1).css("box-shadow", "0 0 0 0.2rem #848181");
            $(`#optionCupAll`).children().eq(1).find("p").css("color", colorMainBlack3);
            $(`#optionCupAll`).children().eq(1).find("i").removeClass("iconCupActive");
            $(`#optionCupAll`).children().eq(1).find("i").addClass("iconCup");
            $(this).css("box-shadow", "0 0 0 0.2rem #FB4D8D"); 
            $(this).find("p").css("color", "#FB4D8D");
            $(this).find("i").removeClass("iconCone");
            $(this).find("i").addClass("iconConeActive");
            return false;
        });
        $(`#optionCupAll`).children().eq(1).click(function(){  
            
            
            $(`#optionCupAll`).children().eq(0).css("box-shadow", "0 0 0 0.2rem #848181");
            $(`#optionCupAll`).children().eq(0).find("p").css("color", colorMainBlack3);
            $(`#optionCupAll`).children().eq(0).find("i").removeClass("iconConeActive");
            $(`#optionCupAll`).children().eq(0).find("i").addClass("iconCone");
            $(this).css("box-shadow", "0 0 0 0.2rem #FB4D8D"); 
            $(this).find("p").css("color", "#FB4D8D");
            $(this).find("i").removeClass("iconCup");
            $(this).find("i").addClass("iconCupActive");
            return false;
        });
    }
  }

  // 옵션 페이지의 상품 설명 옵션
  class optionExplain{
      constructor(productImgUrl, productName, productCost, productExplain, productKcal){
          this.productImgUrl = productImgUrl; 
          this.productName = productName; 
          this.productCost = productCost; 
          this.productExplain = productExplain;
          this.productKcal = productKcal; 
      }
      //상단에 나오는 상품 설명
      optionExplainTop(infoPositionId){ 
          $(`#${infoPositionId}`).append("<div></div>");
          $(`#${infoPositionId}>div`).append("<div></div>"); 
          $(`#${infoPositionId}>div>div`).css("backgroundImage", `url(${this.productImgUrl})`);
          
          $(`#${infoPositionId}>div`).append(`<div><article><p>${this.productName}</p><div><p>${this.productCost}</p></div></article><article><div><p>${this.productExplain}</p></div></article></div>`); 
      }
      //하단, footer 부분에 나오는 상품 설명
      optionExplainBottom(infoPositionId){ 
          $(`#${infoPositionId}`).append("<section></section>");
          $(`#${infoPositionId}>section`).append("<article></article>");
          $(`#${infoPositionId}>section>article`).css("backgroundImage", `url(${this.productImgUrl})`);

          $(`#${infoPositionId}>section`).append(`<article><p>${this.productName}</p><p>${this.productKcal}</p><p>${this.productExplain}</p></article>`);
      }
  }

  //Product Page에서 사용할 Class
  class Product{  
    constructor(icecream, coffee, cake){
      this.dataIcecream = JSON.parse(JSON.stringify(icecream));
      this.dataCoffee = JSON.parse(JSON.stringify(coffee));
      this.dataCake = JSON.parse(JSON.stringify(cake));
      this.allProduct = [this.dataIcecream, this.dataCoffee, this.dataCake];
      this.tabNum = 0; 
      this.menuCount = [this.dataIcecream.length, this.dataCoffee.length, this.dataCake.length];
      this.pagination = 0;
      this.paginationArr = [Math.floor(this.dataIcecream.length/12), Math.floor(this.dataCoffee.length/12), Math.floor(this.dataCake.length/12)];
      this.productSelect;
    }
    get getTabNum(){
      return this.tabNum;
    }
    //tabNum값을 받아서 해당 탭의 상품을 출력
    printProduct(tabNum){
      let count = 0;
      let pageIndex = 1;
      let i = 0;
      while(i < this.menuCount[tabNum]){
        if(count==12){
          count=0;
          pageIndex++;
        }
        
        let sub = this.allProduct[tabNum][i].sub;
        (sub == undefined)&&(sub="");
        $(`#productPage${pageIndex}`).append(`
          <div class="cardProduct cardProducts">
            <div style="background: url('${this.allProduct[tabNum][i].url}') no-repeat center center/cover"></div>
            <p>
              ${this.allProduct[tabNum][i].name}
              <br>
              ${sub}
            </p>
            <p>₩ ${this.allProduct[tabNum][i].price.toLocaleString()}</p>
            <span class="crownBox"></span>
          </div>
        `); 
        count++;
        i++;
      }
      if(this.tabNum == 0) {
        $("#productPage1 .cardProduct:nth-child(5) .crownBox").css("background-image", "url('/build/img/icon_name_jisu.svg')");
      } else if(this.tabNum == 2) {
        $("#productPage1 .cardProduct:nth-child(1) .crownBox").css("background-image", "url('/build/img/icon_name_gyeongho.svg')");
      }
    }
    productEventControl(){
      $("#btnLeftProduct").on("click", ()=>{
        if(this.paginationArr[this.tabNum] && this.pagination != 0){
          $(".widthProductBox").css("transform", "translateX(0rem)");
          this.pagination--;
          this.arrowBtnControl();
        }
      });
      $("#btnRightProduct").on("click", ()=>{
        if(this.paginationArr[this.tabNum] && this.pagination != this.paginationArr[this.tabNum]){
          $(".widthProductBox").css("transform", "translateX(-96rem)");
          this.pagination++;
          this.arrowBtnControl();
        }
      });
      $(".mainTapTitleWrap").on("click", (e)=>{
        
        switch($(e.target).attr("id")){
          case "productTab1":
            this.tabNum = 0;
            $(".mainTapTitleWrap div").removeClass("mainTabActive");
            $(".mainTapTitleWrap>div div:nth-child(1)").addClass("mainTabActive");
            break;
          case "productTab2":
            this.tabNum = 1;
            $(".mainTapTitleWrap div").removeClass("mainTabActive");
            $(".mainTapTitleWrap>div div:nth-child(2)").addClass("mainTabActive");
            break;
          case "productTab3":
            this.tabNum = 2;
            $(".mainTapTitleWrap div").removeClass("mainTabActive");
            $(".mainTapTitleWrap>div div:nth-child(3)").addClass("mainTabActive");
            break;
        }
        $(".widthProductBox").children().children().remove();
        $(".widthProductBox").css("transform", "translateX(0rem)");
        this.pagination = 0;
        this.arrowBtnControl();
        this.printProduct(this.tabNum);
        this.paginationShow();
        this.productClick();
      });
    }
    paginationShow(){
      $(".paginationWrapProduct").children().remove();
      if(this.paginationArr[this.tabNum] == 0){
        $(".paginationWrapProduct").append("<div class='paginationActive'></div>");
        $(".paginationWrapProduct").css("justify-content", "center");
      }
      else{
        $(".paginationWrapProduct").css("justify-content", "space-around");
        let i = 0;
        while(i <= this.paginationArr[this.tabNum]){
          $(".paginationWrapProduct").append("<div></div>");
          i++;
        }
        $(".paginationWrapProduct").find("div:first-child").addClass("paginationActive");
      }
    }
    // btn && Pagination 컨트롤
    arrowBtnControl(){ 
      if(this.paginationArr[this.tabNum] == 0){
        $("#btnLeftProduct div").css({"background-image":"url('/build/img/grayLeft.png')"});
        $("#btnRightProduct div").css({"background-image":"url('/build/img/grayRight.png')"});
      }
      else{
        if(this.pagination == 0){
          $("#btnLeftProduct div").css({"background-image":"url('/build/img/grayLeft.png')"});
          $("#btnRightProduct div").css({"background-image":"url('/build/img/pinkRight.svg')"}); 
        }
        else if(this.pagination == this.paginationArr[this.tabNum]){
          $("#btnLeftProduct div").css({"background-image":"url('/build/img/pinkLeft.svg')"});
          $("#btnRightProduct div").css({"background-image":"url('/build/img/grayRight.png')"});   
        }
        else{
          $("#btnLeftProduct div").css({"background-image":"url('/build/img/pinkLeft.svg')"});
          $("#btnRightProduct div").css({"background-image":"url('/build/img/pinkRight.svg')"});  
        }
        
        this.paginationMove();
      }
    }
    paginationMove(){
      $(".paginationWrapProduct div").removeClass("paginationActive");
      $(`.paginationWrapProduct div:nth-child(${this.pagination+1})`).addClass("paginationActive");
    }
    productClick(){
      // 페이지를 구성하는 함수. 클래스 optionButton, optionExplain 사용
      function optionPageMake(productSelect){
        const{category} = productSelect; 
        switch(category){
          case "cake":{
            const {num, name, description, materials, url, price} = productSelect
            const optionButtonCake = new OptionButton($("#containerOptionCake"), "Cake");
            optionButtonCake.makePackageButton();
            optionButtonCake.makeSpoonButton(1);
            optionButtonCake.makeCandleButton();
            let materialsText = "";
            if(materials == null) {
              materialsText = "준비 중"
            } else {
              for(let i=0; i<materials.length; i++){
                if(materials[i] == null) {
                  materialsText += (i+1 != materials.length) ? ('준비 중, ') : ('준비 중');
                } else {
                  materialsText += (i+1 != materials.length) ? (materials[i] + ', ') : (materials[i]);
                }
              }
            }
            const optionInfoCake= new optionExplain(url, `${name}`, "￦ " + (price.toLocaleString()), description, materialsText);     
            optionInfoCake.optionExplainTop("containerTopInfoCake");
            optionInfoCake.optionExplainBottom("wrapOptionFooterCake");
            $("#pageOptionCake").css("display", "block");
            break;
          }
          case "coffee":{ 
            let {num, name, description, materials, kcal, caffeine, url, price} = productSelect;
            const optionButtonCoffee = new OptionButton($("#containerOptionCoffee"), "Coffee");
            optionButtonCoffee.makePackageButtonSimple();
            optionButtonCoffee.makeShotButton();
            optionButtonCoffee.makeSyrupButton();
            let materialsText = "";
            if(materials == null) {
              materialsText = "준비 중"
            } else {
              for(let i=0; i<materials.length; i++){
                if(materials[i] == null) {
                  materialsText += (i+1 != materials.length) ? ('준비 중, ') : ('준비 중');
                } else {
                  materialsText += (i+1 != materials.length) ? (materials[i] + ', ') : (materials[i]);
                }
              }
            }
            const optionInfoCoffee= new optionExplain(url, `${name}`, "￦ "+ (price.toLocaleString()), description, `${kcal}kcal | 카페인: ${caffeine} | 알레르기: ${materialsText}`);     
            optionInfoCoffee.optionExplainTop("containerTopInfoCoffee");
            optionInfoCoffee.optionExplainBottom("wrapOptionFooterCoffee"); 
            $("#pageOptionCoffee").css("display", "block");
            break;
          }
          case "icecream":{ 
            const {num, name, sub, description, kcal, url, price, unit, form} = productSelect;
            if(form == "conecup"){ 
                const optionButtonCup = new OptionButton($("#containerOptionCup"), "Cup");
                optionButtonCup.makeCupButton();
                optionButtonCup.makeSpoonButton(1);
                const optionInfoCup = new optionExplain(url, `${name}<br>${sub}`, "￦ "+(price.toLocaleString()), description, `${kcal}kcal`);
                optionInfoCup.optionExplainTop("containerTopInfoCup");
                optionInfoCup.optionExplainBottom("wrapOptionFooterCup");
                $("#pageOptionCup").css("display", "block");
            } else {
                const optionButtonIce = new OptionButton($("#containerOptionIce"), "Ice");
                optionButtonIce.makePackageButton();
                optionButtonIce.makeSpoonButton(unit);
                const optionInfoIce = new optionExplain(url, `${name}<br>${sub}`, "￦ "+(price.toLocaleString()), description, `${kcal}kcal`);
                optionInfoIce.optionExplainTop("containerTopInfoIce");
                optionInfoIce.optionExplainBottom("wrapOptionFooterIce");
                $("#pageOptionIce").css("display", "block");
            }
            break;
          }
        }
      }
      $(".cardProducts").each(function(i){
        $(this).on("click", (e)=>{
          
          product.productSelect = product.allProduct[product.tabNum][i];
          optionPageMake(product.productSelect);        
          $("#pageProduct").css("display", "none");
        });
      });
    }
    homeClick(){
      $("#imgHomeProduct").on("click", ()=>{
        location.reload();
      });
    }
  }
  
  const product = new Product(icecream, coffee, cake); 
  product.printProduct(product.tabNum);
  product.productEventControl();
  product.arrowBtnControl();
  product.paginationShow();
  product.productClick();
  product.homeClick();

  class CartProduct{
    constructor(){
      this.cartList = [];
      this.cartIndex = 0;
      this.cartPage = 0;
      this.cartPriceSum = 0;
      this.cartListCount = 0;
    }
    get getCartList(){
      return this.cartList;
    }
    // 메뉴 제이슨 정보, 선택한 맛 배열
    pushProduct(jsonValue, value){
      value.productJson = jsonValue;
      this.cartList.push(value);
    }
    printCart(){
      $("#areaProductCart").children().remove();
      this.cartIndex = 0;
      let i = 0;
      let target = 0;
      while(i<this.cartList.length){
        $("#areaProductCart").append(`
          <article class="containerProduct">
            <div class="btnProductClose" id="btnProductClose">
              <div></div>
            </div>
            <div class="productImg"></div>
            <p class="productTitle"></p>
            <p class="productDes"></p>
          </article>
        `);
        if(this.cartList[i] == null){
          $("#areaProductCart .containerProduct:last-child").remove();
          i++;
          continue;
        }
        switch(cartProduct.cartList[i].productJson["category"]){
          case "icecream":
            $(`#areaProductCart article:nth-child(${target+1}) div:nth-child(2)`).css("background", `url(${this.cartList[i].productJson.url}) no-repeat center center/cover`);
            $(`#areaProductCart article:nth-child(${target+1}) .productTitle`).html(`${this.cartList[i].productJson.name}<br>${this.cartList[i].productJson.sub}`);
            $(`#areaProductCart article:nth-child(${target+1}) .productDes`).text(this.cartList[i].productJson.description); 
            break;
          case "coffee":
            $(`#areaProductCart article:nth-child(${target+1}) div:nth-child(2)`).css("background", `url(${this.cartList[i].productJson.url}) no-repeat center center/cover`);
            $(`#areaProductCart article:nth-child(${target+1}) .productTitle`).html(`${this.cartList[i].productJson.name}`);
            $(`#areaProductCart article:nth-child(${target+1}) .productDes`).text(this.cartList[i].productJson.description); 
            break;
          case "cake":
            $(`#areaProductCart article:nth-child(${target+1}) div:nth-child(2)`).css("background", `url(${this.cartList[i].productJson.url}) no-repeat center center/cover`);
            $(`#areaProductCart article:nth-child(${target+1}) .productTitle`).html(`${this.cartList[i].productJson.name}`);
            $(`#areaProductCart article:nth-child(${target+1}) .productDes`).text(this.cartList[i].productJson.description); 
            break;
        }
        target++;
        i++;
      }
      this.closeButton();
      this.buttonCheck();
      this.valueCheck();
    }
    closeButton(){
      $(".btnProductClose").each(function(i){
        $(this).on("click", (e)=>{
          $(e.target).closest("article").remove();
          cartProduct.cartList.splice(i,1);
          
          cartProduct.valueCheck();
          if(cartProduct.getCartList.length > 0) {
            $(`#btnProductPay`).css({cursor: 'pointer', background: colorMainPink1, pointerEvents: 'all'});
            $(`#btnProductPay`).addClass('btnProductPayActive');
          } else {
            $(`#btnProductPay`).css({cursor: 'pointer', background: colorMainBlack3, pointerEvents: 'none'});
            $(`#btnProductPay`).removeClass('btnProductPayActive');
          }
        })
      });
    }
    // 장바구니 결제 금액 합계 표시 및 수량 체크
    valueCheck(){
      let sumPrice = 0;
      let countCart = 0
      let i = 0;
      while(i<this.cartList.length){
        if(this.cartList[i] == null){
          i++;
          continue;
        }
        countCart++;
        sumPrice += this.cartList[i].productJson["price"];
        i++;      
      }
      $("#btnProductPay>div:first-child").text(`₩${sumPrice.toLocaleString()}`);

      this.cartSumPrice = sumPrice;
      this.cartListCount = countCart;
      $("#countProduct").text(this.cartListCount);
    }
    buttonCheck(){
      this.cartPage = Math.floor(this.cartList.length / 3);
      if(this.cartList.length > 3){
        
        $("#btnBannerRight>div").css("background-image", "url('/build/img/pinkRight.svg')");
      }
      else{
        $("#btnBannerRight>div").css("background-image", "url('/build/img/grayRight.png')");
      }
    }
    buttonEventContol(){
      $("#btnBannerLeft").on("click", ()=>{
        if(this.cartIndex){
          let moveValue = parseInt($("#areaProductCart").css("left"));
          $("#areaProductCart").css("left", `${moveValue+1078}px`); 
          this.cartIndex--;
          if(this.cartIndex == 0){
            $("#btnBannerLeft>div").css("background-image", "url('/build/img/grayLeft.png')");  
          }
          $("#btnBannerRight>div").css("background-image", "url('/build/img/pinkRight.svg')");   
        }
      });
      $("#btnBannerRight").on("click", ()=>{
        if(this.cartIndex != this.cartPage && this.cartListCount > 3){
          let moveValue = parseInt($("#areaProductCart").css("left"));
          $("#areaProductCart").css("left", `${moveValue-1078}px`); 
          this.cartIndex++;
          if(this.cartIndex == this.cartPage){
            $("#btnBannerRight>div").css("background-image", "url('/build/img/grayRight.png')"); 
          }
          $("#btnBannerLeft>div").css("background-image", "url('/build/img/pinkLeft.svg')");  
        }
      });
      
    }
  }
  const cartProduct = new CartProduct();
  cartProduct.printCart();
  cartProduct.buttonEventContol();

  // 페이지 리셋해주는 함수
  function pageOptionReset(containerTopInfo, containerOption, wrapOptionFooter){
      $(`#${containerTopInfo}`).html("");
      $(`#${containerOption}`).html("");
      $(`#${wrapOptionFooter}`).html("");
  }

  // 다음 화면으로 넘어가는 함수, return 값은 옵션 
  function sendOption(containerTopInfo, idOptionCurrent, wrapOptionFooter){
    let outputOption;
    
    let i = 0;
    while(i<$(`#${idOptionCurrent}`).children().length){
        let optionTitle = $(`#${idOptionCurrent}`).children().eq(i).find("p").html();
        outputOption += optionTitle + ": ";
        let j = 0;
        while(j<$(`#${idOptionCurrent}`).children().eq(i).find("div").children().length){
            if($(`#${idOptionCurrent}`).children().eq(i).find("div").children().eq(j).find("p").css("color") == "rgb(251, 77, 141)"){
                optionContent = $(`#${idOptionCurrent}`).children().eq(i).find("div").children().eq(j).find("p").html();
                optionValue = $(`#${idOptionCurrent}`).children().eq(i).find("div").children().eq(j).find("button").siblings("p").html();
                optionContent.replace("undefined", " ");
                if(optionContent.includes("스푼") || optionContent.includes("초")){
                    if(optionContent.includes("스푼 없음")){
                        optionValue = "";
                    } else {
                        optionValue = optionValue + "개";
                    }    
                } else if(optionContent.includes("포장")){
                    if(optionContent.includes("포장 안함") || optionContent.includes("포장하기")){
                        optionValue = "";
                    } else{
                        optionValue = optionValue + "분";
                    }
                } else if(optionContent.includes("샷") || optionContent.includes("시럽")){
                    if(optionContent.includes("샷 추가 없음") ||optionContent.includes("시럽 추가 없음")){
                        optionValue = "";
                    } else{
                        optionValue = optionValue + "번";
                    }
                } else if(optionContent.includes("컵") || optionContent.includes("콘")){
                    optionValue = "";
                } else {
                    optionValue = optionValue;
                }
                outputOption += optionContent + "";   
                outputOption += optionValue + " | "; 
            }
            j++;
        }
        i++;
    }
    
    if(idOptionCurrent.includes("Cup") || idOptionCurrent.includes("Ice")){ 
        pageOptionReset(containerTopInfo, idOptionCurrent, wrapOptionFooter);
        $("#pageOptionCup").css("display", "none");
        $("#pageOptionIce").css("display", "none");
    } else {
        pageOptionReset(containerTopInfo, idOptionCurrent, wrapOptionFooter);
        $("#pageOptionCake").css("display", "none");
        $("#pageOptionCoffee").css("display", "none");
    }
    return outputOption.replace("undefined", " ");
  }

  let outputOptionReturn;
  const containerOptionBtnArray = ["containerOptionBtnCake", "containerOptionBtnIce", "containerOptionBtnCup","containerOptionBtnCoffee"];

  //이전 버튼 클릭했을 때 이벤트
  containerOptionBtnArray.forEach((value, index, array)=>{
    $(`#${value}`).find("#btnOptionPrev").click(function(){
      switch(value){
          case "containerOptionBtnCake":{
              pageOptionReset("containerTopInfoCake", "containerOptionCake", "wrapOptionFooterCake");      
              $("#pageOptionCake").css("display", "none");  
              break;
          }
          case "containerOptionBtnIce":{
              pageOptionReset("containerTopInfoIce", "containerOptionIce", "wrapOptionFooterIce");
              $("#pageOptionIce").css("display", "none");
              break;
          }
          case "containerOptionBtnCup":{
              pageOptionReset("containerTopInfoCup", "containerOptionCup", "wrapOptionFooterCup");       
              $("#pageOptionCup").css("display", "none");    
              break;
          }
          case "containerOptionBtnCoffee":{
              pageOptionReset("containerTopInfoCoffee", "containerOptionCoffee", "wrapOptionFooterCoffee");
              $("#pageOptionCoffee").css("display", "none");
              break;
          }
      }
      $("#pageProduct").css("display", "block");
    });
    //다음버튼 클릭했을 때 이벤트
    $(`#${value}`).find(`#btnOptionNext`).click(function(){    
      switch(value){
          case "containerOptionBtnCake":{ 
              outputOptionReturn = sendOption("containerTopInfoCake", "containerOptionCake", "wrapOptionFooterCake");      
              $("#pageProduct").css("display", "block");
              break;
          }
          case "containerOptionBtnIce":{ 
              outputOptionReturn = sendOption("containerTopInfoIce", "containerOptionIce", "wrapOptionFooterIce");      
              $("#pageFlavor").css("display", "block"); 
              flavorCreate();
              break;
          }
          case "containerOptionBtnCup":{ 
              outputOptionReturn = sendOption("containerTopInfoCup", "containerOptionCup", "wrapOptionFooterCup");      
              $("#pageFlavor").css("display", "block"); 
              flavorCreate();
              break;
          }
          case "containerOptionBtnCoffee":{ 
              outputOptionReturn = sendOption("containerTopInfoCoffee", "containerOptionCoffee", "wrapOptionFooterCoffee");      
              $("#pageProduct").css("display", "block");
              break;
          }
      }
      product.productSelect["optionJson"] = outputOptionReturn;
      if(value == "containerOptionBtnCake" || value == "containerOptionBtnCoffee"){
        cartProduct.pushProduct(product.productSelect, []);
        cartProduct.printCart();
        $(".widthFlavorBox").css("transform", "translateX(0rem)");
        $("#btnBannerLeft>div").css("background-image", "url('/build/img/grayLeft.png')");  
        $("#areaProductCart").css("left", `4rem`); 
        if(cartProduct.getCartList.length > 0) {
          $(`#btnProductPay`).css({cursor: 'pointer', background: colorMainPink1, pointerEvents: 'all'});
          $(`#btnProductPay`).addClass('btnProductPayActive');
        } else {
          $(`#btnProductPay`).css({cursor: 'pointer', background: colorMainBlack3, pointerEvents: 'none'});
          $(`#btnProductPay`).removeClass('btnProductPayActive');
        }
      }
      else{ 
        
      }
    });
  })


  function flavorCreate(){
    class FlavorPage{
      constructor(){
        this.dataFlavor = JSON.parse(JSON.stringify(flavor));
        this.pagination = 0;
        this.paginationCount = Math.floor(this.dataFlavor.length/12);
        this.flavorSelect;
        this.flavorSelectArr = [];
        this.motionBoxList = []; 
      } 
      // 상품 모션 메소드
      motionEvent(target, index){
        
        
        document.querySelectorAll(".motionBox")[index].style.backgroundImage=`url(${flavorPage.flavorSelectArr[index].url})`;
        document.querySelectorAll(".motionBox")[index].style.left = ($(target).offset().left-$(`#pageFlavor`).offset().left) + "px";
        document.querySelectorAll(".motionBox")[index].style.top = $(target).offset().top + "px";
        document.querySelectorAll(".motionBox")[index].style.display = "block";
        document.querySelectorAll(".motionBox")[index].style.transition = "all 0.4s ease-out";
        document.querySelectorAll(".motionBox")[index].style.left = ($(target).offset().left-$(`#pageFlavor`).offset().left+40) + "px";
        document.querySelectorAll(".motionBox")[index].style.top = $(target).offset().top + "px";
        document.querySelectorAll(".motionBox")[index].style.width ="88px";
        document.querySelectorAll(".motionBox")[index].style.height ="88px"; 
        
        setTimeout(()=>{
          document.querySelectorAll(".motionBox")[index].style.left = ($(`.mainSelectFlavor .cardSelectFlavor:nth-child(${index +1})`).offset().left-$(`#pageFlavor`).offset().left+40) + "px"; 
          document.querySelectorAll(".motionBox")[index].style.top = ($(`.mainSelectFlavor .cardSelectFlavor:nth-child(${index +1})`).offset().top+53) + "px"; 
          setTimeout(()=>{
            document.querySelectorAll(".motionBox")[index].style.backgroundImage = `url('none'))`;
            setTimeout(()=>{
              document.querySelectorAll(".motionBox")[index].style.transition = "all 0s ease-out";
              document.querySelectorAll(".motionBox")[index].style.display = "none";
              document.querySelectorAll(".motionBox")[index].style.left = ($(target).offset().left-$(`#pageFlavor`).offset().left+40) + "px"; 
              document.querySelectorAll(".motionBox")[index].style.left = ($(target).offset().left-$(`#pageFlavor`).offset().left+40) + "px";
              document.querySelectorAll(".motionBox")[index].style.top = $(target).offset().top + "px"; 
            }, 10);
          }, 400);
        }, 10);
      }
      printFlavor(){
        let count = 0;
        let pageIndex = 1;
        let i = 0;
        while(i < this.dataFlavor.length){
          if(count % 12 == 0 && count){
            pageIndex++;
          }
          $(`#flavorPage${pageIndex}`).append(`
            <div class="cardFlavors" id="cardFlavors">
              <div style="background: url(${this.dataFlavor[count].url}) no-repeat center center/cover "></div>
              <p>${this.dataFlavor[count].name}</p>
              <span></span>
              <span class="crownBox"></span>
            </div>
          `);
          count++;
          i++;
        }
      }
      flavorEventControl(){
        $("#flavorPopupArea article div:last-child p:first-child").on("click", ()=>{
          $("#flavorPopupArea").css("display", "none");
        });
        $("#flavorPopupArea article div:last-child p:last-child").on("click", ()=>{
          $("#flavorPopupArea").css("display", "none"); 
          $(".widthFlavorBox").css("transform", "translateX(0rem)");
          $("#pageFlavor").css("display", "none");
          switch(product.productSelect.form){
            case "conecup":
              $("#pageProduct").css("display", "block");
              break;
            case "various":
              $("#pageProduct").css("display", "block");
              break;
          }
        });
        $("#btnFlavorBack").on("click", ()=>{
          $("#flavorPopupArea").css("display", "block");
        });
        $("#btnLeftFlavor").on("click", ()=>{
          if(this.pagination != 0){
            switch(this.pagination){
              case 1:
                $(".widthFlavorBox").css("transform", "translateX(0rem)");
                break;
              case 2:
                $(".widthFlavorBox").css("transform", "translateX(-96.5rem)");
                break;
            }
            this.pagination--;
            this.arrowBtnControl();
          }
        });
        $("#btnRightFlavor").on("click", ()=>{
          if(this.pagination != this.paginationCount){
            switch(this.pagination){
              case 0:
                $(".widthFlavorBox").css("transform", "translateX(-96.5rem)");
                break;
              case 1:
                $(".widthFlavorBox").css("transform", "translateX(-193rem)");
                break;
            }
            this.pagination++;
            this.arrowBtnControl();
          }
        });
        $(".widthFlavorBox").children().children().remove();
        $(".widthFlaborBox").css("transform", "translateX(0rem)");
        this.pagination = 0;
        this.arrowBtnControl();
        this.printFlavor();
        this.paginationShow();
      }
      
      paginationShow(){
        $(".paginationWrapFlavor").children().remove();
        $(".paginationWrapFlavor").css("justify-content", "space-around");
        let i = 0;
        while(i <= this.paginationCount){
          $(".paginationWrapFlavor").append("<div></div>");
          i++;
        }
        $(".paginationWrapFlavor").find("div:first-child").addClass("paginationActive");
      }
      
      //btn && pagination 컨트롤
      arrowBtnControl(){ 
        if(this.pagination == 0){
          
          $("#btnLeftFlavor div").css({"background-image":"url('/build/img/grayLeft.png')"});
          $("#btnRightFlavor div").css({"background-image":"url('/build/img/pinkRight.svg')"}); 
        }
        else if(this.pagination == this.paginationCount){
          
          $("#btnLeftFlavor div").css({"background-image":"url('/build/img/pinkLeft.svg')"});
          $("#btnRightFlavor div").css({"background-image":"url('/build/img/grayRight.png')"});   
          }
        else{
          
          $("#btnLeftFlavor div").css({"background-image":"url('/build/img/pinkLeft.svg')"});
          $("#btnRightFlavor div").css({"background-image":"url('/build/img/pinkRight.svg')"});  
        }
        this.paginationMove();
      }
      paginationMove(){
        $(".paginationWrapFlavor div").removeClass("paginationActive");
        $(`.paginationWrapFlavor div:nth-child(${this.pagination+1})`).addClass("paginationActive");
      }
      flavorClick(){
        $(".cardFlavors").each(function(i){
          $(this).on("click", (e)=>{
            
            flavorPage.flavorSelect = flavorPage.dataFlavor[i];
            let j = 0;
            while(j < product.productSelect.unit){
              if(Object.keys(flavorPage.flavorSelectArr[j]).length === 0){
                flavorPage.flavorSelectArr[j]=flavorPage.flavorSelect;
                flavorPage.motionEvent(e.target, j);
                break;
              }
              j++;
            }
            flavorPage.flavorImgChange();
            flavorPage.bannerChange();
          });
        });
      }
      bannerChange(){
        (this.flavorSelect.materials == null)&&(this.flavorSelect.materials = "준비 중");
        let materialsText = "";
        for(let i=0; i<this.flavorSelect.materials.length; i++){
          materialsText += (i+1 != this.flavorSelect.materials.length) ? (this.flavorSelect.materials[i] + ', ') : (this.flavorSelect.materials[i]);
        }
        $("#wrapFlavorFooter article p:nth-child(1)").html(`${this.flavorSelect.name}`);
        $("#wrapFlavorFooter article p:nth-child(2)").html(`${this.flavorSelect.kcal+"kcal"} | 알레르기: ${materialsText}`);
        $("#wrapFlavorFooter article p:nth-child(3)").html(`${this.flavorSelect.description}`);
        $("#wrapFlavorFooter article div:first-child").css("background-image",`url(${this.flavorSelect.url})`);
      }
      flavorImgChange(){
        let i = 0;
        while(i < product.productSelect.unit){
          if(Object.keys(this.flavorSelectArr[i]).length != 0){
            
            
            
            $(`.cardSelectFlavor:nth-child(${i+1}) p`).text(this.flavorSelectArr[i].name);
            let temp = i;
            setTimeout(()=>{
              $(`.cardSelectFlavor:nth-child(${temp+1})>div`).css("background-image", `url(${this.flavorSelectArr[temp].url})`);
            }, 400);
          }
          i++;
        }
        this.buttonCheck();
      }
      buttonCheck(){
        let i = 0;
        let count = 0;
        while(i < product.productSelect.unit){
          if(Object.keys(this.flavorSelectArr[i]).length != 0){
            count++;
          }
          i++;
        } 
        
        
        
        if(count == product.productSelect.unit){
          $("#btnFlavorNext").css("background-color", "#FB4D8D").css("pointer-events", "all");
          $("#btnFlavorNext").addClass("flavorNextActive");
        }
        else{
          $("#btnFlavorNext").css("background-color", "#d6d5d5").css("pointer-events", "none");
          $("#btnFlavorNext").removeClass("flavorNextActive");
        }
      }
      flavorAreaCreate(){
        $(".mainSelectFlavor").children().remove();
        let i = 0;
        while(i<product.productSelect.unit){
          $(".mainSelectFlavor").append(`
            <div class="cardSelectFlavor">
              <div></div>
              <span>
                <div></div>
              </span>
              <p></p>
            </div>
          `);
          this.flavorSelectArr.push({});
          $("#pageFlavor").append("<div class='motionBox'></div>");
          this.motionBoxList.push($(".motionBox:last-of-type"));
          let indexTemp = i;
          $(`.cardSelectFlavor:nth-child(${i+1}) span`).on("click", (e)=>{
            $(e.target).closest("div").find("span").prev().css("background-image", "url('/build/img/icon_ice.svg')");
            $(e.target).closest("div").find("p").text("");
            this.flavorSelectArr[indexTemp] = {};
            this.buttonCheck();
            document.querySelectorAll(".motionBox")[indexTemp].style.backgroundImage = "url('../css/img/icon_ice.svg')";
          });
          i++;
        }
      }
      // 신메뉴, 인기순위, 신상품 스티커 생성
      crownShow(){
        $("#flavorPage1 .cardFlavors:nth-child(1) .crownBox").css("background-image", "url('/build/img/new.png')");
        $("#flavorPage1 .cardFlavors:nth-child(2) .crownBox").css("background-image", "url('/build/img/crown1.png')");
        $("#flavorPage1 .cardFlavors:nth-child(3) .crownBox").css("background-image", "url('/build/img/crown2.png')");
        $("#flavorPage1 .cardFlavors:nth-child(4) .crownBox").css("background-image", "url('/build/img/crown3.png')");
        $("#flavorPage1 .cardFlavors:nth-child(5) .crownBox").css("background-image", "url('/build/img/icon_name_pureum.svg')");
        $("#flavorPage1 .cardFlavors:nth-child(6) .crownBox").css("background-image", "url('/build/img/icon_name_eunji.svg')");
        $("#flavorPage1 .cardFlavors:nth-child(7) .crownBox").css("background-image", "url('/build/img/icon_name_junyoung.svg')");
      }
      getFlavorList(){
        $("#btnFlavorNext").on("click", ()=>{
          
          cartProduct.pushProduct(product.productSelect, this.flavorSelectArr);
          cartProduct.printCart();
          $("#btnBannerLeft>div").css("background-image", "url('/build/img/grayLeft.png')");  
          $(".widthFlavorBox").css("transform", "translateX(0rem)");
          $("#areaProductCart").css("left", `4rem`);
          $("#pageFlavor").css("display", "none");
          $("#pageProduct").css("display", "block");
          if(cartProduct.getCartList.length > 0) {
            $(`#btnProductPay`).css({cursor: 'pointer', background: colorMainPink1, pointerEvents: 'all'});
            $(`#btnProductPay`).addClass('btnProductPayActive');
          } else {
            $(`#btnProductPay`).css({cursor: 'pointer', background: colorMainBlack3, pointerEvents: 'none'});
            $(`#btnProductPay`).removeClass('btnProductPayActive');
          }
          this.resetData();
          $("#btnFlavorNext").off("click"); 
          delete this;
        });
      }
      resetData(){
        this.flavorSelectArr = [];
      }
    }
    const flavorPage = new FlavorPage();
    
    flavorPage.resetData();
    flavorPage.printFlavor();
    flavorPage.flavorEventControl();
    flavorPage.arrowBtnControl();
    flavorPage.paginationShow();
    flavorPage.flavorClick();
    flavorPage.flavorAreaCreate();
    flavorPage.crownShow();
    flavorPage.getFlavorList();
    flavorPage.buttonCheck();
  }

  let cartProductArr = [];
  let resultProductInfoArr = [];
  let cartTotalPrice = 0;
  let productIndex = 0;
  let cartList = [];
  $(`#btnProductPay`).on('click', function(e){
    cartList = cartProduct.cartList;
    makeCartProductList();
    gsap.set(pageProduct, {display: 'none'});
    gsap.set(pageCart, {display: 'flex'})
    $("#cartListArea .xi-minus, #cartListArea .xi-plus").on("click",function(){ 
      const productIndex = $(this).closest("article").index();
      switch($(this).attr("class")){ 
        case "xi-plus":
          cartProductArr[productIndex].plusProductAmount($(this));
          break;
        case "xi-minus":
          cartProductArr[productIndex].minusProductAmount($(this));
          break;
      }
      cartTotalPrice = 0;
      cartProductArr.forEach(productObj=>{ 
        cartTotalPrice += productObj.calcTotalPrice();
      });
      $("#cartTotalPrice").text(cartTotalPrice.toLocaleString());
    });

    $("#cartListArea .xi-close").on("click",function(){ 
      if($("#cartListArea").children().length!=1){
        productIndex = $(this).closest("article").index();
        $("#cartPopupArea").css("display","flex"); 
      }
    });

    $("#btnCartDown").on("click",()=>{
      $("#cartListArea").scrollTop($("#cartListArea")[0].scrollHeight);
    });

    $("#cartPopupArea>article>div:last-child>p").on("click", removeCartProduct); 

    $("#btnCartPay").on("click",()=>{ 
      resultProductInfoArr = []; 
      cartProductArr.forEach(productInfo=>{
        resultProductInfoArr.push(productInfo.makeProductInfo());
      });
      gsap.set($(`#pageCart`)[0], { display: 'none' });
      gsap.set($(`#pageOptionPoint`)[0], { display: 'block' });
    });
    $("#imgHomeCart").on("click",()=>{
      location.reload();
    });
  })

  // 제품 정보를 담은 배열을 통해 객체를 생성하고 화면에 상자를 뿌림
  const makeCartProductList = ()=>{
    $("#cartListArea").empty();
    cartTotalPrice = 0;
    cartList.forEach((productList,productIndex) => {
      const flavorArr = [];
      if(productList.productJson.category=="icecream"){ 
        const {url, name, sub, optionJson, price} = productList.productJson;
        productList.forEach(flavorList =>{
          flavorArr.push(flavorList.name);
        });
        cartProductArr.push(new ShopCartProduct(url, name, sub, optionJson, flavorArr, price, productIndex, "icecream"));
      }
      else if(productList.productJson.category=="coffee"){
        const {url, name, optionJson, price} = productList.productJson;
        cartProductArr.push(new ShopCartProduct(url, name, "", optionJson, [], price, productIndex, "coffee"));
      }
      else if(productList.productJson.category=="cake"){
        const {url, name, materials, optionJson, price} = productList.productJson;
        cartProductArr.push(new ShopCartProduct(url, name, "", optionJson, materials, price, productIndex, "cake"));
      }
      cartProductArr[productIndex].makeBox();
      cartTotalPrice += cartProductArr[productIndex].calcTotalPrice();
    });
    checkCartBox();
    $("#cartTotalPrice").text(cartTotalPrice.toLocaleString()); 
  }

  const checkCartBox = () =>{ 
    if($("#cartListArea").children().length>4){ 
      $("#btnCartDown").css("display","flex");
    }
    else {
      $("#btnCartDown").css("display","none");
    }
  }

  // 장바구니 아이템 삭제 팝업 예, 아니오 버튼을 눌렀을 때 실행되는 함수
  function removeCartProduct(){ 
    switch($(this).index()){ 
        case 0:
          $("#cartPopupArea").css("display","none");
          break;
        case 1:
          $("#cartListArea>article").eq(productIndex).remove(); 
          cartProductArr.splice(productIndex,1);
          cartTotalPrice = 0;
          cartProductArr.forEach(productObj=>{
            cartTotalPrice += productObj.calcTotalPrice();
          });
          $("#cartTotalPrice").text(cartTotalPrice.toLocaleString());
          checkCartBox(); 
          $("#cartPopupArea").css("display","none");
          break;
    }
  }

  // 홈화면으로 돌아갈 시 모든 내용을 초기화시켜주는 함수(정보 담은 배열(cartInfoArr 제외)
  const resetCartBoxes = ()=>{ 
    cartProductArr = [];
    $("#cartListArea").empty();
    $("#cartTotalPrice").text(0);
    cartTotalPrice = 0;
  }
 
  // 장바구니에 담기는 상품의 정보를 담는 클래스
  class ShopCartProduct {
    constructor(cartImgPath, cartProductName, cartProductSub, cartProductOption, cartProductFlavor, cartProductPrice, cartProductIndex, cartCategory){
      this.cartImgPath = cartImgPath; 
      this.cartProductName = cartProductName; 
      this.cartProductSub = cartProductSub;
      this.cartProductOption = cartProductFlavor=="" ? cartProductOption:","+cartProductOption; 
      this.cartProductFlavor = cartProductFlavor.join(", "); 
      this.cartProductAmount = 1;
      this.cartProductPrice = cartProductPrice; 
      this.cartProductIndex = cartProductIndex;
      this.cartCategory = cartCategory;
    }

    // 받은 정보를 토대로 장바구니에 담길 상품 카드를 만들어 #cartListArea에 넣어주는 메소드
    makeBox () { 
      const cartProductCard = `
      <article class="cartProductContainer">
        <div>
          <div id="number${this.cartProductIndex}"></div>
          <div>${this.cartProductName+(this.cartProductSub==""? "":"<br>"+this.cartProductSub)}</div>
          <div>
            <div><i class="xi-minus cartNoneActive"></i></div>
            <div>${this.cartProductAmount}</div>
            <div><i class="xi-plus"></i></div>
          </div>
          <div>
            <div> 
              <p>₩</p>
              <p class="cartProductPrice">${this.cartProductPrice.toLocaleString()}</p>
            </div>
          </div>
          <div><i class="xi-close"></i></div>
        </div>
        <div>
          <p>${this.cartProductFlavor+this.cartProductOption}</p>
        </div>
      </article>
      `
      $("#cartListArea").append(cartProductCard);
      $(`#number${this.cartProductIndex}`).css("background-image",`url("${this.cartImgPath}")`);
    }

    // 상품의 plus 버튼을 누를 경우 수량을 증가시키고, 증가시킨 수량만큼 금액을 더해주는 메소드
    plusProductAmount(plusBtn){ 
      this.cartProductAmount++;
      plusBtn.parent().prev().text(this.cartProductAmount);
      switch(plusBtn.parent().prev().text()){ 
        case "2":
          plusBtn.parent().prev().prev().find("i").removeClass("cartNoneActive"); 
          break;
        case "99":
          plusBtn.addClass("cartNoneActive");
          break;
      }
      plusBtn.closest("article").find(".cartProductPrice").text((this.calcTotalPrice()).toLocaleString()); 
    }

    minusProductAmount(minusBtn){ 
      this.cartProductAmount--;
      minusBtn.parent().next().text(this.cartProductAmount);
      switch(minusBtn.parent().next().text()){
        case "1":
          minusBtn.addClass("cartNoneActive");
          break;
        case "98":
          minusBtn.parent().next().next().find("i").removeClass("cartNoneActive");
          break;
      }
      minusBtn.closest("article").find(".cartProductPrice").text((this.calcTotalPrice()).toLocaleString());
    }
 
    // 각 상품의 총액을 리턴해주는 메소드
    calcTotalPrice(){
      return this.cartProductAmount*this.cartProductPrice;
    }

    // 각 상품의 최종 정보를 리턴해주는 메소드
    makeProductInfo(){ 
      const productInfo = {productName:this.cartProductName, productAmount:this.cartProductAmount, productPrice:this.calcTotalPrice(), productCategory: this.cartCategory};
      return productInfo;
    }
  }

  class PointPage{
    constructor(){
      this.keyPointType = 0;
      this.countMonthly = 1;
      this.clickEventControl();
    }
    get getKeyPointType(){
      return this.keyPointType;
    }
    get getCountMonthly(){
      return this.countMonthly;
    }
    clickEventControl(){
      $("#btnMonthly span").each(function(i){
        $(this).on("click", (e)=>{
          $("#btnMonthly span").removeClass("monthlySelect");
          $(e.target).addClass("monthlySelect");
          switch(i){
            case 0:
              pointPage.countMonthly = 1;
              break;
            case 1:
              pointPage.countMonthly = 3;
              break;
            case 2:
              pointPage.countMonthly = 5;
              break;
          }
        });
      });
      $("#selectPoint span").each(function(i){
        $(this).on("click", (e)=>{
          $("#selectPoint span").removeClass("pointCheck");
          $(e.target).addClass("pointCheck");
          $(`#selectPoint span:nth-child(1) div`).css("background-image", "url('/build/img/iconInnerSave.svg')");
          $(`#selectPoint span:nth-child(2) div`).css("background-image", "url('/build/img/iconInnerUse.svg')");
          switch(i){
            case 0:
              if(pointPage.keyPointType == 1){
                $(`#selectPoint span:nth-child(1) div`).css("background-image", "url('/build/img/iconInnerSave.svg')"); 
                pointPage.keyPointType = 0;
                $("#selectPoint span").removeClass("pointCheck");
                break;
              }
              $(`#selectPoint span:nth-child(${i+1}) div`).css("background-image", "url('/build/img/iconInnerSavePink.svg')");
              pointPage.keyPointType = 1;
              break;
            case 1:
              if(pointPage.keyPointType == 2){
                $(`#selectPoint span:nth-child(2) div`).css("background-image", "url('/build/img/iconInnerUse.svg')"); 
                $("#selectPoint span").removeClass("pointCheck");
                pointPage.keyPointType = 0;
                break;
              }
              $(`#selectPoint span:nth-child(${i+1}) div`).css("background-image", "url('/build/img/iconInnerUsePink.svg')");
              pointPage.keyPointType = 2;
              break;
          }
        });
      }); 
      $(`#btnPointOptionBack`).on('click', function(e){
        gsap.set($(`#pageCart`)[0], { display: 'flex' });
        gsap.set($(`#pageOptionPoint`)[0], { display: 'none' });
      })
    }
  }
  const pointPage = new PointPage();

  class KioskMember {
    constructor(_number){
      this.id = 0; 
      this.number = _number;
      this.point = 0; 
      this.savePoint = 0; 
      this.usePoint = 0; 
      this.payment = 0; 
      this.lastPayment = 0;
      this.monthly = 1; 
      this.time = ''; 
    }
    //---------- GETTER -------------//
    get getId(){
      return this.id;
    }
    get getNumber(){
      return this.number;
    }
    get getPoint(){
      return this.point;
    }
    get getSavePoint(){
      return this.savePoint;
    }
    get getUsePoint(){
      return this.usePoint;
    }
    get getPayment(){
      return this.payment;
    }
    get getLastPayment(){
      return this.lastPayment;
    }
    get getMonthly(){
      return this.monthly;
    }
    get getTime(){
      return this.time;
    }
    //---------- SETTER -------------//
    set setId(_value){
      this.id = _value;
    }
    set setNumber(_value){
      this.number = _value;
    }
    set setPoint(_value){
      this.point = _value;
    }
    set setSavePoint(_value){
      this.savePoint = _value;
    }
    set setUsePoint(_value){
      this.usePoint = _value;
    }
    set setPayment(_value){
      this.payment = _value;
    }
    set setLastPayment(_value){
      this.lastPayment = _value;
    }
    set setMonthly(_value){
      this.monthly = _value;
    }
    set setTime(_value){
      this.time = _value;
    }
  }
  memberInfo = new KioskMember('');
  //----------------- PAGE Elements ----------------------//
  const pageProduct = document.querySelector(`#pageProduct`);
  const pageOptionCup = document.querySelector(`#pageOptionCup`);
  const pageOptionIce = document.querySelector(`#pageOptionIce`);
  const pageOptionCake = document.querySelector(`#pageOptionCake`);
  const pageOptionCoffee = document.querySelector(`#pageOptionCoffee`);
  const pageFlavor = document.querySelector(`#pageFlavor`);
  const pageInputNum = document.querySelector(`#pageInputNum`);
  const pagePointView = document.querySelector(`#pagePointView`);
  const pageUsePoint = document.querySelector(`#pageUsePoint`);
  const pageFinalCost = document.querySelector(`#pageFinalCost`);
  const pageCard = document.querySelector(`#pageCard`);
  const pageFinish = document.querySelector(`#pageFinish`);
  const pageRecipt = document.querySelector(`#pageRecipt`);
  const cardPopupArea = document.querySelector(`#cardPopupArea`);
  const printAreaRecipt = document.querySelector(`#printAreaRecipt`);
  //----------------- 결제하기 화면 Elements ----------------------//
  const btnPointOptionBack = document.querySelector(`#btnPointOptionBack`);
  const btnPointOptionNext = document.querySelector(`#btnPointOptionNext`);
  //----------------- 회원번호 입력 화면 Elements ----------------------//
  const inputMemIN = document.querySelector(`#inputMemIN>p`);
  const btnKeypadIN = $(`#btnKeypadIN>div`);
  const btnBackIN = document.querySelector(`#btnBackIN`);
  const btnNextIN = document.querySelector(`#btnNextIN`);
  //----------------- 포인트 적립 화면 Elements ----------------------//
  const btnNextPV = document.querySelector(`#btnNextPV`);
  const savePointPV1 = document.querySelector(`#savePointPV1`);
  const savePointPV2 = document.querySelector(`#savePointPV2`);
  //----------------- 포인트 사용 화면 Elements ----------------------//
  const currentPointUP = document.querySelector(`#currentPointUP`);
  const usePointUP = document.querySelector(`#usePointUP`);
  const btnKeypadUP = $(`#btnKeypadUP>div`);
  const btnBackUP = document.querySelector(`#btnBackUP`);
  const btnNextUP = document.querySelector(`#btnNextUP`);
  //----------------- 포인트 확인 화면 Elements ----------------------//
  const totalCostFC = document.querySelector(`#totalCostFC`);
  const usePointFC = document.querySelector(`#usePointFC`);
  const savePointFC = document.querySelector(`#savePointFC`);
  const lastCostFC1 = document.querySelector(`#lastCostFC1`);
  const lastCostFC2 = document.querySelector(`#lastCostFC2`);
  const btnBackFC = document.querySelector(`#btnBackFC`);
  const btnNextFC = document.querySelector(`#btnNextFC`);
  //----------------- 카드 결제 화면 Elements ----------------------//
  const btnCanclePC = document.querySelector(`#btnCanclePC`);
  const btnNextPC = document.querySelector(`#btnNextPC`);
  //----------------- 결제 완료 화면 Elements ----------------------//
  const pageFinishOrder1 = document.querySelector(`#pageFinishOrder1`);
  const pageFinishOrder2 = document.querySelector(`#pageFinishOrder2`);
  const btnPrintYes = document.querySelector(`#btnPrintYes`);
  const btnPrintNo = document.querySelector(`#btnPrintNo`);
  //----------------- 영수증 화면 Elements ----------------------//
  const printRecipt = document.querySelector(`#printRecipt`);
  const closeRecipt = document.querySelector(`#closeRecipt`);
  const orderRecipt = document.querySelector(`#orderRecipt`);
  const timeRecipt = document.querySelector(`#timeRecipt`);
  const listRecipt = document.querySelector(`#listRecipt`);
  const realPriceRecipt = document.querySelector(`#realPriceRecipt`);
  const taxPriceRecipt = document.querySelector(`#taxPriceRecipt`);
  const totalPriceRecipt = document.querySelector(`#totalPriceRecipt`);
  const totalPaymentRecipt = document.querySelector(`#totalPaymentRecipt`);
  const paymentPriceRecipt = document.querySelector(`#paymentPriceRecipt`);
  const usePointRecipt = document.querySelector(`#usePointRecipt`);
  const lastPaymentRecipt = document.querySelector(`#lastPaymentRecipt`);
  const memberRecipt = document.querySelector(`#memberRecipt`);
  const lastPointRecipt = document.querySelector(`#lastPointRecipt`);
  //----------------- 카드 결제 팝업 화면 Elements ----------------------//
  const cardPopupNo = document.querySelector(`#cardPopupArea>article>div:nth-child(2)>p:nth-child(1)`);
  const cardPopupYes = document.querySelector(`#cardPopupArea>article>div:nth-child(2)>p:nth-child(2)`);
  //----------------- DB 값 Elements ----------------------//
  const hiddenId = document.querySelector(`#hiddenId`);
  const hiddenNumber = document.querySelector(`#hiddenNumber`);
  const hiddenPoint = document.querySelector(`#hiddenPoint`);
  const hiddenKey = document.querySelector(`#hiddenKey`);
  const hiddenDate = document.querySelector(`#hiddenDate`);
  const hiddenCount = document.querySelector(`#hiddenCount`);
  const hiddenKeyCount = document.querySelector(`#hiddenKeyCount`);
  const hiddenDay = document.querySelector(`#hiddenDay`);
  const hiddenBtn = document.querySelector(`#hiddenBtn`);
  let checkNumberJSON = 0; 
  let checkCountJSON = 1;
  let checkDateJSON = "";
  memberInfo.setTime = hiddenDay.value;

  /** @type {Animation} 화면 UP & DOWN용도 GSAP Animation */
  const nextGsap = gsap.timeline({defaults: {duration: 1, ease: "Power4.easeOut"}})
  let pageInputSampleKey = 0;
  let pageUseSampleKey = 0;

  // 문자형(금액) 숫자 -> 정수로 변환 함수
  let toNumber = (element) => {
    return Number(element.innerHTML.replaceAll(',', ''))
  }

  // 회원번호 입력 화면 함수 
  let pageInputNumFunc = () => {
    $(btnPointOptionNext).on('click', function(event){
      memberInfo.setMonthly = pointPage.getCountMonthly; 
      memberInfo.setPayment = cartTotalPrice;
      if(pointPage.getKeyPointType == 0){
        gsap.to(pageCard, {y: 0, duration: 1, ease: "Power4.easeOut"});
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
          if(this.readyState == 4 && this.status == 200) {
            let memberList = JSON.parse(this.responseText);
            memberList.forEach((v,i,a)=>{
              if(v.number == memberInfo.getNumber){
                memberInfo.setId = v.id;
                checkNumberJSON = 1;
              }
            })
          }
        };
        xmlhttp.open("GET", "./src/memberList.json", false);
        xmlhttp.send();
        memberInfo.setLastPayment = memberInfo.getPayment - memberInfo.getUsePoint;
        memberRecipt.innerHTML = "비회원";
        pageCardFunc()
      } else {;
        gsap.to(pageInputNum, {y: 0, duration: 1, ease: "Power4.easeOut"});
        memberRecipt.innerHTML = "010********";
      }
    });
    //- 회원번호 키패드 입력시 입력 & 삭제 구현 부분 ------------------------//
    $(btnKeypadIN).each(function(index){
      this.addEventListener('click', function(event){
        if(index == 9){
          inputMemIN.innerHTML = "";
          $(`#inputMemIN>p:nth-child(2)`).css({display: 'block'});
        } else if(index == 11){
          inputMemIN.innerHTML = (inputMemIN.innerHTML).slice(0, -1);
        } else {
          if(inputMemIN.innerHTML.length < 11) inputMemIN.innerHTML += $(this).find('p').html();
        }
        if(inputMemIN.innerHTML.length < 11) {
          $(btnNextIN).css({cursor: 'not-allowed', background: colorMainBlack3});
          $(btnNextIN).removeClass('btnNextIN');
          $(btnNextIN).off('click');
          pageInputSampleKey = 0;
        } else {
          $(btnNextIN).css({cursor: 'pointer', background: colorMainPink1});
          $(btnNextIN).addClass('btnNextIN');
          if(pageInputSampleKey == 0){  
            btnNextINFunc();
            pageInputSampleKey = 1;
          } 
        }
        if(inputMemIN.innerHTML.length != 0) {
          $(`#inputMemIN>p:nth-child(2)`).css({display: 'none'});
        } else {
          $(`#inputMemIN>p:nth-child(2)`).css({display: 'block'});
        }
      })
    });
    //- 이전 버튼 클릭 시 화면 내리기 ------------------------//
    $(btnBackIN).on('click', function(event){
      gsap.to(pageInputNum, {y: '192rem', duration: 0.6});
      pageInputSampleKey = 0;
      inputMemIN.innerHTML = "";
      $(`#inputMemIN>p:nth-child(2)`).css({display: 'block'});
      $(btnNextIN).css({cursor: 'not-allowed', background: colorMainBlack3});
      $(btnNextIN).removeClass('btnNextIN');
    })
    //- 다음 버튼 클릭 시 키에 맞는 화면 띄우기 ------------------------//
    function btnNextINFunc(){
      $(btnNextIN).on('click', function(event){
        memberInfo.setNumber = inputMemIN.innerHTML;
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200) {
              let memberList = JSON.parse(this.responseText);
              memberList.forEach((v,i,a)=>{
                if(v.number == memberInfo.getNumber){
                  memberInfo.setPoint = v.point;
                  memberInfo.setId = v.id;
                  checkNumberJSON = 1;
                }
              })
              if(checkNumberJSON != 1){
                memberInfo.setPoint = 1000;
              }
            }
        };
        xmlhttp.open("GET", "./src/memberList.json", false);
        xmlhttp.send();
        switch(pointPage.getKeyPointType){
          case 1: 
            nextGsap.to(pageInputNum, {y: '192rem'})
            .to(pagePointView, {y: 0, delay: -0.3});
            pagePointViewFunc();
            break;
          case 2:
            nextGsap.to(pageInputNum, {y: '192rem'})
            .to(pageUsePoint, {y: 0, delay: -0.3});
            pageUsePointFunc();
            break;
        }
        setTimeout(()=>{
          $(".lottie_container").empty(); 
          $(".lottie_container").append('<lottie-player src="./src/fireWork.json" background="transparent" speed="1" autoplay></lottie-player>'); 
        },1000);
      })
    }
  } 
  pageInputNumFunc();
  
  // 포인트 적립 화면 함수
  let pagePointViewFunc = () => {
    savePointPV1.innerHTML = `${parseInt(memberInfo.getPayment*0.05)}P`;
    savePointPV2.innerHTML = `${parseInt(memberInfo.getPayment*0.05)}P`;
    $(btnNextPV).on('click', function(event){
      memberInfo.setLastPayment = memberInfo.getPayment - memberInfo.getUsePoint;
      memberInfo.setSavePoint = Number(savePointPV1.innerHTML.replaceAll('P', ''));  
      nextGsap.to(pagePointView, {y: '192rem'})
      .to(pageCard, {y: 0, delay: -0.3});
      pageCardFunc();
      $(btnNextPV).off('click');
    })
  }

  // 포인트 사용 화면 함수 
  let pageUsePointFunc = () => {
    memberInfo.setSavePoint = parseInt(memberInfo.getPayment*0.05); 
    inputMemIN.innerHTML = "";   
    $(`#inputMemIN>p:nth-child(2)`).css({display: 'block'});
    currentPointUP.innerHTML = memberInfo.getPoint.toLocaleString('ko-KR');  
    usePointUP.innerHTML = "0";
    //- 사용 포인트 키패드 입력시 입력 & 삭제 구현 부분 ------------------------//
    $(btnKeypadUP).each(function(index){
      $(this).on('click', function(event){
        if(index == 9){
          usePointUP.innerHTML = "0";
        } else if(index == 11){
          usePointUP.innerHTML = Number(usePointUP.innerHTML.replaceAll(',', '').slice(0, -1)).toLocaleString('ko-KR');
        } else {
          if(usePointUP.innerHTML.length < currentPointUP.innerHTML.length) {
            if(toNumber(usePointUP) <= toNumber(currentPointUP)){
              usePointUP.innerHTML = toNumber(usePointUP);
              usePointUP.innerHTML += $(this).find('p').html();
              usePointUP.innerHTML = Number(usePointUP.innerHTML).toLocaleString('ko-KR');
            }
          }
        }
        if(toNumber(usePointUP) > 999 && (toNumber(usePointUP) <= memberInfo.getPayment && toNumber(usePointUP) <= memberInfo.getPoint)) {
          $(btnNextUP).css({cursor: 'pointer', background: colorMainPink1});
          $(btnNextUP).addClass('btnNextUP');
          if(pageUseSampleKey == 0){
            btnNextUPFunc();
            pageUseSampleKey = 1;
          }
        } else {
          $(btnNextUP).css({cursor: 'not-allowed', background: colorMainBlack3});
          $(btnNextUP).removeClass('btnNextUP');
          if(pageUseSampleKey == 0){
            $(btnNextUP).off('click');
          }
        }
      })
    });
    //- 이전 버튼 클릭 시 회원번호 입력 화면으로 이동 ------------------------//
    $(btnBackUP).on('click', function(event){
      nextGsap.to(pageUsePoint, {y: '192rem'})
      .to(pageInputNum, {y: 0, delay: -0.3});
      pageInputSampleKey = 0;
      inputMemIN.innerHTML = "";
      $(`#inputMemIN>p:nth-child(2)`).css({display: 'block'});
      $(btnKeypadUP).off('click');
      $(btnNextIN).css({cursor: 'not-allowed', background: colorMainBlack3});
      $(btnNextIN).removeClass('btnNextIN');
    })
    //- 다음 버튼 클릭 시 포인트 확인 화면 이동 ------------------------//
    function btnNextUPFunc(){
      $(btnNextUP).on('click', function(event){
        nextGsap.to(pageUsePoint, {y: '192rem'})
        .to(pageFinalCost, {y: 0, delay: -0.3});
        pageFinalCostFunc();
        $(btnNextUP).off('click');
      })
    }
  }

  // 포인트 확인 화면 함수 
  let pageFinalCostFunc = () => {
    memberInfo.setUsePoint = toNumber(usePointUP);
    memberInfo.setLastPayment = memberInfo.getPayment - memberInfo.getUsePoint;
    memberInfo.setSavePoint = parseInt(memberInfo.getLastPayment * 0.05);
    totalCostFC.innerHTML = `₩ ${memberInfo.getPayment.toLocaleString('ko-KR')}`;
    usePointFC.innerHTML = `- ${memberInfo.getUsePoint.toLocaleString('ko-KR')}P`;
    savePointFC.innerHTML = `${memberInfo.getSavePoint.toLocaleString('ko-KR')}P`;
    lastCostFC1.innerHTML = `₩ ${memberInfo.getLastPayment.toLocaleString('ko-KR')}`;
    lastCostFC2.innerHTML = `₩ ${memberInfo.getLastPayment.toLocaleString('ko-KR')}`;
    $(btnBackFC).on('click', function(event){
      nextGsap.to(pageFinalCost, {y: '192rem'})
      .to(pageUsePoint, {y: 0, delay: -0.3});
      pageUseSampleKey = 0;
      usePointUP.innerHTML = "0";
      $(btnNextUP).css({cursor: 'not-allowed', background: colorMainBlack3});
      $(btnNextUP).removeClass('btnNextUP');
      $(btnBackFC).off('click');
      $(btnNextFC).off('click');
    })
    $(btnNextFC).on('click', function(event){
      nextGsap.to(pageFinalCost, {y: '192rem'})
      .to(pageCard, {y: 0, delay: -0.3});
      pageCardFunc();
      $(btnNextFC).off('click');
    })
  }

  // 카드 결제 화면 함수 
  let pageCardFunc = () => {
    $(btnCanclePC).on('click', function(event){
      gsap.set(cardPopupArea, {display: 'flex'});
      $(cardPopupNo).one('click', ()=>{
        gsap.set(cardPopupArea, {display: 'none'});
        $(cardPopupYes).off('click');
      })
      $(cardPopupYes).one('click', ()=>{
        gsap.set(cardPopupArea, {display: 'none'});
        nextGsap.to(pageCard, {y: '192rem'});
        memberInfo.number = ''; 
        memberInfo.point = 0; 
        memberInfo.savePoint = 0; 
        memberInfo.usePoint = 0; 
        memberInfo.payment = 0; 
        memberInfo.lastPayment = 0; 
        memberInfo.monthly = 1; 
        memberInfo.id = 0; 
        memberInfo.time = hiddenDay.value; 
        checkNumberJSON = 0;
        $(cardPopupNo).off('click');
        $(btnCanclePC).off('click');
        $(btnNextPC).off('click');
        inputMemIN.innerHTML = "";
        $(`#inputMemIN>p:nth-child(2)`).css({display: 'block'});
        pageInputSampleKey == 0
        $(btnNextIN).css({cursor: 'not-allowed', background: colorMainBlack3});
        $(btnNextIN).removeClass('btnNextIN');
      })
    })
    $(btnNextPC).on('click', function(event){
      nextGsap.to(pageCard, {y: '192rem'})
      .to(pageFinish, {y: 0, delay: -0.3});
      pageFinshFunc();
    })
  }

  // 결제 화면 함수 
  let pageFinshFunc = () => {
    let prevToday = new Date(Date.parse(memberInfo.getTime));
    let prevDay = ('0' + prevToday.getDate()).slice(-2);
    memberInfo.setTime = prevDay;
    timeCount();
    hiddenPoint.value = memberInfo.getPoint - memberInfo.getUsePoint + memberInfo.getSavePoint;
    hiddenNumber.value = memberInfo.getNumber;
    hiddenCount.value = Number(checkCountJSON) + 1;
    hiddenId.value = memberInfo.getId;
    hiddenKey.value = (checkNumberJSON == 0) ? (0) : (1);
    pageFinishOrder1.innerHTML = hiddenCount.value;
    pageFinishOrder2.innerHTML = hiddenCount.value;
    //--- 관리자 테이블 정보 담기
    let adminData = "";
    for(let i=0; i<resultProductInfoArr.length; i++){
      if(i != resultProductInfoArr.length-1){
        adminData += resultProductInfoArr[i].productCategory + ','+ resultProductInfoArr[i].productName + ',' + resultProductInfoArr[i].productAmount + ',' + resultProductInfoArr[i].productPrice + ',' + checkDateJSON + '||';
      } else {
        adminData += resultProductInfoArr[i].productCategory + ','+ resultProductInfoArr[i].productName + ',' + resultProductInfoArr[i].productAmount + ',' + resultProductInfoArr[i].productPrice + ',' + checkDateJSON;
      }
    }
    $(`#adminDataList`).val(`${''+adminData}`);
    $(btnPrintYes).on('click', function(event){
      //--- 영수증에 값 넣기
      orderRecipt.innerHTML = hiddenCount.value;
      timeRecipt.innerHTML = `[ 정상 ] ${checkDateJSON}`;
      $(listRecipt).empty();
      for(let i=0; i<resultProductInfoArr.length; i++){
        let reciptProductNumber = (i < 9) ? ('00' + (i+1)) : ((i < 99) ? ('0' + (i+1)) : (i+1));
        $(listRecipt).append(`<article><article><p>${reciptProductNumber}</p><p>${resultProductInfoArr[i].productName}</p></article><article><p>${resultProductInfoArr[i].productAmount}</p><p>${resultProductInfoArr[i].productPrice.toLocaleString('ko-KR')}</p></article></article>`);
      }
      realPriceRecipt.innerHTML = (memberInfo.getPayment * 0.9).toLocaleString('ko-KR');
      taxPriceRecipt.innerHTML = (memberInfo.getPayment * 0.1).toLocaleString('ko-KR');
      totalPriceRecipt.innerHTML = memberInfo.getLastPayment.toLocaleString('ko-KR');
      totalPaymentRecipt.innerHTML = memberInfo.getLastPayment.toLocaleString('ko-KR');
      paymentPriceRecipt.innerHTML = memberInfo.getLastPayment.toLocaleString('ko-KR');
      usePointRecipt.innerHTML = memberInfo.getUsePoint.toLocaleString('ko-KR');
      lastPaymentRecipt.innerHTML = memberInfo.getLastPayment.toLocaleString('ko-KR');
      lastPointRecipt.innerHTML = `${memberInfo.getSavePoint.toLocaleString('ko-KR')}/${((memberInfo.getPoint)-(memberInfo.getUsePoint)).toLocaleString('ko-KR')}`;
      nextGsap.to(pageFinish, {y: '192rem'})
      .to(pageRecipt, {y: 0, delay: -0.3});
      pageReciptFunc();
    })
    $(btnPrintNo).on('click', function(event){
      nextGsap.to(pageCard, {y: '192rem'});
      $(hiddenBtn).click();
    })
  }

  let pageReciptFunc = () => {
    $(closeRecipt).on('click', function(){
      $(hiddenBtn).click();
    })
  }

  // 주문번호 초기화 위한 시간 계산 함수 
  let timeCount = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);
    let hours = ('0' + today.getHours()).slice(-2); 
    let minutes = ('0' + today.getMinutes()).slice(-2);
    let seconds = ('0' + today.getSeconds()).slice(-2); 
    checkDateJSON = year + '-' + month  + '-' + day + ' ' + hours + ':' + minutes  + ':' + seconds;
    if(day == memberInfo.getTime) {
      hiddenDate.value = checkDateJSON;
      checkCountJSON = hiddenCount.value;
    } else {
      checkCountJSON = 0;
      hiddenCount.value = 0;
      hiddenKeyCount.value = 2;
      memberInfo.setTime = day;
    }
    setTimeout(timeCount, 1000);
  }

  // 영수증 인쇄 관련 함수
  let initBodyPrint; 
  function beforePrint (){
    initBodyPrint = document.body.innerHTML;
    document.body.innerHTML = printAreaRecipt.innerHTML;
    $('body').addClass('realPrint');
  }
  function afterPrint(){
    document.body.innerHTML = initBodyPrint;
    $('body').removeClass('realPrint');
  }
  $(printRecipt).on("click", function(){
    $(hiddenBtn).click();
    window.onbeforeprint = beforePrint();
    window.print();
    window.onafterprint = afterPrint();
  });
     

  let firstKeyHome = 0;
  let logoutCount = 60;
  let touchAudio = new Audio('./build/js/sound.mp3');
  const logoutPopupArea = document.querySelector(`#logoutPopupArea`);
  $(`#logoutPopupArea>article>div:last-child>p:nth-child(1)`).on('click', function(){
    location.reload();
  });
  $(`#logoutPopupArea>article>div:last-child>p:nth-child(2)`).on('click', function(){
    logoutCount = 60;
    gsap.set(logoutPopupArea, {display: 'none'});
  });
  window.addEventListener('click', ()=>{
    logoutCount = 60;
    if(firstKeyHome == 0){
      $(`#pageProduct`).css({display: 'block'});
      $(`#pageHome`).css({display: 'none'});
      $("#productPage1 .cardProduct:nth-child(5) .crownBox").css("background-image", "url('/build/img/icon_name_jisu.svg')");
      setTimeout(checkLogout, 1000);
      firstKeyHome = 1;
    }
    touchAudio.play();
  })
  let checkLogout = () => {
    logoutCount--;
    if(logoutCount < 11) {
      gsap.set(logoutPopupArea, {display: 'block'});
    }
    if(logoutCount < 1) {
      location.reload();
    }
    let viewCountTime = (logoutCount < 10) ? ('0'+logoutCount) : (logoutCount);
    $(`#viewCountLogout`).html(viewCountTime + '초 ');
    setTimeout(checkLogout, 1000);
  }

  // Main Slide
  (() => {
    let randomArray = [];
    let tempNum = 0;
    while( randomArray.length < 5 ){
      
      let overlap = false;
      tempNum = Math.floor(Math.random() * 5);
      if( randomArray.length == 0){
        randomArray.push(tempNum);
      } else{
        $.each(randomArray, (index, item) => {
          if(item == tempNum){
            overlap = true;
          }
        });
        if(!overlap){ 
          randomArray.push(tempNum);
        }
      }
    }
    let i = 0;
    while(i < randomArray.length){
      $(".wrapHomeSlider").append($("<li>").css("background-image", `url(./build/img/mainbanner${(randomArray[i] + 1)}.jpg)`));
    i++;}
    $(".wrapHomeSlider").append($("<li>").css("background-image", `url(./build/img/mainbanner${(randomArray[0] + 1)}.jpg)`));
    count = 0;
    setInterval(() =>{
      count++;
      $(".wrapHomeSlider").css("transform", `translateX(${-1080 * count}px)`).css("transition", "all 0.5s ease-out");
      if(count == 5){
        setTimeout(()=>{
          $(".wrapHomeSlider").css("transition", "none").css("transform", "translateX(0px)");
          count = 0;
        }, 1600)
      }
    }, 4000);
  })();
  //footer Slide
  (()=>{
    let i = 0;
    while( i < 3 ){ 
      $("footer>article>ul").append($("<li>").text("본 페이지는 비상업목적의 포트폴리오용으로 제작되었습니다."));
    i++;}
    const footerLiW = $("footer>article>ul>li:first-child").outerWidth();
    
    gsap.fromTo( "footer>article>ul", {x: "0px"}, {x: `${-1 * footerLiW}px`, duration: 18, repeat: -1, ease: "none"});
  })();




  //--- 관리자 관련 부분
  const adminInputNum = document.querySelector(`#adminInputNum`);
  const pageAdmin = document.querySelector(`#pageAdmin`);
  const inputAdmin = document.querySelector(`#inputAdmin`);
  const inputAdminText = document.querySelector(`#inputAdmin>p:nth-child(1)`);
  const btnKeypadAdmin = $(`#btnKeypadAdmin>div`);
  const btnBackAdmin = document.querySelector(`#btnBackAdmin`);
  const btnNextAdmin = document.querySelector(`#btnNextAdmin`);
  const listDescAdmin = document.querySelector(`#listDescAdmin`);
  $(`#imgAdmin`).on('click', function(){
    nextGsap.to(adminInputNum, {y: 0})
  }) 
  $(btnBackAdmin).on('click', function(){
    nextGsap.to(adminInputNum, {y: '192rem'})
  })
  $(btnNextAdmin).on('click', function(){
    if($(`#inputAdmin>p:nth-child(1)`).html() == '2022') {
      nextGsap.to(adminInputNum, {y: '192rem'})
        .set(pageAdmin, {display: 'block', delay: -0.2});
    } else {
      inputAdminText.innerHTML = "비밀번호가 틀립니다.";
      setTimeout(()=>{ inputAdminText.innerHTML = "" }, 500);
      setTimeout(()=>{$(`#inputAdmin>p:nth-child(2)`).css({display: 'block'});}, 500)
    }
  })
  $(`#imgHomeInAdmin`).on('click', function(){
    gsap.set(pageAdmin, {display: 'none'});
    adminTable.resetPage();
    inputAdminText.innerHTML = "";
    $(`#inputAdmin>p:nth-child(2)`).css({display: 'block'});
    $(btnNextAdmin).css({cursor: 'not-allowed', background: colorMainBlack3, pointerEvents: 'none'});
    $(btnNextAdmin).removeClass('btnNextAdmin');
  })
  $(btnKeypadAdmin).each(function(index){
    this.addEventListener('click', function(event){
      if(index == 9){
        inputAdminText.innerHTML = "";
      } else if(index == 11){
        inputAdminText.innerHTML = (inputAdminText.innerHTML).slice(0, -1);
      } else {
        if(inputAdminText.innerHTML.length < 4) inputAdminText.innerHTML += $(this).find('p').html();
      }
      if(inputAdminText.innerHTML.length < 4) {
        $(btnNextAdmin).css({cursor: 'not-allowed', background: colorMainBlack3, pointerEvents: 'none'});
        $(btnNextAdmin).removeClass('btnNextAdmin');
      } else {
        $(btnNextAdmin).css({cursor: 'pointer', background: colorMainPink1, pointerEvents: 'all'});
        $(btnNextAdmin).addClass('btnNextAdmin');
      }
      if(inputAdminText.innerHTML.length != 0) {
        $(`#inputAdmin>p:nth-child(2)`).css({display: 'none'});
      } else {
        $(`#inputAdmin>p:nth-child(2)`).css({display: 'block'});
      }
    })
  });

  // 관리자 전용 매출 정보 관련 클래스
  class AdminTable{
    constructor(productAllJson){
      this.productAllJson = productAllJson;
      this.changeTimeJson = [];
      this.todayCheck = [];
      this.productListDay = [];
      this.productListMonth = [];
      this.selectDay = 0;
      this.selectMonth = 0;
      this.dayBasicList = {ice: [], coffee: [], cake: []};
      this.monthBasicList = {ice: [], coffee: [], cake: []};
      this.rankBasicList = {ice: [], coffee: [], cake: []};
      this.tabNum = 0;
      this.listTabNum = 0;
    }
    timeCheck(){
      let todayAdmin = new Date();
      let yearAdmin = todayAdmin.getFullYear();
      let monthAdmin = ('0' + (todayAdmin.getMonth() + 1)).slice(-2);
      let dayAdmin = ('0' + todayAdmin.getDate()).slice(-2);
      this.todayCheck = yearAdmin + '-' + monthAdmin  + '-' + dayAdmin;
      this.todayCheck = this.todayCheck.split('-');
      this.selectDay = this.todayCheck[2];
      this.selectMonth = this.todayCheck[1];
    }
    changeGMT(value){
      let todayAdmin = new Date(Date.parse(value));
      let yearAdmin = todayAdmin.getFullYear();
      let monthAdmin = ('0' + (todayAdmin.getMonth() + 1)).slice(-2);
      let dayAdmin = ('0' + todayAdmin.getDate()).slice(-2);
      return (yearAdmin + '-' + monthAdmin  + '-' + dayAdmin).split('-');
    }
    changeTimeAll(){
      this.timeCheck();
      let i = 0;
      while(i<this.productAllJson.length){
        this.changeTimeJson.push(this.productAllJson[i]);
        this.changeTimeJson[i].date = this.changeGMT(this.changeTimeJson[i].date);
        i++;
      } 
    }
    pushListAll(dayVal = this.selectDay, monthVal = this.selectMonth){
      let i = 0;
      while(i<this.changeTimeJson.length){
        if(this.todayCheck[0] == this.changeTimeJson[i].date[0] && this.todayCheck[1] == this.changeTimeJson[i].date[1] && dayVal == this.changeTimeJson[i].date[2]){
          this.productListDay.push(this.changeTimeJson[i]);
        }
        if(monthVal == this.changeTimeJson[i].date[1] && this.todayCheck[0] == this.changeTimeJson[i].date[0]){
          this.productListMonth.push(this.changeTimeJson[i]);
        }
        i++;
      }
      i = 0;
      this.dayBasicList = {ice: [], coffee: [], cake: []};
      this.monthBasicList = {ice: [], coffee: [], cake: []};
      this.rankBasicList = {ice: [], coffee: [], cake: []};
      while(i<product.allProduct.length){
        let j = 0; 
        while(j<product.allProduct[i].length) {
          let sampleText = product.allProduct[i][j].category + '-' + product.allProduct[i][j].name + '-' + product.allProduct[i][j].price + '-' + 0;
          if(i == 0) {
            this.dayBasicList.ice.push(sampleText.split('-'));
            this.monthBasicList.ice.push(sampleText.split('-'));
            this.rankBasicList.ice.push(sampleText.split('-'));
          } else if(i == 1){
            this.dayBasicList.coffee.push(sampleText.split('-'));
            this.monthBasicList.coffee.push(sampleText.split('-'));
            this.rankBasicList.coffee.push(sampleText.split('-'));
          } else if(i == 2){
            this.dayBasicList.cake.push(sampleText.split('-'));
            this.monthBasicList.cake.push(sampleText.split('-'));
            this.rankBasicList.cake.push(sampleText.split('-'));
          }
          j++;
        }
        i++;
      }
      this.printListAll();
    }
    printListAll(){
      let i = 0;
      while(i<this.productListDay.length){
        let j = 0;
        while(j<this.dayBasicList.ice.length){
          if(this.productListDay[i].menu == this.dayBasicList.ice[j][1]){
            this.dayBasicList.ice[j][3] = Number(this.dayBasicList.ice[j][3]) + Number(this.productListDay[i].count);
            break;
          }
          j++;
        }
        j = 0;
        while(j<this.dayBasicList.coffee.length){
          if(this.productListDay[i].menu == this.dayBasicList.coffee[j][1]){
            this.dayBasicList.coffee[j][3] = Number(this.dayBasicList.coffee[j][3]) + Number(this.productListDay[i].count);
            break;
          }
          j++;
        }
        j = 0;
        while(j<this.dayBasicList.cake.length){
          if(this.productListDay[i].menu == this.dayBasicList.cake[j][1]){
            this.dayBasicList.cake[j][3] = Number(this.dayBasicList.cake[j][3]) + Number(this.productListDay[i].count);
            break;
          }
          j++;
        }
        i++;
      }
      i = 0;
      while(i<this.productListMonth.length){
        let j = 0;
        while(j<this.monthBasicList.ice.length){
          if(this.productListMonth[i].menu == this.monthBasicList.ice[j][1]){
            this.monthBasicList.ice[j][3] = Number(this.monthBasicList.ice[j][3]) + Number(this.productListMonth[i].count);
            break;
          }
          j++;
        }
        j = 0;
        while(j<this.monthBasicList.coffee.length){
          if(this.productListMonth[i].menu == this.monthBasicList.coffee[j][1]){
            this.monthBasicList.coffee[j][3] = Number(this.monthBasicList.coffee[j][3]) + Number(this.productListMonth[i].count);
            break;
          }
          j++;
        }
        j = 0;
        while(j<this.monthBasicList.cake.length){
          if(this.productListMonth[i].menu == this.monthBasicList.cake[j][1]){
            this.monthBasicList.cake[j][3] = Number(this.monthBasicList.cake[j][3]) + Number(this.productListMonth[i].count);
            break;
          }
          j++;
        }
        i++;
      }
      i = 0;
      while(i<this.changeTimeJson.length){
        let j = 0;
        while(j<this.rankBasicList.ice.length){
          if(this.changeTimeJson[i].menu == this.rankBasicList.ice[j][1]){
            this.rankBasicList.ice[j][3] = Number(this.rankBasicList.ice[j][3]) + Number(this.changeTimeJson[i].count);
            break;
          }
          j++;
        }
        j = 0;
        while(j<this.rankBasicList.coffee.length){
          if(this.changeTimeJson[i].menu == this.rankBasicList.coffee[j][1]){
            this.rankBasicList.coffee[j][3] = Number(this.rankBasicList.coffee[j][3]) + Number(this.changeTimeJson[i].count);
            break;
          }
          j++;
        }
        j = 0;
        while(j<this.rankBasicList.cake.length){
          if(this.changeTimeJson[i].menu == this.rankBasicList.cake[j][1]){
            this.rankBasicList.cake[j][3] = Number(this.rankBasicList.cake[j][3]) + Number(this.changeTimeJson[i].count);
            break;
          }
          j++;
        }
        i++;
      }
    }
    appendList(boxVal, listVal, typeVal){
      $(`#totalMoneyAdmin`).html(0);
      $(`#totalCountAdmin`).html(0);
      if(typeVal == 1){
        listVal = listVal.sort((a,b)=>{return (b[3]) - (a[3])})
        $(boxVal).empty();
        for(let i=0; i<listVal.length; i++){
          if(listVal[i][3] != 0){
            $(boxVal).append(`<article><div><p>${listVal[i][1]}</p></div><div><p>${listVal[i][3]}</p></div></article>`)
            $(`#totalMoneyAdmin`).html('₩ '+(Number($(`#totalMoneyAdmin`).html().replace('₩','').replaceAll(',','').replace('원','')) + Number(listVal[i][3]*listVal[i][2])).toLocaleString()+'원');
            $(`#totalCountAdmin`).html((Number($(`#totalCountAdmin`).html().replaceAll(',','').replace('개','')) + Number(listVal[i][3])).toLocaleString()+'개');
          }
        }
      }
      if(typeVal == 2){
        listVal = listVal.sort((a,b)=>{return (b[3]*b[2]) - (a[3]*a[2])})
        $(boxVal).empty();
        for(let i=0; i<listVal.length; i++){
          if(listVal[i][3] != 0){
            $(boxVal).append(`<article><div><p>${(i+1)+'위'}</p></div><div><p>${listVal[i][1]}</p></div><div><p>${listVal[i][3]}</p></div><div><p>${'₩ '+ (listVal[i][3] * listVal[i][2]).toLocaleString()}</p></div></article>`)
          }
        }
      }
    }
    resetPage(){
      this.tabNum = 0;
      $("#viewTotalAdmin").addClass("dayTotalAdmin");
      $("#viewTotalAdmin").removeClass("monthTotalAdmin");
      $("#adminTapTitle div").removeClass("adminTabActive");
      $("#adminTapTitle>div div:nth-child(1)").addClass("adminTabActive");
      this.listTabNum = 0;
      $("#adminTypeTitle div").removeClass("btnListActive");
      $("#adminTypeTitle>div:nth-child(1)").addClass("btnListActive");
    }
    adminEvent(){
      this.resetPage();
      $("#adminTapTitle").on("click", (e)=>{
        switch($(e.target).attr("id")){
          case "adminTab1":
            this.tabNum = 0;
            this.listTabNum = 0;
            $("#adminTypeTitle div").removeClass("btnListActive");
            $("#adminTypeTitle>div:nth-child(1)").addClass("btnListActive");
            $("#adminTapTitle div").removeClass("adminTabActive");
            $("#adminTapTitle>div div:nth-child(1)").addClass("adminTabActive");
            $("#viewTotalAdmin").removeClass("monthTotalAdmin");
            $("#viewTotalAdmin").addClass("dayTotalAdmin");
            break;
          case "adminTab2":
            this.tabNum = 1;
            this.listTabNum = 0;
            $("#adminTypeTitle div").removeClass("btnListActive");
            $("#adminTypeTitle>div:nth-child(1)").addClass("btnListActive");
            $("#adminTapTitle div").removeClass("adminTabActive");
            $("#adminTapTitle>div div:nth-child(2)").addClass("adminTabActive");
            $("#viewTotalAdmin").addClass("monthTotalAdmin");
            $("#viewTotalAdmin").removeClass("dayTotalAdmin");
            break;
          case "adminTab3":
            this.tabNum = 2;
            this.listTabNum = 0;
            $("#adminTypeTitle div").removeClass("btnListActive");
            $("#adminTypeTitle>div:nth-child(1)").addClass("btnListActive");
            $("#adminTapTitle div").removeClass("adminTabActive");
            $("#adminTapTitle>div div:nth-child(3)").addClass("adminTabActive");
            $("#viewTotalAdmin").removeClass("monthTotalAdmin");
            $("#viewTotalAdmin").removeClass("dayTotalAdmin");
            break;
        }
        this.changeListView();
        this.changePageAdmin();
      });
      this.listTabNum = 0;
      $("#adminTypeTitle div").removeClass("btnListActive");
      $("#adminTypeTitle>div:nth-child(1)").addClass("btnListActive");
      $("#adminTypeTitle").on("click", (e)=>{
        switch($(e.target).attr("id")){
          case "typeTab1":
            this.listTabNum = 0;
            $("#adminTypeTitle div").removeClass("btnListActive");
            $("#adminTypeTitle>div:nth-child(1)").addClass("btnListActive");
            break;
          case "typeTab2":
            this.listTabNum = 1;
            $("#adminTypeTitle div").removeClass("btnListActive");
            $("#adminTypeTitle>div:nth-child(2)").addClass("btnListActive");
            break;
          case "typeTab3":
            this.listTabNum = 2;
            $("#adminTypeTitle div").removeClass("btnListActive");
            $("#adminTypeTitle>div:nth-child(3)").addClass("btnListActive");
            break;
        }
        this.changeListView();
      });
    }
    changeListView(){
      switch(this.tabNum){
        case 0:
          switch(this.listTabNum){
            case 0:
              this.appendList(listDescAdmin, this.dayBasicList.ice, 1);
              break;
            case 1: 
              this.appendList(listDescAdmin, this.dayBasicList.coffee, 1);
              break;
            case 2:
              this.appendList(listDescAdmin, this.dayBasicList.cake, 1);
              break;
          }
          break;
        case 1:
          switch(this.listTabNum){
            case 0:
              this.appendList(listDescAdmin, this.monthBasicList.ice, 1);
              break;
            case 1: 
              this.appendList(listDescAdmin, this.monthBasicList.coffee, 1);
              break;
            case 2:
              this.appendList(listDescAdmin, this.monthBasicList.cake, 1);
              break;
          }
          break;
        case 2:
          switch(this.listTabNum){
            case 0:
              this.appendList(listDescAdmin, this.rankBasicList.ice, 2);
              break;
            case 1: 
              this.appendList(listDescAdmin, this.rankBasicList.coffee, 2);
              break;
            case 2:
              this.appendList(listDescAdmin, this.rankBasicList.cake, 2);
              break;
          }
          break;
      }
      this.changePageAdmin();
    }
    changePageAdmin(){
      switch(this.tabNum){
        case 0:
          $(`#nowTimeAdmin1, #nowTimeAdmin2`).html(this.todayCheck[2])
          $(`#nowTimeAdmin1`).parent().css({width: '15rem'})
          $(`.nowTimeType`).html('일');
          $(`#subTimeAdmin`).html(this.todayCheck[0] + '년 '+ this.todayCheck[1] +'월');
          $(`#viewTotalAdmin`).css({display: 'flex'});
          $(`#admin3DImg`).css({background: `url('./build/img/day_3d.png') no-repeat center center/cover`, transform: 'scale(1)', width: '31rem', top: '-1rem', right: '-5rem'});
          $(`#viewTotalAdmin`).parent().css({height: '44rem'});
          $(`#adminTypeTitle`).css({marginTop: '12rem'})
          $(`#mainAdminWrap`).css({height: '96rem'});
          $(`#listDescAdmin`).css({height: '80rem'});
          $(`#listTitleAdmin`).empty();
          $(`#listTitleAdmin`).append(`<div><p></p></div><div><p>제품명</p></div><div><p>수량</p></div><div><p></p></div>`);
          $(`#listTitleAdmin>div:nth-child(1), #listTitleAdmin>div:nth-child(4), #listDescAdmin>article>div:nth-child(1), #listDescAdmin>article>div:nth-child(4)`).css({width: '0'});
          $(`#listTitleAdmin>div:nth-child(2), #listDescAdmin>article>div:nth-child(1)`).css({width: '60rem'});
          $(`#listTitleAdmin>div:nth-child(3), #listDescAdmin>article>div:nth-child(2)`).css({width: '28rem'});
        break;
        case 1:
          $(`#nowTimeAdmin1, #nowTimeAdmin2`).html(this.todayCheck[1])
          $(`#nowTimeAdmin1`).parent().css({width: '15rem'})
          $(`.nowTimeType`).html('월');
          $(`#subTimeAdmin`).html(this.todayCheck[0] + '년');
          $(`#viewTotalAdmin`).css({display: 'flex'});
          $(`#admin3DImg`).css({background: `url('./build/img/month_3d.svg') no-repeat center center/cover`, transform: 'scale(0.7)', width: '45rem', top: '-3rem', right: '-5rem'});
          $(`#viewTotalAdmin`).parent().css({height: '44rem'});
          $(`#adminTypeTitle`).css({marginTop: '12rem'})
          $(`#mainAdminWrap`).css({height: '96rem'});
          $(`#listDescAdmin`).css({height: '80rem'});
          $(`#listTitleAdmin`).empty();
          $(`#listTitleAdmin`).append(`<div><p></p></div><div><p>제품명</p></div><div><p>수량</p></div><div><p></p></div>`);
          $(`#listTitleAdmin>div:nth-child(1), #listTitleAdmin>div:nth-child(4), #listDescAdmin>article>div:nth-child(1), #listDescAdmin>article>div:nth-child(4)`).css({width: '0'});
          $(`#listTitleAdmin>div:nth-child(2), #listDescAdmin>article>div:nth-child(1)`).css({width: '60rem'});
          $(`#listTitleAdmin>div:nth-child(3), #listDescAdmin>article>div:nth-child(2)`).css({width: '28rem'});
        break;
        case 2:
          $(`#nowTimeAdmin1, #nowTimeAdmin2`).html(this.todayCheck[0]);
          $(`#nowTimeAdmin1`).parent().css({width: '30rem'})
          $(`.nowTimeType`).html('년');
          $(`#subTimeAdmin`).html('');
          $(`#viewTotalAdmin`).css({display: 'none'});
          $(`#admin3DImg`).css({background: `url('./build/img/rank_3d.svg') no-repeat center center/cover`, transform: 'scale(1)', width: '31rem', top: '-3rem', right: '-1rem'});
          $(`#viewTotalAdmin`).parent().css({height: '30rem'});
          $(`#adminTypeTitle`).css({marginTop: '4rem'})
          $(`#mainAdminWrap`).css({height: '120rem'});
          $(`#listDescAdmin`).css({height: '104rem'});
          $(`#listTitleAdmin`).empty();
          $(`#listTitleAdmin`).append(`<div><p>순위</p></div><div><p>제품명</p></div><div><p>수량</p></div><div><p>가격</p></div>`);
          $(`#listTitleAdmin>div:nth-child(1), #listDescAdmin>article>div:nth-child(1)`).css({width: '12rem'});
          $(`#listTitleAdmin>div:nth-child(2), #listDescAdmin>article>div:nth-child(2)`).css({width: '40rem'});
          $(`#listTitleAdmin>div:nth-child(3), #listDescAdmin>article>div:nth-child(3)`).css({width: '12rem'});
          $(`#listTitleAdmin>div:nth-child(4), #listDescAdmin>article>div:nth-child(4)`).css({width: '24rem'});
        break;
      }
    }
  }
  let adminTable;

  let xmlHttpAdmin = new XMLHttpRequest();
  xmlHttpAdmin.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
      adminTable = new AdminTable(JSON.parse(this.responseText));
    }
  };
  xmlHttpAdmin.open("GET", "./src/adminList.json", false);
  xmlHttpAdmin.send();
  adminTable.changeTimeAll();
  adminTable.pushListAll();
  adminTable.adminEvent();
  adminTable.changeListView();
  adminTable.changePageAdmin();
  

})
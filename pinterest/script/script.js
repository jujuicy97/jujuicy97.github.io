//요소 선택
const $menu = document.querySelectorAll("main>ul>li");
const $section = document.querySelector("section");

//메뉴 클릭
$menu.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        //다른 li에 on이라는 class가 추가되어 있으면 먼저 삭제!
        const $on = document.querySelector("main > ul > li.on");
        if($on){
        $on.classList.remove("on");
        }
        elem.classList.add("on");

        //메뉴 클릭하면 odd와 even으로 나누어 보여지게 하기
        //클릭한 메뉴의 텍스트 정보 가져오기(odd, even)
        const filter = elem.textContent.trim().toLowerCase();
        //article이 odd와 even에 따라 보여졌다 사라졌다
        const $article = document.querySelectorAll("section>article");
        $article.forEach((article)=>{
/*삼항연산자 이용 (contains는 class를 확인해주는 속성)*/
            const text = article.classList.contains("odd") ? "odd" : 
            article.classList.contains("even") ? "even" : "";
//방법 2 : if문을 이용//
            /*
            let text = '';
            if(article.classList.contains("odd")){
                //true이면
                text = "odd";
            }else if(article.classList.contains("even")){
                text = "even";
            }else{
                text = '';
            } 
            */

//방법 3 : className을 이용하여 가져올 때, 변수 text가 요소에서 읽어올 때, class가 odd이외에 또 있을 경우 적용이 안됨. 그래서 contains 사용이 정확            
            // const text = article.className;

            if(filter === 'all' || filter === text){
                article.style.display = "block";
            }else{
                article.style.display = "none";
            }
        });
    });
});

//imgList에서 정보를 읽어와서 요소를 생성
//section에 추가
imgList.forEach((data)=>{
    //data값을 이용하여 요소를 생성(html주석 부분 생성)
    //필요한 객체 가져오기
    const $article = document.createElement("article");
    $article.classList.add(data.type);
    const $div = document.createElement("div");
    const $img = document.createElement("img");
    const $h2 = document.createElement("h2");
    const $p = document.createElement("p");
    //data.js 변수를 가져온 객체에 저장하기
    $img.src = data.img;
    $img.alt = data.title;
    $h2.textContent = data.title;
    $p.textContent = data.desc;
    // 부모/자식 설정
    $section.appendChild($article);
    $article.appendChild($div);
    $div.appendChild($img);
    $div.appendChild($h2);
    $div.appendChild($p);
});
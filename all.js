// let data=[
//     {
//         "id":0,
//         "name":"綠島自由行套裝行程",
//         "location":"台北",
//         "price":1280,
//         "rate":8.6,
//         "group":"8",
//         "imgUrl":"./assets/images/travel_1.png",
//         "content":"嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。"
//     },
//     {
//         "id":1,
//         "name":"清境高空觀景步道二日遊",
//         "location":"台北",
//         "price":2580,
//         "rate":8.2,
//         "group":"12",
//         "imgUrl":"./assets/images/travel_2.png",
//         "content":"清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。"
//     },
//     {
//         "id":2,
//         "name":"南庄度假村露營車二日遊",
//         "location":"台中",
//         "price":2480,
//         "rate":8.9,
//         "group":"2",
//         "imgUrl":"./assets/images/travel_3.png",
//         "content":"南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！ 一泊一食，輕鬆享受露營車樂趣。 獨立衛浴與私人戶外露臺。 入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。"
//     },
//     {
//         "id":3,
//         "name":"山林悠遊雙人套票",
//         "location":"台中",
//         "price":880,
//         "rate":9.3,
//         "group":"限時搶購",
//         "imgUrl":"./assets/images/travel_4.png",
//         "content":"山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）"
//     },
//     {
//         "id":4,
//         "name":"漁樂碼頭釣魚體驗套票",
//         "location":"台中",
//         "price":1280,
//         "rate":8.2,
//         "group":"5",
//         "imgUrl":"./assets/images/travel_5.png",
//         "content":"台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！"
//     },
//     {
//         "id":5,
//         "name":"熊森公園親子二日遊套票",
//         "location":"高雄",
//         "price":2480,
//         "rate":8.6,
//         "group":"8",
//         "imgUrl":"./assets/images/travel_6.png",
//         "content":"來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！"
//     },
// ];
let tourData=[];
function init(){
    axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json')
        .then(function(response){
            tourData = response.data;
            renderData();
            renderC3();
        })
        .catch(function(error){
            console.log(error);
        })
}
init();

//renderData
const searchResult = document.querySelector(".searchResult");
const list = document.querySelector(".listContent");
function renderData (){
    let str="";
    tourData.forEach(function(item,index){
        let content =`<div class="col-md-6 col-lg-4">
                        <div class="card border-0 text-primary card-shadow h-100">
                            <div class="card-head position-relative">
                                <a href="#" class="overflow-hidden d-block">
                                    <img src="${item.imgUrl}" alt="travel_1" class="img-hover img-size">
                                </a>
                                <p class="text-white fs-5 location-tag">${item.area}</p>
                                <p class="text-white text-center score-tag">${item.rate}</p>
                            </div>
                            <div class="card-body border-0 p-6">
                                <h4 class="pb-2 mb-6 fw-bold border-b"><a href="">${item.name}</a></h4>
                                <p class="text-gray-60">${item.description}</p>
                            </div>
                            <div class="card-footer bg-white border-0">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div><i class="bi bi-exclamation-circle-fill me-2"></i>剩下最後 ${item.group} 組</div>
                                    <div class="d-flex align-items-center">
                                        <p class="fw-bold me-1">TWD</p>
                                        <p class="fw-bold fs-2">$${item.price.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        str += content; 
    });
    list.innerHTML = str;
    searchResult.innerHTML=`本次搜尋共 ${tourData.length} 筆資料`
};
//renderC3
function renderC3(){
    let obj={};
    tourData.forEach(function(item){
        if(obj[item.area]==undefined){
            obj[item.area] = 1;
        }else{
            obj[item.area] += 1;
        }
    })
    let chartData=[];
    let area = Object.keys(obj);
    area.forEach(function(item,index){
        let ary = [];
        ary.push(item);
        ary.push(obj[item]);
        chartData.push(ary);
    })
    const chart = c3.generate({
        bindto: '#chart', // HTML 元素綁定
        data: {
            columns: chartData,
            type:'donut',
            colors:{
                台北:"#26C0C7",
                台中:"#5151D3",
                高雄:"#E68618",
            },
        },
        donut:{
            title:'套票地區比重',
            width:12,
            label:{
                show:false
            }
        },
        size:{
            height:160,
            width:160
        }
    });
}
//filter
const filter = document.querySelector("#filter");
filter.addEventListener("change",function(e){
    let str="";
    let count=0;
    tourData.forEach(function(item,index){
         if(e.target.value == item.area){
            str += `<div class="col-md-6 col-lg-4">
                        <div class="card border-0 text-primary card-shadow h-100">
                            <div class="card-head position-relative">
                                <a href="#" class="overflow-hidden d-block">
                                    <img src="${item.imgUrl}" alt="travel_1" class="img-hover img-size">
                                </a>
                                <p class="text-white fs-5 location-tag">${item.area}</p>
                                <p class="text-white text-center score-tag">${item.rate}</p>
                            </div>
                            <div class="card-body border-0 p-6">
                                <h4 class="pb-2 mb-6 fw-bold border-b"><a href="">${item.name}</a></h4>
                                <p class="text-gray-60">${item.description}</p>
                            </div>
                            <div class="card-footer bg-white border-0">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div><i class="bi bi-exclamation-circle-fill me-2"></i>剩下最後 ${item.group} 組</div>
                                    <div class="d-flex align-items-center">
                                        <p class="fw-bold me-1">TWD</p>
                                        <p class="fw-bold fs-2">$${item.price.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
            count++;
         }else if (e.target.value == "全部地區"){
            str += `<div class="col-md-6 col-lg-4">
                        <div class="card border-0 text-primary card-shadow h-100">
                            <div class="card-head position-relative">
                                <a href="#" class="overflow-hidden d-block">
                                    <img src="${item.imgUrl}" alt="travel_1" class="img-hover img-size">
                                </a>
                                <p class="text-white fs-5 location-tag">${item.area}</p>
                                <p class="text-white text-center score-tag">${item.rate}</p>
                            </div>
                            <div class="card-body border-0 p-6">
                                <h4 class="pb-2 mb-6 fw-bold border-b"><a href="">${item.name}</a></h4>
                                <p class="text-gray-60">${item.description}</p>
                            </div>
                            <div class="card-footer bg-white border-0">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div><i class="bi bi-exclamation-circle-fill me-2"></i>剩下最後 ${item.group} 組</div>
                                    <div class="d-flex align-items-center">
                                        <p class="fw-bold me-1">TWD</p>
                                        <p class="fw-bold fs-2">$${item.price.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
            count++;
         };
         list.innerHTML = str;
         searchResult.innerHTML=`本次搜尋共 ${count} 筆資料`
    });
});
//newSet
const newSet = document.querySelector(".newSet");
newSet.addEventListener("click",function(e){
    const ticketName = document.querySelector("#ticketName");
    const photoAddress = document.querySelector("#photoAddress");
    const ticketPlace = document.querySelector("#ticketPlace");
    const ticketPrice = document.querySelector("#ticketPrice");
    const ticketGroup = document.querySelector("#ticketGroup");
    const ticketStar = document.querySelector("#ticketStar");
    const tourContent = document.querySelector("#tourContent");
    if (ticketGroup.value =="" || ticketName.value =="" || ticketPrice.value =="" || ticketStar.value =="" || photoAddress.value =="" || tourContent.value ==""){
        alert("請輸入欄位資訊");
        return;
    }else{
        //push new data
        tourData.push(
            {
                "id":tourData.length,
                "name":ticketName.value,
                "area":ticketPlace.value,
                "price":parseInt(ticketPrice.value),
                "rate":ticketStar.value,
                "group":ticketGroup.value.toString(),
                "imgUrl":photoAddress.value,
                "description":tourContent.value
            }
        );
    };
    // reset
    function resetValue(){
        const addTicketForm =document.querySelector(".addTicketForm");
        addTicketForm.reset();
    };
    filter.value="全部地區";
    resetValue();
    renderData();
    renderC3();
});


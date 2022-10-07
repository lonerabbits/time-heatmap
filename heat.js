//保存每天的数据
const daily_data = {
    "years":[
        {"year":"2022","total":84,"range":{"start":"2022-01-01","end":"2022-12-31"}}, 

        {"year":"2021","total":10,"range":{"start":"2021-01-01","end":"2021-12-31"}}, 

        {"year":"2020","total":1,"range":{"start":"2020-01-01","end":"2020-12-31"}}
    ],
    "contributions":[
        {"date":"2022-10-01","hours":11},
        {"date":"2022-10-02","hours":16},
        {"date":"2022-10-03","hours":2},
        {"date":"2022-10-04","hours":3},
        {"date":"2022-10-05","hours":9},
        {"date":"2022-10-06","hours":0},
        {"date":"2022-10-03","hours":2},
        {"date":"2022-10-04","hours":3},
        {"date":"2022-10-05","hours":9},
        {"date":"2022-10-06","hours":0},
        {"date":"2022-10-03","hours":2},
        {"date":"2022-10-04","hours":3},
        {"date":"2022-10-05","hours":9},
        {"date":"2022-10-06","hours":0},
        {"date":"2022-10-03","hours":2},
        {"date":"2022-10-04","hours":3},
        {"date":"2022-10-05","hours":9},
        {"date":"2022-10-06","hours":0},
        {"date":"2022-10-03","hours":2},
        {"date":"2022-10-04","hours":3},
        {"date":"2022-10-05","hours":9},
        {"date":"2022-10-06","hours":24},
        {"date":"2022-10-03","hours":2},
        {"date":"2022-10-04","hours":3},
        {"date":"2022-10-05","hours":9},
        {"date":"2022-10-06","hours":0},
        {"date":"2022-10-03","hours":2},
        {"date":"2022-10-04","hours":3},
        {"date":"2022-10-05","hours":9},
        {"date":"2022-10-06","hours":0},
        {"date":"2022-10-07","hours":1},
        {"date":"2022-10-07","hours":1}
    ]
};
//生成
function addElement () {
    let container = document.getElementById("container");
    //按周进行处理
    var array_by_week = divide(daily_data.contributions, 7);
    for (i in array_by_week){
        let week_div = document.createElement("div");
        week_div.className = "week";
        //提取小时
        let array_by_day = new Array();
        for (j in array_by_week[i]){
            array_by_day[j] = array_by_week[i][j].hours;
        }
        for (j in array_by_day){
            let day_div = document.createElement("div");
            day_div.className = "day heat-1";
            //根据具体值赋给不同的类
            switch (grade(array_by_day[j]))
            {
                case 0:
                    day_div.className = "day heat-0";
                    break;
                case 1:
                    day_div.className = "day heat-1";
                    break;
                case 2:
                    day_div.className = "day heat-2";
                    break;
                case 3:
                    day_div.className = "day heat-3";
                    break;
                case 4:
                    day_div.className = "day heat-4";
                    break;
                case 5:
                    day_div.className = "day heat-5";
                    break;
                case 6:
                    day_div.className = "day heat-6";
                    break;
                default:
                    break;
            }
            week_div.appendChild(day_div);
            container.appendChild(week_div);
        }
    }
}
//根据小时数确定评分
function grade(hours){
    if (hours == 0){
        return 0;
    }
    if (0 < hours && hours < 4){
        return 1;
    }
    if (4 <= hours && hours < 8){
        return 2;
    }
    if (8 <= hours && hours < 12){
        return 3;
    }
    if (12 <= hours && hours < 16){
        return 4;
    }
    if (16 <= hours && hours < 20){
        return 5;
    }
    if (20 <= hours && hours <= 24){
        return 6;
    }
}


function divide(arr, N) {
    var result = [];
    for (var i = 0; i < arr.length; i += N) {
        result.push(arr.slice(i, i + N));
    }
    return result;
}

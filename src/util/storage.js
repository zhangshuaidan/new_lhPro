//封装过期控制代码
function set(key, value) {
    var Time = getExprie();
    localStorage.setItem(key, JSON.stringify({ data: value, time: Time }));
}


export function get(key) {
    var data = localStorage.getItem(key);
    
    if(data == null){
        let uuid = guid();
        set('uuid', uuid);        
        return uuid;
    }

    var dataObj = JSON.parse(data);
    if (new Date().getTime() - dataObj.time > 0) {
        let uuid = guid();
         set('uuid', uuid);
        return uuid;
    } else {

        var dataObjDatatoJson = dataObj.data
        return dataObjDatatoJson;
    }
}

// 获取今日凌晨的时间戳
function getExprie() {
    return new Date(new Date(new Date().setDate(new Date().getDate() + 1)).setHours(0, 0, 0, 0)).getTime()
}


//  生成uuid
function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
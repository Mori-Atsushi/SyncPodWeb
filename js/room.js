var arg = new Object;
var pair=location.search.substring(1).split('&');
for(var i=0;pair[i];i++) {
    var kv = pair[i].split('=');
    arg[kv[0]]=kv[1];
}
document.getElementById("app-room-url").href = "sync-pod://app.com/room?room_key=" + arg.room_key;
document.getElementById("room-key").innerHTML = "ルームキー：" + arg.room_key;

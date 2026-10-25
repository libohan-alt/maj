// 1. 初始化
let chun = [], xia = [], qiu = [], dong = [];
let players1 = [];
let players2 = [];
let players3 = [];
let players4 = [];
let throw_cards = [], free = [];
for (let i = 0; i < 36; i++) {
    chun.push(i);
    xia.push(i + 36);
    qiu.push(i + 72);
    dong.push(i + 108);
}
for (let i = 0; i > -1; i++) {
    if (players1.length === 13 && players2.length === 13 &&
        players3.length === 13 && players4.length === 13) {
        break;
    }
    let random = Math.floor(Math.random() * 144);
    if (random < 36) {
        for (let j = 0; j < chun.length; j++) {
            if (chun[j] === random) {
                let drawnTile = chun[j];
                chun.splice(j, 1);
                if (players1.length < 13) {
                    players1.push(drawnTile);
                } else if (players2.length < 13) {
                    players2.push(drawnTile);
                } else if (players3.length < 13) {
                    players3.push(drawnTile);
                } else if (players4.length < 13) {
                    players4.push(drawnTile);
                }
                break;
            }
        }
    } else if (random < 72) {
        for (let j = 0; j < xia.length; j++) {
            if (xia[j] === random) {
                let drawnTile = xia[j];
                xia.splice(j, 1);
                if (players1.length < 13) {
                    players1.push(drawnTile);
                } else if (players2.length < 13) {
                    players2.push(drawnTile);
                } else if (players3.length < 13) {
                    players3.push(drawnTile);
                } else if (players4.length < 13) {
                    players4.push(drawnTile);
                }
                break;
            }
        }
    } else if (random < 108) {
        for (let j = 0; j < qiu.length; j++) {
            if (qiu[j] === random) {
                let drawnTile = qiu[j];
                qiu.splice(j, 1);
                if (players1.length < 13) {
                    players1.push(drawnTile);
                } else if (players2.length < 13) {
                    players2.push(drawnTile);
                } else if (players3.length < 13) {
                    players3.push(drawnTile);
                } else if (players4.length < 13) {
                    players4.push(drawnTile);
                }
                break;
            }
        }
    } else if (random < 144) {
        for (let j = 0; j < dong.length; j++) {
            if (dong[j] === random) {
                let drawnTile = dong[j];
                dong.splice(j, 1);
                if (players1.length < 13) {
                    players1.push(drawnTile);
                } else if (players2.length < 13) {
                    players2.push(drawnTile);
                } else if (players3.length < 13) {
                    players3.push(drawnTile);
                } else if (players4.length < 13) {
                    players4.push(drawnTile);
                }
                break;
            }
        }
    }
}
for (let j = 0; j <= 144; j++) {
    free.push(j);
}
for (let j = 0; j < 13; j++) {
    for (let k = 0; k < free.length; k++) {
        if (free[k] === players1[j]) {
            free.splice(k, 1);
            k--;
        }
    }
    for (let k = 0; k < free.length; k++) {
        if (free[k] === players2[j]) {
            free.splice(k, 1);
            k--;
        }
    }
    for (let k = 0; k < free.length; k++) {
        if (free[k] === players3[j]) {
            free.splice(k, 1);
            k--;
        }
    }
    for (let k = 0; k < free.length; k++) {
        if (free[k] === players4[j]) {
            free.splice(k, 1);
            k--;
        }
    }
}
let random = Math.floor(Math.random() * 4);
let random1 = Math.floor(Math.random() * free.length);
if (random === 0) {
    players1.push(free[random1]);
    free.splice(random1, 1);
}
if (random === 1) {
    players2.push(free[random1]);
    free.splice(random1, 1);
}
if (random === 2) {
    players3.push(free[random1]);
    free.splice(random1, 1);
}
if (random === 3) {
    players4.push(free[random1]);
    free.splice(random1, 1);
}
for (let j = 0; j < players1.length; j++) {
    console.log(players1[j]);
    console.log(" ");
}
console.log("\n");
console.log("\n");
for (let i = 0; i < players2.length; i++) {
    console.log(players2[i]);
    console.log(" ");
}
console.log("\n");
console.log("\n");
for (let a = 0; a < players3.length; a++) {
    console.log(players3[a]);
    console.log(" ");
}
console.log("\n");
console.log("\n");
for (let a = 0; a < players4.length; a++) {
    console.log(players4[a]);
    console.log(" ");
}
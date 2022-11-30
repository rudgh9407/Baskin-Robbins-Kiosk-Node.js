let express = require('express')
let app = express();
let mysql = require('mysql');
let bodyParser = require('body-parser');
let fs = require('fs');

app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './src/pug');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./'));

let con = mysql.createConnection({
	host: `localhost`,
	user: `c16st10`,
	database: `c16st10`,
	password: `Z9U7dffwthoQloDI`
});

app.get('/kiosk', (req,res)=>{
  //--- 매출 목록 JSON으로 저장
  
  con.query('SELECT * FROM KioskAdmin', (err, result, field)=>{
    fs.writeFileSync('./src/adminList.json', JSON.stringify(result));
  })
  //--- 회원 번호 목록 JSON으로 저장
  let selectMember = 'SELECT * FROM KioskMember';
  let countMax = 0;
  let targetId = 1;
  let dayMax = '';
  let callCount = `SELECT count 'max', id FROM KioskMember WHERE count = (SELECT MAX(count) FROM KioskMember)`;
  con.query(selectMember, (err, result, field)=>{
    fs.writeFileSync('./src/memberList.json', JSON.stringify(result));
    con.query(callCount, (err1,result1, filed1)=>{
      countMax = result1[0].max;
      targetId = result1[0].id;
      con.query(`SELECT date FROM KioskMember WHERE id = ${targetId}`, (err2, result2, field2)=>{
        dayMax = result2[0].date;
        res.render('kioskPage', {maxCount: countMax, dayTarget: dayMax});
      })
    })
  })
})

app.post('/kiosk', (req, res, next)=>{
  //--- 신규 회원 => 레코드 추가 진행
  //--- 기존 회원 => 기존 레코드의 포인트 수정 진행
  let userId = req.body.id;
  let userNumber = req.body.number;
  let userPoint = req.body.point;
  let userCount = req.body.count;
  let userDate = req.body.date;
  let keyCount = req.body.keyCount;
  let userKey = req.body.key;;
  let resetCount = `UPDATE KioskMember SET count = 0 WHERE id != ${Number(userId)}`;
  if(keyCount == "2"){
    con.query(resetCount, (err,result,field)=>{
    })
  }
  let updateMember = `UPDATE KioskMember SET point = ${userPoint}, count = ${userCount}, date = "${userDate}" WHERE id = ${Number(userId)}`;
  let insertMember = `INSERT INTO KioskMember (number, point, count, date) VALUES ("${userNumber}", ${userPoint}, ${userCount}, "${userDate}")`;
  let sqlMember = (userKey == 0) ? (insertMember) : (updateMember);
  //--- 관리자 테이블 추가
  console.log('---------- adminData -------')
  let adminData = req.body.adminDataList;
  let adminList = [];
  adminData = adminData.split("||");
  for(let i=0; i<adminData.length; i++){
    adminList.push(adminData[i].split(','))
  }
  console.log(adminList);
  let adminInsert = `INSERT INTO KioskAdmin (category, menu, count, price, date) VALUES ?`;
  con.query(adminInsert, [adminList], (err, result, field)=>{
    console.log('-------- admin insert --------')
  })
  con.query(sqlMember, (err, result, field)=>{
    res.redirect('/kiosk');
  })
})


app.listen(30100, function(){
  console.log("KIOSK DB CONNECTION");
})

const rentalData = [
    {
        "index": 0,
        "name": "三興國民小學 | 視聽教室",
        "district": "信義區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 120,
        "cost": 550,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/c30d70d9f122/20190604/358cec9a8f8b4ead.jpg"]
      },
      {
        "index": 1,
        "name": "士林公民會館 | 202教室",
        "district": "士林區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 50,
        "cost": 170,
        opentime: "全天",
        device: "冷氣 / 會議桌 / 座椅 / 立扇",
        size: "200m 操場",
        img:
            ["https://service.gov.taipei/RAWebFiles/rental/41ab0acc761c/20190614/a8e76619770a4cb0.jpg",
                "https://blog.xuite.net/hsu042/twblog1/468696142/cover600.jpg",
                "https://service.gov.taipei/RAWebFiles/rental/3a9fcb5f04e4/20190325/e54a345bde5a46dc.jpg"],
        traffic:
            "公車：28、51、63、203、204、205、240<br />捷運：松山站5號出口<br />火車：松山車站",
        costcontent: "1050 元 / 2小時",
        organizer:
            "總務處 秦嗣輝<br />電話：27672907轉630<br />傳真：27661997<br />地址：台北市松山區八德路四段746號",
      },
      {
        "index": 2,
        "name": "士林公民會館 | 203教室",
        "district": "士林區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 50,
        "cost": 110,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/a5bf80613874/20190322/73410813547943d5.jpg"]
      },
      {
        "index": 3,
        "name": "士林公民會館 | 301教室",
        "district": "士林區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 50,
        "cost": 560,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/a5bf80613874/20190322/73410813547943d5.jpg"]
      },
      {
        "index": 4,
        "name": "士林公民會館 | 半戶外表演場",
        "district": "士林區",
        "type": [
          "藝文場館",
          "戶外"
        ],
        "number": 70,
        "cost": 550,
        "opentime": "晚上",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/25403e77ce87/20190322/5cf33fbaa4514df2.jpg"]
      },
      {
        "index": 5,
        "name": "士林高商 | 操場(運動場)",
        "district": "士林區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 1000,
        "cost": 290,
        "opentime": "全天",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/24e8cb8a19f2/20190619/8dd34c6cf63f465b.JPG"]
      },
      {
        "index": 6,
        "name": "士林國民中學 | 一般教室",
        "district": "士林區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 24,
        "cost": 870,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/17456e9ac6f1/20190613/651aa87be4f348d9.JPG"]
      },
      {
        "index": 7,
        "name": "士林新移民會館 | 2.多元文化園地1",
        "district": "士林區",
        "type": [
          "藝文場館",
          "室內"
        ],
        "number": 30,
        "cost": 20,
        "opentime": "下午",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/ed74549b8d3b/20200724/28c1b23422184996.jpg"]
      },
      {
        "index": 8,
        "name": "士林新移民會館 | 3.多元文化園地2",
        "district": "士林區",
        "type": [
          "藝文場館",
          "室內"
        ],
        "number": 30,
        "cost": 10,
        "opentime": "下午",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/385fb2706337/20200724/e5eaac6209e44572.jpg"]
      },
      {
        "index": 9,
        "name": "大屯國小 | 多元教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 40,
        "cost": 720,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://i2.wp.com/2.bp.blogspot.com/-_eyXUhDdn-4/VKzsxWWrOII/AAAAAAAAauc/AenNRfXhYLk/s1200/150106-blancstudio12.jpg"]
      },
      {
        "index": 10,
        "name": "大屯國小 | 多元教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 40,
        "cost": 560,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://i2.wp.com/2.bp.blogspot.com/-_eyXUhDdn-4/VKzsxWWrOII/AAAAAAAAauc/AenNRfXhYLk/s1200/150106-blancstudio12.jpg"]
      },
      {
        "index": 11,
        "name": "大屯國小 | 風雨操場",
        "district": "北投區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 20,
        "cost": 900,
        "opentime": "下午",
        "device": "運動設備",
        "img": ["https://pic.pimg.tw/weng3309/1513296555-1507325390.jpg"]
      },
      {
        "index": 12,
        "name": "大屯國小 | 操場",
        "district": "北投區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 50,
        "cost": 560,
        "opentime": "下午",
        "device": "運動設備",
        "img": ["https://pic.pimg.tw/weng3309/1513296555-1507325390.jpg"]
      },
      {
        "index": 13,
        "name": "大地工程處轄管太陽廣場 | 廣場",
        "district": "士林區",
        "type": [
          "廣場",
          "戶外"
        ],
        "number": 100,
        "cost": 980,
        "opentime": "早上",
        "img": ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nanchang_Bayi_Guangchang_20120723-20.jpg/325px-Nanchang_Bayi_Guangchang_20120723-20.jpg"]
      },
      {
        "index": 14,
        "name": "大理高級中學 | 視聽教室",
        "district": "萬華區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 100,
        "cost": 240,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://www.xles.ntpc.edu.tw/var/file/0/1000/img/140/750586153.jpg"]
      },
      {
        "index": 15,
        "name": "大龍國小 | 六藝教室",
        "district": "大同區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 910,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/b0aaaae11060/20190617/1a10b1a49c4f4f30.jpg"]
      },
      {
        "index": 16,
        "name": "大龍國小 | 視聽教室",
        "district": "大同區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 130,
        "cost": 470,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/5c613aeff3af/20190617/dea88e40b33545be.jpg"]
      },
      {
        "index": 17,
        "name": "七虎公園",
        "district": "北投區",
        "type": [
          "公園",
          "戶外"
        ],
        "number": 500,
        "cost": 30,
        "opentime": "下午",
        "device": "可供攀樹活動",
        "img": ["https://blog.sina.com.tw/myimages/188/111292/images/20111119180111826.jpg"]
      },
      {
        "index": 18,
        "name": "七星公園",
        "district": "北投區",
        "type": [
          "公園",
          "戶外"
        ],
        "number": 500,
        "cost": 420,
        "opentime": "下午",
        "device": "可供攀樹活動",
        "img": ["https://pswoodly.files.wordpress.com/2019/10/tn_dsc_8212.jpg?w=584&h=389"]
      },
      {
        "index": 19,
        "name": "三興公園",
        "district": "信義區",
        "type": [
          "公園",
          "戶外"
        ],
        "number": 100,
        "cost": 420,
        "opentime": "下午",
        "device": "可供攀樹活動",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/41ab0acc761c/20190614/a8e76619770a4cb0.jpg"]
      },
      {
        "index": 20,
        "name": "大同公園",
        "district": "大同區",
        "type": [
          "公園",
          "戶外"
        ],
        "number": 300,
        "cost": 600,
        "opentime": "下午",
        "device": "可供攀樹活動",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/41ab0acc761c/20190614/a8e76619770a4cb0.jpg"]
      },
      {
        "index": 21,
        "name": "中山區大直國民小學 | 視聽教室",
        "district": "中山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 156,
        "cost": 130,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/e10f55c9b800/20190614/a3e8b3420c404fb3.jpg"]
      },
      {
        "index": 22,
        "name": "中山區懷生國民小學 | 視聽教室",
        "district": "中山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 50,
        "cost": 280,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/b6a1eace90fa/20190613/5086c39e1a02418f.jpg"]
      },
      {
        "index": 23,
        "name": "中正區東門國民小學 | 操場",
        "district": "中正區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 500,
        "cost": 300,
        "opentime": "全天",
        "device": "運動設備",
        "img": [
          "https://service.gov.taipei/RAWebFiles/rental/2d9b41c94dca/20190613/b849306572884936.jpg",
          "https://az804957.vo.msecnd.net/photofunc/20160509091826_2.jpg",
          "https://az804957.vo.msecnd.net/photogym/20140627151649_%E6%96%B0%E5%BB%BA%E8%B7%91%E9%81%93.JPG"
        ]
      },
      {
        "index": 24,
        "name": "中正區河堤國民小學 | 戶外籃球場",
        "district": "中正區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 50,
        "cost": 700,
        "opentime": "下午",
        "device": "運動設備",
        "img": [
          "https://service.gov.taipei/RAWebFiles/rental/4fb592dbba13/20190617/13ac4fe2ee234588.jpg",
          "https://az804957.vo.msecnd.net/photogym/20170704145723_AXPN1YDNNJQ6POO9V9W0.jpg",
          "http://www.joyfulliving.com.tw/uploads/9/4/8/6/9486053/dsc07668_orig.jpg"
        ],
        "traffic": "捷運：中和新蘆線、松山新店線 (古亭站-同安街出口)<br />公車：297、671、673、1、251、252、236、208",
        "costcontent": "1400元/ 2小時",
        "organizer": "臺北市中正區河堤國民小學<br />總務處<br />聯絡人：張適宜<br />電話：23677144分機832<br />傳真：23685438<br />地址：臺北市中正區汀州路二段180號"
      },
      {
        "index": 25,
        "name": "中正區南門國民小學 | 戶外籃球場",
        "district": "中正區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 20,
        "cost": 200,
        "opentime": "下午",
        "device": "運動設備",
        "img": [
          "https://az804957.vo.msecnd.net/photogym/20140812103655_IMG_0999.JPG",
          "https://az804957.vo.msecnd.net/photofunc/20170420110333_DSC03262.JPG",
          "https://service.gov.taipei/RAWebFiles/rental/c8c100a90015/20190613/bbfd307f3817498a.jpg"
        ],
        "size": "92坪",
        "traffic": "捷運：小南門站2號出口步行2分鐘",
        "costcontent": "400元/ 2小時",
        "organizer": "臺北市中正區南門國民小學<br />聯絡人：許小姐<br />電話：2371-5052分機402<br />傳真：2331-7822<br />地址：臺北市中正區廣州街6號南門國小(總務處：2樓)"
      },
      {
        "index": 26,
        "name": "五分區民活動中心(大教室)",
        "district": "內湖區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 200,
        "cost": 60,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/db21a5e227a9/20190926/e85f9ca0ba29407b.jpg"]
      },
      {
        "index": 27,
        "name": "五分區民活動中心(小教室)",
        "district": "內湖區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 330,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/49718cc1f415/20190926/47234b1ba33f427e.jpg"]
      },
      {
        "index": 28,
        "name": "孔廟勤學廣場 | 戶外藝文活動",
        "district": "大同區",
        "type": [
          "藝文場館",
          "戶外"
        ],
        "number": 500,
        "cost": 310,
        "opentime": "晚上",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/763b7da0118f/20190612/ddeca992d06d489b.jpg"]
      },
      {
        "index": 29,
        "name": "孔廟詩經庭園 | 戶外藝文活動",
        "district": "大同區",
        "type": [
          "藝文場館",
          "戶外"
        ],
        "number": 200,
        "cost": 840,
        "opentime": "晚上",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/763b7da0118f/20190612/ddeca992d06d489b.jpg"]
      },
      {
        "index": 30,
        "name": "孔廟儒風廣場 | 戶外藝文活動",
        "district": "大同區",
        "type": [
          "藝文場館",
          "戶外"
        ],
        "number": 500,
        "cost": 530,
        "opentime": "晚上",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/763b7da0118f/20190612/ddeca992d06d489b.jpg"]
      },
      {
        "index": 31,
        "name": "文化走廊 | 集會活動",
        "district": "士林區",
        "type": [
          "藝文場館",
          "室內"
        ],
        "number": 250,
        "cost": 390,
        "opentime": "下午",
        "img": ["https://www.taitung.gov.tw/Upload/RelPic/33/180363/150acb5d-03b3-4520-961d-71715efd67d9.jpg"]
      },
      {
        "index": 32,
        "name": "文化區民活動中心 | 501教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 50,
        "cost": 190,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/d01d7ab0fedd/20200723/4c57478931c04c57.jpg"]
      },
      {
        "index": 33,
        "name": "文化區民活動中心 | 502教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 50,
        "cost": 590,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/73b6b812ee46/20200723/07c0a8cc86544499.jpg"]
      },
      {
        "index": 34,
        "name": "日祥區民活動中心-教室一",
        "district": "萬華區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 25,
        "cost": 570,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/37fbdc83b674/20190912/9ab6740edf434084.jpg"]
      },
      {
        "index": 35,
        "name": "日祥區民活動中心-教室三",
        "district": "萬華區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 25,
        "cost": 120,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/863fc765ff38/20190917/9f208ca504dd4a0f.jpg"]
      },
      {
        "index": 36,
        "name": "木新區民活動中心 | 教室一",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 120,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/13aa64ad9961/20190907/b7a34547d71a4676.jpg"]
      },
      {
        "index": 37,
        "name": "北投國民小學 | 操場",
        "district": "北投區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 300,
        "cost": 120,
        "opentime": "下午",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/52c3f6e36c93/20190614/b468f4316c4e432d.jpg"]
      },
      {
        "index": 38,
        "name": "北政國民中學 | 上操場",
        "district": "文山區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 350,
        "cost": 20,
        "opentime": "全天",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/8cfa7901ea9d/20190604/2507824f368e477d.JPG"]
      },
      {
        "index": 39,
        "name": "北政國民中學 | 康樂教室",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 90,
        "cost": 260,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/463d41ddfce3/20190604/889bd7cb3cb44188.jpg"]
      },
      {
        "index": 40,
        "name": "北原會館 | 二樓電腦教室",
        "district": "南港區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 19,
        "cost": 550,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/bb1c30aae824/20190530/1aaccc7f64bf4491.JPG"]
      },
      {
        "index": 41,
        "name": "北原會館 | 三樓工藝教室",
        "district": "南港區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 110,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/988655d66b89/20190530/6578b44f83c24f4a.JPG"]
      },
      {
        "index": 42,
        "name": "北原會館 | 三樓工藝教室",
        "district": "南港區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 680,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/988655d66b89/20190530/6578b44f83c24f4a.JPG"]
      },
      {
        "index": 43,
        "name": "北原會館 | 三樓學科教室（一）",
        "district": "南港區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 580,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/0a89cba6f0b8/20190530/d82cdbdc54e644db.JPG"]
      },
      {
        "index": 44,
        "name": "北原會館 | 三樓學科教室（一）",
        "district": "南港區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 170,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/0a89cba6f0b8/20190530/d82cdbdc54e644db.JPG"]
      },
      {
        "index": 45,
        "name": "北原會館 | 三樓學科教室（二）",
        "district": "南港區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 510,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/60f00f2662fa/20190530/d9a881973a3b4be6.JPG"]
      },
      {
        "index": 46,
        "name": "北原會館 | 四樓舞蹈教室",
        "district": "南港區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 940,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/08158a2f2350/20190530/78d16ab9a7aa4f12.JPG"]
      },
      {
        "index": 47,
        "name": "台北巿中山區中正國民小學 | 操場",
        "district": "中山區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 500,
        "cost": 610,
        "opentime": "下午",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/d5b8fa2de053/20190610/c2e20084ee2644e0.JPG"]
      },
      {
        "index": 48,
        "name": "台北市松山國小 | 操場",
        "district": "松山區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 1000,
        "cost": 500,
        "opentime": "全天",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/41ab0acc761c/20190614/a8e76619770a4cb0.jpg"]
      },
      {
        "index": 49,
        "name": "民生社區中心 | 401教室",
        "district": "松山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 32,
        "cost": 880,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/951195e08ea2/20190604/6421d5a8c3664ff8.jpg"]
      },
      {
        "index": 50,
        "name": "民生社區中心 | 401教室",
        "district": "松山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 32,
        "cost": 830,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/951195e08ea2/20190604/6421d5a8c3664ff8.jpg"]
      },
      {
        "index": 51,
        "name": "民生社區中心 | 402教室",
        "district": "松山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 32,
        "cost": 570,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/1f24af280fd6/20190604/6d5fd25a644440c0.jpg"]
      },
      {
        "index": 52,
        "name": "民生社區中心 | 402教室",
        "district": "松山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 32,
        "cost": 450,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/1f24af280fd6/20190604/6d5fd25a644440c0.jpg"]
      },
      {
        "index": 53,
        "name": "民生社區中心 | 813教室",
        "district": "松山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 35,
        "cost": 680,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/6aa83f7d5cdf/20190604/acd8b3ede61e4b60.jpg"]
      },
      {
        "index": 54,
        "name": "民生社區中心 | 814教室",
        "district": "松山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 35,
        "cost": 260,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/d3adad049b91/20190604/7b0377c5cd7844ff.jpg"]
      },
      {
        "index": 55,
        "name": "民生社區中心 | 815教室",
        "district": "松山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 50,
        "cost": 590,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/25575c674ecd/20190604/843b7ad88fd641ff.JPG"]
      },
      {
        "index": 56,
        "name": "民生社區中心 | 816教室",
        "district": "松山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 50,
        "cost": 350,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/1088abd5a3a9/20190604/45c901f652564d70.jpg"]
      },
      {
        "index": 57,
        "name": "民生社區中心 | 有氧教室",
        "district": "松山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 60,
        "cost": 550,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/19dc95b7af14/20190606/4a42c742a4c44645.jpg"]
      },
      {
        "index": 58,
        "name": "民生社區中心 | 空手道教室",
        "district": "松山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 550,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/77a97dc602c1/20190606/d5c3ea9670fb4371.JPG"]
      },
      {
        "index": 59,
        "name": "民生社區中心 | 柔道教室",
        "district": "松山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 360,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/41ab0acc761c/20190614/a8e76619770a4cb0.jpg"]
      },
      {
        "index": 60,
        "name": "民生社區中心 | 跆拳道教室",
        "district": "松山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 630,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/dca500c2da9c/20190606/e10ff6799de94ae7.JPG"]
      },
      {
        "index": 61,
        "name": "民族國民中學 | 操場(運動場)",
        "district": "大安區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 300,
        "cost": 20,
        "opentime": "下午",
        "device": "運動設備",
        "img": [
          "https://service.gov.taipei/RAWebFiles/rental/1a87903112ee/20190604/551bbc1145c14df9.jpg",
          "https://service.gov.taipei/RAWebFiles/rental/1a87903112ee/20190604/289253a4a75b461b.jpg"
        ]
      },
      {
        "index": 62,
        "name": "永春國民小學 | 研習教室",
        "district": "信義區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 60,
        "cost": 690,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/d587735d93d2/20190612/ca36bea5c72b4980.jpg"]
      },
      {
        "index": 63,
        "name": "吉慶區民活動中心 | 教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 210,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/27bff93a9ea7/20200723/49347dbb74034933.jpg"]
      },
      {
        "index": 64,
        "name": "朱馥區民活動中心 | (才藝教室)",
        "district": "中山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 410,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/675724e07507/20190903/49001bce15e641e8.jpg"]
      },
      {
        "index": 65,
        "name": "朱馥區民活動中心 | (舞蹈教室)",
        "district": "中山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 70,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/70c6d44a11a9/20190903/521ada020dfc4066.jpg"]
      },
      {
        "index": 66,
        "name": "百齡高級中學 | 教室",
        "district": "士林區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 25,
        "cost": 230,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/bdd4a20218b9/20190618/23777eb776e44b72.jpg"]
      },
      {
        "index": 67,
        "name": "百齡國小運動場 | 大操場",
        "district": "士林區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 2500,
        "cost": 180,
        "opentime": "全天",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/8009c497b461/20190614/4ec365c7a5404ad1.jpg"]
      },
      {
        "index": 68,
        "name": "至善國民中學 | 操場",
        "district": "士林區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 900,
        "cost": 390,
        "opentime": "全天",
        "device": "運動設備",
        "img": ["https://az804957.vo.msecnd.net/photogym/20140910214559_DSC_0435.JPG"]
      },
      {
        "index": 69,
        "name": "西松國民小學 | 律動教室",
        "district": "松山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 70,
        "cost": 490,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://az804957.vo.msecnd.net/photogym/20140708153843_DSC00024.jpg"]
      },
      {
        "index": 70,
        "name": "西園國民小學 | 視聽教室",
        "district": "萬華區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 70,
        "cost": 880,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/ff882be85c50/20190612/762bbed494d249c0.jpg"]
      },
      {
        "index": 71,
        "name": "秀山區民活動中心 | 9A教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 980,
        "opentime": "晚上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/34e7d84a53be/20200723/fbb5a56d96304f2a.jpg"]
      },
      {
        "index": 72,
        "name": "秀山區民活動中心 | 9C教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 690,
        "opentime": "晚上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/6f1f0309262e/20200723/1e4451ae5fee458b.jpg"]
      },
      {
        "index": 73,
        "name": "辛亥區民活動中心-二樓教室",
        "district": "大安區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 670,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/01d3c605baa2/20190910/3d7f1a1b4f1046a0.jpg"]
      },
      {
        "index": 74,
        "name": "里民活動中心 | 第一教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 30,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://www-ws.gov.taipei/001/Upload/317/relpic/14891/1961234/bd093452-a136-4686-9196-436789a35afd.jpg"]
      },
      {
        "index": 75,
        "name": "里民活動中心 | 第三教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 45,
        "cost": 940,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://www-ws.gov.taipei/001/Upload/317/relpic/14891/1961234/bd093452-a136-4686-9196-436789a35afd.jpg"]
      },
      {
        "index": 76,
        "name": "奇岩區民活動中心 | 教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 90,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/38f0e7fbf865/20200723/f438cd9c2e2e4c13.jpg"]
      },
      {
        "index": 77,
        "name": "忠順區民活動中心 | 教室一",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 340,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/b0641ddb3dc4/20190908/7f95103fd1314915.jpg"]
      },
      {
        "index": 78,
        "name": "明湖國民小學 | 視聽教室--會議室",
        "district": "內湖區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 112,
        "cost": 280,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://www.eyxjot.nat.gov.tw/rwd1321/store/f2/officeB1-c.jpg"]
      },
      {
        "index": 79,
        "name": "東湖國中活動中心4樓 | 室內球場",
        "district": "內湖區",
        "type": [
          "運動場館",
          "室內"
        ],
        "number": 40,
        "cost": 240,
        "opentime": "下午",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/1e1cd88b8caf/20190612/3f42840937b44cfb.JPG"]
      },
      {
        "index": 80,
        "name": "東園國民小學 | 東園國小-電腦教室",
        "district": "萬華區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 25,
        "cost": 360,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://4.bp.blogspot.com/-0aTTUQWSECk/V9C-sQj6nxI/AAAAAAAAA7E/0AjBK6Hc15gb1LSMqT1yQixuJ7BJaC8cQCLcB/s1600/20160907_150440.jpg"]
      },
      {
        "index": 81,
        "name": "東園國民小學 | 普通教室",
        "district": "萬華區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 25,
        "cost": 130,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2018/01/16/20180116-121237_U4095_M370028_acf7.jpg?itok=X8-sQu-2"]
      },
      {
        "index": 82,
        "name": "松山國民小學 | 視聽教室",
        "district": "松山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 80,
        "cost": 240,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/2137853aaefe/20190618/7be7bc0dc4d44c94.jpg"]
      },
      {
        "index": 83,
        "name": "林安泰古厝民俗文物館 | 前埕廣場",
        "district": "中山區",
        "type": [
          "廣場",
          "戶外"
        ],
        "number": 300,
        "cost": 90,
        "opentime": "下午",
        "img": ["https://5.blog.xuite.net/5/9/3/9/11825764/blog_777507/txt/16174626/0.jpg"]
      },
      {
        "index": 84,
        "name": "武功國民小學 | 操場",
        "district": "中正區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 500,
        "cost": 300,
        "opentime": "全天",
        "device": "運動設備",
        "img": ["https://img.ltn.com.tw/Upload/news/600/2019/03/16/2729095_1.jpg"]
      },
      {
        "index": 85,
        "name": "社子國民小學 | 一般教室",
        "district": "士林區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 160,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/b4269d70c4e1/20190613/0b481b4383234f35.jpg"]
      },
      {
        "index": 86,
        "name": "社子國民小學 | 後操場",
        "district": "士林區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 1000,
        "cost": 570,
        "opentime": "全天",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/f60ba3cfbda9/20190613/28c573d1340f4d10.jpg"]
      },
      {
        "index": 87,
        "name": "金華國民中學 | 操場",
        "district": "大安區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 800,
        "cost": 310,
        "opentime": "全天",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/e98dfa35669b/20190613/b0784ea568e74282.JPG"]
      },
      {
        "index": 88,
        "name": "長順區民活動中心-教室一",
        "district": "萬華區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 15,
        "cost": 130,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/de2773859952/20190917/bd8111cac25945ac.jpg"]
      },
      {
        "index": 89,
        "name": "青少年發展處 | 1樓戶外廣場",
        "district": "中正區",
        "type": [
          "廣場",
          "戶外"
        ],
        "number": 35,
        "cost": 810,
        "opentime": "晚上",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/15a81670a41e/20190619/52b35f41a0a64582.jpg"]
      },
      {
        "index": 90,
        "name": "青少年發展處 | 4樓舞蹈教室1",
        "district": "中正區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 180,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/a56e19e8f90c/20190331/1a452aeed3d543ff.JPG"]
      },
      {
        "index": 91,
        "name": "青少年發展處 | 4樓舞蹈教室2",
        "district": "中正區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 25,
        "cost": 220,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/d320c26e7c1e/20190331/68c6eb1bf10b45c0.JPG"]
      },
      {
        "index": 92,
        "name": "青少年發展處 | 4樓舞蹈教室3",
        "district": "中正區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 500,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/b9dae7190fa0/20190331/8a1047f6c6364262.JPG"]
      },
      {
        "index": 93,
        "name": "青少年發展處 | 5樓流行廣場",
        "district": "中正區",
        "type": [
          "廣場",
          "戶外"
        ],
        "number": 200,
        "cost": 430,
        "opentime": "晚上",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/f21793d821ec/20190331/f9621fdeac174e31.JPG"]
      },
      {
        "index": 94,
        "name": "青少年發展處 | 8樓綜合教室1",
        "district": "中正區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 12,
        "cost": 410,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/52785f3eab32/20191206/6e66cd28a67f47a0.jpg"]
      },
      {
        "index": 95,
        "name": "青少年發展處 | 8樓綜合教室3",
        "district": "中正區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 16,
        "cost": 960,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/9dc52a5d6d79/20190401/e18293bba57a4103.jpg"]
      },
      {
        "index": 96,
        "name": "南港高級中學 | 戶外籃球、排球場",
        "district": "南港區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 300,
        "cost": 430,
        "opentime": "下午",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/a70b8a273370/20190612/0406c7383cb844b0.JPG"]
      },
      {
        "index": 97,
        "name": "南港區成德國小 | 樂齡教室",
        "district": "南港區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 60,
        "cost": 610,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/41ab0acc761c/20190614/a8e76619770a4cb0.jpg"]
      },
      {
        "index": 98,
        "name": "南湖高中 | 100人視聽教室",
        "district": "內湖區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 100,
        "cost": 150,
        "opentime": "晚上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/50b5e96eda3d/20200317/5e5f0395156d455c.JPG"]
      },
      {
        "index": 99,
        "name": "南湖高中 | 100人視聽教室",
        "district": "內湖區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 100,
        "cost": 530,
        "opentime": "晚上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/50b5e96eda3d/20200317/5e5f0395156d455c.JPG"]
      },
      {
        "index": 100,
        "name": "南湖高中 | 100人視聽教室",
        "district": "內湖區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 100,
        "cost": 620,
        "opentime": "晚上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/50b5e96eda3d/20200317/5e5f0395156d455c.JPG"]
      },
      {
        "index": 101,
        "name": "南湖高中 | 200人視聽教室",
        "district": "內湖區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 200,
        "cost": 760,
        "opentime": "晚上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/50b5e96eda3d/20200317/5e5f0395156d455c.JPG"]
      },
      {
        "index": 102,
        "name": "南湖國民小學 | 視聽一教室",
        "district": "內湖區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 150,
        "cost": 310,
        "opentime": "晚上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/01b43ad70776/20190614/f1022e15659f481c.jpg"]
      },
      {
        "index": 103,
        "name": "客家文化會館 | 4樓教室",
        "district": "大安區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 18,
        "cost": 930,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/bf81439a9942/20191014/85d492027a944e0b.jpg"]
      },
      {
        "index": 104,
        "name": "客家藝文活動中心 | 3樓教室",
        "district": "大安區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 170,
        "opentime": "晚上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/9afb1c554ca5/20191124/33e981e4bcd64caf.jpg"]
      },
      {
        "index": 105,
        "name": "客家藝文活動中心 | 3樓教室",
        "district": "大安區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 100,
        "opentime": "晚上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/4c55e52d1753/20191124/cf0ae8bc3012465f.jpg"]
      },
      {
        "index": 106,
        "name": "建成國民中學 | 古蹟教室",
        "district": "大同區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 40,
        "cost": 90,
        "opentime": "晚上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/cd33df14d139/20190612/2eeb9f085b8a4c79.jpg"]
      },
      {
        "index": 107,
        "name": "政府原民會 | 飛機廣場/迎客坊",
        "district": "中山區",
        "type": [
          "廣場",
          "戶外"
        ],
        "number": 300,
        "cost": 670,
        "opentime": "早上",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/1ccdbff327cf/20190711/15911622ea294a0c.jpg"]
      },
      {
        "index": 108,
        "name": "泉源實小 | 操場",
        "district": "北投區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 50,
        "cost": 420,
        "opentime": "下午",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/598cc3b8ac65/20190613/46146197b6c143e1.jpg"]
      },
      {
        "index": 109,
        "name": "重慶國民中學 | 操場",
        "district": "大同區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 300,
        "cost": 20,
        "opentime": "全天",
        "device": "運動設備",
        "img": ["https://az804957.vo.msecnd.net/photofunc/20180426114136_0348-1.jpg"]
      },
      {
        "index": 110,
        "name": "烘培教室 | 烘培場地",
        "district": "士林區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 830,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://web.dwvs.cy.edu.tw/rmd/media/images/DSC02872.JPG"]
      },
      {
        "index": 111,
        "name": "動物保護處 | 迎風狗運動公園大犬區",
        "district": "松山區",
        "type": [
          "公園",
          "戶外"
        ],
        "number": 1000,
        "cost": 40,
        "opentime": "下午",
        "device": "可供攀樹活動",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/90f9fca850fb/20190722/1e7e7f33174441c9.JPG"]
      },
      {
        "index": 112,
        "name": "動物保護處 | 迎風狗運動公園小犬區",
        "district": "松山區",
        "type": [
          "公園",
          "戶外"
        ],
        "number": 1000,
        "cost": 180,
        "opentime": "下午",
        "device": "可供攀樹活動",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/90f9fca850fb/20190722/422c8cd8f3b74486.JPG"]
      },
      {
        "index": 113,
        "name": "區民活動中心 | 教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 45,
        "cost": 820,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://www-ws.gov.taipei/001/Upload/317/relpic/14891/1961232/7490596c-fc38-44bb-a840-2250dfae63ca.jpg"]
      },
      {
        "index": 114,
        "name": "唭哩岸區民活動中心 | 教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 120,
        "cost": 340,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/5e48a3c1483d/20200723/93b10ce59ffd4be4.jpg"]
      },
      {
        "index": 115,
        "name": "埤頭區民活動中心 | (A室活動教室)",
        "district": "中山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 50,
        "cost": 530,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/92e6148d0f2b/20190903/84dc6944e59246db.jpg"]
      },
      {
        "index": 116,
        "name": "埤頭區民活動中心 | (B室講習教室)",
        "district": "中山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 620,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/be1d63da5daa/20190903/87f50cc6ae994595.jpg"]
      },
      {
        "index": 117,
        "name": "崇仰區民活動中心 | 201教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 15,
        "cost": 290,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/6f4772701039/20200723/dcf7cef4dec748fb.jpg"]
      },
      {
        "index": 118,
        "name": "崇仰區民活動中心 | 202教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 180,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/7f472775ebe0/20200723/93f24f60333441f3.jpg"]
      },
      {
        "index": 119,
        "name": "康寧國小 | 操場",
        "district": "內湖區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 300,
        "cost": 610,
        "opentime": "下午",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/238e4dc54f67/20190614/61136782d92d460e.JPG"]
      },
      {
        "index": 120,
        "name": "康寧國小 | 操場",
        "district": "內湖區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 300,
        "cost": 630,
        "opentime": "下午",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/238e4dc54f67/20190614/61136782d92d460e.JPG"]
      },
      {
        "index": 121,
        "name": "教師研習中心 | 第一教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 40,
        "cost": 810,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/6cf3ef90b87a/20190424/bba8674cea804efc.JPG"]
      },
      {
        "index": 122,
        "name": "教師研習中心 | 第二教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 40,
        "cost": 900,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/27cfabb1d555/20190424/469288855e8e4aa6.JPG"]
      },
      {
        "index": 123,
        "name": "教師研習中心 | 第三教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 40,
        "cost": 540,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/e2edcc686941/20190424/14f971a100c94e77.JPG"]
      },
      {
        "index": 124,
        "name": "教師研習中心 | 第五教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 80,
        "cost": 120,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/236c08a48e6a/20190424/414656dcffcf4bed.JPG"]
      },
      {
        "index": 125,
        "name": "教師研習中心 | 第四教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 40,
        "cost": 900,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/236c08a48e6a/20190424/414656dcffcf4bed.JPG"]
      },
      {
        "index": 126,
        "name": "清江區民活動中心 | 教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 40,
        "cost": 710,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/2ef0ae11132d/20200723/51b9cdfa97c64a0f.jpg"]
      },
      {
        "index": 127,
        "name": "清江國民小學 | 大操場",
        "district": "北投區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 1000,
        "cost": 200,
        "opentime": "全天",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/fe7b275353f6/20190612/c4c3ae06613242b8.jpg"]
      },
      {
        "index": 128,
        "name": "富福區民活動中心-教室一",
        "district": "萬華區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 40,
        "cost": 390,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/4f7e744c57a1/20190918/c8a2b6bba5214d42.jpg"]
      },
      {
        "index": 129,
        "name": "復興高中 | 操場",
        "district": "北投區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 500,
        "cost": 130,
        "opentime": "下午",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/74ae329fe259/20190612/fcf62eb3a22e40c1.jpg"]
      },
      {
        "index": 130,
        "name": "敦化國民中學 | 室內溫水游泳池",
        "district": "松山區",
        "type": [
          "運動場館",
          "室內"
        ],
        "number": 50,
        "cost": 330,
        "opentime": "下午",
        "img": [
          "https://service.gov.taipei/RAWebFiles/rental/20f23e400509/20190613/bd8b816b57844d8a.jpg",
          "https://service.gov.taipei/RAWebFiles/rental/20f23e400509/20190613/8f316d182df64cce.jpg",
          "https://service.gov.taipei/RAWebFiles/rental/20f23e400509/20190613/75d5efc50d474e53.jpg"
        ]
      },
      {
        "index": 131,
        "name": "景美國中桌球教室 | 桌球教室",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 660,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/24f4ca73b017/20190613/4117057a24654f31.JPG"]
      },
      {
        "index": 132,
        "name": "景興國民中學 | 分組教室",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 10,
        "cost": 840,
        "opentime": "晚上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/84684f2643c2/20200622/d3b4e82e80204618.JPG"]
      },
      {
        "index": 133,
        "name": "景興國民中學 | 多功能教室(五)",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 800,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/76b62b9ae17b/20200622/a75aae3b7bb44053.JPG"]
      },
      {
        "index": 134,
        "name": "景興國民中學 | 普通教室",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 860,
        "opentime": "晚上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/c9a9cb795055/20200622/01047c89c645405c.JPG"]
      },
      {
        "index": 135,
        "name": "湖田國民小學 | 操場",
        "district": "北投區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 50,
        "cost": 840,
        "opentime": "下午",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/d74634051bea/20190613/2338e0e1030245cd.jpg"]
      },
      {
        "index": 136,
        "name": "華江高級中學 | 操場",
        "district": "萬華區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 200,
        "cost": 650,
        "opentime": "全天",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/d9aa69188440/20190606/05eac0072da84c70.JPG"]
      },
      {
        "index": 137,
        "name": "華江國小 | 校史室-教室",
        "district": "萬華區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 40,
        "cost": 280,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/d42f851b47ff/20190605/5d68c796883b40a1.jpg"]
      },
      {
        "index": 138,
        "name": "華江國小-華江學苑 | 教室",
        "district": "萬華區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 50,
        "cost": 620,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/1fb34a8ba83a/20190605/2cc20588003347d3.jpg"]
      },
      {
        "index": 139,
        "name": "陽明教養院 | 華岡2樓廣場",
        "district": "士林區",
        "type": [
          "廣場",
          "戶外"
        ],
        "number": 200,
        "cost": 290,
        "opentime": "晚上",
        "img": ["https://tour.ntpc.gov.tw/Content/Upload/Place/1b1393e9-745a-4a67-ad73-5229e9618147.jpg"]
      },
      {
        "index": 140,
        "name": "萬芳區民活動中心 | 教室一",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 25,
        "cost": 160,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/01cf2b388c6c/20190909/0787aad97656470a.jpg"]
      },
      {
        "index": 141,
        "name": "萬芳區民活動中心 | 教室二",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 40,
        "cost": 700,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/794c498dbd4c/20190909/fd75ddf6111a48fe.jpg"]
      },
      {
        "index": 142,
        "name": "萬青區民活動中心-教室一",
        "district": "萬華區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 640,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://www.nqu.edu.tw/upload/longtermcare/images/IMG_3371.JPG"]
      },
      {
        "index": 143,
        "name": "葫蘆國民小學 | 操場",
        "district": "士林區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 800,
        "cost": 540,
        "opentime": "全天",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/e0710fc11218/20190612/f6833ba717ea4d2b.jpg"]
      },
      {
        "index": 144,
        "name": "圖書館 | 三民分館研習教室",
        "district": "松山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 40,
        "cost": 120,
        "opentime": "晚上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/f80138358a34/20190418/82e7203a15ac4820.jpg"]
      },
      {
        "index": 145,
        "name": "圖書館 | 石牌分館研習教室",
        "district": "北投區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 35,
        "cost": 190,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/c69da44f614a/20190418/cc1836f99ea6406e.jpeg"]
      },
      {
        "index": 146,
        "name": "圖書館 | 總館11F研習教室",
        "district": "大安區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 40,
        "cost": 980,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/0a18cb69a005/20191113/5e9a3d2fffcc4916.jpg"]
      },
      {
        "index": 147,
        "name": "福志公園",
        "district": "士林區",
        "type": [
          "公園",
          "戶外"
        ],
        "number": 1200,
        "cost": 560,
        "opentime": "早上",
        "device": "可供攀樹活動",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/8f18224eebe1/20190829/ff7c2dc84b5546d6.jpg"]
      },
      {
        "index": 148,
        "name": "福林公園",
        "district": "士林區",
        "type": [
          "公園",
          "戶外"
        ],
        "number": 1500,
        "cost": 120,
        "opentime": "早上",
        "device": "可供攀樹活動",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/8f18224eebe1/20190829/ff7c2dc84b5546d6.jpg"]
      },
      {
        "index": 149,
        "name": "福星國民小學 | 視聽教室",
        "district": "萬華區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 87,
        "cost": 1000,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/85ee86fc3ad9/20190612/4aae5c870df34837.JPG"]
      },
      {
        "index": 150,
        "name": "臺北自來水園區 | 公館水岸廣場",
        "district": "中正區",
        "type": [
          "廣場",
          "戶外"
        ],
        "number": 1000,
        "cost": 250,
        "opentime": "早上",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/4114de8204f3/20190624/4d04e86c4b9e475e.jpg"]
      },
      {
        "index": 151,
        "name": "臺北自來水園區 | 消壓塔周邊廣場",
        "district": "中正區",
        "type": [
          "廣場",
          "戶外"
        ],
        "number": 100,
        "cost": 290,
        "opentime": "下午",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/e584061e6cef/20190624/1093b5a5e99648ad.jpg"]
      },
      {
        "index": 152,
        "name": "臺北自來水園區 | 景觀池前方廣場",
        "district": "中正區",
        "type": [
          "廣場",
          "戶外"
        ],
        "number": 200,
        "cost": 450,
        "opentime": "下午",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/e584061e6cef/20190624/1093b5a5e99648ad.jpg"]
      },
      {
        "index": 153,
        "name": "臺北自來水園區 | 園區入口前方廣場",
        "district": "中正區",
        "type": [
          "廣場",
          "戶外"
        ],
        "number": 100,
        "cost": 430,
        "opentime": "下午",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/76547ccb893a/20190624/8ddb3495ab6a42ba.jpg"]
      },
      {
        "index": 154,
        "name": "劍潭國民小學 | 視聽教室",
        "district": "士林區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 100,
        "cost": 840,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/41ab0acc761c/20190614/a8e76619770a4cb0.jpg"]
      },
      {
        "index": 155,
        "name": "樟新區民活動中心 | 9樓教室一",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 353,
        "cost": 930,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/a8e7f7f9b41e/20190907/d38d49da041e4b89.jpg"]
      },
      {
        "index": 156,
        "name": "樟新區民活動中心 | 9樓教室二",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 40,
        "cost": 650,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/cf97e21a36bb/20190907/6e03679394794799.jpg"]
      },
      {
        "index": 157,
        "name": "樟新區民活動中心 | 9樓教室三",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 35,
        "cost": 640,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/598cda01491f/20190907/6e429c2337bc4883.jpg"]
      },
      {
        "index": 158,
        "name": "興華國民小學 | 運動場-操場",
        "district": "文山區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 500,
        "cost": 300,
        "opentime": "早上",
        "device": "運動設備",
        "img": ["https://az804957.vo.msecnd.net/photogym/20140724113350_5HXH5KRM15YOJX2O4AAP.jpg"]
      },
      {
        "index": 159,
        "name": "興隆區民活動中心 | 小教室",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 15,
        "cost": 590,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/a40756fcbe72/20190907/837c2b6d5c0d43c1.jpg"]
      },
      {
        "index": 160,
        "name": "興隆區民活動中心 | 內教室",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 520,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/325e94f66e2c/20190907/1cb161b0070b4324.jpg"]
      },
      {
        "index": 161,
        "name": "興隆區民活動中心 | 外教室",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 180,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/774cdc9c6b72/20190907/406f704c68204997.jpg"]
      },
      {
        "index": 162,
        "name": "興業區民活動中心 | 小教室",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 70,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/43f418277805/20190908/b201ee0798d84e3d.jpg"]
      },
      {
        "index": 163,
        "name": "興義區民活動中心-教室二",
        "district": "萬華區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 24,
        "cost": 900,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://www.ckvs.ntpc.edu.tw/resource/openfid.php?id=8014&update_hits_count=0&update_hits_count=0"]
      },
      {
        "index": 164,
        "name": "興德國小普通教室 | 普通教室",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 160,
        "opentime": "晚上",
        "device": "桌椅",
        "img": ["https://eservices.taichung.gov.tw/Images/Home/LocationPhoto/%E5%9C%96%E7%89%873.jpg"]
      },
      {
        "index": 165,
        "name": "興豐區民活動中心 | 8樓內廳教室",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 740,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/0cfed2422f63/20190912/1f8b41d9cae14ccd.jpg"]
      },
      {
        "index": 166,
        "name": "興豐區民活動中心 | 8樓外廳教室",
        "district": "文山區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 15,
        "cost": 600,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/1d9d8105ccee/20190912/50447be265bc489d.jpg"]
      },
      {
        "index": 167,
        "name": "龍山國中普通教室 | 普通教室",
        "district": "萬華區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 330,
        "opentime": "晚上",
        "device": "桌椅",
        "img": ["https://img.news.ebc.net.tw/images/2018/05/16/15264817610948rFp4s688S8.jpg"]
      },
      {
        "index": 168,
        "name": "龍安國民小學 | 舞蹈教室",
        "district": "大安區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 40,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/0a7abcec5f62/20190612/1f7a622c477e4549.JPG"]
      },
      {
        "index": 169,
        "name": "龍安國民小學 | 操場",
        "district": "大安區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 300,
        "cost": 590,
        "opentime": "全天",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/56aa5df19869/20190612/3e31104258124085.JPG"]
      },
      {
        "index": 170,
        "name": "職能發展學院 | D201一般教室",
        "district": "士林區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 120,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/172fb5816069/20190523/b853b54ff1914905.JPG"]
      },
      {
        "index": 171,
        "name": "職能發展學院 | H302視聽教室",
        "district": "士林區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 90,
        "cost": 450,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/6caeaef28d5a/20190523/68f0ecb7277d4934.JPG"]
      },
      {
        "index": 172,
        "name": "職能發展學院 | H302視聽教室",
        "district": "士林區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 90,
        "cost": 380,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/6caeaef28d5a/20190523/68f0ecb7277d4934.JPG"]
      },
      {
        "index": 173,
        "name": "雙園國中科學樓1F | 視聽教室",
        "district": "萬華區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 120,
        "cost": 850,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/8075bbf534ab/20190613/4d953dc7516548f1.jpg"]
      },
      {
        "index": 174,
        "name": "雙園國中教室 | 一般教室",
        "district": "萬華區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 25,
        "cost": 120,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/0d0af1dc40f7/20190614/bb3b24f153b447e0.jpg"]
      },
      {
        "index": 175,
        "name": "雙溪公園",
        "district": "士林區",
        "type": [
          "公園",
          "戶外"
        ],
        "number": 1200,
        "cost": 680,
        "opentime": "早上",
        "device": "可供攀樹活動",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/8f18224eebe1/20190829/ff7c2dc84b5546d6.jpg"]
      },
      {
        "index": 176,
        "name": "雙溪國民小學 | 專科教室",
        "district": "士林區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 660,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/41ab0acc761c/20190614/a8e76619770a4cb0.jpg"]
      },
      {
        "index": 177,
        "name": "雙蓮國小 | 視聽教室",
        "district": "大同區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 160,
        "cost": 500,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/7f0406dea5ce/20190614/80a2622e8f6345be.jpg"]
      },
      {
        "index": 178,
        "name": "藝文推廣處大稻埕戲苑 | 803教室",
        "district": "大同區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 20,
        "cost": 790,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/a70a2691efd3/20190704/6854274ddf324d3b.jpg"]
      },
      {
        "index": 179,
        "name": "藝文推廣處藝術廣場 | 廣場",
        "district": "松山區",
        "type": [
          "廣場",
          "戶外"
        ],
        "number": 150,
        "cost": 630,
        "opentime": "全天",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/3f546f12b0f8/20190605/7af707f71fb54288.jpg"]
      },
      {
        "index": 180,
        "name": "麗山國民小學 | 視聽教室",
        "district": "內湖區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 120,
        "cost": 750,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/e509da4ece8b/20190603/c7625b142c5b4a83.jpg"]
      },
      {
        "index": 181,
        "name": "麗湖國民小學 | 4樓多功能教室",
        "district": "內湖區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 100,
        "cost": 40,
        "opentime": "下午",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/474837252e5f/20190711/5470c9de54514a89.JPG"]
      },
      {
        "index": 182,
        "name": "麗湖國民小學 | 自然教室",
        "district": "內湖區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 750,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/474837252e5f/20190711/5470c9de54514a89.JPG"]
      },
      {
        "index": 183,
        "name": "麗湖國民小學 | 電腦教室",
        "district": "內湖區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 30,
        "cost": 300,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://4.bp.blogspot.com/-0aTTUQWSECk/V9C-sQj6nxI/AAAAAAAAA7E/0AjBK6Hc15gb1LSMqT1yQixuJ7BJaC8cQCLcB/s1600/20160907_150440.jpg"]
      },
      {
        "index": 184,
        "name": "蘭雅國民小學 | 操場",
        "district": "士林區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 400,
        "cost": 690,
        "opentime": "全天",
        "device": "運動設備",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/41bf448071f3/20190614/ae445468d3ea4839.jpg"]
      },
      {
        "index": 185,
        "name": "蘭雅國民中學 | 普通教室",
        "district": "士林區",
        "type": [
          "教室",
          "室內"
        ],
        "number": 25,
        "cost": 330,
        "opentime": "全天",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/41ab0acc761c/20190614/a8e76619770a4cb0.jpg"]
      },
      {
        "index": 186,
        "name": "蘭雅國民中學 | 操場(室外運動場)",
        "district": "士林區",
        "type": [
          "運動場館",
          "戶外"
        ],
        "number": 500,
        "cost": 70,
        "opentime": "下午",
        "device": "運動設備",
        "img": ["https://az804957.vo.msecnd.net/photofunc/20180807140754_%E6%93%8D%E5%A0%B4.jpg"]
      }
];

export default rentalData;
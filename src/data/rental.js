const rentalData = [
    {
        index: 0,
        name: "士林公民會館 | 202教室",
        district: "中正區",
        type: ["教室"],
        number: 30,
        cost: 200,
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
        "index": 1,
        "name": "臺北市工務局公園路燈工程管理處 | 福林公園",
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
        "index": 2,
        "name": "臺北市工務局公園路燈工程管理處 | 雙溪公園",
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
        "index": 3,
        "name": "士林公民會館 | 202教室",
        "district": "士林區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 50,
        "cost": 170,
        "opentime": "早上",
        "device": "桌椅",
        "img": ["https://service.gov.taipei/RAWebFiles/rental/a5bf80613874/20190322/73410813547943d5.jpg"]
    },
    {
        "index": 4,
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
        "index": 5,
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
        "index": 6,
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
        "index": 7,
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
        "index": 8,
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
        "index": 9,
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
        "index": 10,
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
        "index": 11,
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
        "index": 12,
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
        "index": 13,
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
        "index": 14,
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
        "index": 15,
        "name": "文化走廊 | 集會活動",
        "district": "士林區",
        "type": [
            "藝文場館",
            "室內"
        ],
        "number": 250,
        "cost": 390,
        "opentime": "下午",
        "device": "無提供特別設備",
        "img": ["https://www.taitung.gov.tw/Upload/RelPic/33/180363/150acb5d-03b3-4520-961d-71715efd67d9.jpg"]
    },
    {
        "index": 16,
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
        "index": 17,
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
        "index": 18,
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
        "index": 19,
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
        "index": 20,
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
        "index": 21,
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
        "index": 22,
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
        "index": 23,
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
        "index": 24,
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
        "index": 25,
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
        "index": 26,
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
        "index": 27,
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
        "index": 28,
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
        "index": 29,
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
        "index": 30,
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
        "index": 31,
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
        
    },
    {
        "index": 32,
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
        "index": 33,
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
        "index": 34,
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
        "index": 35,
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
        "index": 36,
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
        "index": 37,
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
        "index": 38,
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
        "index": 39,
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
        "index": 40,
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
        
    },
    {
        "index": 41,
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
        "index": 42,
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
        "index": 43,
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
        "index": 44,
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
        "index": 45,
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
        "index": 46,
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
        "index": 47,
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
        "index": 48,
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
        "index": 49,
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
        "index": 50,
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
        "index": 51,
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
        "index": 52,
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
        "index": 53,
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
        "index": 54,
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
        "index": 55,
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
        "index": 56,
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
        "index": 57,
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
        
    },
    {
        "index": 58,
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
        
    },
    {
        "index": 59,
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
        
    },
    {
        "index": 60,
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
        
    },
    {
        "index": 61,
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
        
    },
    {
        "index": 62,
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
        
    },
    {
        "index": 63,
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
        
    },
    {
        "index": 64,
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
        
    },
    {
        "index": 65,
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
        
    },
    {
        "index": 66,
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
        
    },
    {
        "index": 67,
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
        
    },
    {
        "index": 68,
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
        
    },
    {
        "index": 69,
        "name": "士林公民會館 | 202教室",
        "district": "士林區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 50,
        "cost": 400,
        "opentime": "全天",
        "device": "桌椅",
        
    },
    {
        "index": 70,
        "name": "士林公民會館 | 202教室",
        "district": "士林區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 50,
        "cost": 620,
        "opentime": "全天",
        "device": "桌椅",
        
    },
    {
        "index": 71,
        "name": "士林公民會館 | 202教室",
        "district": "士林區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 50,
        "cost": 310,
        "opentime": "全天",
        "device": "桌椅",
        
    },
    {
        "index": 72,
        "name": "士林公民會館 | 203教室",
        "district": "士林區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 50,
        "cost": 630,
        "opentime": "全天",
        "device": "桌椅",
        
    },
    {
        "index": 73,
        "name": "士林公民會館 | 203教室",
        "district": "士林區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 50,
        "cost": 350,
        "opentime": "全天",
        "device": "桌椅",
        
    },
    {
        "index": 74,
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
        
    },
    {
        "index": 75,
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
        
    },
    {
        "index": 76,
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
        
    },
    {
        "index": 77,
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
        
    },
    {
        "index": 78,
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
        
    },
    {
        "index": 79,
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
        
    },
    {
        "index": 80,
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
        
    },
    {
        "index": 81,
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
        
    },
    {
        "index": 82,
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
        
    },
    {
        "index": 83,
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
        
    },
    {
        "index": 84,
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
        
    },
    {
        "index": 85,
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
        
    },
    {
        "index": 86,
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
        
    },
    {
        "index": 87,
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
        
    },
    {
        "index": 88,
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
        
    },
    {
        "index": 89,
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
        
    },
    {
        "index": 90,
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
        
    },
    {
        "index": 91,
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
        
    },
    {
        "index": 92,
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
        
    },
    {
        "index": 93,
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
        
    },
    {
        "index": 94,
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
        
    },
    {
        "index": 95,
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
        
    },
    {
        "index": 96,
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
        
    },
    {
        "index": 98,
        "name": "藝文推廣處藝術廣場 | 廣場",
        "district": "松山區",
        "type": [
            "廣場",
            "戶外"
        ],
        "number": 150,
        "cost": 630,
        "opentime": "全天",
        "device": "無提供特別設備",
        
    },
    {
        "index": 99,
        "name": "立士林國民中學 | 一般教室",
        "district": "士林區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 24,
        "cost": 870,
        "opentime": "全天",
        "device": "桌椅",
        
    },
    {
        "index": 100,
        "name": "立大理高級中學 | 視聽教室",
        "district": "萬華區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 100,
        "cost": 240,
        "opentime": "全天",
        "device": "桌椅",
        
    },
    {
        "index": 101,
        "name": "立北政國民中學 | 康樂教室",
        "district": "文山區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 90,
        "cost": 260,
        "opentime": "全天",
        "device": "桌椅",
        
    },
    {
        "index": 102,
        "name": "立建成國民中學 | 古蹟教室",
        "district": "大同區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 40,
        "cost": 90,
        "opentime": "晚上",
        "device": "桌椅",
        
    },
    {
        "index": 103,
        "name": "立景興國民中學 | 分組教室",
        "district": "文山區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 10,
        "cost": 840,
        "opentime": "晚上",
        "device": "桌椅",
        
    },
    {
        "index": 104,
        "name": "立景興國民中學 | 普通教室",
        "district": "文山區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 30,
        "cost": 860,
        "opentime": "晚上",
        "device": "桌椅",
        
    },
    {
        "index": 105,
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
        
    },
    {
        "index": 106,
        "name": "士林公民會館 | 半戶外表演場",
        "district": "士林區",
        "type": [
            "藝文場館",
            "戶外"
        ],
        "number": 70,
        "cost": 550,
        "opentime": "晚上",
        "device": "無提供特別設備",
        
    },
    {
        "index": 107,
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
        
    },
    {
        "index": 108,
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
        
    },
    {
        "index": 109,
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
        
    },
    {
        "index": 110,
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
        
    },
    {
        "index": 111,
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
        
    },
    {
        "index": 112,
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
        
    },
    {
        "index": 113,
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
        
    },
    {
        "index": 114,
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
        
    },
    {
        "index": 115,
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
        
    },
    {
        "index": 116,
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
        
    },
    {
        "index": 117,
        "name": "孔廟勤學廣場 | 戶外藝文活動",
        "district": "大同區",
        "type": [
            "藝文場館",
            "戶外"
        ],
        "number": 500,
        "cost": 310,
        "opentime": "晚上",
        "device": "無提供特別設備",
        
    },
    {
        "index": 118,
        "name": "孔廟詩經庭園 | 戶外藝文活動",
        "district": "大同區",
        "type": [
            "藝文場館",
            "戶外"
        ],
        "number": 200,
        "cost": 840,
        "opentime": "晚上",
        "device": "無提供特別設備",
        
    },
    {
        "index": 119,
        "name": "孔廟儒風廣場 | 戶外藝文活動",
        "district": "大同區",
        "type": [
            "藝文場館",
            "戶外"
        ],
        "number": 500,
        "cost": 530,
        "opentime": "晚上",
        "device": "無提供特別設備",
        
    },
    {
        "index": 120,
        "name": "青少年發展處 | 1樓戶外廣場",
        "district": "中正區",
        "type": [
            "廣場",
            "戶外"
        ],
        "number": 35,
        "cost": 810,
        "opentime": "晚上",
        "device": "無提供特別設備",
        
    },
    {
        "index": 121,
        "name": "青少年發展處 | 5樓流行廣場",
        "district": "中正區",
        "type": [
            "廣場",
            "戶外"
        ],
        "number": 200,
        "cost": 430,
        "opentime": "晚上",
        "device": "無提供特別設備",
        
    },
    {
        "index": 122,
        "name": "立陽明教養院 | 華岡2樓廣場",
        "district": "士林區",
        "type": [
            "廣場",
            "戶外"
        ],
        "number": 200,
        "cost": 290,
        "opentime": "晚上",
        "device": "無提供特別設備",
        
    },
    {
        "index": 123,
        "name": "立圖書館 | 三民分館研習教室",
        "district": "松山區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 40,
        "cost": 120,
        "opentime": "晚上",
        "device": "桌椅",
        
    },
    {
        "index": 124,
        "name": "立圖書館 | 石牌分館研習教室",
        "district": "北投區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 35,
        "cost": 190,
        "opentime": "早上",
        "device": "桌椅",
        
    },
    {
        "index": 125,
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
        
    },
    {
        "index": 126,
        "name": "大地工程處轄管太陽廣場 | 廣場",
        "district": "士林區",
        "type": [
            "廣場",
            "戶外"
        ],
        "number": 100,
        "cost": 980,
        "opentime": "早上",
        "device": "無提供特別設備",
        
    },
    {
        "index": 127,
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
        
    },
    {
        "index": 128,
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
        
    },
    {
        "index": 129,
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
        
    },
    {
        "index": 130,
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
        
    },
    {
        "index": 131,
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
        
    },
    {
        "index": 132,
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
        
    },
    {
        "index": 133,
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
        
    },
    {
        "index": 134,
        "name": "臺北自來水園區 | 公館水岸廣場",
        "district": "中正區",
        "type": [
            "廣場",
            "戶外"
        ],
        "number": 1000,
        "cost": 250,
        "opentime": "早上",
        "device": "無提供特別設備",
        
    },
    {
        "index": 135,
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
        
    },
    {
        "index": 136,
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
        
    },
    {
        "index": 137,
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
        
    },
    {
        "index": 138,
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
        
    },
    {
        "index": 139,
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
        
    },
    {
        "index": 140,
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
        
    },
    {
        "index": 141,
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
        
    },
    {
        "index": 142,
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
        
    },
    {
        "index": 143,
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
        
    },
    {
        "index": 144,
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
        
    },
    {
        "index": 145,
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
        
    },
    {
        "index": 146,
        "name": "政府原民會 | 飛機廣場/迎客坊",
        "district": "中山區",
        "type": [
            "廣場",
            "戶外"
        ],
        "number": 300,
        "cost": 670,
        "opentime": "早上",
        "device": "無提供特別設備",
        
    },
    {
        "index": 147,
        "name": "立景美國中桌球教室 | 桌球教室",
        "district": "文山區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 30,
        "cost": 660,
        "opentime": "下午",
        "device": "桌椅",
        
    },
    {
        "index": 148,
        "name": "立圖書館 | 總館11F研習教室",
        "district": "大安區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 40,
        "cost": 980,
        "opentime": "下午",
        "device": "桌椅",
        
    },
    {
        "index": 149,
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
        
    },
    {
        "index": 150,
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
        
    },
    {
        "index": 151,
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
        
    },
    {
        "index": 152,
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
        
    },
    {
        "index": 153,
        "name": "東湖國中活動中心4樓 | 室內球場",
        "district": "內湖區",
        "type": [
            "運動場館",
            "室內"
        ],
        "number": 40,
        "cost": 240,
        "opentime": "下午",
        "device": "無提供特別設備",
        
    },
    {
        "index": 154,
        "name": "臺北自來水園區 | 消壓塔周邊廣場",
        "district": "中正區",
        "type": [
            "廣場",
            "戶外"
        ],
        "number": 100,
        "cost": 290,
        "opentime": "下午",
        "device": "無提供特別設備",
        
    },
    {
        "index": 155,
        "name": "臺北自來水園區 | 景觀池前方廣場",
        "district": "中正區",
        "type": [
            "廣場",
            "戶外"
        ],
        "number": 200,
        "cost": 450,
        "opentime": "下午",
        "device": "無提供特別設備",
        
    },
    {
        "index": 156,
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
        
    },
    {
        "index": 157,
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
        
    },
    {
        "index": 158,
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
        "traffic": "捷運：<br />中和新蘆線、松山新店線 (古亭站-同安街出口)<br />公車：<br />297、671、673、1、251、252、236、208",
        "costcontent": "1400元 / 2小時 ",
        "organizer": "臺北市中正區河堤國民小學<br />總務處<br />聯絡人：張適宜<br />電話：23677144分機832<br />傳真：23685438<br />地址：臺北市中正區汀州路二段180號"
    },
    {
        "index": 159,
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
        "traffic": "捷運<br />小南門站2號出口步行2分鐘",
        "costcontent": "400元/ 2小時 ",
        "organizer": "臺北市中正區南門國民小學<br />聯絡人：許小姐<br />電話：2371-5052分機402<br />傳真：2331-7822<br />地址：臺北市中正區廣州街6號南門國小(總務處：2樓)"
    },
    {
        "index": 160,
        "name": "林安泰古厝民俗文物館 | 前埕廣場",
        "district": "中山區",
        "type": [
            "廣場",
            "戶外"
        ],
        "number": 300,
        "cost": 90,
        "opentime": "下午",
        "device": "無提供特別設備",
        
    },
    {
        "index": 161,
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
        
    },
    {
        "index": 162,
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
        
    },
    {
        "index": 163,
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
        
    },
    {
        "index": 164,
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
        
    },
    {
        "index": 165,
        "name": "敦化國民中學 | 室內溫水游泳池",
        "district": "松山區",
        "type": [
            "運動場館",
            "室內"
        ],
        "number": 50,
        "cost": 330,
        "opentime": "下午",
        "device": "無提供特別設備",
        
    },
    {
        "index": 166,
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
        
    },
    {
        "index": 167,
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
        
    },
    {
        "index": 168,
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
        
    },
    {
        "index": 169,
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
        
    },
    {
        "index": 170,
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
        
    },
    {
        "index": 171,
        "name": "公所 | 興義區民活動中心-教室二",
        "district": "萬華區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 24,
        "cost": 900,
        "opentime": "下午",
        "device": "桌椅",
        
    },
    {
        "index": 172,
        "name": "臺北自來水園區 | 園區入口前方廣場",
        "district": "中正區",
        "type": [
            "廣場",
            "戶外"
        ],
        "number": 100,
        "cost": 430,
        "opentime": "下午",
        "device": "無提供特別設備",
        
    },
    {
        "index": 173,
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
        
    },
    {
        "index": 174,
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
        
    },
    {
        "index": 175,
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
        
    },
    {
        "index": 176,
        "name": "立南港高級中學 | 戶外籃球、排球場",
        "district": "南港區",
        "type": [
            "運動場館",
            "戶外"
        ],
        "number": 300,
        "cost": 430,
        "opentime": "下午",
        "device": "運動設備",
        
    },
    {
        "index": 177,
        "name": "立景興國民中學 | 多功能教室(五)",
        "district": "文山區",
        "type": [
            "教室",
            "室內"
        ],
        "number": 30,
        "cost": 800,
        "opentime": "下午",
        "device": "桌椅",
        
    },
    {
        "index": 178,
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
        
    },
    {
        "index": 179,
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
        
    },
    {
        "index": 180,
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
        
    },
    {
        "index": 181,
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
        
    },
    {
        "index": 182,
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
        
    },
    {
        "index": 183,
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
        
    },
    {
        "index": 184,
        "name": "士林新移民會館 | 2.多元文化園地1",
        "district": "士林區",
        "type": [
            "藝文場館",
            "室內"
        ],
        "number": 30,
        "cost": 20,
        "opentime": "下午",
        "device": "無提供特別設備",
        
    },
    {
        "index": 185,
        "name": "士林新移民會館 | 3.多元文化園地2",
        "district": "士林區",
        "type": [
            "藝文場館",
            "室內"
        ],
        "number": 30,
        "cost": 10,
        "opentime": "下午",
        "device": "無提供特別設備",
        
    },
    {
        "index": 186,
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
        
    },
    {
        "index": 187,
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
        
    },
    {
        "index": 188,
        "name": "工務局公園路燈工程管理處 | 七虎公園",
        "district": "北投區",
        "type": [
            "公園",
            "戶外"
        ],
        "number": 500,
        "cost": 30,
        "opentime": "下午",
        "device": "可供攀樹活動",
        
    },
    {
        "index": 189,
        "name": "工務局公園路燈工程管理處 | 七星公園",
        "district": "北投區",
        "type": [
            "公園",
            "戶外"
        ],
        "number": 500,
        "cost": 420,
        "opentime": "下午",
        "device": "可供攀樹活動",
        
    },
    {
        "index": 190,
        "name": "工務局公園路燈工程管理處 | 三興公園",
        "district": "信義區",
        "type": [
            "公園",
            "戶外"
        ],
        "number": 100,
        "cost": 420,
        "opentime": "下午",
        "device": "可供攀樹活動",
        
    },
    {
        "index": 191,
        "name": "工務局公園路燈工程管理處 | 大同公園",
        "district": "大同區",
        "type": [
            "公園",
            "戶外"
        ],
        "number": 300,
        "cost": 600,
        "opentime": "下午",
        "device": "可供攀樹活動",
        
    }
];

export default rentalData;
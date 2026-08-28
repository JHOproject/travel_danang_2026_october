import { DayPlan, AlternativeStyle, BudgetTier, RestaurantItem } from '../types';

export const TRIP_INFO = {
  destination: '越南 峴港 (Da Nang) & 會安 (Hoi An) & 順化 (Hue)',
  startDate: '2026-10-01',
  endDate: '2026-10-06',
  duration: '6 天 5 夜 (5 個完整日遊玩)',
  flightArrival: '2026/10/01 09:00 抵達峴港國際機場 (DAD)',
  flightDeparture: '2026/10/06 17:30 峴港國際機場起飛 (建議 15:00 前抵達機場)',
  hotel: {
    name: '峴港半島飯店 (Peninsula Hotel Danang)',
    address: '84 Võ Nguyên Giáp, Mân Thái, Sơn Trà, Đà Nẵng',
    locationAdvantage: '緊鄰美溪沙灘與山茶半島海景第一排，擁有絕美高空無邊際泳池與海景房',
    checkInTime: '14:00 後 (可先寄放行李)',
    checkOutTime: '12:00 前'
  },
  weatherOverview: '10月份為中越氣候過渡期/秋雨季（平均氣溫 24°C - 30°C）。常有午後短暫陣雨，早晨及上午多放晴。巴拿山海拔高氣溫約 18°C-22°C 較為涼爽。',
  exchangeRateApprox: '1 TWD ≈ 800 VND (新台幣 1 元約等於 800 越南盾；快速心算：去掉後三個零乘以 1.25)'
};

export const MAIN_ITINERARY: DayPlan[] = [
  {
    dayNumber: 1,
    date: '2026/10/01',
    weekday: '星期四',
    title: '抵達峴港 ➔ 飯店寄放 ➔ 市區粉紅教堂與韓市場 ➔ 美溪沙灘 ➔ 山茶夜市與龍橋夜景',
    subtitle: '初訪東方夏威夷，粉紅浪漫、換匯採買與越式海鮮初體驗',
    highlights: ['峴港大教堂', '韓市場換匯', '半島飯店無邊際海景泳池', '美溪沙灘落日', '山茶夜市與龍橋散策'],
    meals: {
      breakfast: '機上輕食或出關後機場河粉',
      lunch: 'Bún Chả Cá 109 (米其林必比登推薦炸魚餅米線) 或 Bánh Xèo Bà Dưỡng (招牌越式酥脆煎餅)',
      dinner: 'Bé Mặn 海鮮餐廳 (美溪沙灘現撈活海鮮大排檔) 或 Hải Sản Năm Đảnh',
      snackOrCafe: 'Cộng Cà Phê (越共復古風格椰子咖啡)'
    },
    transportation: '機場專車/Grab 叫車接送至飯店；市區點對點以 Grab 車資約 30,000~60,000 VND (約 NT$40~75)',
    weatherAdvice: '今日主要在市區與飯店，下午若遇短暫陣雨剛好在半島飯店 Check-in 享受高空海景下午茶與無邊際泳池。',
    activities: [
      {
        time: '09:00 - 09:50',
        title: '抵達峴港國際機場 (DAD) & 入境',
        location: '峴港國際機場 T2 國際航廈',
        description: '出海關、領取行李、領取/開通 4G/5G 越南 SIM 卡或啟用 eSIM。於航廈大廳確認 Grab 乘車點（Grab Pick-up Area）。',
        category: 'transport',
        tags: ['出關', 'SIM卡', 'Grab'],
        tips: '走出航廈不要搭乘路邊隨意招攬的黑牌車，打開 Grab App 叫車最透明安全，綁定信用卡免找零。',
        costEstimate: 'Grab 到半島飯店約 120,000~150,000 VND (約 NT$150~190)',
        openingHours: '全天 24 小時營運 (國際航廈入境)',
        reservation: '出發前 3~7 天需在線上申請並列印越南電子簽證 (E-Visa)，並備妥護照影本與 eSIM',
        restrictions: ['海關查驗護照效期需滿 6 個月以上', '攜帶現金超過 5,000 美元或等值外幣需申報']
      },
      {
        time: '10:00 - 10:30',
        title: '前往「峴港半島飯店 (Peninsula Hotel)」寄放行李',
        location: '峴港半島飯店',
        description: '沿著海岸公路抵達半島飯店，前台辦理預辦入住登記手續並先寄放大型行李，換上輕便透氣衣物與太陽眼鏡。',
        category: 'relax',
        tags: ['飯店Check-in', '海景第一排'],
        tips: '半島飯店大廳高挑舒適，可先向櫃台索取飯店名片（附越文地址），方便後續搭車出示。',
        openingHours: '櫃台 24 小時服務；入住時間 14:00 後、退房時間 12:00 前',
        reservation: '已完成 5 晚海景房預訂 (出示訂房確認單與全體住客護照即可)',
        restrictions: ['全館客房室內全面禁菸', '頂樓無邊際泳池開放時間為 06:00 - 21:00 (未滿 12 歲兒童需家長陪同)']
      },
      {
        time: '10:45 - 11:30',
        title: '峴港粉紅大教堂 (Da Nang Cathedral)',
        location: '156 Trần Phú, Hải Châu 1, Đà Nẵng',
        description: '建於 1923 年法國殖民時期的哥德式粉紅教堂，屋頂有招牌避雷針公雞，又稱公雞教堂，是峴港最具代表性的夢幻地標。',
        category: 'sightseeing',
        tags: ['拍照地標', '粉紅建築', '法式風情'],
        tips: '教堂免費參觀，若正門未開可由側門/後方修道院小門進入拍照，請穿著過膝衣物以示莊重。',
        openingHours: '週一至週六 06:00-11:30、13:30-17:00；週日為彌撒日 (05:00-18:00 間歇彌撒)',
        reservation: '無需預約 (免費入場參觀)',
        restrictions: ['【穿著限制】：進入宗教場所請穿著過膝下著，嚴禁無袖背心、細肩帶或過度暴露服裝', '彌撒進行期間請保持肅靜，教堂內部禁止隨意走動拍照或大聲喧嘩']
      },
      {
        time: '11:45 - 12:30',
        title: '韓市場 (Chợ Hàn) & 周邊名店換匯',
        location: '119 Trần Phú (韓市場周邊金店)',
        description: '前往韓市場旁的知名銀樓（如 Kim Mỹ 或 Tiệm Vàng Soạn Hà）以百元美金新鈔或台幣換取越南盾，匯率公道透明。隨後可逛韓市場一樓買水果乾/腰果，或二樓訂製奧黛服飾。',
        category: 'shopping',
        tags: ['換匯金店', '傳統市場', '伴手禮'],
        tips: '美金大面額（100 USD 乾淨無折痕）匯率最優！韓市場二樓衣物記得適度殺價（約開價的 7-8 折）。',
        weatherBackup: '韓市場為全室內市場，雨天亦非常適合採購。',
        openingHours: '韓市場 06:00 - 19:00；周邊金店換匯 07:30 - 19:00',
        reservation: '無需預約',
        restrictions: ['【換匯限制】：金店僅接受 2013 年後發行、無任何污漬、蓋印、破損或折痕的 100 美元新鈔', '市場人潮密集，請隨時注意背包與隨身財物防扒']
      },
      {
        time: '12:30 - 13:45',
        title: '午餐：米其林必比登美食「Bún Chả Cá 109」或「Bánh Xèo Bà Dưỡng」',
        location: '109 Nguyễn Chí Thanh 或 K280/23 Hoàng Diệu',
        description: '品嚐峴港最著名的鮮甜魚餅米線，湯頭加入南瓜、高麗菜與菠蘿燉煮，鮮美清甜；或是隱藏巷弄中的酥脆炸蛋皮包鮮蝦豬肉的越式煎餅捲生菜！',
        category: 'food',
        tags: ['米其林必比登', '道地平民美食', '越式煎餅'],
        costEstimate: '每人約 40,000~80,000 VND (約 NT$50~100)',
        openingHours: 'Bún Chả Cá 109: 06:00 - 22:00；Bánh Xèo Bà Dưỡng: 09:30 - 21:30',
        reservation: '現場排隊入座 (翻桌速度極快，約等候 5~10 分鐘)',
        restrictions: ['巷弄內店家僅收現金 (VND)，不支援信用卡刷卡']
      },
      {
        time: '14:00 - 15:00',
        title: '午後咖啡時光：Cộng Cà Phê 椰子冰沙咖啡',
        location: '98-96 Bạch Đằng (韓江畔)',
        description: '坐在韓江畔的越共復古軍綠風格咖啡館，來一杯招牌濃郁香甜的椰子冰沙咖啡 (Cốt Dừa Cà Phê)，吹冷氣消暑。',
        category: 'food',
        tags: ['椰子咖啡', '文青復古', '韓江河畔'],
        costEstimate: '每杯約 55,000~65,000 VND (約 NT$70~80)',
        openingHours: '07:00 - 23:30 (每日營運)',
        reservation: '無需預約 (二樓臨江座位景觀最佳，客滿需稍候)',
        restrictions: ['室內全面禁菸', '支援現金及國際信用卡']
      },
      {
        time: '15:15 - 17:30',
        title: '回半島飯店正式入住 ＆ 無邊際海景泳池時光',
        location: '峴港半島飯店頂樓泳池',
        description: '辦理房間入住，進房欣賞壯麗的美溪海景。換上泳裝前往飯店高空無邊際泳池，一邊游泳一邊遠眺山茶半島與遼闊海洋。',
        category: 'relax',
        tags: ['半島飯店', '無邊際泳池', '海景放鬆'],
        tips: '飯店頂樓視野極佳，此時光線最柔和，適合拍海天一線的網美大片。',
        openingHours: '無邊際泳池 06:00 - 21:00；健身房 24 小時開放',
        reservation: '房客免費使用 (無需另外預約)',
        restrictions: ['進入泳池需著正式泳裝泳帽，禁止穿著棉質外衣下水', '池畔禁止攜帶玻璃器皿']
      },
      {
        time: '17:30 - 18:30',
        title: '美溪沙灘 (My Khe Beach) 傍晚夕陽漫步',
        location: '半島飯店正前方沙灘',
        description: '曾被《福布斯》評為「世界六大最美海灘之一」，沙質細白如粉，海浪平緩，赤腳踩在細沙上看著天空轉為藍調晚霞。',
        category: 'relax',
        tags: ['世界最美沙灘', '夕陽', '赤腳漫步'],
        openingHours: '公共沙灘 24 小時開放 (救生員執勤時間 05:00 - 18:30)',
        reservation: '無 (自由漫步)',
        restrictions: ['【海域安全】：18:30 救生員下班後或遇紅旗警示時嚴禁下海游泳', '沙灘全面禁止亂丟垃圾或施放未經許可之煙火']
      },
      {
        time: '18:45 - 20:15',
        title: '晚餐：美溪海鮮盛宴「Bé Mặn」現撈活海鮮',
        location: 'Lô 11 Võ Nguyên Giáp (距離飯店車程 3 分鐘)',
        description: '峴港最火紅的平民海鮮大排檔，水缸中挑選生猛大頭蝦、花蟹、蒜蓉烤扇貝、蔥油烤生蠔、清蒸花蛤、辣椒炒螃蟹。',
        category: 'food',
        tags: ['活海鮮大排檔', '炭烤扇貝', '避坑指南'],
        tips: '點海鮮時請店員當場秤重並確認「公斤單價」，通常兩人吃大飽約 600,000~1,000,000 VND (約 NT$750~1250)。',
        costEstimate: '每人約 350,000~500,000 VND (約 NT$450~650)',
        openingHours: '09:00 - 23:00 (晚餐尖峰 18:30 - 20:00 人潮最多)',
        reservation: '大排檔採現場挑選入座，建議 18:30 前抵達以確保靠海通風好座位',
        restrictions: ['【防宰注意】：撈取海鮮時請確認瀝乾水份再上秤，並記下白板上的「每公斤單價 (Kg)」', '店內濕紙巾與小菜通常額外計費 (約 3,000~5,000 VND)，不需使用可請店員收回']
      },
      {
        time: '20:30 - 22:00',
        title: '山茶夜市 (Chợ Đêm Sơn Trà) ＆ 龍橋 (Dragon Bridge) 夜景',
        location: 'Mai Hắc Đế, An Hải Trung, Sơn Trà',
        description: '逛充滿活力的山茶夜市，品嚐烤米紙（越南披薩）、炒冰，步行至龍橋與愛情鎖橋欣賞韓江倒影。',
        category: 'nightlife',
        tags: ['夜市小吃', '龍橋夜景', '愛情鎖橋'],
        tips: '人潮擁擠時注意隨身包包與手機；龍橋若遇週五/六/日晚間 21:00 會上演壯觀的噴火噴水秀！',
        openingHours: '山茶夜市 18:00 - 23:30 (每日營運)',
        reservation: '無需預約',
        restrictions: ['夜市攤販多數僅收現金，請自備小額越南盾 (20k/50k/100k)', '龍橋週末封路管制時間為 20:30 - 21:30 (期間車輛禁止通行)']
      }
    ]
  },
  {
    dayNumber: 2,
    date: '2026/10/02',
    weekday: '星期五',
    title: '巴拿山太陽世界 (Ba Na Hills) 夢幻法式城堡與黃金佛手橋 ➔ 絕美夜景酒吧',
    subtitle: '漫步雲端仙境、世界最長纜車、巨型佛手橋與歐洲中古城堡',
    highlights: ['黃金佛手橋 (Golden Bridge)', '太陽世界纜車', '法國村城堡', 'Fantasy Park 室內樂園', '高空景觀酒吧'],
    meals: {
      breakfast: '半島飯店豐盛自助早餐',
      lunch: '巴拿山國際百匯 Buffet (如 Arapang 或 Beer Plaza 自助餐)',
      dinner: 'Madame Hạnh (米其林推薦庭園越式餐廳) 或 峴港披薩神店 Pizza 4P’s',
      snackOrCafe: '巴拿山法式烘焙甜點 / 精釀啤酒'
    },
    transportation: '預訂一日包車（往返半島飯店與巴拿山，含司機等候約 8 小時，費用約 650,000~800,000 VND）',
    weatherAdvice: '巴拿山海拔 1,487 公尺，山頂氣溫比平地低約 5~8°C 且山區易起霧或降雨。務必早起出發搶先拍照，並攜帶防風薄外套、雨具或雨衣。',
    activities: [
      {
        time: '07:30 - 08:30',
        title: '飯店晨光早餐 ＆ 專車前往巴拿山',
        location: '半島飯店 ➔ 巴拿山 (約 45 分鐘車程)',
        description: '早起享用飯店多樣化越式與西式早餐，08:15 司機於飯店大廳接送直奔巴拿山，避開 9 點過後的大批旅行團。',
        category: 'transport',
        tags: ['早出發避人潮', '專車包車'],
        openingHours: '包車約定 08:15 大廳接駁 (全程等候 8 小時)',
        reservation: '需提前 1 天於 Klook / Grab / 飯店櫃台預約專車',
        restrictions: ['包車超時費用約 100,000 VND / 小時', '攜帶雨具、防風薄外套與好走的運動鞋']
      },
      {
        time: '08:45 - 09:15',
        title: '搭乘世界紀錄纜車直登雲霄',
        location: 'Ba Na Hills Hoi An Station 纜車站',
        description: '搭乘名列金氏世界紀錄「單線最長、落差最大」的登山纜車，腳下是壯麗的熱帶原始森林與飛瀑，20 分鐘直達山腰。',
        category: 'sightseeing',
        tags: ['世界最長纜車', '雲海絕景'],
        costEstimate: '門票+纜車+午餐Buffet套票約 1,250,000 VND (約 NT$1,560)',
        openingHours: '纜車營運 08:00 - 17:00 (最晚下山纜車 17:00)',
        reservation: '【強烈建議預購】：建議提早 1~3 天在線上 (Klook/KKday) 預購 QR code 電子票，直接掃碼入園省去現場排隊購票 30 分鐘',
        restrictions: ['巴拿山園區嚴禁攜帶外食與熟食進入 (隨身水瓶除外)', '懼高症或耳壓敏感者請坐纜車內側並做吞嚥動作']
      },
      {
        time: '09:15 - 10:30',
        title: '經典必拍：黃金佛手橋 (Golden Bridge) ＆ 愛情花園',
        location: '巴拿山黃金橋',
        description: '從峭壁間伸出兩隻長滿青苔的巨型石雕佛手，托起懸空的金色緞帶拱橋。漫步於雲霧飄渺間，宛如置身希臘神話！隨後散步至 Le Jardin D’Amour 九大主題愛情花園與百年百年酒窖。',
        category: 'sightseeing',
        tags: ['世界級地標', '佛手金橋', '網美必訪'],
        tips: '早晨 9:30 前遊客最少，拍照背景最乾淨；若遇山間晨霧，反而更添仙氣。',
        openingHours: '08:00 - 17:00 (09:00 - 11:30 為人潮尖峰)',
        reservation: '憑巴拿山通票即可進入',
        restrictions: ['黃金橋上嚴禁攀爬欄杆或倚靠懸空邊緣', '橋面禁止使用大型腳架或飛行未經核准之空拍機/無人機']
      },
      {
        time: '10:45 - 12:30',
        title: '轉乘月亮城堡列車 ＆ 法國村 (French Village) 漫步',
        location: '巴拿山山頂法國村',
        description: '搭乘山頂小火車前往「月亮城堡」，體驗 4D/5D 飛翔影院；回到法國村，在充滿哥德式尖頂教堂、石磚噴泉廣場與街頭藝人雜耍的歐洲中古世紀街道間漫遊。',
        category: 'sightseeing',
        tags: ['法式建築', '月亮城堡', '街頭表演'],
        openingHours: '法國村全區 08:30 - 17:00；街頭遊行表演通常於 10:30 & 14:00 登場',
        reservation: '無需預約 (包含於通票內)',
        restrictions: ['山頂石板路高低起伏，嚴禁穿細高跟鞋或易滑拖鞋']
      },
      {
        time: '12:30 - 13:45',
        title: '午餐：巴拿山國際百匯自助餐 (Arapang 或 Beer Plaza)',
        location: '巴拿山餐廳區',
        description: '享用包含越式烤肉、鮮蝦春捲、西式牛排、沙拉甜點及現烤料理的上百道多國美食自助午餐。',
        category: 'food',
        tags: ['國際Buffet', '現烤BBQ', '吃到飽'],
        openingHours: '自助餐供餐時間 11:00 - 15:00',
        reservation: '建議購買含 Buffet 之套票 (持票券 QR Code 於餐廳門口核銷入座)',
        restrictions: ['用餐時間限制約 90 分鐘', '取餐請維持禮貌排隊，食物禁止外帶打包']
      },
      {
        time: '14:00 - 15:30',
        title: '高山軌道滑車 (Alpine Coaster) ＆ Fantasy Park 娛樂區',
        location: '巴拿山 Fantasy Park',
        description: '體驗自己掌控煞車的刺激高山滑車（沿著山崖疾速俯衝），若天候降雨可直接轉入東南亞最大室內遊樂園 Fantasy Park，免費暢玩跳樓機、攀岩、恐龍公園與各類街機。',
        category: 'relax',
        tags: ['軌道滑車', '室內遊樂園', '雨天備案'],
        weatherBackup: 'Fantasy Park 全為室內空調建築，雨天體驗完全不受影響。',
        openingHours: 'Fantasy Park 08:30 - 17:00；Alpine Coaster 08:30 - 16:30 (遇大雨暫停營運)',
        reservation: '室內設施全數免費暢玩 (蠟像館需另付 100k VND)',
        restrictions: ['【高山滑車限制】：身高未滿 120cm 兒童嚴禁單獨搭乘（需由成人陪同）、孕婦與心臟病患者禁止搭乘', '滑車下衝時請保持 25 公尺以上安全車距，全程禁止鬆開煞車把手']
      },
      {
        time: '16:00 - 17:30',
        title: '搭乘纜車下山 ＆ 專車返回半島飯店',
        location: '巴拿山 ➔ 半島飯店',
        description: '搭纜車穿過雲層下山，包車司機於出口處等候接回飯店，梳洗休息放鬆雙腿。',
        category: 'transport',
        tags: ['下山', '舒適回程'],
        openingHours: '巴拿山下山最後纜車時間為 17:00',
        reservation: '已與包車司機約定 16:30~17:00 於停車場接送',
        restrictions: ['請務必於 16:45 前抵達山頂纜車站，避免錯過末班下山纜車']
      },
      {
        time: '18:00 - 19:30',
        title: '舒壓放鬆：越式草本熱石 SPA 按摩 (Herbal Spa / Babylon Spa)',
        location: 'Herbal Spa (距離半島飯店僅 5 分鐘車程)',
        description: '走了一整天巴拿山，安排一場 90 分鐘的傳統越式草本精油與溫熱火山石全身按摩，徹底釋放肩頸與腿部疲勞。',
        category: 'relax',
        tags: ['越式按摩', '熱石精油', '極致放鬆'],
        tips: '熱門 SPA 請提前 1~2 天在線上或透過飯店櫃台預約，享受迎賓茶點與術後優格。',
        costEstimate: '90 分鐘全身按摩約 450,000~600,000 VND (約 NT$560~750)',
        openingHours: '09:00 - 22:30 (最晚預約進場時間 21:00)',
        reservation: '【強烈需預約】：熱門傍晚時段（18:00-20:00）極易客滿，必須提早 1~2 天透過官方 LINE/WhatsApp 或官網預約',
        restrictions: ['孕婦或近期手術者請於填寫諮詢表時主動告知芳療師', '按摩前 30 分鐘請避免暴飲暴食或大量飲酒']
      },
      {
        time: '19:45 - 21:15',
        title: '晚餐：頂級越式料理「Madame Hạnh」或 自家製起司「Pizza 4P’s」',
        location: 'Madame Hạnh (79 Lương Nhữ Hộc) 或 Pizza 4P’s Hoàng Văn Thụ',
        description: '在法式殖民庭院中品嚐極致精緻的炭烤大蝦、甘蔗蝦與香茅烤魚；或是去吃全越南評價最高、現做手工布拉塔起司 (Burrata) 與蟹肉義大利麵的傳奇名店 Pizza 4P’s。',
        category: 'food',
        tags: ['米其林推薦', '庭園私廚', 'Pizza 4Ps'],
        costEstimate: '每人約 250,000~400,000 VND (約 NT$310~500)',
        openingHours: 'Madame Hạnh: 10:00 - 22:00；Pizza 4P’s: 10:00 - 22:30',
        reservation: '【特別提醒】：Pizza 4P’s 為峴港最難訂餐廳，強烈建議出發前 3~7 天透過官方網站或 Google Maps 線上訂位！Madame Hạnh 建議提早 1 天預訂',
        restrictions: ['如預約 Pizza 4P’s，請準時抵達，逾時保留 15 分鐘', '支援多元行動支付與各大國際信用卡 (Visa/Master/JCB)']
      },
      {
        time: '21:30 - 22:30',
        title: '夜生活：韓江夜景高空酒吧「Brilliant Top Bar」或「Novotel Sky36」',
        location: '韓江畔高空酒吧',
        description: '點一杯招牌調酒，居高臨下俯瞰璀璨的韓江七彩大橋與峴港百萬夜景。',
        category: 'nightlife',
        tags: ['高空酒吧', '百萬夜景', '微醺調酒'],
        costEstimate: '調酒每杯約 150,000~220,000 VND (約 NT$190~275)',
        openingHours: 'Brilliant Top Bar: 16:00 - 23:00；Sky36: 18:00 - 02:00',
        reservation: '週五/週六臨江景觀第一排沙發建議提前 1 天電話或粉專訂位',
        restrictions: ['【服裝與年齡限制】：Novotel Sky36 嚴禁著拖鞋、男士無袖背心或運動短褲；入場需年滿 18 歲 (請備妥護照影本或照片備查)']
      }
    ]
  },
  {
    dayNumber: 3,
    date: '2026/10/03',
    weekday: '星期六',
    title: '五行山探秘 ➔ 迦南島搖滾旋轉竹籃船 ➔ 會安古鎮浪漫燈籠夜遊',
    subtitle: '喀斯特鐘乳石洞穴、瘋狂水上陀螺竹籃船、世界文化遺產夢幻燈籠海',
    highlights: ['五行山玄空洞', '迦南島椰林旋轉桶船', '會安古鎮法式黃牆', 'Faifo Coffee 屋頂俯瞰', '秋盆河放水燈與燈籠夜市'],
    meals: {
      breakfast: '半島飯店活力自助早餐',
      lunch: '會安高樓麵 (Cao Lầu) 與 越式白玫瑰 / 炸雲吞 (Morning Glory 或 Miss Ly)',
      dinner: 'Bale Well 炭烤豬肉串生菜春捲名店 或 燈籠水岸景觀餐廳 The Cargo Club',
      snackOrCafe: 'Faifo Coffee (古鎮全景頂樓露台) 或 Mót Hội An (招牌荷花草本涼茶)'
    },
    transportation: '預訂峴港往返會安一日包車（含五行山、迦南島、會安古鎮，全程 8~10 小時，約 700,000~900,000 VND）',
    weatherAdvice: '上午參觀五行山需走石階梯，建議穿防滑平底鞋；下午迦南島竹籃船會發遮陽斗笠/救生衣；傍晚會安古鎮微風涼爽，燈籠在夜色中最美。',
    activities: [
      {
        time: '08:30 - 09:15',
        title: '專車出發前往「五行山 (Marble Mountains)」',
        location: '52 Huyền Trân Công Chúa, Hòa Hải, Ngũ Hành Sơn',
        description: '由金、木、水、火、土五座大理石與石灰岩山峰組成，其中以「水山」規模最大、景觀最奇特。',
        category: 'sightseeing',
        tags: ['大理石山', '天然洞穴', '佛教聖地'],
        tips: '可搭乘透明景觀電梯上山，節省體力，電梯票單程 15,000 VND。',
        costEstimate: '門票+電梯約 55,000 VND (約 NT$70)',
        openingHours: '景區開放 07:00 - 17:30 (登山電梯營運至 17:00)',
        reservation: '現場購票即可 (可買門票+單程電梯聯票)',
        restrictions: ['【地形與服裝限制】：洞穴與山頂階梯經年潮濕濕滑，嚴禁穿著高跟鞋或皮鞋，務必穿著抓地力佳之防滑平底鞋/運動鞋', '洞內階梯陡峭，年長者或行動不便者建議至玄空洞即折返，避免攀登望江台之極陡坡']
      },
      {
        time: '09:15 - 10:45',
        title: '探索玄空洞 (Huyen Khong Cave) ＆ 望江台',
        location: '五行山水山深處',
        description: '走進巨大的天然喀斯特溶洞「玄空洞」，陽光透過頂部天然天井如聖光般灑落在佛像與香爐上，神秘而震撼。接著登上望江台眺望峴港海岸線。',
        category: 'sightseeing',
        tags: ['聖光絕景', '鐘乳石洞', '文化遺產'],
        openingHours: '07:00 - 17:30 (上午 09:30 - 11:00 聖光天井照射角度最美)',
        reservation: '無需預約',
        restrictions: ['玄空洞供奉佛像，請勿大聲喧嘩或攀爬神龕石雕', '洞內光線較暗，留意頭頂鐘乳石滴水與腳下青苔']
      },
      {
        time: '11:15 - 12:30',
        title: '午餐：會安古鎮三大代表名菜「高樓麵、白玫瑰、炸餛飩」',
        location: '會安古鎮名店「Morning Glory Original」或「Miss Ly Cafe」',
        description: '品嚐使用會安千年古井水製作的 Q 彈高樓麵 (Cao Lầu)、透亮似花瓣的白玫瑰 (Bánh Bao Bánh Vạc) 與酥脆香濃的越式炸餛飩。',
        category: 'food',
        tags: ['會安三大名菜', '高樓麵', '白玫瑰'],
        costEstimate: '每人約 150,000~250,000 VND (約 NT$190~310)',
        openingHours: '10:00 - 22:00 (全日無休)',
        reservation: '現場入座 (尖峰時段 12:00~13:00 稍候約 10 分鐘，亦可提前電話預訂)',
        restrictions: ['支援現金與信用卡支付', '古鎮老宅內禁止吸菸']
      },
      {
        time: '13:00 - 14:45',
        title: '迦南島 (Cam Thanh Coconut Village) 搖滾旋轉竹籃船 ＆ 釣小螃蟹',
        location: '迦南島水椰林',
        description: '搭乘越南傳統半球形竹篾「椰子碗桶船」，穿梭在熱帶水椰子叢林間。船夫會表演令人尖叫連連的「水上陀螺高速極限旋轉秀」，還會伴隨熱門洗腦神曲跳舞！現場還能體驗用釣竿釣岸邊的小螃蟹。',
        category: 'sightseeing',
        tags: ['旋轉竹籃船', '水椰林', '水上陀螺', '釣螃蟹'],
        tips: '容易暈車暈船者可請船夫「輕輕搖 (No spin)」，喜歡刺激者給點小費船夫會轉得超瘋狂！',
        costEstimate: '竹籃船體驗約 120,000~150,000 VND (約 NT$150~190)',
        openingHours: '07:30 - 17:30 (日間隨到隨搭，每趟約 45~50 分鐘)',
        reservation: '【建議預約】：建議透過一日包車司機代訂或線上預約合作船家，避免現場遭非正規野雞船漫天喊價',
        restrictions: ['【乘船安全與健康限制】：上船必須全程穿著救生衣！心臟病、嚴重眩暈、頸椎脊椎不適或孕婦請在上船前主動告知船夫「No Spin (不要高速旋轉)」', '旋轉特技小費行情約 20,000~50,000 VND / 船 (自由給予)']
      },
      {
        time: '15:15 - 17:30',
        title: '會安古鎮 (Hoi An Ancient Town) 散策 ＆ Faifo Coffee 屋頂景觀',
        location: '會安古鎮核心保護區',
        description: '漫步於 16-19 世紀保存完好的黃色老洋房街道，參觀日本商船建造的「來遠橋 (日本橋)」、華麗的「福建會館」與「進記古宅」。登上著名咖啡館「Faifo Coffee」三樓頂樓露台，點一杯滴漏咖啡，俯瞰一片連綿起伏的古城黑瓦屋頂。',
        category: 'sightseeing',
        tags: ['世界文化遺產', '法式黃牆', 'FaifoCoffee', '日本橋'],
        tips: '隨手來一杯會安最著名的「Mót 草本消暑涼茶 (Nước Mót)」，以荷花、香茅、檸檬與肉桂熬煮，每杯僅 15,000 VND！',
        openingHours: '會安古鎮全天開放；售票古宅會館 07:30 - 17:30；Faifo Coffee 07:00 - 21:30',
        reservation: '無需預約；古蹟參觀可於入口售票亭購買會安古鎮聯票 (120,000 VND 可任選 5 處古蹟會館)',
        restrictions: ['【車輛管制】：每日 15:00 - 21:30 古鎮核心區實施全步行管制，所有汽機車嚴禁進入', '進入福建會館與古宅宗祠請勿穿著過於暴露之無袖背心或短褲']
      },
      {
        time: '17:30 - 18:30',
        title: '晚餐：Bale Well (在地炭烤豬肉串生菜春捲) 或 燈籠水岸餐廳',
        location: 'Bale Well (45/51 Trần Hưng Đạo) 或 The Cargo Club',
        description: 'Bale Well 是隱密排隊名店，入座不用點餐，直接端上滿桌現烤炭火豬肉肉串、炸春捲、越式煎蛋餅與大量新鮮生菜香草，店員會親切教你包出生菜春捲巨塔沾特調花生芝麻醬！',
        category: 'food',
        tags: ['炭烤豬肉串', '道地平民名店', '無限續菜'],
        costEstimate: '套餐每人約 150,000 VND (約 NT$190)',
        openingHours: 'Bale Well: 10:00 - 22:00；The Cargo Club: 08:00 - 22:30',
        reservation: 'Bale Well 為街巷名店免預約直接入座；The Cargo Club 二樓臨河陽台座建議提前 1 天電話預約',
        restrictions: ['Bale Well 僅收現金 (VND)，生菜香草與米紙可免費無限續加']
      },
      {
        time: '18:45 - 20:15',
        title: '秋盆河乘船放水燈許願 ＆ 會安燈籠夜市 (Hoi An Night Market)',
        location: '秋盆河畔 (Song Hoai) 與 阮黃夜市 (Nguyen Hoang)',
        description: '入夜後的會安瞬間被五彩斑斕的絲綢燈籠點亮，恍若掉進神隱少女的世界。搭乘木舟行駛在秋盆河上，親手將載滿心願的紙水燈放入波光粼粼的河中。下船後逛逛燈籠夜市，拍照留念。',
        category: 'nightlife',
        tags: ['秋盆河扁舟', '放水燈許願', '絲綢燈籠海'],
        tips: '搭船放水燈公定價約 150,000~200,000 VND/艘 (可坐 2-4 人，含水燈)，上船前務必先確認價格。',
        openingHours: '秋盆河遊船 17:30 - 21:30；燈籠夜市 18:00 - 22:00',
        reservation: '現場碼頭售票亭購票即可 (公定售票處最安心)',
        restrictions: ['【乘船法規】：上船必須全程穿好救生衣，嚴禁在晃動木船上站立或大幅度肢體動作', '燈籠攤販拍照若未購買燈籠，部分店家會收取 10,000 VND 拍照費 (可先徵詢店家同意)']
      },
      {
        time: '20:30 - 21:15',
        title: '專車返回峴港半島飯店',
        location: '會安 ➔ 峴港半島飯店 (約 40 分鐘車程)',
        description: '在車上吹著冷氣小憩，返回半島飯店，享受安靜舒適的濱海睡眠。',
        category: 'transport',
        tags: ['專車回程'],
        openingHours: '包車約定 20:30 於古鎮外圍接送點上車',
        reservation: '已與包車司機約定好會安接送地點 (通常在古鎮外圍停車場，因古鎮內禁行汽車)',
        restrictions: ['請準時抵達上車地點，避免耽誤回程時間']
      }
    ]
  },
  {
    dayNumber: 4,
    date: '2026/10/04',
    weekday: '星期日',
    title: '山茶半島巨型觀音 ➔ 美溪沙灘放空與水上活動 ➔ 越式咖啡文化 ➔ 龍橋週末噴火噴水秀',
    subtitle: '山海壯麗靈應寺、白沙逐浪、慢活越式下午茶、週日限定龍橋噴火秀',
    highlights: ['山茶半島靈應寺 (67米白玉觀音)', '俯瞰峴港月牙灣', '美溪沙灘 SUP/日光浴', '越式滴漏咖啡體驗', '週日 21:00 龍橋噴火噴水秀'],
    meals: {
      breakfast: '半島飯店海景早餐',
      lunch: 'Phở Bắc 63 (排隊道地北越清燉牛肉河粉) 或 LUK LAK (米其林主廚精緻越菜)',
      dinner: 'Thia Go Restaurant Danang (道地全越料理) 或 韓江景觀烤肉大餐',
      snackOrCafe: 'The Hideout Cafe 或 43 Factory Coffee Roaster (極致精品單品手沖咖啡)'
    },
    transportation: '山茶半島可叫 Grab 或半日包車（車程約 15 分鐘）；市區移動使用 Grab 方便靈活。',
    weatherAdvice: '山茶半島早晨視野最清晰可遠眺整個峴港市景；下午安排在沙灘或海景咖啡館放鬆，若下雨可轉往市區精品咖啡館或飯店 SPA。',
    activities: [
      {
        time: '09:00 - 11:00',
        title: '山茶半島靈應寺 (Chùa Linh Ứng - Sơn Trà) ＆ 俯瞰峴港灣',
        location: 'Bãi Bụt, Bán Đảo Sơn Trà (距離半島飯店僅 10 分鐘車程)',
        description: '造訪建於山海之巔的靈應寺，瞻仰全東南亞最高（高 67 公尺、相當於 30 層樓）的白玉觀音立像，面向大海庇佑峴港漁民。從寺廟廣場可 180 度俯瞰整個美溪沙灘月牙形弧線與市區天際線。',
        category: 'sightseeing',
        tags: ['東南亞最高觀音', '山海絕景', '靈應寺'],
        tips: '靈應寺免門票，周圍偶爾有野生短尾猿猴出沒，切勿餵食或手持塑膠袋避免被猴子搶奪。',
        openingHours: '06:00 - 18:00 (每日免費開放參觀)',
        reservation: '無需預約',
        restrictions: [
          '【穿著規定】：進入正殿祭拜必須穿著過膝下著與有袖上衣，嚴禁背心短褲、拖鞋，進入殿內需脫帽脫鞋',
          '【野生動物警戒】：周遭野生猴群具攻擊搶奪性，嚴禁手持塑膠袋、食物或主動觸摸餵食'
        ]
      },
      {
        time: '11:30 - 13:00',
        title: '午餐：經典牛肉河粉「Phở Bắc 63」或 米其林推薦「LUK LAK」',
        location: '203 Đống Đa 或 28 Nguyễn Du',
        description: '品嚐牛骨長時間熬煮出的甘甜清湯、現燙嫩牛肉片佐新鮮九層塔、鵝蒂與青檸檬；或是到法式老宅風格的 LUK LAK 品嚐烤鴨胸與香茅烤豬排。',
        category: 'food',
        tags: ['經典牛肉河粉', '九層塔青檸', '米其林主廚'],
        costEstimate: '每人約 60,000~200,000 VND (約 NT$75~250)',
        openingHours: 'Phở Bắc 63: 06:00 - 21:00；LUK LAK: 10:30 - 22:00',
        reservation: 'Phở Bắc 63 免預約現場排隊；LUK LAK 週末午餐建議提前 1 天線上或電話預約',
        restrictions: ['Phở Bắc 63 僅收現金，生辣椒醬與九層塔香菜可依個人口味添加']
      },
      {
        time: '13:30 - 15:30',
        title: '半島飯店午後漫活 ＆ 美溪沙灘戲水 / SUP 立槳體驗',
        location: '半島飯店泳池 ＆ 正前方美溪沙灘',
        description: '午後回到飯店換上泳裝，在私人海灘躺椅上聽海浪聲喝新鮮椰子水，或在海面上租借 SUP 立槳衝浪，享受熱帶海濱度假樂趣。',
        category: 'relax',
        tags: ['SUP立槳', '沙灘躺椅', '新鮮椰子'],
        costEstimate: 'SUP 租借每小時約 150,000~200,000 VND (約 NT$190~250)',
        openingHours: '沙灘水上活動業者營運時間 08:00 - 17:30 (天候不佳或浪大時暫停)',
        reservation: '沙灘水上俱樂部現場登記租借即可',
        restrictions: [
          '【水上安全規範】：租借 SUP 或水上摩拖車必須強制穿著救生衣，嚴禁滑出浮球安全警戒線',
          '飲酒後或有心血管疾病者嚴禁進行劇烈水上運動'
        ]
      },
      {
        time: '15:45 - 17:30',
        title: '文青精品咖啡體驗：43 Factory Coffee 或 越式滴漏手作',
        location: '422 Ngô Thì Sĩ, Mỹ An',
        description: '走進通透無邊的水池玻璃屋咖啡館 43 Factory，體驗精品單品咖啡手沖與虹吸萃取，了解越南身為世界第二大咖啡出口國的深厚咖啡文化。',
        category: 'food',
        tags: ['精品手沖', '玻璃水池建築', '文青咖啡'],
        costEstimate: '每杯約 90,000~130,000 VND (約 NT$110~160)',
        openingHours: '06:30 - 22:30 (每日營運)',
        reservation: '無需預約 (中庭景觀座位採先到先得)',
        restrictions: ['室內全面禁菸', '水池造景請注意腳步，嚴禁跨越水池護欄']
      },
      {
        time: '18:00 - 20:00',
        title: '晚餐：Thia Go Restaurant 或 韓江畔海景私房料理',
        location: '53 Phan Thúc Duyện, Bắc Mỹ Phú',
        description: '在溫馨明亮的 Thia Go 餐廳享用濃郁的順化牛肉粉 (Bún Bò Huế)、越式生春捲 (Gỏi Cuốn)、薑蔥炒海瓜子與菠蘿炒飯。',
        category: 'food',
        tags: ['精緻越菜', '生春捲', '清爽健康'],
        costEstimate: '每人約 150,000~250,000 VND (約 NT$190~310)',
        openingHours: '10:00 - 22:00',
        reservation: '建議提早 1 天訂位 (晚餐時段外國觀光客極多)',
        restrictions: ['支援現金與信用卡支付', '素食者可提供全素餐點與無五辛調味']
      },
      {
        time: '20:30 - 21:45',
        title: '週日限定高潮！龍橋 (Dragon Bridge) 噴火噴水奇觀 ＆ 韓江遊船',
        location: '龍橋 (Cầu Rồng) 龍頭處',
        description: '每逢週五、週六、週日晚上 21:00 準時登場！巨型金色鋼龍會連續噴出三輪熾熱烈火，隨後再噴出漫天水柱，全場遊客歡呼鼓掌！觀賞後沿著江畔散步感受熱鬧氣氛。',
        category: 'nightlife',
        tags: ['週日限定', '21點噴火噴水', '峴港象徵'],
        tips: '【最佳觀賞點】：龍橋東側（靠近龍頭）地面廣場或龍橋旁的 DHC 碼頭。噴水時站在風下處會被淋濕，記得帶傘或稍作後退！',
        openingHours: '表演時間 21:00 準時開始 (表演約 15 分鐘)',
        reservation: '免費公共空間觀賞；若搭乘韓江遊船需提前 1 天於碼頭預訂船票 (約 150k VND)',
        restrictions: [
          '【交通管制警示】：週五/六/日 20:30 - 21:30 龍橋雙向全線封路禁止汽機車進入，請提早步行抵達',
          '【防潑水注意】：噴水環節下風處水霧極大，相機、手機等電子產品請務必做好防潑水保護'
        ]
      }
    ]
  },
  {
    dayNumber: 5,
    date: '2026/10/05',
    weekday: '星期一',
    title: '順化世界遺產一日遊 (穿越海雲關與皇城) ➔ 樂天超市伴手禮大採購 ➔ 海景慶功晚宴',
    subtitle: '走過《國家地理》人生必遊海雲嶺、走進越南末代王朝紫禁城',
    highlights: ['海雲關 (Hai Van Pass)', '順化皇城 (The Citadel)', '啟定皇陵 (Khai Dinh Tomb)', '樂天超市 (Lotte Mart) 大採購', '海景精緻晚宴'],
    meals: {
      breakfast: '半島飯店豐富早餐',
      lunch: '順化宮廷料理 / 順化道地名菜 Cơm Hến (蛤蜊碎米飯) 或 Quán Bún Bò Huế Bà Tuyết',
      dinner: 'Fatfish Restaurant & Lounge (韓江無敵夜景地中海越式創意海鮮) 或 Làng Nghệ',
      snackOrCafe: '順化傳統鹽咖啡 (Cà Phê Muối) — 順化為發源地！'
    },
    transportation: '預訂峴港往返順化全日包車（全程約 10 小時，穿越海雲關公路，約 1,200,000~1,500,000 VND / 車）',
    weatherAdvice: '海雲嶺山頂可能起大霧，順化氣候溫和。走進皇城園區較為開闊，可攜帶遮陽傘與輕便鞋。',
    activities: [
      {
        time: '08:00 - 09:30',
        title: '專車啟程 ＆ 穿越海雲關 (Hai Van Pass / 天下第一雄關)',
        location: '海雲嶺山頂關隘',
        description: '行經被《國家地理雜誌》評選為「人生必去的 50 個地方之一」的海雲嶺公路。在山頂制高點的海雲關古城門停留，一側是壯闊的南中國海與靈姑灣 (Lang Co Bay)，另一側是險峻青翠的山巒。',
        category: 'sightseeing',
        tags: ['國家地理雜誌推薦', '天下第一雄關', '海雲嶺'],
        tips: '公路轉角處視野絕佳，停留 20 分鐘喝杯山頂咖啡拍照。',
        openingHours: '全天開放',
        reservation: '順化全日包車需提前 1~2 天確認預約 (含司機過路費與油資)',
        restrictions: ['山路蜿蜒多彎，容易暈車者請於出發前半小時服用暈車藥', '山頂碉堡攀爬時請踩穩石階注意防滑']
      },
      {
        time: '10:30 - 12:30',
        title: '順化皇城 (The Citadel / 順化紫禁城) 探索',
        location: 'Thành phố Huế, Thừa Thiên Huế',
        description: '越南阮朝（1802-1945）的皇宮與政治中心，名列聯合國教科文組織世界文化遺產。參觀巍峨的午門、太和殿、世廟、九鼎與閱是堂宮廷戲院，感受與北京紫禁城風格相近卻又融合法越特色的帝國輝煌。',
        category: 'sightseeing',
        tags: ['世界文化遺產', '順化紫禁城', '末代王朝阮朝'],
        costEstimate: '門票約 200,000 VND (約 NT$250)',
        openingHours: '07:30 - 17:30 (最後入場時間 17:00)',
        reservation: '現場售票處購票即可 (可買皇城+啟定陵優惠聯票 300,000 VND)',
        restrictions: [
          '【世界遺產古蹟與服裝限制】：進入太和殿、世廟等供奉帝王殿堂嚴禁著無袖背心、超短褲短裙，嚴禁戴帽戴墨鏡',
          '宮殿室內文物全面禁止觸摸，禁止使用空拍機與大型閃光燈'
        ]
      },
      {
        time: '12:30 - 13:45',
        title: '午餐：順化發源地正宗「順化牛肉粉」＆ 順化鹽咖啡 (Cà Phê Muối)',
        location: 'Quán Bà Tuyết (47 Nguyễn Công Trứ, Huế) ＆ 鹽咖啡創始店',
        description: '順化是牛肉粉與鹽咖啡的誕生地！品嚐帶有香茅辣油香氣的順化粗米線、滷牛腱與豬血糕；餐後喝一杯微鹹綿密奶蓋融合濃縮滴漏黑咖啡的「鹽咖啡」，口感層次極度驚艷！',
        category: 'food',
        tags: ['順化牛肉粉', '鹽咖啡發源地', '驚艷奶蓋'],
        costEstimate: '每人約 60,000~90,000 VND (約 NT$75~115)',
        openingHours: 'Bà Tuyết: 06:00 - 21:00；鹽咖啡創始店: 06:30 - 22:00',
        reservation: '現場入座 (順化傳統小吃店無需預約)',
        restrictions: ['在地平價小吃店僅收現金，辣油與香茅醬辣度較高，怕辣者可請店家少放辣椒油 (Ít cay)']
      },
      {
        time: '14:00 - 15:30',
        title: '啟定皇陵 (Ứng Lăng / Khải Định Tomb) 陶瓷馬賽克藝術',
        location: 'Châu Chữ, Hương Thủy, Thừa Thiên Huế',
        description: '順化建築最精雕細琢的皇陵，依山而建，外觀呈現黑灰色的哥德法式城堡風，內部主殿則以數以萬計的彩色碎陶瓷片與彩色玻璃拼貼出栩栩如生的龍形浮雕與壁畫，視覺極度震撼！',
        category: 'sightseeing',
        tags: ['馬賽克拼貼藝術', '中法合璧皇陵', '極致奢華'],
        costEstimate: '門票約 150,000 VND (約 NT$190)',
        openingHours: '07:30 - 17:30',
        reservation: '持順化聯票或現場購票即可',
        restrictions: [
          '【步道限制】：進入皇陵需爬 127 級較陡之石階，年長者可攜帶登山杖輔助',
          '主殿啟成殿內禁止飲食、禁止使用腳架與閃光燈'
        ]
      },
      {
        time: '15:30 - 17:30',
        title: '專車經由海雲隧道返回峴港市區',
        location: '順化 ➔ 峴港',
        description: '回程走海雲隧道（車程縮短至 1.5 小時），在車上稍作補眠。',
        category: 'transport',
        tags: ['快速隧道回程'],
        openingHours: '海雲隧道 24 小時全天通車',
        reservation: '包車全程服務',
        restrictions: ['回程若想臨時改走海雲關山路可向司機告知（車程約多 30 分鐘）']
      },
      {
        time: '17:45 - 19:30',
        title: '樂天超市 (Lotte Mart Da Nang) 伴手禮大採購',
        location: '6 Nại Nam, Hoà Cường Bắc, Hải Châu',
        description: '峴港最大、商品最齊全的大型量販超市，明碼標價免殺價，提供免費封箱打包服務。必買清單：越南帶皮鹽焗腰果、中原傳奇咖啡 (G7/Sang Tao)、Archcafé 椰子卡布奇諾、Agridetox 芒果乾、越南第一排糖、MAROU 頂級黑巧克力、Pho 即食河粉包。',
        category: 'shopping',
        tags: ['伴手禮掃貨', '腰果咖啡果乾', '免費裝箱'],
        tips: '二樓有專門的特產試吃區與免費紙箱/膠帶打包台，方便直接託運！',
        openingHours: '08:00 - 22:00 (每日營業)',
        reservation: '無需預約',
        restrictions: [
          '超市提供免費封箱服務（含紙箱與膠帶，可直接作託運行李使用）',
          '支援國際信用卡、Apple Pay 及越南盾現金支付；生鮮肉品禁止攜帶入境台灣'
        ]
      },
      {
        time: '19:45 - 21:30',
        title: '最後一夜慶祝晚餐：Fatfish Restaurant 韓江景觀創意海鮮',
        location: '439 Trần Hưng Đạo (韓江畔)',
        description: '在最後一個夜晚犒賞自己，坐在面江露台欣賞韓江夜色，品嚐精釀啤酒、生蠔拼盤、低溫慢煮牛排與香煎鱸魚佐百香果醬，為這趟旅程留下深刻美好的回憶。',
        category: 'food',
        tags: ['韓江夜景', '精緻創意料理', '浪漫晚餐'],
        costEstimate: '每人約 350,000~550,000 VND (約 NT$440~690)',
        openingHours: '11:00 - 14:00、17:00 - 22:00',
        reservation: '【建議預約】：臨江戶外露台景觀座位建議提前 1~3 天線上或電話預訂',
        restrictions: ['餐費通常加收 5% 服務費與 8% 增值稅 (VAT)', '支援各大國際信用卡']
      }
    ]
  },
  {
    dayNumber: 6,
    date: '2026/10/06',
    weekday: '星期二',
    title: '半島飯店慢活早晨 ➔ 占婆雕刻博物館 ➔ 告別美食米線 ➔ 機場返台',
    subtitle: '海景最後巡禮、千年中南半島文明、打包回憶依依不捨飛往溫暖的家',
    highlights: ['半島飯店晨光泳池', '占婆雕刻博物館 (世界最大占婆藝術藏館)', 'Bún Chả 越式烤肉米線', '15:00 抵達機場 (17:30 班機起飛)'],
    meals: {
      breakfast: '半島飯店海景告別早餐',
      lunch: 'Bún Chả Hà Nội 59 (現烤焦香炭烤豬肉米線) 或 Bếp Cuốn Đà Nẵng (全越特色春捲拼盤)',
      dinner: '機上餐點 / 機場免稅店輕食',
      snackOrCafe: 'The Cups Coffee 或 韓江畔外帶咖啡'
    },
    transportation: '市區 Grab 叫車；14:45 返回半島飯店取行李，15:00 搭乘 Grab 前往機場 (車程約 15~20 分鐘)',
    weatherAdvice: '今日下午準備返程，行程以市區室內博物館與精緻餐飲為主，不受天候影響。',
    activities: [
      {
        time: '08:30 - 10:30',
        title: '飯店晨光早餐 ＆ 頂樓無邊際泳池最後打卡',
        location: '峴港半島飯店',
        description: '悠閒享用飯店現煮熱騰騰河粉與法式可頌，在無邊際泳池旁吹著海風拍照，最後一眼俯瞰湛藍的美溪海景。',
        category: 'relax',
        tags: ['慢活早餐', '泳池打卡', '收拾行李'],
        openingHours: '早餐供餐 06:30 - 10:00；泳池 06:00 - 21:00',
        reservation: '房客憑房號享用自助早餐',
        restrictions: ['10:00 早餐收餐，請把握用餐時間']
      },
      {
        time: '10:30 - 11:00',
        title: '退房 Check-out ＆ 行李暫寄飯店大廳',
        location: '半島飯店前台',
        description: '辦理退房手續，將大件行李寄放於前台櫃台，取得行李條後輕便出門進行最後的市區探索。',
        category: 'relax',
        tags: ['退房', '行李寄存'],
        openingHours: '飯店退房截止時間為 12:00',
        reservation: '櫃台直接辦理',
        restrictions: ['若需延後退房 (Late Check-out) 需提前向櫃台詢問並可能產生額外費用', '請妥善保管行李收執聯，提領行李時憑券領取']
      },
      {
        time: '11:15 - 12:30',
        title: '占婆雕刻博物館 (Museum of Cham Sculpture)',
        location: 'Số 02 2 Tháng 9, Bình Hiên, Hải Châu',
        description: '建於 1915 年的黃色法式優雅建築，是全世界收藏占婆王國（4-13 世紀）砂岩與赤陶雕刻最完整的博物館。欣賞印度教濕婆神、迦樓羅神鳥、舞王與梵天石雕，感受古中越神秘的千年底蘊。',
        category: 'sightseeing',
        tags: ['世界最大占婆館', '法式古蹟建築', '千年雕刻藝術'],
        costEstimate: '門票約 60,000 VND (約 NT$75)',
        openingHours: '07:30 - 17:00 (每日開放，最後售票 16:30)',
        reservation: '現場購票即可',
        restrictions: [
          '【展品保護規範】：千年砂岩石雕文物嚴禁觸摸或攀坐拍照',
          '館內全面禁止使用相機閃光燈與自拍棒，大型後背包需寄放於入口處'
        ]
      },
      {
        time: '12:45 - 14:00',
        title: '午餐：告別盛宴「Bún Chả 越式炭烤肉米線」或「Bếp Cuốn」',
        location: 'Bún Chả Hà Nội 59 (59 Nguyễn Chí Thanh) 或 54 Nguyễn Văn Thoại',
        description: '炭火現烤的焦香豬肉肉丸與五花肉片，浸泡在酸甜清爽的魚露溫高湯中，搭配整盤生菜、香草與米線一口咬下，層次豐富，是令人回味無窮的越南經典！',
        category: 'food',
        tags: ['炭火烤肉米線', '生菜春捲', '越南必吃告別餐'],
        costEstimate: '每人約 60,000~120,000 VND (約 NT$75~150)',
        openingHours: 'Bún Chả Hà Nội 59: 09:30 - 21:00；Bếp Cuốn: 10:30 - 22:00',
        reservation: 'Bún Chả 現場入座即可；Bếp Cuốn 建議提前預約',
        restrictions: ['Bún Chả Hà Nội 59 僅收現金，備有英文菜單方便點餐']
      },
      {
        time: '14:15 - 14:45',
        title: '韓江畔最後巡禮 ＆ 飯店取行李',
        location: '半島飯店大廳',
        description: '在江邊或飯店大廳喝杯冰咖啡，憑行李條領回大件行李，叫 Grab 直奔機場。',
        category: 'transport',
        tags: ['領取行李', '準備出發'],
        openingHours: '全天營運',
        reservation: '無需預約',
        restrictions: ['清點隨身物品、護照、錢包與充電器，避免遺留在飯店']
      },
      {
        time: '15:00 - 17:30',
        title: '抵達峴港國際機場 ➔ 辦理報到、托運與出境 ➔ 17:30 起飛返台',
        location: '峴港國際機場 (DAD) 國際航廈',
        description: '提早 2.5 小時抵達機場辦理登機證與退稅手續（如有在指定免稅店消費滿額），通過安檢後可在候機室採買免稅商品，17:30 搭機起飛，帶著滿滿的回憶返抵台灣！',
        category: 'transport',
        tags: ['國際航班', '依依不捨', '平安返台'],
        tips: '峴港機場安檢與海關排隊速度視班機密集度而定，15:00-15:30 抵達最為從容充裕。',
        openingHours: '機場 24 小時營運 (航班起飛前 3 小時開櫃報到、起飛前 50 分鐘關櫃)',
        reservation: '請提前完成航空公司網路預辦登機 (Online Check-in) 以節省排隊時間',
        restrictions: [
          '【海關與入境台灣法規】：嚴禁攜帶任何肉製品（含生熟豬肉、肉乾、含肉泡麵等）入境台灣，違者重罰 20 萬至 100 萬元！',
          '手提行李液體單瓶不得超過 100ml，行動電源必須隨身攜帶、嚴禁託運'
        ]
      }
    ]
  }
];

export const ALTERNATIVE_STYLES: AlternativeStyle[] = [
  {
    id: 'classic-highlights',
    title: '玩法 A：經典全景首選 (Classic Highlights)',
    tag: '初訪峴港必選',
    iconName: 'Compass',
    targetAudience: '第一次造訪峴港、情侶、好友同行，想一次網羅所有網美名勝與經典地標者',
    coreVibe: '巴拿山佛手橋 + 迦南島旋轉竹籃船 + 會安燈籠古鎮 + 龍橋噴火秀 + 必比登米線海鮮',
    estimatedCostTWD: 'NT$ 22,000 ~ 27,000 / 人 (含機酒+包車門票+美食SPA)',
    description: '最受歡迎的黃金標準路線，緊密結合山海風光、世界文化遺產、主題樂園與地道美食，行程節奏緊湊豐富，拍照打卡無死角。',
    keyHighlights: [
      '巴拿山太陽世界：世界最長纜車 + 佛手黃金橋 + 法國村',
      '會安世界文化遺產：日本橋、Faifo 景觀咖啡、秋盆河放水燈',
      '迦南島椰林水上陀螺竹籃船體驗',
      '山茶半島 67 米高白玉觀音俯瞰全灣',
      '美溪沙灘 + 龍橋週末限定噴火噴水秀'
    ],
    daysSummary: [
      { day: 'Day 1', theme: '粉紅教堂與市區巡禮', schedule: '抵達機場 ➔ 韓市場換匯 ➔ 必比登米線 ➔ 美溪沙灘 ➔ 山茶夜市與龍橋' },
      { day: 'Day 2', theme: '巴拿山雲端仙境全日', schedule: '佛手橋 ➔ 法國村 ➔ 國際百匯 ➔ 高山軌道滑車 ➔ 草本熱石 SPA' },
      { day: 'Day 3', theme: '五行山與會安古城燈籠', schedule: '五行山洞穴 ➔ 迦南島竹籃船 ➔ 會安三大名菜 ➔ 古鎮散策與水燈夜市' },
      { day: 'Day 4', theme: '山茶半島與沙灘慢活', schedule: '山茶半島靈應寺 ➔ Pizza 4Ps ➔ 沙灘 SUP ➔ 精品咖啡 ➔ 龍橋噴火秀' },
      { day: 'Day 5', theme: '順化皇城古都深度', schedule: '海雲關國家地理之路 ➔ 順化紫禁城 ➔ 啟定皇陵 ➔ 樂天超市採買' },
      { day: 'Day 6', theme: '占婆文明與告別盛宴', schedule: '飯店海景早餐 ➔ 占婆雕刻博物館 ➔ 烤肉米線 ➔ 15:00 機場返程' }
    ]
  },
  {
    id: 'luxury-wellness',
    title: '玩法 B：奢華度假 SPA 美食慢活 (Luxury & Wellness)',
    tag: '極致放鬆度假',
    iconName: 'Sparkles',
    targetAudience: '想放慢腳步、追求極致放鬆、頂級 SPA、米其林法式饗宴與海景下午茶的渡假者',
    coreVibe: '每日 90-120 分鐘頂級 SPA + 米其林法越私廚 + 無邊際海景發呆 + 會安私人燈籠遊船',
    estimatedCostTWD: 'NT$ 38,000 ~ 52,000 / 人 (含機酒+頂級SPA包套+高端餐飲+私人專車)',
    description: '捨棄緊湊的打卡奔波，每天睡到自然醒享用海景早餐，下午安排五星級草本或火山石全身水療，傍晚在法式老洋房品味頂級紅酒與慢火烤海鮮，極致療癒。',
    keyHighlights: [
      '每日預約一場 90-120 分鐘頂級水療 SPA (Herbal Spa / Noni Spa / Queen Spa)',
      '半島飯店頂樓海景日光浴與香檳下午茶',
      '米其林推薦餐廳巡禮：LUK LAK、Madame Hạnh、Fatfish',
      '會安秋盆河專屬包船香檳夕陽巡航',
      '無緊湊集合時間，專屬包車司機全日隨傳隨到'
    ],
    daysSummary: [
      { day: 'Day 1', theme: '海風初歇與頂級草本 SPA', schedule: '抵達飯店 ➔ 海景下午茶 ➔ 90分鐘四手聯彈精油SPA ➔ 頂級海鮮私房菜' },
      { day: 'Day 2', theme: '巴拿山貴賓 VIP 悠遊', schedule: '專車直達巴拿山 ➔ 佛手橋漫步 ➔ 法式午宴 ➔ 回飯店頂級熱石水療' },
      { day: 'Day 3', theme: '會安古鎮頂級私廚與香檳遊船', schedule: '午後抵會安 ➔ 私人包船秋盆河夕陽香檳 ➔ 法式古宅燭光晚餐' },
      { day: 'Day 4', theme: '美溪沙灘日光浴與奢華晚宴', schedule: '飯店無邊際泳池 ➔ 43 Factory精品咖啡 ➔ 泰式草本球按摩 ➔ Fatfish法越晚餐' },
      { day: 'Day 5', theme: '悠閒私房採購與海景 Bar', schedule: '精品奧黛訂製 ➔ 樂天超市專人採買 ➔ 高級海鮮燒烤 ➔ 頂樓 Sky Bar' },
      { day: 'Day 6', theme: '海景告別與奢華賦歸', schedule: '最後海景晨泳 ➔ 精緻越式春捲午宴 ➔ 專車送機貴賓室' }
    ]
  },
  {
    id: 'heritage-culture',
    title: '玩法 C：歷史文化與三大世界遺產 (Heritage & History)',
    tag: '深度人文探索',
    iconName: 'Landmark',
    targetAudience: '熱愛世界文化遺產、中越歷史、占婆印度教文明、末代阮朝宮廷建築的深度旅人',
    coreVibe: '順化紫禁城 + 會安古鎮 + 美山聖地 (越南小吳哥窟) + 占婆雕刻館',
    estimatedCostTWD: 'NT$ 24,000 ~ 30,000 / 人 (含專業中文導遊、包車、門票)',
    description: '串聯中越三大 UNESCO 世界文化遺產（順化古都、會安古鎮、美山聖地），深入探訪 4 世紀古占婆王國神廟與 19 世紀阮朝帝王陵寢，人文底蘊最豐厚。',
    keyHighlights: [
      '美山聖地 (Mỹ Sơn)：深入熱帶叢林探尋占婆王國印度教濕婆神廟群',
      '順化皇城紫禁城 + 啟定陵馬賽克陶瓷藝術',
      '會安古鎮深度古宅導覽 (進記古宅、廣肇會館、日本橋)',
      '占婆雕刻博物館深度參觀',
      '品嚐順化宮廷宴席點心與傳統鹽咖啡'
    ],
    daysSummary: [
      { day: 'Day 1', theme: '峴港起源與法國殖民遺跡', schedule: '抵達 ➔ 峴港粉紅大教堂 ➔ 韓江歷史巡禮 ➔ 占婆文化前導' },
      { day: 'Day 2', theme: '美山聖地古占婆文明', schedule: '上午美山聖地神廟群與占婆舞 ➔ 五行山洞穴寺廟 ➔ 傳統越式宮廷菜' },
      { day: 'Day 3', theme: '會安古鎮世界遺產深度散策', schedule: '全日會安：福建會館 ➔ 進記古宅 ➔ 來遠橋 ➔ 傳統皮影/戲曲 ➔ 夜市' },
      { day: 'Day 4', theme: '山茶半島與巴拿山歷史', schedule: '靈應寺 ➔ 巴拿山百年法式酒窖 ➔ 城堡巡禮 ➔ 傳統藥草按摩' },
      { day: 'Day 5', theme: '順化帝國紫禁城與皇陵一日', schedule: '海雲關 ➔ 順化皇宮 ➔ 啟定陵 ➔ 順化牛肉粉發源地 ➔ 返回峴港' },
      { day: 'Day 6', theme: '占婆雕刻博物館總結', schedule: '占婆雕刻博物館精華導覽 ➔ 文創市集 ➔ 15:00 機場返程' }
    ]
  },
  {
    id: 'rainy-family-friendly',
    title: '玩法 D：雨季備案 ＆ 親子輕鬆型 (Rain & Family Friendly)',
    tag: '10月雨季首選備案',
    iconName: 'Umbrella',
    targetAudience: '遇到連續雨天、攜帶長輩或小孩同行，不便長時間戶外風吹雨淋的旅客',
    coreVibe: '巴拿山全室內 Fantasy Park + 越式料理廚藝課 + 韓市場/Lotte Mart購物 + 溫泉/室內SPA',
    estimatedCostTWD: 'NT$ 20,000 ~ 25,000 / 人',
    description: '針對 10 月份中越雨季特別設計的彈性雨天備案，90% 活動皆在室內、舒適空調展館、大型商場、廚藝學校與全覆蓋遊樂園內，風雨無阻照樣精彩。',
    keyHighlights: [
      '巴拿山全室內大型樂園 Fantasy Park (跳樓機、4D/5D 影院、恐龍歷險全在室內)',
      '會安或峴港越式廚藝教室 (Cooking Class)：親手做生春捲、牛肉河粉與煎餅',
      '峴港室內商場大巡禮：Vincom Plaza、Lotte Mart、Big C/Go! 超市',
      'Mikazuki 日式室內巨型水上樂園與室內溫泉溫水泳池',
      '室內質感咖啡館 Hop、熱石按摩與全身去角質護理'
    ],
    daysSummary: [
      { day: 'Day 1', theme: '市區室內巡禮與特色咖啡', schedule: '抵達 ➔ 韓市場室內換匯採買 ➔ Vincom Plaza ➔ 椰子咖啡 ➔ 飯店室內設施' },
      { day: 'Day 2', theme: '巴拿山室內 Fantasy Park 狂歡', schedule: '纜車直達山頂 ➔ 巨型室內樂園 4D/5D 體驗 ➔ 城堡百匯 Buffet ➔ 室內 SPA' },
      { day: 'Day 3', theme: '越式料理 Cooking Class 廚藝課', schedule: '廚師帶領室內市場買菜 ➔ 動手做 4 道經典越菜 ➔ 品嚐成果 ➔ 會安有蓋走廊古街' },
      { day: 'Day 4', theme: 'Mikazuki 巨型室內溫泉水上樂園', schedule: '三日月室內全天候溫水浪池與滑水道 ➔ 日式岩盤浴 ➔ 披薩大餐' },
      { day: 'Day 5', theme: '商場大採購與手作工藝體驗', schedule: 'Lotte Mart 免費裝箱採購 ➔ 越式燈籠手作 DIY 體驗 ➔ 頂級海景餐廳' },
      { day: 'Day 6', theme: '占婆博物館與室內伴手禮店', schedule: '占婆室內展廳 ➔ 舒活頭皮水療 ➔ 告別烤肉米線 ➔ 15:00 前往機場' }
    ]
  }
];

export const BUDGET_TIERS: BudgetTier[] = [
  {
    id: 'budget-explorer',
    name: '小資輕裝型 (Value Explorer)',
    targetUser: '講究高 CP 值、喜愛平民排隊小吃與彈性搭乘 Grab 的自由行旅人',
    totalTWD: 17800,
    totalVND: 14240000,
    breakdown: {
      flight: 7500,
      hotel: 4500, // 5 nights shared twin (approx NT$1800/night/room)
      transport: 1200, // Grab + shared shuttle
      food: 2200, // Local street food, Pho, Banh Xeo, seafood stalls
      activities: 1600, // Ba Na Hills cable car, Marble Mtn, basket boat
      spaShopping: 800
    },
    highlights: [
      '住半島飯店標準海景雙人房（雙人分攤）',
      '每餐以米其林必比登、街頭平民米線、夜市大排檔為主',
      '交通以 Grab 點對點搭乘與線上拼車為主',
      '體驗 1 次 60 分鐘平價越式按摩'
    ]
  },
  {
    id: 'comfort-standard',
    name: '舒適經典型 (Recommended)',
    targetUser: '最受歡迎推薦！行程包車無憂、天天吃好料、享受 2 次優質 SPA',
    totalTWD: 25500,
    totalVND: 20400000,
    breakdown: {
      flight: 8500,
      hotel: 6500, // High-floor Ocean View Room
      transport: 2400, // Private chartered cars for Ba Na, Hoi An, Hue
      food: 4200, // Seafood feasts, Pizza 4P\'s, Madame Hanh, fine coffee
      activities: 2100, // Ba Na Hills + Buffet, Basket boat, Hoi An, Cham museum
      spaShopping: 1800 // 2x 90min Herbal Spas + Lotte Mart snacks
    },
    highlights: [
      '半島飯店高樓層豪華海景房',
      '全日專屬包車（巴拿山一日、會安一日、順化一日）免等車',
      '美溪沙灘現撈海鮮大餐 + Pizza 4P\'s + 庭園精緻越菜',
      '2 次 90 分鐘熱門草本精油熱石按摩',
      '樂天超市伴手禮開心採購'
    ]
  },
  {
    id: 'luxury-premium',
    name: '尊榮奢華型 (Luxury & Indulgence)',
    targetUser: '追求極致舒適、頂級海景套房、私人包車、米其林私廚與每日頂級 SPA',
    totalTWD: 45000,
    totalVND: 36000000,
    breakdown: {
      flight: 13500, // Premium Economy / flexible airlines
      hotel: 14000, // Peninsula Ocean Suite
      transport: 4500, // Private luxury VIP Van for all 6 days
      food: 6500, // Top seafood, wine, French-Vietnamese fine dining
      activities: 2800, // VIP fast passes, private boat in Hoi An & Hué
      spaShopping: 3700 // Daily 120min Luxury 5-Star Spa + bespoke tailoring
    },
    highlights: [
      '半島飯店全海景尊榮行政套房',
      '6 天全程專屬獨立包車與中文司機/導遊隨行',
      '每晚享受 120 分鐘頂級五星水療療程',
      '會安秋盆河私人香檳遊船 + 高級海景地中海創意晚宴',
      '客製化奧黛訂製與頂級伴手禮無上限'
    ]
  }
];

export const SAFETY_WEATHER_TIPS = [
  {
    category: '天氣與穿搭指南 (10 月份中越雨季對策)',
    icon: 'CloudRain',
    tips: [
      '10 月為峴港雨季初期，氣溫約 24°C~30°C，降雨多為午後雷陣雨或短暫陣雨，早晨通常舒適晴朗。',
      '建議穿著：透氣快乾排汗衣物、短褲、防滑涼鞋/洞洞鞋（遇雨踩水不心痛）。',
      '巴拿山（海拔 1,487m）山頂氣溫比平地低 5~8°C，務必隨身攜帶輕薄防風防潑水外套。',
      '隨身攜帶：折疊晴雨兩用傘、輕便雨衣、防水手機袋與小包包防雨罩。'
    ]
  },
  {
    category: '交通安全與叫車防坑攻略',
    icon: 'Car',
    tips: [
      '【必備 App】：在台灣先下載好「Grab App」並綁定信用卡，出機場後直接叫車，價格公開透明，免現金找零糾紛。',
      '【拒搭黑車】：在機場、景點門口千萬不要搭乘主動招攬的個人黑牌計程車；若搭傳統計程車，僅認明綠色「Mai Linh (梅林)」或白色「Vinasun」正規跳表車隊。',
      '【包車建議】：前往巴拿山、會安、順化等長途路線，建議提早預訂「一日專屬包車」，司機會在景點停車場等候，省時又安全。',
      '【過馬路技巧】：越南機車眾多，過馬路時「保持勻速穩定前行」，切忌突然奔跑或突然急退，騎士會自然從你前後方繞過。'
    ]
  },
  {
    category: '海鮮點餐與飲食安全指南',
    icon: 'UtensilsCrossed',
    tips: [
      '【海鮮防坑三步驟】：1. 先問清單價是「每公斤 (kg)」還是「每份 (phần)」；2. 請店員當場抓活海鮮秤重並看清電子秤數值；3. 拍照確認選中的海鮮（防掉包）。',
      '【飲用水安全】：越南自來水不可生飲，飯店牙刷漱口建議使用瓶裝水；路邊小攤避免飲用來路不明的大冰塊，建議點瓶裝飲料或去知名店面。',
      '【腸胃備藥】：請隨身攜帶止瀉藥、腸胃藥、胃散與消炎藥，備不時之需。'
    ]
  },
  {
    category: '換匯、貨幣與防竊技巧',
    icon: 'Coins',
    tips: [
      '【換匯秘訣】：攜帶 2006 年以後發行、無破損折痕的「100 美元新版大鈔」至韓市場周邊銀樓（如 Kim Mỹ）換匯，匯率最優。',
      '【越盾辨識技巧】：越南盾面額零很多，容易混淆！注意「500,000」與「20,000」皆為藍綠色；「100,000」為綠色。付款前請仔細數清尾數 0 的數量。',
      '【防扒防搶】：在山茶夜市、會安古鎮與龍橋人潮密集處，側背包請放胸前，在路邊拍照時握緊手機，留意飛車奪包。'
    ]
  }
];

export const RECOMMENDED_RESTAURANTS: RestaurantItem[] = [
  {
    name: 'Bún Chả Cá 109',
    vietnameseName: 'Bún Chả Cá 109 Nguyễn Chí Thanh',
    category: '在地平民小吃 / 米其林必比登',
    specialty: '招牌魚餅米線、鮮魚肉塊米線、特製辣椒醬',
    priceRange: '35,000 ~ 60,000 VND (約 NT$45~75)',
    address: '109 Nguyễn Chí Thanh, Hải Châu 1, Đà Nẵng',
    rating: '4.6 ★ (數千則好評)',
    proTip: '湯頭用鮮魚、南瓜、菠蘿清燉熬煮，加入九層塔與紫洋蔥香氣撲鼻，加一匙桌上蝦醬風味更道地！'
  },
  {
    name: 'Bánh Xèo Bà Dưỡng',
    vietnameseName: 'Bánh Xèo Bà Dưỡng',
    category: '巷弄經典名店 / 越式煎餅',
    specialty: '招牌黃金酥脆越式煎餅、炭烤豬肉串 (Nem Lụi)',
    priceRange: '60,000 ~ 120,000 VND (約 NT$75~150)',
    address: 'K280/23 Hoàng Diệu, Bình Hiên, Hải Châu, Đà Nẵng',
    rating: '4.5 ★ (排隊傳奇)',
    proTip: '隱身在深巷內，跟著人潮走就對了！用薄米紙包裹生菜、黃瓜、煎餅與肉串，沾特製花生豬肝濃醬，一口咬下卡滋作響！'
  },
  {
    name: 'Bé Mặn Seafood',
    vietnameseName: 'Hải Sản Bé Mặn',
    category: '生猛現撈海鮮大排檔',
    specialty: '蒜蓉烤扇貝、蔥油大頭蝦、避風塘炒花蟹、清蒸花蛤',
    priceRange: '300,000 ~ 500,000 VND / 人 (約 NT$380~650)',
    address: 'Lô 11 Võ Nguyên Giáp, Mân Thái, Sơn Trà (近半島飯店)',
    rating: '4.4 ★ (峴港人氣最旺海鮮)',
    proTip: '距離半島飯店僅 3 分鐘車程，人潮洶湧氣氛極熱鬧。挑選活蝦活蟹時確認秤重即可安心大快朵頤！'
  },
  {
    name: 'Pizza 4P’s Da Nang',
    vietnameseName: 'Pizza 4P’s Hoàng Văn Thụ / Indochina',
    category: '傳奇必吃 / 越義 Fusion 手工披薩',
    specialty: '新鮮手作布拉塔起司披薩 (Burrata)、蟹肉番茄義大利麵、生火腿起司披薩',
    priceRange: '200,000 ~ 400,000 VND / 人 (約 NT$250~500)',
    address: '8 Hoàng Văn Thụ, Phước Ninh, Hải Châu, Đà Nẵng',
    rating: '4.8 ★ (全越爆棚好評)',
    proTip: '全越南最頂尖的披薩名店，強烈建議出發前在官網提前線上訂位，招牌布拉塔起司切開爆漿極為銷魂！'
  },
  {
    name: 'Madame Hạnh Restaurant',
    vietnameseName: 'Madame Hạnh - Cuisine de Da Nang',
    category: '米其林推薦 / 法式殖民庭園越菜',
    specialty: '香蕉花鮮蝦沙拉、椰汁慢燉海鮮、炭烤香茅排骨、越式宮廷甜品',
    priceRange: '250,000 ~ 450,000 VND / 人 (約 NT$310~560)',
    address: '79 Lương Nhữ Hộc, Khuê Trung, Cẩm Lệ, Đà Nẵng',
    rating: '4.7 ★ (環境優雅極美)',
    proTip: '坐落在綠意盎然的法式洋房庭院中，菜品精緻無比，適合家庭聚餐與浪漫約會。'
  },
  {
    name: 'Cộng Cà Phê (越共咖啡)',
    vietnameseName: 'Cộng Cà Phê Bạch Đằng',
    category: '特色文青咖啡館',
    specialty: '招牌椰子冰沙咖啡 (Cốt Dừa Cà Phê)、綠豆冰沙咖啡、越式滴漏咖啡',
    priceRange: '45,000 ~ 70,000 VND (約 NT$55~90)',
    address: '96-98 Bạch Đằng, Hải Châu 1, Đà Nẵng (韓江第一排)',
    rating: '4.6 ★ (打卡必到)',
    proTip: '以 1970 年代軍綠復古為主題，二樓面江座位視野開闊，下午吹冷氣喝椰子咖啡是一大享受。'
  }
];

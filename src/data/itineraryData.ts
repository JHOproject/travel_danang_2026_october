import { DayPlan, AlternativeStyle, BudgetTier, RestaurantItem, WeatherModule } from '../types';

export const TRIP_INFO = {
  destination: '越南 峴港 (Da Nang) & 會安 (Hoi An) & 順化 (Hue)',
  startDate: '2026-10-01',
  endDate: '2026-10-06',
  duration: '6 天 5 夜 (含 4 個完整遊玩日與抵離境 2 個半日)',
  flightArrival: '2026/10/01 09:00 抵達峴港國際機場 T2 國際航廈',
  flightDeparture: '2026/10/06 17:30 峴港國際機場起飛 (建議 13:45~14:00 從飯店出發，預計 14:15~14:30 抵達機場，保留約 3 小時報到緩衝)',
  hotel: {
    name: '峴港半島飯店 (Peninsula Hotel Danang)',
    address: '84 Võ Nguyên Giáp, Mân Thái, Sơn Trà, Đà Nẵng',
    locationAdvantage: '臨美溪沙灘海岸公路，面對山茶半島海景，設有海景無邊際泳池（天候開放狀況與開放時段依現場公告為準）',
    checkInTime: '14:00 後 (抵達當日可先於大廳寄放行李)',
    checkOutTime: '12:00 前'
  },
  weatherOverview: '10 月為峴港與中越雨季高峰期，可能出現持續性陰雨、強降雨或熱帶低壓。本行程設計為「模組化可交換結構」，Day 2 至 Day 5 白天主要行程可隨氣象雷達與現場路況靈活對調，絕非僵化日程。',
  exchangeRateApprox: '以新台幣 (TWD) 估算為主，當地越盾 (VND) 採 1 TWD ≈ 800 VND 作為心算參考（實際受各換匯管道浮動，不作保證）',
  officialCheckReminder: '【2026 行前與每日確認提醒】：營業時間、門票、包車路況、演出場次與官方水上活動規範均可能隨季節、雨勢或節慶調整。出發前與每日晨間請至官方網站確認：\n1. 越南政府官方電子簽證系統：evisa.gov.vn。\n2. Sun World Ba Na Hills 官網與山頂即時監視器。\n3. 會安古蹟景點售票公告與秋盆河即時水位。\n4. 順化古蹟保護中心最新參觀公告。\n5. 峴港官方龍橋週末演出公告。\n6. 航空公司航班動態與台灣動植物防疫檢疫最新規定。',
  hueRiskReminder: '【順化一日遊取捨原則】：峴港往返順化單程車程約 2~2.5 小時（往返需 4.5~5 小時），投入交通時間長。Day 5 特別提供「方案 A 順化歷史文化」與「方案 B 峴港度假放鬆日」雙方案，若更重視放鬆舒適度，取消順化改為峴港度假日更能提升整趟旅程品質！'
};

export const WEATHER_MODULES: WeatherModule[] = [
  {
    id: 'module-bana',
    name: '巴拿山雲端模組 (Day 2 預設)',
    primaryCondition: '山頂能見度佳、無強風大雷雨',
    bestDays: '預報降雨機率低、風速小之晴朗或多雲日',
    avoidWhen: '山頂大霧伸手不見五指、強風警報、持續性豪雨',
    swapAction: '若當日山頂暴雨起大霧，微雨時仍可在 Fantasy Park 室內活動；若遇大雨或強風警報，建議與 Day 4「峴港市區慢活」或 Day 5「峴港度假日」交換。',
    iconName: 'Sparkles',
    riskLevel: 'high'
  },
  {
    id: 'module-hoian',
    name: '五行山＋會安古鎮模組 (Day 3 預設)',
    primaryCondition: '午後至傍晚天氣穩定、無河川氾濫積水',
    bestDays: '微陰、間歇小雨或多雲午後（古鎮遮蔭多、夜景氣氛佳）',
    avoidWhen: '秋盆河水位過高警戒、低窪淹水、強烈雷陣雨',
    swapAction: '小雨時間歇性降雨時五行山可搭電梯並減少石階登高；若遇大雨、持續性豪雨或雷雨，直接取消五行山與迦南島竹籃船，提早進入會安古鎮室內古宅會館、咖啡館或室內烹飪手作課。',
    iconName: 'Compass',
    riskLevel: 'medium'
  },
  {
    id: 'module-danang-relax',
    name: '山茶半島＋市區慢活模組 (Day 4 預設)',
    primaryCondition: '任何天氣皆可彈性適應（整趟旅程最佳緩衝日）',
    bestDays: '市區偶陣雨、中度體力消耗後之恢復日',
    avoidWhen: '山茶半島臨海山路豪雨坍方警報（可改為全日市區室內）',
    swapAction: '作為萬用緩衝日，隨時可與 Day 2 或 Day 5 交換；21:00 龍橋週末固定演出為主要時間錨點。',
    iconName: 'Coffee',
    riskLevel: 'low'
  },
  {
    id: 'module-hue',
    name: '順化古都歷史模組 (Day 5 方案 A)',
    primaryCondition: '海雲隧道與順化市區無豪雨積水警報',
    bestDays: '全天降雨趨緩、能接受單程 2~2.5 小時長途車程',
    avoidWhen: '順化豪雨警報、道路積水、長途坐車體力不支',
    swapAction: '若氣候不佳或想徹底放鬆，直接啟動「方案 B 峴港度假日」，享受海景 SPA、商場伴手禮與慶祝晚宴。',
    iconName: 'Landmark',
    riskLevel: 'high'
  },
  {
    id: 'module-indoor-backup',
    name: '全區豪雨/颱風極端防雨模組',
    primaryCondition: '中越大範圍豪雨、雷雨或熱帶擾動警報',
    bestDays: '極端降雨日全面啟動（不上山、不走長途）',
    avoidWhen: '嚴禁前往戶外山區、海灘、竹籃船及無頂棚遊船',
    swapAction: '占婆雕刻博物館 ➔ 越式料理手作課 (Cooking Class) ➔ 舒壓 SPA ➔ 精品咖啡 ➔ Lotte Mart / Vincom 商場。',
    iconName: 'Umbrella',
    riskLevel: 'low'
  }
];

export const TWO_LEVEL_RAIN_GUIDE = {
  level1: {
    title: '第一級：小雨 / 間歇性陣雨（帶傘可走）',
    description: '中越雨季常見型態，短暫陣雨後偶有微光，大部分城區與有頂棚設施可正常參觀。巴拿山仍可至 Fantasy Park 室內遊樂區活動。',
    safeActivities: [
      '巴拿山 Fantasy Park 室內遊樂區、蠟像館與法國村室內餐廳',
      '會安古鎮歷史會館、宗祠古宅與特色騎樓老街漫步',
      '越式復古與精品咖啡館巡禮（Cộng Cà Phê、Faifo Coffee、43 Factory）',
      '舒壓越式熱石草本 SPA / 精油放鬆芳療',
      '韓市場 (Han Market) 全室內乾貨與服飾採買',
      '占婆雕刻博物館 (Cham Museum) 室內砂岩展廳',
      '半島飯店海景客房放鬆、海景下午茶'
    ],
    precautions: [
      '隨身備妥輕便雨衣或摺疊傘，穿著快乾防滑鞋履。',
      '小雨／間歇性降雨時，五行山可視地面狀況縮短參觀（優先搭乘電梯、減少石階路線、不強求登高；若現場濕滑程度高則直接取消）。'
    ]
  },
  level2: {
    title: '第二級：大雨 / 持續性豪雨 / 雷雨 / 熱帶擾動（嚴避戶外山水）',
    description: '降雨量劇增、風勢強勁、能見度極低或河流水位暴漲時，必須果斷取消所有戶外、山區與長途行程。不上巴拿山、直接取消五行山與順化。',
    avoidList: [
      '❌ 巴拿山（強風可能導致纜車降速或停駛，山頂大霧無景致）',
      '❌ 五行山（直接取消！戶外陡峭石階極度濕滑，洞穴積水具危險性，絕不因有電梯而冒險）',
      '❌ 迦南島竹籃船（水道水位異常、強風旋轉具落水風險）',
      '❌ 會安秋盆河夜間遊船（水流湍急嚴禁登船）',
      '❌ 順化長途山海包車（雨季長途公路視線差且易遇積水）',
      '❌ 美溪沙灘各類水上活動（巨浪插紅旗嚴禁下水）'
    ],
    recommendedList: [
      ' 占婆雕刻博物館 (Museum of Cham Sculpture)：完整室內展館，細賞千年中越文明精華',
      ' 越式料理手作課程 (Indoor Cooking Class)：市場採買 ＋ 廚藝教室親手烹調春捲與河粉',
      ' 舒壓芳療 SPA 深度療程：預約 90~120 分鐘全身熱石草本護理，充分放鬆身心',
      ' 精品室內咖啡廳品鑑：在 43 Factory 或 The Cups 悠閒度過午後聽雨時光',
      ' 樂天超市 (Lotte Mart) 或 Vincom Plaza：全室內商場一站式採買腰果、果乾與伴手禮',
      ' 市內精緻餐廳品嚐：Pizza 4P’s、Madam Lan 或 韓江畔特色餐廳從容用餐'
    ]
  }
};

export const MAIN_ITINERARY: DayPlan[] = [
  {
    dayNumber: 1,
    date: '2026/10/01',
    weekday: '星期四',
    title: '抵達峴港 ➔ 飯店寄放 ➔ 市區午餐與韓市場換匯 ➔ 下午粉紅教堂 ➔ 飯店入住休息 ➔ 越式海鮮晚餐',
    subtitle: '初訪峴港，換匯採買、午後粉紅教堂外觀拍照、飯店海景放鬆與現撈海鮮初體驗',
    theme: '初抵峴港，輕量市區探索、順路換匯採購與悠閒海景充電',
    coreActivities: ['韓市場與合法換匯', '峴港粉紅大教堂午後散策'],
    optionalActivities: ['Cộng Cà Phê 復古椰子咖啡', '山茶夜市散步（依體力自由選配）'],
    cutIfTiredOrRaining: ['山茶夜市（抵達日若疲累或下雨直接回飯店休息，20:30 前結束行程）'],
    weatherSwapAdvice: {
      condition: '今日主要為市區室內市場、咖啡館與飯店休息，受天候影響極小。',
      suggestion: '若午後遇短暫陣雨，可直接在韓市場或室內咖啡館多停留，隨後提早回飯店入住充電。'
    },
    highlights: ['入境手續與預約接駁', '半島飯店行李寄放', '韓市場與合法金店換匯', '粉紅大教堂午後拍照', '半島海景房休息', '美溪沙灘現撈海鮮'],
    meals: {
      breakfast: '機上輕食或出關後機場河粉 (依個人航班安排)',
      lunch: 'Bún Chả Cá 109 (炸魚餅米線) 或 Bánh Xèo Bà Dưỡng (越式酥脆煎餅)',
      dinner: 'Bé Mặn 海鮮餐廳 (美溪沙灘現撈海鮮大排檔，請現場確認單價與淨重)',
      snackOrCafe: 'Cộng Cà Phê (越共復古風格椰子咖啡)'
    },
    transportation: '機場至飯店以預約專車或 Grab 叫車；市區景點間以 Grab 短程移動（App 即時報價）',
    weatherAdvice: '10 月為雨季，多午後陣雨。今日景點集中於峴港市區；韓市場、咖啡館與飯店皆可作為雨天快速避雨點。若遇陣雨可就近在室內停留或提早回飯店享受設施。',
    activities: [
      {
        time: '09:00 - 11:00',
        title: '抵達峴港國際機場 (DAD) ＆ 入境、領行李與專車接送',
        location: '峴港國際機場 T2 國際航廈',
        description: '入境查驗、領取行李、開通 SIM/eSIM 網卡與叫車約需 60–120 分鐘（視當日入境人潮浮動）。走出航廈依 Grab App 指定乘車柱或預約司機會合。',
        category: 'transport',
        tags: ['出關', 'SIM卡', 'Grab接駁'],
        isCore: true,
        weatherSuitability: 'rain-safe',
        tips: '走出航廈請勿搭乘路邊主動拉客的黑牌車；使用 Grab App 叫車並核對車牌，綁定信用卡免找零。',
        costEstimate: 'Grab 到半島飯店約 120,000~160,000 VND (約 NT$150~200，以 App 即時報價為準)',
        openingHours: '國際航廈 24 小時營運',
        reservation: '台灣護照赴越南需事先申請電子簽證 (e-Visa)，請務必於越南政府官方電子簽證系統 https://evisa.gov.vn 申請，規費一般為 25 USD (單次) / 50 USD (多次)，審核約需 3 個工作天以上，強烈建議出發前 1~2 週辦理並列印紙本備查。',
        restrictions: [
          '護照效期需滿 6 個月以上，並隨身攜帶 e-Visa 紙本列印憑證',
          '【海關現金申報】：攜帶外幣現鈔超過等值 5,000 USD 或越南盾現鈔超過 15,000,000 VND 者，依法必須主動向海關申報'
        ]
      },
      {
        time: '11:00 - 11:40',
        title: '前往「峴港半島飯店 (Peninsula Hotel)」寄放行李',
        location: '峴港半島飯店 (84 Võ Nguyên Giáp)',
        description: '抵達飯店大廳寄放大型托運行李，換上透氣輕裝，攜帶薄外套與折疊傘，輕鬆出發市區。',
        category: 'relax',
        tags: ['飯店寄放', '海景第一排'],
        isCore: true,
        weatherSuitability: 'rain-safe',
        tips: '可向櫃台索取飯店名片（附越文地址），外出叫車回程時方便向司機出示。',
        openingHours: '櫃台 24 小時服務；標準入住時間 14:00 後、退房時間 12:00 前',
        reservation: '已完成住宿預訂 (出示訂房確認單與全體住客護照登記即可)',
        restrictions: ['全館客房室內全面禁菸', '戶外泳池具體開放時段與天候狀況請以飯店現場公告為準']
      },
      {
        time: '12:00 - 13:15',
        title: '午餐：道地風味「Bún Chả Cá 109」炸魚餅米線 或「Bánh Xèo Bà Dưỡng」',
        location: '109 Nguyễn Chí Thanh 或 K280/23 Hoàng Diệu',
        description: '品嚐峴港著名的鮮甜炸魚餅米線，或是隱藏巷弄中的酥脆越式煎餅包肉捲生菜。午餐請依當日交通與排隊狀況擇一；若選擇 Bánh Xèo Bà Dưỡng，用餐後直接前往韓市場，避免重複折返。',
        category: 'food',
        tags: ['魚餅米線', '道地平民美食', '越式煎餅'],
        isCore: true,
        weatherSuitability: 'indoor-only',
        costEstimate: '每人約 40,000~80,000 VND (約 NT$50~100，依現場菜單為準)',
        openingHours: '營業時間依店家現場公告為準 (常見 Bún Chả Cá 109 約 06:00 - 22:00；Bánh Xèo Bà Dưỡng 約 09:30 - 21:30)',
        reservation: '現場排隊入座 (翻桌速度快)',
        restrictions: ['在地傳統小吃店家多僅收現金 (VND)，建議自備小額鈔票']
      },
      {
        time: '13:15 - 14:30',
        title: '韓市場 (Chợ Hàn) ＆ 合法場所換匯',
        location: '119 Trần Phú (韓市場周邊合法兌換點)',
        description: '前往有合法標示的銀行或金店兌換處，以美金百元新鈔換取越南盾（先確認告示牌匯率並現場清點）。隨後順逛韓市場一樓乾貨特產或二樓服飾。',
        category: 'shopping',
        tags: ['美金換匯', '傳統市場', '伴手禮'],
        isCore: true,
        weatherSuitability: 'indoor-only',
        tips: '選擇有合法標示的換匯處，兌換前確認當日告示牌匯率、現場清點鈔票面額並索取收據。',
        weatherBackup: '韓市場為全室內市場，雨天亦非常適合採購。',
        openingHours: '韓市場約 06:00 - 19:00；周邊合法兌換處營業時間依各店家現場公告為準',
        reservation: '無需預約',
        restrictions: ['通常偏好 2006 年後發行、無折痕污損之美金百元新鈔', '市場人潮密集，請隨時注意背包與隨身財物防扒']
      },
      {
        time: '14:30 - 15:15',
        title: '峴港粉紅大教堂 (Da Nang Cathedral)',
        location: '156 Trần Phú, Hải Châu 1, Đà Nẵng',
        description: '建於 1923 年法國殖民時期的粉紅哥德式教堂，是峴港代表性地標。午後陽光柔和（或雨後洗滌），在正門或修道院側門拍攝經典粉紅外觀。',
        category: 'sightseeing',
        tags: ['拍照地標', '粉紅建築', '法式風情'],
        isCore: true,
        weatherSuitability: 'rain-safe',
        tips: '教堂免費參觀；若遇彌撒時間內部關閉，可在側門或後方花園外觀拍照。參觀請穿著過膝衣物。',
        costEstimate: '免費參觀',
        openingHours: '外觀全天可拍攝；內部開放時段視堂區彌撒與教區公告為準',
        restrictions: ['進入教堂庭院請保持肅靜，勿著無袖背心或過短短褲']
      },
      {
        time: '15:15 - 16:00',
        title: '午後小憩：Cộng Cà Phê 越共復古風格椰子咖啡',
        location: '96–98 Bạch Đằng (韓江畔門市)',
        description: '坐在面向韓江的復古軍綠色咖啡館中，品嚐招牌椰奶冰沙咖啡 (Cà Phê Cốt Dừa)，消暑並短暫休整。',
        category: 'food',
        tags: ['椰子咖啡', '復古咖啡館', '韓江景觀'],
        isOptional: true,
        weatherSuitability: 'indoor-only',
        costEstimate: '每杯約 45,000~65,000 VND (約 NT$55~80)',
        openingHours: '約 07:00 - 23:00 (以門市現場公告為準)',
        reservation: '現場入座'
      },
      {
        time: '16:00 - 17:45',
        title: '返回半島飯店正式辦理入住 Check-in ＆ 洗澡休息充電',
        location: '峴港半島飯店 (84 Võ Nguyên Giáp)',
        description: '搭乘 Grab 返回半島飯店辦理正式 Check-in 取得房卡，進入海景客房沖涼、整理行李，在房內欣賞美溪沙灘海岸風光，讓舟車勞頓的身體充分休息。',
        category: 'relax',
        tags: ['海景客房', '休息充電', '飯店設施'],
        isCore: true,
        weatherSuitability: 'indoor-only',
        tips: '此時段為重要的恢復休息時間，不要急著排滿行程，保留體力給晚上海鮮大餐。',
        openingHours: '飯店前台 24 小時服務',
        reservation: '出示護照領取房卡'
      },
      {
        time: '18:00 - 19:30',
        title: '晚餐：美溪沙灘名店「Bé Mặn」活海鮮排檔大餐',
        location: 'Lô 11 Võ Nguyên Giáp, Mân Thái, Sơn Trà (距飯店約 3~5 分鐘車程)',
        description: '峴港最具代表性的大排檔活海鮮名店！現場在水槽挑選生猛大頭蝦、花蟹、烤文蛤或清蒸鮮魚，店員現場過秤報價，體驗道地越式海產狂歡。',
        category: 'food',
        tags: ['現撈海鮮', '大頭蝦', '烤文蛤', '道地大排檔'],
        isCore: true,
        weatherSuitability: 'indoor-only',
        tips: '【點餐避坑三要訣】：1. 挑選活海鮮時請店員瀝乾水份再秤重；2. 確認價格為「每公斤 (kg)」單價；3. 拍照確認總價再入座。',
        costEstimate: '每人約 350,000~600,000 VND (約 NT$450~750，視點選海鮮種類而定)',
        openingHours: '約 09:00 - 23:00 (以店家現場為準)',
        reservation: '大排檔現場入座 (座位極多，尖峰時間稍候 5~10 分鐘)'
      },
      {
        time: '19:30 - 20:30',
        title: '【完全自由選配】山茶夜市 (Chợ Đêm Sơn Trà) 散步（依體力前往）',
        location: 'Mai Hắc Đế, An Hải Trung, Sơn Trà',
        description: '若晚餐後仍有體力且未下雨，可至山茶夜市感受小吃攤位與手工藝品氣氛；若疲倦或下雨，直接回半島飯店休息，確保第一天能在 20:30~21:00 前回到飯店好好睡飽。註：週四非龍橋固定噴火演出日，週末噴火秀已正式排在 Day 4 晚間。',
        category: 'nightlife',
        tags: ['自由選配', '夜市散策', '早點休息'],
        isOptional: true,
        canSkipIfTired: true,
        weatherSuitability: 'sunny-preferred',
        tips: '抵達日重在調適時差與體力，若疲累請果斷放棄夜市，回飯店享受舒適大床。',
        openingHours: '約 18:00 - 23:00 (依攤位現場營運為準)',
        costEstimate: '參觀免費，小吃每份約 20,000~50,000 VND',
        restrictions: ['夜市人潮多請注意隨身包包', '海鮮燒烤請選擇衛生條件良好的攤位']
      }
    ]
  },
  {
    dayNumber: 2,
    date: '2026/10/02',
    weekday: '星期五',
    title: '巴拿山漫步 (景觀高空纜車 ➔ 黃金佛手橋 ➔ 法國村古堡) ➔ 傍晚頂級 SPA ➔ 精緻晚餐',
    subtitle: '巨手托橋地標、歐風童話城堡、傍晚舒壓熱石 SPA 徹底放鬆',
    theme: '巴拿山高空景致、歐風城堡漫步與傍晚舒活 SPA 雙重享受',
    coreActivities: ['巴拿山黃金佛手橋', '法國村童話古堡與景觀纜車'],
    optionalActivities: ['Fantasy Park 室內遊樂設施', '韓江景觀酒吧 (完全自由選配)'],
    cutIfTiredOrRaining: ['韓江景觀酒吧（下山 SPA 晚餐後直接休息，不列為正式行程）'],
    weatherSwapAdvice: {
      condition: '巴拿山海拔約 1,487 米，對山頂大霧、強風與豪雨非常敏感。',
      suggestion: '出發前務必查看山頂即時監視器。若山頂微雨仍可在 Fantasy Park 室內活動；若遇豪雨強風警報，建議將巴拿山與 Day 4「峴港市區慢活日」或 Day 5「峴港度假日」交換！',
      targetDayNumber: 4,
      recommendedModule: 'module-danang-relax'
    },
    highlights: ['長距離景觀高空纜車 (曾獲金氏世界紀錄)', '黃金佛手橋 (Golden Bridge)', '法國村與月亮城堡', 'Fantasy Park', '60~90分鐘頂級SPA', 'Pizza 4P’s 手工窯烤披薩'],
    meals: {
      breakfast: '半島飯店豪華海景自助早餐',
      lunch: '巴拿山園區內餐廳（如 Arapang 或 Beer Plaza 異國自助午餐，或園區法式輕食）',
      dinner: 'Pizza 4P’s (越式人氣手工窯烤披薩，推薦自製布拉塔起司與蟹肉義大利麵)',
      snackOrCafe: '巴拿山法國村法式可麗餅或熱咖啡'
    },
    transportation: '預約峴港往返巴拿山專屬包車接送（單程車程約 45~50 分鐘，司機於山腳停車場約定時段等候）',
    weatherAdvice: '山頂氣溫通常比市區低 5–8°C 且山區氣候瞬息萬變。務必隨身攜帶薄防風外套、折疊雨傘或輕便雨衣。若遇山頂微雨可轉入 Fantasy Park 與室內展館；若遇持續性豪雨或強風警報，應果斷將本模組與後續晴天日交換。',
    activities: [
      {
        time: '07:30 - 08:15',
        title: '半島飯店晨光海景早餐',
        location: '半島飯店海景餐廳',
        description: '在晨光中享用豐盛自助早餐，品嚐現煮越式河粉、現做歐姆蛋、熱帶水果與香濃滴漏咖啡。',
        category: 'food',
        tags: ['海景早餐', '活力充沛'],
        isCore: true,
        weatherSuitability: 'indoor-only',
        openingHours: '早餐時段約 06:30 - 10:00 (依飯店現場公告為準)'
      },
      {
        time: '08:30 - 09:30',
        title: '專車出發前往巴拿山 (Ba Na Hills)',
        location: '半島飯店 ➔ 巴拿山山腳纜車站 (車程約 45~50 分鐘)',
        description: '約 08:30 於飯店大廳與包車司機會合出發。不需過度早起搶極早時段，保持充沛體力，約 09:15~09:30 抵達山腳纜車站。',
        category: 'transport',
        tags: ['包車專車', '從容出發'],
        isCore: true,
        weatherSuitability: 'rain-safe',
        tips: '出發前先確認手機已下載電子門票 QR Code，並備妥防風外套。'
      },
      {
        time: '09:30 - 12:00',
        title: '搭乘景觀高空纜車 ➔ 漫步「黃金佛手橋 (Golden Bridge)」',
        location: 'Sun World Ba Na Hills (佛手橋與空中花園)',
        description: '搭乘長距離景觀高空纜車直上海拔千米。走出纜車站即為知名巨手托起金色緞帶的「黃金佛手橋」，隨後參觀愛之花園與巨大靈應寺坐佛。',
        category: 'sightseeing',
        tags: ['著名地標', '佛手金橋', '高空纜車', '雲海山景'],
        isCore: true,
        weatherSuitability: 'sunny-preferred',
        tips: '佛手橋若遇晨霧瀰漫景色獨特；拍照時請留意腳步，雨天木棧道可能稍滑。',
        costEstimate: '2026 外地旅客成人基本票約 1,000,000 VND（含往返景觀纜車、Golden Bridge、French Village、Fantasy Park 等主要一般設施；部分特殊設施或額外體驗另計。若購買基本票＋午餐 Buffet Combo，約 1,300,000 VND。實際票種、優惠與價格依 2026 Sun World Ba Na Hills 官方最新公告為準）',
        openingHours: '園區與纜車營運一般約 08:00 - 22:00 (每日不同纜車線營運時段依當日官方公告為準)',
        reservation: '強烈建議事先線上購買電子票 (QR Code 直接掃碼入園免排隊購票)',
        restrictions: ['嚴禁攀爬佛手橋欄杆外側', '園區全面禁止攜帶外食與空拍無人機']
      },
      {
        time: '12:00 - 13:30',
        title: '法國村 (French Village) 漫步 ＆ 園區景觀午餐',
        location: '巴拿山山頂法國村',
        description: '搭乘二段纜車抵達山頂法國村，哥德式教堂、歐式石砌城堡與街頭藝人表演環繞。可於 Arapang 或 Beer Plaza 自助餐廳享用午餐，或在法式咖啡館品嚐輕食。',
        category: 'food',
        tags: ['法國村', '歐洲城堡', '異國美食'],
        isCore: true,
        weatherSuitability: 'rain-safe',
        costEstimate: '自助午餐每人約 350,000~450,000 VND (約 NT$440~560，若購買約 1,300,000 VND 的門票＋Buffet Combo，午餐已包含，不應再次計價；若購買約 1,000,000 VND 基本票，午餐則另外計價)',
        openingHours: '各餐廳營業時間約 11:00 - 15:00'
      },
      {
        time: '13:30 - 15:30',
        title: '室內遊樂園 Fantasy Park ＆ 月亮城堡探索',
        location: '巴拿山室內遊樂區與月亮城堡',
        description: '參觀月亮城堡 (Moon Castle) 欣賞 4D/5D 影院，或至全室內三層樓的 Fantasy Park 體驗免費室內遊樂設施（如自由落體、碰碰車、侏儸紀恐龍館）。',
        category: 'sightseeing',
        tags: ['室內遊樂園', '雨天無阻', '4D影院'],
        isOptional: true,
        weatherSuitability: 'indoor-only',
        weatherBackup: '若山頂起大霧或下雨，Fantasy Park 與月亮城堡為絕佳室內避雨娛樂場所。',
        openingHours: '約 08:30 - 17:00'
      },
      {
        time: '15:30 - 17:00',
        title: '巴拿山下山 ＆ 專車返回半島飯店',
        location: '巴拿山纜車站 ➔ 半島飯店 (車程約 45~50 分鐘)',
        description: '約 15:30 前往纜車站排隊搭乘纜車下山，預留步行離場與會合時間，山腳搭乘專屬包車返回半島飯店（車程約 45~50 分鐘），稍作更衣洗漱。',
        category: 'transport',
        tags: ['纜車下山', '專車返回', '充裕緩衝'],
        isCore: true,
        weatherSuitability: 'rain-safe'
      },
      {
        time: '17:30 - 19:00',
        title: '舒壓享受：越式熱石草本 SPA / 精油按摩 (60~90 分鐘)',
        location: '半島飯店附設 SPA 或 市區知名 SPA (如 Herbal Spa / Queen Spa)',
        description: '經過巴拿山一整天的步行探索，安排 60~90 分鐘道地越式熱石或天然草本精油全身按摩，舒緩雙腿與背部肌肉，徹底恢復體力。優先推薦預約半島飯店本身 SPA 或市區名店，免去額外奔波。',
        category: 'relax',
        tags: ['熱石按摩', '草本芳療', '舒壓放鬆'],
        isCore: true,
        weatherSuitability: 'indoor-only',
        costEstimate: '每人約 400,000~750,000 VND (約 NT$500~940，依項目而定)',
        reservation: '建議出發前 1~2 天線上或由飯店前台代為預約時段'
      },
      {
        time: '19:30 - 21:00',
        title: '晚餐：人氣名店「Pizza 4P’s」手工窯烤披薩',
        location: 'Pizza 4P’s Hoàng Văn Thụ (08 Hoàng Văn Thụ) 或 Indochina Riverside 門市',
        description: '全越享負盛名的日系義式披薩名店！必點招牌「手工自製新鮮布拉塔起司帕瑪火腿披薩 (Burrata Parma Ham)」、濃郁蟹肉番茄奶油義大利麵與窯烤布丁。',
        category: 'food',
        tags: ['手工起司', '布拉塔披薩', '蟹肉義大利麵', '必吃名店'],
        isCore: true,
        weatherSuitability: 'indoor-only',
        costEstimate: '每人約 250,000~450,000 VND (約 NT$310~560)',
        openingHours: '約 10:00 - 22:30',
        reservation: '【建議預約】：該店極受歡迎，強烈建議出發前 3~7 天至官方網站 (pizza4ps.com) 線上訂位'
      },
      {
        time: '21:00 後',
        title: '【完全自由選配】韓江景觀酒吧小酌（若有體力才前往）',
        location: 'Brilliant Top Bar (162 Bạch Đằng) 或 Novotel Sky36 (36 Bạch Đằng)',
        description: '若晚餐後仍精神奕奕且想欣賞韓江夜景，可至高空景觀酒吧點杯調酒俯瞰江景；若巴拿山步行後已有睡意，請直接返回飯店休息。本行程為完全自由選配，絕非必跑項目。',
        category: 'nightlife',
        tags: ['完全自由選配', '高空酒吧', '韓江夜景'],
        isOptional: true,
        canSkipIfTired: true,
        weatherSuitability: 'sunny-preferred',
        tips: '景觀酒吧通常有服裝禮儀規範 (Smart Casual，請勿穿著拖鞋或沙灘短褲)。若體力不足請直接回飯店睡覺。',
        costEstimate: '調酒每杯約 150,000~280,000 VND (約 NT$190~350)'
      }
    ]
  },
  {
    dayNumber: 3,
    date: '2026/10/03',
    weekday: '星期六',
    title: '五行山探幽 ➔ Cam Thanh 水椰林竹籃船 ➔ 午餐 ➔ 會安古鎮老街 ➔ 秋盆河畔燈籠夜景（順路不折返！）',
    subtitle: '順路南下無縫銜接：石灰岩靈洞、水椰林桶船旋轉特技、世界遺產古鎮漫步與夢幻夜市水燈',
    theme: '五行山玄奇洞穴、Cam Thanh 水椰林綠波與會安古鎮千年燈火浪漫漫遊',
    coreActivities: ['五行山玄空洞與水山觀景', '會安古鎮歷史街區與世界遺產通票', '秋盆河畔燈籠夜景與會安夜市'],
    optionalActivities: ['Cam Thanh 竹籃船垂釣體驗', 'Faifo Coffee 屋頂景觀咖啡', '秋盆河夜間水燈祈福'],
    cutIfTiredOrRaining: ['秋盆河手搖船（若雨大水急取消，改在室內茶館欣賞燈籠街景）'],
    weatherSwapAdvice: {
      condition: '五行山階梯雨後濕滑需防滑鞋；Cam Thanh 竹籃船若遇大雨、雷雨或強風需取消。',
      suggestion: '小雨時間歇性降雨時五行山可搭電梯並減少石階登高；若遇大雨、持續性豪雨或雷雨，直接取消五行山與迦南島竹籃船，提前進會安古鎮參觀室內會館古宅，或在知名咖啡館與室內烹飪手作課度過悠閒午後。'
    },
    highlights: ['五行山玄空洞 (Huyen Khong Cave)', 'Cam Thanh 水椰林竹籃船 (晴雨備案)', '順路無折返交通動線', '會安古鎮世界遺產通票', '日本橋 (來遠橋)', '秋盆河燈籠水燈夜景', '會安夜市'],
    meals: {
      breakfast: '半島飯店豪華海景自助早餐',
      lunch: '會安在地特色風味 (Cao Lầu 高樓麵、白玫瑰拼盤、炸雲吞或水椰林景觀越式料理)',
      dinner: 'Morning Glory Original (會安經典越式私房菜) 或 Bánh Mì Phượng (世界聞名法棍麵包)',
      snackOrCafe: 'Faifo Coffee (屋頂俯瞰古鎮黃牆黑瓦) 或 Mót Hội An (招牌草本蓮花茶飲)'
    },
    transportation: '預約峴港 ➔ 五行山 ➔ Cam Thanh ➔ 會安古鎮外圍 ➔ 峴港半島飯店 全日專屬包車（順路直達，不重複折返）',
    weatherAdvice: '小雨／間歇性降雨時五行山可視地面狀況縮短參觀（優先搭乘電梯、減少石階路線、不強求登高）；若遇大雨、持續性豪雨或雷雨，直接取消五行山（避免石階濕滑危險）與竹籃船；10 月會安古鎮臨秋盆河低窪區偶有積水風險，請留意當日天候公告。',
    activities: [
      {
        time: '08:00 - 08:30',
        title: '專車出發前往五行山 (Marble Mountains)',
        location: '半島飯店 ➔ 五行山 (車程約 15~20 分鐘)',
        description: '早餐後約 08:00 出發，沿海岸公路南下前往五行山。順路第一站，避開正午烈日。',
        category: 'transport',
        tags: ['專車出發', '順路動線'],
        isCore: true,
        weatherSuitability: 'rain-safe'
      },
      {
        time: '08:30 - 10:30',
        title: '五行山 (水山 Thủy Sơn) 探秘 ＆ 玄空洞採光奇景',
        location: '52 Huyền Trân Công Chúa, Ngũ Hành Sơn',
        description: '搭乘景觀透明電梯直達水山半山腰，參觀靈應寺與望江台；深入最壯麗的「玄空洞 (Huyền Không Cave)」，欣賞陽光穿透洞頂天井灑落在巨大石雕佛像上的神聖光束。',
        category: 'sightseeing',
        tags: ['五行山', '玄空洞', '佛教聖地', '鐘乳石洞'],
        isCore: true,
        weatherSuitability: 'rain-safe',
        tips: '強烈建議購買電梯上山票節省體力；小雨時可視地面狀況縮短參觀，若遇大雨或豪雨應直接取消五行山（絕不因有電梯而冒險）；務必穿著抓地力良好的防滑平底鞋。',
        costEstimate: '門票 40,000 VND ＋ 單程電梯 15,000 VND (合計約 NT$70/人)',
        openingHours: '約 07:00 - 17:30',
        reservation: '現場購票即可',
        restrictions: ['進入寺廟與洞內佛壇請穿著合宜服飾（避免過短短褲或無袖背心）']
      },
      {
        time: '10:30 - 11:00',
        title: '順路前往 Cam Thanh 水椰林 (迦南島水域)',
        location: '五行山 ➔ Cam Thanh, Hoi An (車程約 25~30 分鐘)',
        description: '從五行山直達 Cam Thanh 水椰林，動線順暢不繞路，無縫銜接上午水上體驗。',
        category: 'transport',
        tags: ['順路直達', '不走回頭路'],
        isCore: true,
        weatherSuitability: 'rain-safe'
      },
      {
        time: '11:00 - 12:00',
        title: 'Cam Thanh 水椰林竹籃船體驗（晴雨備案機制）',
        location: 'Cam Thanh, Hoi An (迦南島周邊水椰林水道)',
        description: '【晴天/微雨方案】：搭乘傳統圓形竹編桶船穿梭於熱帶水椰林水道。視船家安排可能有旋轉特技或簡單表演，體驗持桿垂釣小螃蟹。\n【大雨備案】：如遇大雨、雷雨、水道水位異常或強風，應避免高速旋轉並取消水上活動，改為提前前往會安古鎮特色室內咖啡館或預約室內烹飪手作課 (Cooking Class)。',
        category: 'sightseeing',
        tags: ['竹籃船', '水椰林', '晴雨備案'],
        isCore: true,
        weatherSuitability: 'sunny-preferred',
        tips: '若不習慣晃動，上船時可主動向船夫示意「不旋轉 (No Spin/Nhẹ thôi)」；船夫特技表演小費隨喜 (通常約 20,000~50,000 VND)。',
        costEstimate: '竹籃船體驗約 120,000~150,000 VND (約 NT$150~190，依代訂或現場報價為準)',
        openingHours: '日間營運約 07:30 - 17:30 (每趟航程約 40~50 分鐘)',
        reservation: '建議由包車司機代訂或正規平台預購，避免現場遇非正規業者喊價',
        restrictions: [
          '【乘船安全】：上船必須全程正確穿著救生衣',
          '如遇大雨、雷雨、水道水位異常或強風，應避免高速旋轉，必要時取消水上活動'
        ]
      },
      {
        time: '12:15 - 13:30',
        title: '午餐：會安經典風味「Cao Lầu 高樓麵」＆「白玫瑰」',
        location: '會安市區名店 (如 Quán Cao Lầu Bá Lễ 或 Trung Bắc)',
        description: '品嚐會安獨有的三大名吃：以古井泉水與草木灰揉製的勁道「高樓麵 (Cao Lầu)」、晶瑩剔透宛如白玫瑰的蝦肉米餃「白玫瑰 (Bánh Bao Bánh Vạc)」，以及酥脆噴香的「會安炸雲吞」。',
        category: 'food',
        tags: ['高樓麵', '白玫瑰', '會安三大名吃'],
        isCore: true,
        weatherSuitability: 'indoor-only',
        costEstimate: '每人約 80,000~150,000 VND (約 NT$100~190)',
        openingHours: '約 08:00 - 21:00 (依店家現場公告為準)'
      },
      {
        time: '14:00 - 17:30',
        title: '會安古鎮 (Hoi An Ancient Town) 世界遺產老街散策',
        location: '會安古鎮核心保護區 (Trần Phú, Nguyễn Thái Học)',
        description: '漫步於保存完好的歷史黃牆街道，參觀日本橋 (Chùa Cầu / 來遠橋)、福建會館、廣肇會館與進記古宅。午後可至「Faifo Coffee」三樓頂露台，點杯咖啡俯瞰綿延的黑瓦黃牆經典古鎮全景。',
        category: 'sightseeing',
        tags: ['世界文化遺產', '日本橋', '福建會館', 'Faifo咖啡'],
        isCore: true,
        weatherSuitability: 'rain-safe',
        tips: '進入古鎮公共街區漫步免費；若欲入內參觀指定的傳統古宅、華人會館、博物館或觀賞傳統藝術表演，需購買古鎮指定景點參觀票券。',
        costEstimate: '外國旅客參觀票券約 120,000 VND (約 NT$150，內含固定指定景點/會館/古宅之參觀聯票，依現場官方公告與票券結構為準)',
        openingHours: '古街區全天開放；售票古蹟展館約 07:30 - 17:30',
        reservation: '景點通票於古鎮各售票亭現場購買即可',
        restrictions: [
          '古鎮核心區於特定時段實施交通管制，包車需在外圍指定地點上下車',
          '進入宗祠與會館請著合宜服裝，請勿過度暴露'
        ]
      },
      {
        time: '17:30 - 18:30',
        title: '晚餐：會安經典餐廳「Morning Glory Original」或人氣法棍',
        location: 'Morning Glory Original (106 Nguyễn Thái Học) 或 Bánh Mì Phượng (2B Phan Châu Trinh)',
        description: '在法式殖民洋樓風格的老宅中品嚐精緻越式料理，如烤豬肉春捲、會安煎餅與香茅雞肉；或外帶安東尼波登盛讚的 Bánh Mì Phượng 酥脆法棍麵包。',
        category: 'food',
        tags: ['精緻越菜', '法棍麵包', '老宅餐廳'],
        isCore: true,
        weatherSuitability: 'indoor-only',
        costEstimate: '每人約 150,000~300,000 VND (約 NT$190~380)',
        openingHours: '約 10:00 - 22:00',
        reservation: 'Morning Glory 尖峰用餐時段建議提早入座'
      },
      {
        time: '18:30 - 20:15',
        title: '秋盆河畔燈籠夜景 ＆ 會安夜市 (Chợ Đêm Hội An) 漫遊',
        location: '秋盆河兩岸 ＆ An Hội 夜市區',
        description: '夜幕低垂，整個古鎮亮起萬千五彩手工絲綢燈籠，倒映在秋盆河水面上，如夢似幻。可體驗河畔放紙水燈祈福，過橋逛會安夜市品嚐香蕉煎餅與採購燈籠手工藝品。',
        category: 'nightlife',
        tags: ['燈籠夜景', '秋盆河水燈', '會安夜市', '浪漫夜色'],
        isCore: true,
        weatherSuitability: 'rain-safe',
        tips: '【水燈安全提示】：水上搭乘手搖船請務必穿好救生衣；若當日水流湍急或下大雨，請在河岸邊安全放水燈即可，嚴禁冒險登船。',
        costEstimate: '水燈每個約 10,000~20,000 VND；手工燈籠約 50,000~150,000 VND',
        openingHours: '夜市約 18:00 - 22:00'
      },
      {
        time: '20:15 - 20:45',
        title: '步行至古鎮外圍約定接送點與包車司機會合',
        location: '會安古鎮核心區 ➔ 古鎮外圍指定停車場',
        description: '預留夜間人潮、雨天路況與古鎮步行時間，前往事先約定的外圍上車點。包車約定 21:00 準時發車返回峴港。',
        category: 'transport',
        tags: ['步行會合', '預留緩衝'],
        isCore: true,
        weatherSuitability: 'rain-safe',
        tips: '請事先與司機加通訊軟體 (Zalo/WhatsApp) 發送定位，不要只模糊約定「古鎮外圍」。'
      },
      {
        time: '21:00 - 22:00',
        title: '專車返回峴港半島飯店休息',
        location: '會安 ➔ 峴港半島飯店 (車程約 45~50 分鐘)',
        description: '21:00 專車準時出發，經沿海公路返回半島飯店，預計 21:45~22:00 抵達飯店大廳，結束豐富充實的一天。',
        category: 'transport',
        tags: ['專車返程', '直達飯店'],
        isCore: true,
        weatherSuitability: 'rain-safe'
      }
    ]
  },
  {
    dayNumber: 4,
    date: '2026/10/04',
    weekday: '星期日',
    title: '【慢活恢復日】山茶半島靈應寺遠眺 ➔ 庭園午餐 ➔ 下午沙灘泳池放鬆 ➔ 21:00 週末龍橋噴火震撼秀',
    subtitle: '旅途黃金調節節奏：朝聖 67 米白玉觀音、享受海景泳池與精品咖啡、晚上卡位欣賞龍橋噴火噴水',
    theme: '整趟旅程的慢活充電日：山茶半島靈氣淨化、午後海景放鬆與週日龍橋噴火奇觀',
    coreActivities: ['山茶半島靈應寺與 67 米觀音聖像', '21:00 龍橋 (Dragon Bridge) 週末固定噴火噴水秀'],
    optionalActivities: ['美溪沙灘足部漫步', '半島飯店無邊際泳池海景放鬆', '43 Factory 精品咖啡'],
    cutIfTiredOrRaining: ['美溪沙灘漫步（若雨大改在室內精品咖啡館或飯店海景房聽雨放鬆）'],
    weatherSwapAdvice: {
      condition: '今日為全天低強度慢活行程，是整趟旅程最重要的「機動萬用緩衝日」。',
      suggestion: '若 Day 2 巴拿山或 Day 5 順化遇不良天候，可隨時將當日行程與本日前半段對調；晚間 21:00 龍橋噴火秀為固定時間錨點不變。'
    },
    highlights: ['山茶半島靈應寺 (Lady Buddha)', '67 米白玉觀音聖像', 'Madam Lan 庭園景觀餐廳', '美溪沙灘慢步', '43 Factory 精品咖啡', '龍橋 (Dragon Bridge) 週末噴火噴水秀 (2026 常規 21:00)'],
    meals: {
      breakfast: '半島飯店豪華海景自助早餐',
      lunch: 'Madam Lan (韓江畔庭園式景觀餐廳，品嚐精緻越式料理)',
      dinner: '美溪沙灘精緻牛排、海邊海鮮或韓江畔特色景觀餐廳',
      snackOrCafe: '43 Factory Coffee Roaster (精品手沖咖啡) 或 The Cups Coffee'
    },
    transportation: '山茶半島以預約短程包車或 Grab 移動；市區移動以 Grab 為主',
    weatherAdvice: '山茶半島靈應寺為戶外開闊景點，微雨不影響參觀；下午完全為彈性室內與放鬆區間。晚上龍橋週末演出時間目前官方常規為週五、週六、週日 21:00，若遇特殊天候或官方臨時活動調整，依當晚峴港官方公告為準；請攜帶雨具並提早於 20:15~20:30 前卡位。',
    activities: [
      {
        time: '08:30 - 10:00',
        title: '晨光海景早餐 ＆ 悠閒晨間漫步',
        location: '半島飯店',
        description: '睡到自然醒，悠閒享用飯店自助早餐，欣賞美溪沙灘晨曦與海浪起伏，洗滌身心。',
        category: 'relax',
        tags: ['晨光早餐', '海景第一排', '放慢節奏'],
        isCore: true,
        weatherSuitability: 'indoor-only'
      },
      {
        time: '10:00 - 12:00',
        title: '山茶半島靈應寺 (Chùa Linh Ứng Bãi Bụt) ＆ 67 米白玉觀音',
        location: '山茶半島 (Bãi Bụt, Sơn Trà)',
        description: '驅車沿山茶半島海岸公路蜿蜒而上，參觀面向大海的 67 米白玉觀音聖像。在此俯瞰整個峴港彎月形海岸線與美溪沙灘壯闊全景。',
        category: 'sightseeing',
        tags: ['山茶半島', '白玉觀音', '靈應寺', '全景俯瞰'],
        isCore: true,
        weatherSuitability: 'rain-safe',
        tips: '靈應寺免費參觀；寺內常有野生猴群出沒，請勿主動餵食或挑釁，並保管好隨身小物品。',
        costEstimate: '免費參觀 (Grab 單程約 80,000~120,000 VND)',
        openingHours: '約 06:00 - 18:00',
        reservation: '無需預約',
        restrictions: ['進入大殿需脫鞋並穿著過膝長褲或長裙，保持莊嚴肅靜']
      },
      {
        time: '12:30 - 13:45',
        title: '午餐：韓江畔名店「Madam Lan」庭園越式美饌',
        location: '04 Bạch Đằng, Thạch Thang, Hải Châu',
        description: '在充滿越南傳統庭園建築美學與綠植流水環繞的餐廳中，品嚐匯集北中南越特色的經典料理：鮮蝦春捲、烤肉米線、越式甘蔗蝦與香炒晨牽牛花。',
        category: 'food',
        tags: ['庭園餐廳', '精緻越菜', '春捲拼盤', '甘蔗蝦'],
        isCore: true,
        weatherSuitability: 'indoor-only',
        costEstimate: '每人約 200,000~350,000 VND (約 NT$250~440)',
        openingHours: '約 06:30 - 21:30',
        reservation: '現場入座（座位寬敞，團體亦可提早訂位）'
      },
      {
        time: '14:00 - 18:00',
        title: '【下午慢活彈性區間】半島海景泳池 ＋ 美溪沙灘漫步 ＋ 43 Factory 精品咖啡',
        location: '美溪沙灘海岸 ＆ 43 Factory Coffee (Lot 422 Ngô Thì Sĩ)',
        description: '整趟旅程的精華慢活充電時光！可回飯店無邊際泳池戲水放鬆、在客房陽台吹海風閱讀，或步行至美溪沙灘踏浪；隨後前往極具現代工業美學的「43 Factory Coffee Roaster」，品嚐單品手沖咖啡。',
        category: 'relax',
        tags: ['海景泳池', '沙灘漫步', '精品手沖', '慢活充電'],
        isOptional: true,
        weatherSuitability: 'rain-safe',
        tips: '本時段為完全自由彈性區間，不強求跑完所有項目，請隨心所欲地享受度假節奏。',
        costEstimate: '精品手沖咖啡每杯約 100,000~180,000 VND (約 NT$125~225)'
      },
      {
        time: '18:30 - 20:00',
        title: '晚餐：海邊精緻餐廳或韓江畔景觀美食',
        location: '美溪沙灘周邊或韓江畔',
        description: '品嚐精緻海鮮炭烤、美式牛排或越法融合料理，享受微醺從容的週日晚餐。',
        category: 'food',
        tags: ['精緻晚宴', '放鬆饗宴'],
        isCore: true,
        weatherSuitability: 'indoor-only',
        costEstimate: '每人約 250,000~450,000 VND (約 NT$310~560)'
      },
      {
        time: '20:15 - 21:30',
        title: '【固定主要時間錨點】龍橋 (Dragon Bridge) 週末噴火噴水秀',
        location: '龍橋東岸龍頭端 (靠近 Trần Hưng Đạo 路口)',
        description: '峴港週末代表性活動！金色巨龍橫跨韓江，於 21:00 準時上演噴火與噴水燈光特效（演出時間約 15 分鐘）。2026 目前官方常規演出為每週五、週六、週日 21:00，特殊天候或臨時調整依當晚官方公告為準。',
        category: 'sightseeing',
        tags: ['龍橋噴火', '週末限定', '地標盛宴', '韓江夜景'],
        isCore: true,
        weatherSuitability: 'rain-safe',
        tips: '【觀賞位置提示】：建議提前於 20:15~20:30 抵達龍頭下方廣場或周邊二樓景觀咖啡館卡位。請注意風向，站在龍頭正下方下風處可能被噴水水花潑及。',
        costEstimate: '免費觀賞',
        openingHours: '2026 目前官方常規為每週五、週六、週日 21:00 (特殊天候或活動調整依當晚峴港官方公告為準)',
        restrictions: ['演出期間周邊橋面與路口將實施機動車輛交通管制，需步行前往']
      }
    ]
  },
  {
    dayNumber: 5,
    date: '2026/10/05',
    weekday: '星期一',
    title: '【雙方案自選】方案 A：順化阮朝世界遺產一日遊 ｜ 方案 B：峴港海景度假放鬆日',
    subtitle: '根據旅遊偏好自由選擇：熱愛歷史文化可選「順化皇城」，重視舒壓放鬆可選「峴港度假日」',
    theme: '歷史探索與度假休閒的自由抉擇：順化阮朝紫禁城 vs 峴港海景 SPA 採買舒活日',
    coreActivities: ['方案 A：順化皇城深度探訪 ｜ 方案 B：頂級 SPA 與樂天超市採買'],
    optionalActivities: ['方案 A：啟定皇陵 (視天候體力加選) ｜ 方案 B：美溪沙灘日落與精品下午茶'],
    cutIfTiredOrRaining: ['方案 A：啟定陵 ｜ 方案 B：泳池、美溪沙灘散步'],
    weatherSwapAdvice: {
      condition: '順化位於山脈北側，10 月雨量與降雨機率往往高於峴港。',
      suggestion: '若當日順化預報有大豪雨警報，強烈建議旅客直接啟動「方案 B 峴港度假日」，省去 5 小時長途車程，在市區享受頂級 SPA 與美食！',
      targetDayNumber: 5,
      recommendedModule: 'module-danang-relax'
    },
    highlights: [
      '方案 A：順化皇城 (The Citadel / 阮朝大內)',
      '方案 A：正宗順化牛肉粉 (Bún Bò Huế) 發源地品嚐',
      '方案 A：海雲隧道往返 (降低山路風險)',
      '方案 B：睡到自然醒 ＋ 90~120分鐘頂級熱石SPA',
      '方案 B：樂天超市 (Lotte Mart) 伴手禮一站式採買打包',
      '方案 B：旅程告別海邊慶祝晚宴'
    ],
    meals: {
      breakfast: '半島飯店豪華海景自助早餐',
      lunch: '方案 A：順化正宗牛肉粉 (Quán Bà Tuyết) ｜ 方案 B：市區特色料理或景觀輕食',
      dinner: 'Fatfish Restaurant (韓江畔創意料理) 或 美溪沙灘海鮮慶祝晚宴',
      snackOrCafe: '順化傳統鹽咖啡 (Cà Phê Muối) 或 峴港法式甜點咖啡'
    },
    transportation: '方案 A：預約峴港往返順化全日包車（全程約 10~11 小時，優先行駛海雲隧道）；方案 B：市區以 Grab 短程接駁',
    weatherAdvice: '若選擇方案 A 順化一日遊，原則上經海雲隧道往返以避開山路濃霧；若當日遇豪雨警報或道路積水，應遵從司機建議取消順化並直接切換至方案 B。',
    activities: [
      {
        time: '07:00 - 09:30',
        title: '【方案 A】專車出發前往古都順化 (經海雲隧道)',
        location: '峴港 ➔ 順化 (車程約 2~2.5 小時)',
        description: '清晨 07:00 與包車司機會合出發。專車原則上經「海雲隧道」穿越長山山脈，避免海雲關險峻山路濃霧風險，平穩直達阮朝古都順化。',
        category: 'transport',
        tags: ['方案A', '海雲隧道', '古都專車'],
        isCore: true,
        weatherSuitability: 'rain-safe',
        tips: '容易暈車者可於出發前 30 分鐘服用暈車藥；車程中可在車上補眠儲備體力。',
        openingHours: '海雲隧道通行與管制狀況依當日道路公告為準'
      },
      {
        time: '09:30 - 12:00',
        title: '【方案 A】順化皇城 (The Citadel / 阮朝大內) 文化探索',
        location: '順化皇城 (Thành nội Huế)',
        description: '參觀越南阮朝十三代皇帝的皇城與紫禁城建築群。漫步於午門 (Ngọ Môn)、太和殿 (Điện Thái Hòa)、世廟與顯臨閣，感受結合防禦堡壘與越南宮廷建築工藝的 UNESCO 世界文化遺產。',
        category: 'sightseeing',
        tags: ['方案A', '世界文化遺產', '順化皇城', '紫禁城', '阮朝古都'],
        isCore: true,
        weatherSuitability: 'rain-safe',
        tips: '皇城核心區範圍寬廣，參觀建議穿著好走的休閒鞋並備妥雨傘防曬雨具；可於入口租用語音導覽機了解歷史脈絡。',
        costEstimate: '外國成人門票約 200,000 VND (約 NT$250，以現場售票處公告為準)',
        openingHours: '約 07:00 - 17:30',
        reservation: '現場售票處購票即可',
        restrictions: ['進入殿堂內請勿大聲喧嘩，部分重要宮殿內部禁止攝影']
      },
      {
        time: '12:00 - 13:00',
        title: '【方案 A】午餐：正宗發源地「順化牛肉粉 (Bún Bò Huế)」',
        location: 'Quán Bà Tuyết (47 Nguyễn Công Trứ) 或 順化在地名店',
        description: '順化是 Bún Bò Huế 的發源地！品嚐以牛骨、香茅、蝦醬與鮮辣椒精心熬製的鮮辣濃郁紅湯，搭配滑溜粗米線、滷牛腱、豬腳與手工牛肉丸，道地辛香過癮。',
        category: 'food',
        tags: ['方案A', '順化牛肉粉', '發源地名吃', '辛香過癮'],
        isCore: true,
        weatherSuitability: 'indoor-only',
        costEstimate: '每碗約 40,000~70,000 VND (約 NT$50~90)'
      },
      {
        time: '13:15 - 14:00',
        title: '【方案 A】品嚐特色名飲「順化傳統鹽咖啡 (Cà Phê Muối)」',
        location: 'Quán Cà Phê Muối (10 Nguyễn Lương Bằng 或 142 Đặng Thái Thân)',
        description: '品嚐順化代表性的特色飲品：黑咖啡頂層覆蓋以海鹽調製的綿密鹹奶蓋，鹹甜交融、口感絲滑醇厚。',
        category: 'food',
        tags: ['方案A', '鹽咖啡發源地', '鹹甜奶蓋'],
        isOptional: true,
        weatherSuitability: 'indoor-only',
        costEstimate: '每杯約 25,000~40,000 VND (約 NT$30~50)'
      },
      {
        time: '14:15 - 15:30',
        title: '【方案 A 彈性加選】啟定皇陵 (Ứng Lăng) 參觀（視天候與體力執行）',
        location: 'Khải Định Tomb (Châu Chữ, Hương Thủy, Huế)',
        description: '融會法式巴洛克、哥德式與越式陶瓷鑲嵌工藝的最華麗皇陵。若天候良好、皇城提早結束且司機確認時間充裕才前往；若體力不足或天雨路滑，則直接啟程返峴港。',
        category: 'sightseeing',
        tags: ['方案A', '啟定陵', '陶瓷鑲嵌', '彈性加選'],
        isOptional: true,
        canSkipIfTired: true,
        weatherSuitability: 'sunny-preferred',
        tips: '【加選提醒】：啟定陵需攀登 127 級陡峭石階，雨天濕滑需注意安全；若加選啟定陵，參觀後直接返回峴港，不再增加其他停留點。',
        costEstimate: '門票約 150,000 VND (約 NT$190)',
        openingHours: '約 07:00 - 17:30'
      },
      {
        time: '15:30 - 18:00',
        title: '【方案 A】專車經海雲隧道返回峴港',
        location: '順化 ➔ 峴港半島飯店 (車程約 2~2.5 小時)',
        description: '專車返程經海雲隧道返回峴港，約 18:00 抵達飯店休息，隨後在市區享用簡單溫暖的晚餐，不強塞行程。',
        category: 'transport',
        tags: ['方案A', '專車返程', '直達峴港'],
        isCore: true,
        weatherSuitability: 'rain-safe'
      },
      {
        time: '18:30 - 20:00',
        title: '晚餐：韓江畔精緻料理「Fatfish」或美溪海鮮餐廳',
        location: 'Fatfish Restaurant (439 Trần Hưng Đạo) 或市區海鮮名店',
        description: '品嚐越式與地中海融合的創意魚鮮料理，或是在美溪海岸享用鮮魚鍋與炭烤生蠔，為充實的順化之行劃下完美句點。',
        category: 'food',
        tags: ['創意料理', '韓江景觀', '舒心晚宴'],
        isCore: true,
        weatherSuitability: 'indoor-only',
        costEstimate: '每人約 300,000~550,000 VND (約 NT$380~690)'
      }
    ],
    alternativePlanB: {
      title: '方案 B：峴港度假慢活放鬆日 (無長途車程首選)',
      subtitle: '睡到自然醒、享受頂級 SPA、逛街採買伴手禮與海邊漫步，極致舒適的度假節奏',
      theme: '零長途車程壓力：極致放鬆 SPA、樂天超市一站式採買與旅程最後告別晚宴',
      coreActivities: ['90~120 分鐘頂級越式熱石草本 SPA', '樂天超市 (Lotte Mart) 伴手禮採買打包', '旅程告別慶祝晚餐'],
      comparison: {
        travelTime: '無跨城市長途車程；僅需峴港市區短程 Grab 移動。',
        fatigue: '極低（徹底放鬆充電） vs 方案 A 體力消耗高',
        culture: '市區生活與美食體驗 vs 方案 A 世界文化遺產歷史深度',
        relaxation: '極高（SPA＋海景泳池＋下午茶） vs 方案 A 節奏偏緊湊',
        rainRisk: '雨季調整彈性高；若天候不佳，可直接刪除泳池、沙灘與戶外散步。'
      },
      meals: {
        breakfast: '半島飯店悠閒晨光自助早餐',
        lunch: 'Madam Lan 庭園越式餐廳 或 市區特色料理',
        dinner: 'Fatfish Restaurant 或 美溪海鮮海景慶祝晚宴',
        snackOrCafe: '精品咖啡手沖品鑑 或 法式下午茶'
      },
      transportation: '市區以 Grab App 即時叫車短程移動（單趟約 30,000~70,000 VND）',
      weatherAdvice: '本方案為全天候防雨度假模式，所有活動皆在室內商場、SPA 館與優質餐廳，若遇降雨可靈活刪除沙灘與泳池，完全不受天候干擾！',
      activities: [
        {
          time: '08:30 - 10:30',
          title: '睡到自然醒 ＆ 半島飯店海景早餐',
          location: '峴港半島飯店海景餐廳',
          description: '不設鬧鐘，睡到自然醒後至海景餐廳享用豐盛自助早餐，品嚐滴漏咖啡與現做越式料理，享受無壓晨光。',
          category: 'relax',
          tags: ['自然醒', '海景早餐', '無壓度假'],
          isCore: true,
          weatherSuitability: 'indoor-only'
        },
        {
          time: '10:30 - 12:30',
          title: '極致享受：頂級越式熱石草本 SPA / 精油全身芳療 (90~120 分鐘)',
          location: '半島飯店 SPA 或 市區知名 SPA (如 Queen Spa / Herbal Spa)',
          description: '享受 90~120 分鐘全身深層放鬆護理，結合天然火山熱石、草本藥草包熱敷與芳香精油推拿，徹底釋放累積的疲勞。',
          category: 'relax',
          tags: ['深度SPA', '熱石草本', '芳療推拿'],
          isCore: true,
          weatherSuitability: 'indoor-only',
          costEstimate: '每人約 500,000~900,000 VND (約 NT$625~1,125)'
        },
        {
          time: '12:30 - 14:00',
          title: '午餐：市區精緻越式料理 或 景觀輕食',
          location: '市區特色餐廳 (如 Bếp Cuốn 或 韓江畔美食)',
          description: '品嚐全越七彩春捲拼盤、鮮蝦豬肉煎餅或特色米線，悠閒享受美食時光。',
          category: 'food',
          tags: ['越式春捲', '精緻午餐'],
          isCore: true,
          weatherSuitability: 'indoor-only',
          costEstimate: '每人約 150,000~250,000 VND'
        },
        {
          time: '14:00 - 16:30',
          title: '伴手禮採買：樂天超市 (Lotte Mart) 採購 ＆ 免費紙箱打包',
          location: 'Lotte Mart Danang (6 Nại Nam, Hoà Cường Bắc, Hải Châu)',
          description: '冷氣舒適的大型超市！一站式採買帶皮鹽焗腰果、G7/中原傳奇咖啡豆、芒果乾、波羅蜜脆片、越南排骨雞湯塊與胡椒粒。超市設有免費紙箱與膠帶打包台，方便託運。',
          category: 'shopping',
          tags: ['樂天超市', '伴手禮採買', '腰果咖啡', '免費打包'],
          isCore: true,
          weatherSuitability: 'indoor-only',
          costEstimate: '依個人採購預算 (通常約 NT$500~2,000)'
        },
        {
          time: '16:30 - 18:30',
          title: '半島飯店海景無邊際泳池放鬆 ＆ 美溪沙灘日落散步',
          location: '半島飯店泳池 ＆ 美溪沙灘',
          description: '回飯店將採購物品放好，換上泳裝在頂樓或戶外海景無邊際泳池享受暢游樂趣；亦可漫步至沙灘踏浪，欣賞傍晚雲彩變幻。若下雨則直接在客房休息。',
          category: 'relax',
          tags: ['無邊際泳池', '沙灘日落', '慢活悠閒'],
          isCore: true,
          weatherSuitability: 'rain-safe'
        },
        {
          time: '19:00 - 21:00',
          title: '旅程告別慶祝晚宴：Fatfish 創意料理 或 美溪活海鮮大餐',
          location: 'Fatfish Restaurant (韓江畔) 或 美溪海岸頂級海鮮餐廳',
          description: '與旅伴舉杯慶祝美好的中越假期，回顧幾天來的精采回憶，享用精緻海鮮或創意料理，度過溫馨難忘的最後一夜。',
          category: 'food',
          tags: ['告別晚宴', '慶祝派對', '極致美味'],
          isCore: true,
          weatherSuitability: 'indoor-only',
          costEstimate: '每人約 350,000~600,000 VND'
        }
      ]
    }
  },
  {
    dayNumber: 6,
    date: '2026/10/06',
    weekday: '星期二',
    title: '占婆雕刻博物館 ➔ 告別午餐 ➔ 飯店提領行李 ➔ 13:45~14:00 出發前往機場 ➔ 17:30 航班返台',
    subtitle: '古文明藝術巡禮、品嚐炭烤烤肉米線、充裕預留 3 小時以上雨季交通與安檢安全緩衝',
    theme: '占婆古文明精華巡禮、道地風味告別午餐與從容安全的國際返程節奏',
    coreActivities: ['占婆雕刻博物館 (Museum of Cham Sculpture)', '13:45~14:00 離開飯店出發前往機場'],
    optionalActivities: ['市區特色咖啡館悠閒小憩'],
    cutIfTiredOrRaining: ['市區自由咖啡館（若時間緊湊可刪，直接返回飯店提領行李）'],
    weatherSwapAdvice: {
      condition: '離境日必須以「國際航班準時安全登機」為絕對最高原則！',
      suggestion: '寧可提早到機場，也不要用最後一餐或景點壓縮國際航班緩衝。13:45~14:00 從飯店出發，預計 14:15~14:30 抵達機場 T2 國際航廈，保留約 3 小時進行報到與安檢。'
    },
    highlights: ['09:40~10:50 占婆雕刻博物館', '11:10~12:15 Bún Chả 炭火烤肉米線午餐', '13:15 返回飯店提領行李', '13:45~14:00 出發前往機場 (預計 14:15~14:30 抵達)', '17:30 航班起飛返台'],
    meals: {
      breakfast: '半島飯店豪華海景自助早餐',
      lunch: 'Bún Chả Hà Nội 59 (炭火烤肉米線) 或 Bếp Cuốn (特色春捲拼盤)',
      dinner: '機上精緻套餐 (依航班提供)',
      snackOrCafe: '機場候機室或市區最後一杯滴漏咖啡'
    },
    transportation: '市區景點搭乘 Grab 短程移動；13:45~14:00 由半島飯店搭乘預約專車或 Grab 直達機場 T2 國際航廈 (車程約 20~30 分鐘)',
    weatherAdvice: '收官日將占婆雕刻博物館排於上午 09:40–10:50，保留午餐與送機充足時間；實際開放時間請於出發前依博物館及峴港官方最新公告確認。恪守「13:15 左右返回飯店、13:45–14:00 出發前往機場」的最高安全原則！',
    activities: [
      {
        time: '08:00 - 09:00',
        title: '飯店早餐 ＆ 最後整理行李',
        location: '半島飯店海景餐廳與客房',
        description: '享用豐盛海景自助早餐，回房將伴手禮與衣物妥善打包，確認護照、重要證件、錢包與貴重物品隨身放妥。',
        category: 'relax',
        tags: ['海景早餐', '打包行李', '退房準備'],
        isCore: true,
        weatherSuitability: 'indoor-only'
      },
      {
        time: '09:00 - 09:20',
        title: 'Check-out 退房 ＆ 行李寄放飯店前台',
        location: '半島飯店前台大廳',
        description: '辦理退房手續，將大型托運行李暫寄於飯店大廳並領取行李牌，隨身攜帶貴重物品輕裝出發市區。',
        category: 'relax',
        tags: ['退房手續', '行李寄放'],
        isCore: true,
        weatherSuitability: 'indoor-only'
      },
      {
        time: '09:40 - 10:50',
        title: '占婆雕刻博物館 (Museum of Cham Sculpture) 參觀',
        location: '02 2 Tháng 9, Bình Hiên, Hải Châu',
        description: '由法國遠東學院建於 1915 年的法式殖民風格博物館，館藏世界最豐富的古占婆王國 7 至 15 世紀砂岩雕刻藝術品（濕婆神、迦樓羅神鳥、舞王像與象神）。排在上午 09:40–10:50 參觀，保留午餐與送機充足時間，全室內展館適合雨天參觀。',
        category: 'sightseeing',
        tags: ['占婆文明', '砂岩雕刻', '文化藝術', '全室內展館'],
        isCore: true,
        weatherSuitability: 'indoor-only',
        tips: '展館設有法式花園中庭，靜謐典雅；可於售票處租用中文導覽器深入了解占婆神話故事。',
        costEstimate: '門票約 60,000 VND (約 NT$75)',
        openingHours: '約 07:30 - 17:00；實際開放時間依博物館及峴港官方最新公告為準',
        reservation: '現場購票入館即可'
      },
      {
        time: '11:10 - 12:15',
        title: '告別午餐：炭火烤肉米線「Bún Chả Hà Nội 59」或「Bếp Cuốn」',
        location: 'Bún Chả Hà Nội 59 (59 Nguyễn Chí Thanh) 或 54 Nguyễn Văn Thoại',
        description: '炭火現烤焦香的豬肉丸與五花肉片浸泡在酸甜魚露高湯中，搭配生菜、香草與米線品嚐。本餐安排於 11:10–12:15 享用，時間從容不急迫。',
        category: 'food',
        tags: ['炭火烤肉米線', '生菜香草', '告別美食'],
        isCore: true,
        weatherSuitability: 'indoor-only',
        costEstimate: '每人約 60,000~120,000 VND (約 NT$75~150)',
        openingHours: '約 08:00 - 21:00'
      },
      {
        time: '12:15 - 13:15',
        title: '【自由選配】市區特色咖啡館悠閒小憩（可刪）',
        location: '市區精品咖啡館 (如 43 Factory 或 The Cups Coffee)',
        description: '午餐後至鄰近特色咖啡館享用最後一杯香濃越式滴漏咖啡或手沖咖啡，沈澱幾天來的旅程回憶。若時間緊湊或想早點回飯店休息，本項可自由刪除。',
        category: 'food',
        tags: ['自由選配', '市區咖啡', '悠閒小憩', '可彈性刪除'],
        isOptional: true,
        canSkipIfTired: true,
        weatherSuitability: 'indoor-only',
        costEstimate: '每杯約 40,000~70,000 VND (約 NT$50~90)'
      },
      {
        time: '13:15 左右',
        title: '返回半島飯店大廳',
        location: '市區 ➔ 半島飯店 (Grab 車程約 10~15 分鐘)',
        description: '搭乘 Grab 返回半島飯店大廳，準備提領寄放行李與進行最後整理。',
        category: 'transport',
        tags: ['返回飯店', 'Grab接駁'],
        isCore: true,
        weatherSuitability: 'indoor-only'
      },
      {
        time: '13:30 - 13:45',
        title: '提領行李、確認護照與隨身物品',
        location: '半島飯店前台大廳',
        description: '向櫃台憑牌提領寄放行李，再次檢查護照、登機電子憑證、錢包、貴重物品與隨身行動電源，做好出發機場的一切準備。',
        category: 'relax',
        tags: ['提領行李', '檢查證件', '準備出發'],
        isCore: true,
        weatherSuitability: 'indoor-only'
      },
      {
        time: '13:45 - 14:00',
        title: '出發前往峴港國際機場 T2 國際航廈',
        location: '半島飯店 ➔ 峴港國際機場 T2 國際航廈 (車程約 20~30 分鐘)',
        description: '於 13:45–14:00 搭乘預約專車或 Grab 直達機場 T2 航廈，預留充分雨季交通與市區車流緩衝。',
        category: 'transport',
        tags: ['出發送機', '專車直達', '安全緩衝'],
        isCore: true,
        weatherSuitability: 'rain-safe',
        costEstimate: 'Grab 到機場約 120,000~160,000 VND (約 NT$150~200)'
      },
      {
        time: '14:15 - 14:30 左右',
        title: '預計抵達機場 ➔ 報到 Check-in ➔ 安檢出境 ➔ 17:30 航班起飛',
        location: '峴港國際機場 T2 國際航廈出境大廳',
        description: '預計 14:15–14:30 抵達機場 T2 航廈，保留約 3 小時充裕時間辦理托運行李、領取登機證、通過出境海關查驗與隨身行李安檢。在候機大廳可逛免稅店採買最後伴手禮或於貴賓室休息，17:30 班機準時起飛返台，滿載美好回憶！',
        category: 'transport',
        tags: ['預計抵達', '國際登機', '平安返台', '完美收官'],
        isCore: true,
        weatherSuitability: 'indoor-only',
        restrictions: [
          '【海關檢疫提醒】：嚴禁攜帶任何含肉類製品（肉乾、肉鬆蛋捲、火腿等）入境台灣，違者重罰 NT$200,000 起！',
          '行動電源與鋰電池必須隨身攜帶，嚴禁放入托運行李'
        ]
      }
    ]
  }
];

export const ALTERNATIVE_STYLES: AlternativeStyle[] = [
  {
    id: 'style-classic',
    title: '玩法 A：初訪經典精華全覽',
    tag: '初訪首選',
    iconName: 'Compass',
    targetAudience: '第一次造訪中越、希望一次走訪各大核心代表性地標的旅客',
    description: '涵蓋峴港大教堂、巴拿山佛手橋、五行山、Cam Thanh 竹籃船、會安古鎮、山茶半島與順化皇城，經典地標完整規劃。',
    coreVibe: '節奏充實、動線順暢、兼顧經典景觀與在地美食',
    estimatedCostTWD: 'NT$ 26,000 ~ 29,000 /人',
    keyHighlights: ['巴拿山黃金佛手橋與高空纜車', '會安古鎮秋盆河夜景與水燈', 'Cam Thanh 水椰林竹籃船體驗', '順化皇城大內與古都風貌', '美溪沙灘在地海鮮料理'],
    daysSummary: [
      { day: 'Day 1', theme: '市區走訪', schedule: '機場抵達 ➔ 韓市場換匯 ➔ 粉紅教堂 ➔ Cộng Cà Phê ➔ 海鮮晚餐' },
      { day: 'Day 2', theme: '巴拿山', schedule: '景觀纜車 ➔ 佛手金橋 ➔ 法國村 ➔ 傍晚 SPA 放鬆 ➔ Pizza 4P’s' },
      { day: 'Day 3', theme: '五行會安', schedule: '五行山 ➔ Cam Thanh 竹籃船 ➔ 會安古鎮 ➔ 燈籠夜市 ➔ 專車返峴港' },
      { day: 'Day 4', theme: '市區慢活', schedule: '山茶半島靈應寺 ➔ Madam Lan ➔ 沙灘咖啡 ➔ 週末 21:00 龍橋秀' },
      { day: 'Day 5', theme: '順化古都', schedule: '海雲隧道 ➔ 順化皇城 ➔ 正宗順化牛肉粉 ➔ 鹽咖啡 ➔ 專車返峴港' },
      { day: 'Day 6', theme: '文化返程', schedule: '09:40~10:50 占婆博物館 ➔ Bún Chả 烤肉米線 ➔ 13:45~14:00 專車機場 ➔ 17:30 起飛' }
    ]
  },
  {
    id: 'style-luxury-relax',
    title: '玩法 B：度假慢活 SPA 放鬆遊',
    tag: '舒壓放鬆',
    iconName: 'Sparkles',
    targetAudience: '重視睡眠與放鬆品質、喜愛芳療 SPA、海景泳池與精緻餐飲的度假客',
    description: '免去長途奔波，取消順化長途車程。每天睡到自然醒，安排 3 次精緻 SPA、特色餐廳與海景無邊際泳池。',
    coreVibe: '步調從容、充分休息、享受美食與身心放鬆',
    estimatedCostTWD: 'NT$ 27,000 ~ 38,000 /人',
    keyHighlights: ['安排 3 次 90~120 分鐘熱石草本 SPA', '半島飯店海景無邊際泳池與海灘漫步', 'Madam Lan ＆ Pizza 4P’s ＆ 海鮮料理', 'Lotte Mart 無壓伴手禮採購', '取消順化約 4.5～5 小時長途往返，降低整趟旅程交通負荷'],
    daysSummary: [
      { day: 'Day 1', theme: '海景初會', schedule: '半島海景房入住 ➔ 韓市場換匯 ➔ 市區悠閒活動 ➔ 海鮮餐廳 ➔ 飯店休息' },
      { day: 'Day 2', theme: '雲端漫步', schedule: '巴拿山悠閒遊 ➔ 飯店海景泳池 ➔ 芳療 SPA ➔ Pizza 4P’s' },
      { day: 'Day 3', theme: '浪漫古鎮', schedule: '午後前往會安古鎮 ➔ 老宅私房菜 ➔ 秋盆河燈籠景觀咖啡' },
      { day: 'Day 4', theme: '慢活充電', schedule: '山茶半島遠眺 ➔ 精品手沖咖啡 ➔ 舒壓芳療 ➔ 龍橋夜景' },
      { day: 'Day 5', theme: '市區度假', schedule: '自然醒 ➔ 雙人深度 SPA ➔ Lotte Mart 伴手禮採買 ➔ 告別晚宴' },
      { day: 'Day 6', theme: '悠閒返程', schedule: '09:40~10:50 占婆博物館 ➔ 精緻春捲午餐 ➔ 13:45~14:00 專車機場 ➔ 17:30 起飛' }
    ]
  },
  {
    id: 'style-heritage',
    title: '玩法 C：中越古文明與雙世遺深度遊',
    tag: '歷史人文',
    iconName: 'Landmark',
    targetAudience: '對阮朝歷史、占婆印度教古文明、中法融合建築有濃厚興趣者',
    description: '專注「會安古鎮」與「順化皇城」兩大 UNESCO 世界文化遺產，結合占婆雕刻博物館，品嚐順化料理與牛肉粉發源地風味。',
    coreVibe: '文史底蘊深厚、古蹟探訪、知性與感性兼具',
    estimatedCostTWD: 'NT$ 27,000 ~ 30,000 /人',
    keyHighlights: ['順化皇城宮殿建築群探訪', '會安古鎮指定古蹟與華人會館', '占婆雕刻博物館砂岩古物', '順化傳統鹽咖啡特色品嚐', '五行山玄空洞'],
    daysSummary: [
      { day: 'Day 1', theme: '法式風情', schedule: '峴港抵達 ➔ 法式粉紅教堂 ➔ 韓市場 ➔ 韓江咖啡' },
      { day: 'Day 2', theme: '法越交融', schedule: '巴拿山法國村 ➔ 佛手金橋 ➔ 市區越式經典晚餐' },
      { day: 'Day 3', theme: '會安世遺', schedule: '五行山石窟 ➔ 會安古鎮老街與古蹟會館 ➔ 福建會館 ➔ 夜市' },
      { day: 'Day 4', theme: '靈應觀音', schedule: '山茶半島靈應寺 ➔ 占婆文化導讀 ➔ 週末龍橋噴火秀' },
      { day: 'Day 5', theme: '順化皇城', schedule: '順化皇城 ➔ 正宗順化牛肉粉 ➔ 順化鹽咖啡 ➔ 返峴港' },
      { day: 'Day 6', theme: '占婆精粹', schedule: '09:40~10:50 占婆雕刻博物館巡禮 ➔ 午餐 ➔ 13:45~14:00 專車機場 ➔ 17:30 起飛' }
    ]
  },
  {
    id: 'style-rainy-indoor',
    title: '玩法 D：雨季備案 ＆ 親子全室內無憂遊',
    tag: '雨季備案',
    iconName: 'Umbrella',
    targetAudience: '遇連續降雨、豪雨或帶長輩幼童、不宜戶外濕滑攀爬與水上活動者',
    description: '依雨勢分級應變：小雨走訪古鎮會館與咖啡館；遇豪雨/雷雨則全面避開巴拿山與戶外山海行程，直接取消五行山石階，改由占婆博物館、Cooking Class 烹飪課、室內商場與 SPA 替換。',
    coreVibe: '室內防雨、安全無阻、行程舒適乾燥',
    estimatedCostTWD: 'NT$ 24,000 ~ 28,000 /人',
    keyHighlights: ['巴拿山 Fantasy Park 室內遊樂區 (僅限小雨)', '會安室內越式料理課 Cooking Class', '占婆雕刻博物館全室內展廳', 'Lotte Mart ＆ Vincom Plaza 購物休閒', '舒壓草本熱石 SPA 芳療'],
    daysSummary: [
      { day: 'Day 1', theme: '室內採買', schedule: '韓市場室內街區 ➔ Cộng Cà Phê ➔ 室內海鮮大餐 ➔ 飯店休閒' },
      { day: 'Day 2', theme: '室內遊憩', schedule: '小雨可選巴拿山室內區；大雨豪雨則改峴港市區 SPA ＆ 咖啡' },
      { day: 'Day 3', theme: '手作廚藝', schedule: '會安室內 Cooking Class 料理課 ➔ 古鎮室內會館 ➔ 景觀咖啡' },
      { day: 'Day 4', theme: '市區商場', schedule: 'Vincom Plaza 逛街 ➔ 精品室內咖啡 ➔ 室內特色餐廳' },
      { day: 'Day 5', theme: '商場SPA', schedule: '自然醒 ➔ 舒壓 SPA 按摩 ➔ Lotte Mart 伴手禮打包 ➔ 特色晚宴' },
      { day: 'Day 6', theme: '博物館', schedule: '09:40~10:50 占婆雕刻博物館 ➔ Bún Chả 烤肉米線 ➔ 13:45~14:00 專車機場' }
    ]
  }
];

export const BUDGET_TIERS: BudgetTier[] = [
  {
    id: 'budget-saver',
    name: '小資輕裝型 (Budget)',
    targetUser: '重視高 CP 值、喜愛平民小吃與大眾交通、預算精打細算的年輕旅人',
    totalTWD: 20500,
    totalVND: 16400000,
    breakdown: {
      flight: 8800, // 廉航直飛含手提/部分託運行李
      hotel: 4500, // 半島飯店標準房 (2人分攤 5 晚)
      transport: 1800, // Grab 叫車為主 ＋ 拼車接駁
      food: 2400, // 道地小吃、炸魚餅米線、越式煎餅、高樓麵、法棍與平價海鮮
      activities: 2200, // 巴拿山基本票約100萬盾、五行山+電梯、竹籃船、會安票券、占婆館等
      spaShopping: 800 // 平價越式按摩 1 次、小額伴手禮
    },
    highlights: [
      '機票：直飛來回機票約 NT$8,800',
      '住宿：入住半島飯店海景標準房 5 晚 (雙人分攤每人約 NT$4,500)',
      '餐飲：炸魚餅米線、越式煎餅、高樓麵、法棍與平價海鮮',
      '交通：Grab App 市區移動與拼車接送',
      '門票：含 2026 巴拿山基本票 (約100萬盾)、五行山、竹籃船與古蹟門票'
    ],
    day5Comparison: {
      planAName: 'Day 5 方案 A：順化皇城文化一日遊 (拼車分攤)',
      planATotalTWD: 21200,
      planATotalVND: 16960000,
      planBName: 'Day 5 方案 B：峴港度假慢活日 (市區短程 Grab)',
      planBTotalTWD: 20500,
      planBTotalVND: 16400000,
      note: '此為依實際主行程細項之估算值，實際費用依機票淡旺季、房型、即時匯率、包車人數與個人消費浮動。'
    }
  },
  {
    id: 'comfort-standard',
    name: '舒適品質型 (Standard) —【推薦首選】',
    targetUser: '最均衡的玩法！享受海景房、專屬包車、必吃知名餐廳與 2 次舒壓 SPA',
    totalTWD: 28400,
    totalVND: 22720000,
    breakdown: {
      flight: 10800, // 國籍航空或含 20kg 託運行李直飛
      hotel: 6500, // 半島飯店高樓層海景房 (2人分攤 5 晚含豐盛自助早餐)
      transport: 2900, // 機場接送 ＋ 巴拿山/會安/順化或市區包車分攤
      food: 3800, // Bé Mặn 活海鮮、Pizza 4P’s、Madam Lan、順化名店
      activities: 2400, // 巴拿山基本票約100萬盾（或選門票+Buffet Combo約130萬盾）、五行山+電梯、竹籃船、會安票券、占婆館、順化皇城
      spaShopping: 2000 // 頂級 SPA 按摩 2 次、樂天超市伴手禮採購
    },
    highlights: [
      '機票：正規航空或含 20kg 託運行李直飛約 NT$10,800',
      '住宿：半島飯店高樓層美溪海景房 5 晚含自助早餐 (每人約 NT$6,500)',
      '交通：全程專屬包車（巴拿山、會安、順化海雲隧道直達）',
      '美食：現撈生猛海鮮、Pizza 4P’s、Madam Lan 庭園私房菜',
      '娛樂：巴拿山基本票約100萬盾（若選門票＋Buffet Combo 則約130萬盾）、Cam Thanh 竹籃船、2 次頂級 SPA'
    ],
    day5Comparison: {
      planAName: 'Day 5 方案 A：順化皇城文化一日遊',
      planATotalTWD: 28400,
      planATotalVND: 22720000,
      planBName: 'Day 5 方案 B：峴港度假慢活日 (頂級 SPA + 超市採買)',
      planBTotalTWD: 28100,
      planBTotalVND: 22480000,
      note: '方案 A 含順化全日長途專屬包車分攤與皇城門票 (約 NT$1,200/人)；方案 B 改為市區短程 Grab 接駁 (約 NT$200/人)，節省之交通費用轉為升級 90~120 分鐘深度熱石草本 SPA 與超市伴手禮採購，整體總預算相近。此為依實際主行程細項之估算值，實際費用依機票淡旺季、房型、即時匯率、包車人數與個人消費浮動。'
    }
  },
  {
    id: 'luxury-premium',
    name: '尊榮享受型 (Luxury)',
    targetUser: '追求高品質住宿、獨立專屬商務包車、精緻餐飲與多次深度 SPA 的旅客',
    totalTWD: 50600,
    totalVND: 40480000,
    breakdown: {
      flight: 14000, // 商務艙或彈性機票
      hotel: 16000, // 半島飯店尊爵海景行政套房 (2人分攤 5 晚)
      transport: 4800, // 全程高級包車專人接送
      food: 7200, // 精緻海鮮、法式料理與高空景觀酒吧
      activities: 3600, // 巴拿山套票/午宴、私人遊船、會安票券、占婆館、順化皇城與啟定陵
      spaShopping: 5000 // 每日精緻飯店 SPA 芳療 3 次、伴手禮採購
    },
    highlights: [
      '住宿：半島飯店尊爵海景行政套房 5 晚 (每人約 NT$16,000)',
      '交通：全程高級商務車專人專車接送',
      '餐飲：活海鮮料理、韓江畔法式料理、Pizza 4P’s、高空景觀酒吧',
      '享受：全身精油芳療 SPA 3 次、專人導覽與私房景點'
    ],
    day5Comparison: {
      planAName: 'Day 5 方案 A：順化皇城與啟定陵尊榮專車遊',
      planATotalTWD: 50600,
      planATotalVND: 40480000,
      planBName: 'Day 5 方案 B：峴港奢華海景度假日 (頂級 SPA + 私廚晚餐)',
      planBTotalTWD: 50300,
      planBTotalVND: 40240000,
      note: '此為依實際主行程細項之估算值，實際費用依機票淡旺季、房型、即時匯率、包車人數與個人消費浮動。'
    }
  }
];

export const SAFETY_WEATHER_TIPS = [
  {
    category: '10 月雨季應對與天氣調度策略',
    tips: [
      '【模組化彈性調度】：Day 2 至 Day 5 白天主要行程可隨氣象雷達交換；若巴拿山大雨起大霧，務必與 Day 4「峴港市區慢活」對調。',
      '【雨季兩級備案切換】：小雨可走室內外（如會安古鎮、咖啡館、SPA）；大雨或豪雨雷雨嚴禁前往巴拿山、五行山石階、竹籃船及順化長途山路，直接啟動占婆博物館、Cooking Class 與商場備案。',
      '【防雨穿搭要訣】：請穿著透氣快乾衣物與防滑平底鞋，隨身攜帶輕便折疊傘與防水手機袋；山區早晚溫差大，隨身攜帶薄防風外套。',
      '【景點即時天候確認】：巴拿山與順化出發前，請至官網確認山頂監視器與海雲隧道通行狀況。'
    ]
  },
  {
    category: '交通安全與叫車防騙指南',
    tips: [
      '【嚴禁搭乘黑牌車】：走出峴港機場航廈，切勿理會主動前來搭訕或聲稱是 Grab 的拉客司機；請一律在 Grab App 內叫車並仔細核對車牌號碼。',
      '【Grab 信用卡綁定】：在 App 內綁定信用卡付款，上下車直接扣款，徹底避免找零糾紛與收到破損假鈔風險。',
      '【會安接送外圍會合】：會安古鎮核心區在特定時段實施機動車管制，請事先與包車司機約定外圍明確停車點，並提前 15~20 分鐘步行前往。',
      '【離境日機場時間分配鐵律】：17:30 起飛之國際航班，最晚必須於 13:45~14:00 從飯店出發（出發時距離起飛約 3.5 小時）；預計 14:15~14:30 抵達機場，保留約 3 小時進行報到、行李託運、出境安檢與通關緩衝。'
    ]
  },
  {
    category: '海鮮點餐防宰稱重 ＆ 飲食衛生',
    tips: [
      '【海鮮防宰三部曲】：1. 親自挑選活海鮮時，要求店員瀝乾網籃水份再放上磅秤；2. 當場確認每公斤 (kg) 單價；3. 拿計算機確認總價無誤後再指示烹調。',
      '【生水與冰塊防護】：越南生水不可生飲；飯店請飲用瓶裝礦泉水，路邊攤飲料請確認使用中空圓柱形食用製冰機冰塊。',
      '【腸胃常備藥物】：請隨身自備腸胃藥、止瀉藥、止痛藥與綜合感冒藥。'
    ]
  },
  {
    category: '外幣換匯防偽 ＆ 現金管理法規',
    tips: [
      '【美金百元新鈔最優】：準備 2006 年以後發行、平整無折痕污損之 100 美元新鈔，於韓市場合法金店或銀行櫃檯兌換，匯率最優。',
      '【現場清點與收據】：交易時請當場在櫃檯數清越南盾面額（注意 500,000 與 20,000 顏色相似，50,000 與 200,000 避免混淆），並索取兌換收據。',
      '【海關申報法定限額】：攜帶外幣現鈔等值超過 5,000 美元或越南盾現鈔超過 15,000,000 VND 者，入出境依法必須向海關書面申報。',
      '【返台檢疫重罰】：絕對不可攜帶任何含有豬肉、牛肉、雞肉之肉製品（包括肉乾、肉鬆餅、肉粽、香腸等）入境台灣，違者重罰 NT$200,000 起！'
    ]
  }
];

export const RESTAURANT_RECOMMENDATIONS: RestaurantItem[] = [
  {
    name: 'Bé Mặn 海鮮餐廳',
    vietnameseName: 'Hải Sản Bé Mặn',
    category: '現撈海鮮大排檔',
    specialty: '生猛大頭蝦 (Tôm Càng Xanh)、清蒸花蟹、烤文蛤 (Nghêu Nướng Mỡ Hành)',
    priceRange: '每人約 350,000~600,000 VND (約 NT$450~750)',
    address: 'Lô 11 Võ Nguyên Giáp, Mân Thái, Sơn Trà, Đà Nẵng',
    rating: '4.5 / 5.0 (峴港高人氣活海鮮大排檔)',
    proTip: '現場挑選活海鮮並確認瀝乾秤重，推薦蒜蓉奶油炒大頭蝦與蔥油烤文蛤！'
  },
  {
    name: 'Pizza 4P’s',
    vietnameseName: 'Pizza 4P’s Hoàng Văn Thụ',
    category: '日系義式手工窯烤披薩',
    specialty: '手工布拉塔起司帕瑪火腿披薩、蟹肉番茄奶油義大利麵',
    priceRange: '每人約 250,000~450,000 VND (約 NT$310~560)',
    address: '08 Hoàng Văn Thụ, Phước Ninh, Hải Châu, Đà Nẵng',
    rating: '4.8 / 5.0 (越南人氣日系手工窯烤披薩)',
    proTip: '自製起司香濃新鮮，請務必提早 3~7 天至官網線上訂位。'
  },
  {
    name: 'Madam Lan',
    vietnameseName: 'Nhà Hàng Madame Lân',
    category: '精緻庭園越式私房菜',
    specialty: '全越特色春捲拼盤 (Nem Rán)、甘蔗蝦 (Chạo Tôm)、烤肉米線',
    priceRange: '每人約 200,000~350,000 VND (約 NT$250~440)',
    address: '04 Bạch Đằng, Thạch Thang, Hải Châu, Đà Nẵng',
    rating: '4.4 / 5.0 (韓江畔庭園特色越式料理)',
    proTip: '環境典雅古樸，適合家庭朋友聚餐，點選多樣小吃拼盤分食體驗最棒。'
  },
  {
    name: 'Bún Chả Cá 109',
    vietnameseName: 'Bún Chả Cá 109 Nguyễn Chí Thanh',
    category: '峴港道地平民米線',
    specialty: '招牌炸魚餅米線 (Bún Chả Cá)、南瓜竹筍鮮魚清甜高湯',
    priceRange: '每碗約 35,000~50,000 VND (約 NT$45~65)',
    address: '109 Nguyễn Chí Thanh, Hải Châu 1, Đà Nẵng',
    rating: '4.5 / 5.0 (在地老字號平民美味)',
    proTip: '搭配桌上生菜、薄荷葉、九層塔與蒜末辣椒，湯頭鮮甜回甘。'
  },
  {
    name: 'Bánh Xèo Bà Dưỡng',
    vietnameseName: 'Bánh Xèo Bà Dưỡng',
    category: '越式酥脆傳統煎餅',
    specialty: '薑黃酥脆蝦肉煎餅 (Bánh Xèo)、炭烤豬肉串 (Nem Lụi)',
    priceRange: '每人約 60,000~100,000 VND (約 NT$75~125)',
    address: 'K280/23 Hoàng Diệu, Bình Hiên, Hải Châu, Đà Nẵng',
    rating: '4.3 / 5.0 (巷弄排隊名店)',
    proTip: '用米紙包裹煎餅、烤肉串、小黃瓜與生菜捲起，沾取特製花生豬肝濃醬。'
  },
  {
    name: 'Morning Glory Original',
    vietnameseName: 'Morning Glory Original Hội An',
    category: '會安古鎮經典料理',
    specialty: '會安高樓麵 (Cao Lầu)、白玫瑰米餃、會安炸雲吞',
    priceRange: '每人約 150,000~300,000 VND (約 NT$190~380)',
    address: '106 Nguyễn Thái Học, Hội An',
    rating: '4.6 / 5.0 (會安古鎮老宅餐廳)',
    proTip: '位在古鎮核心法式老宅內，將街頭小吃昇華為精緻料理，傍晚建議提早前往。'
  },
  {
    name: 'Bánh Mì Phượng',
    vietnameseName: 'Bánh Mì Phượng Hội An',
    category: '會安人氣越式法棍',
    specialty: '綜合肉排肝醬法棍麵包 (Bánh Mì Thập Cẩm)',
    priceRange: '每個約 30,000~40,000 VND (約 NT$40~50)',
    address: '2B Phan Châu Trinh, Cẩm Châu, Hội An',
    rating: '4.5 / 5.0 (知名國際美食節目推薦名店)',
    proTip: '現烤外皮酥脆，內餡夾滿自製肉醬、醃蘿蔔與新鮮香草。'
  },
  {
    name: 'Quán Bà Tuyết 順化牛肉粉',
    vietnameseName: 'Quán Bún Bò Huế Bà Tuyết',
    category: '順化正宗牛肉粉',
    specialty: '香茅辣湯牛肉粉 (Bún Bò Giò Chả)、滷牛腱與手工牛肉丸',
    priceRange: '每碗約 40,000~70,000 VND (約 NT$50~90)',
    address: '47 Nguyễn Công Trứ, Phú Hội, Huế',
    rating: '4.6 / 5.0 (順化在地人推崇代表性老店)',
    proTip: '順化牛肉粉發源地的正宗辛香湯頭，加入檸檬角與九層塔香草，鮮爽回味！'
  }
];

export const RECOMMENDED_RESTAURANTS = RESTAURANT_RECOMMENDATIONS;

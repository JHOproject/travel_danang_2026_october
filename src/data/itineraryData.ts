import { DayPlan, AlternativeStyle, BudgetTier, RestaurantItem } from '../types';

export const TRIP_INFO = {
  destination: '越南 峴港 (Da Nang) & 會安 (Hoi An) & 順化 (Hue)',
  startDate: '2026-10-01',
  endDate: '2026-10-06',
  duration: '6 天 5 夜 (含 4 個完整遊玩日與抵離境 2 個半日)',
  flightArrival: '2026/10/01 09:00 抵達峴港國際機場 T2 國際航廈',
  flightDeparture: '2026/10/06 17:30 峴港國際機場起飛 (建議 14:00~14:30 從飯店出發，預留雨季交通與安檢緩衝)',
  hotel: {
    name: '峴港半島飯店 (Peninsula Hotel Danang)',
    address: '84 Võ Nguyên Giáp, Mân Thái, Sơn Trà, Đà Nẵng',
    locationAdvantage: '臨美溪沙灘海岸公路，面對山茶半島海景第一排，設有戶外景觀泳池（具體設施規格、開放時段、天候開放狀況與兒童規定依現場公告為準）',
    checkInTime: '14:00 後 (可先於大廳寄放行李)',
    checkOutTime: '12:00 前'
  },
  weatherOverview: '10 月為峴港及中越主要雨季與降雨高峰期（歷史月降雨量常達 500–650 mm、降雨天數常達 20 天以上），可能出現持續性陰雨、大雨或熱帶擾動/颱風影響低窪積水，不宜預設「早晨放晴」或「僅為午後短暫陣雨」。各項戶外活動與山區/水上行程需於前一日及當日上午視氣象雷達彈性調整。',
  exchangeRateApprox: '以新台幣 (TWD) 估算為主，當地越盾 (VND) 採 1 TWD ≈ 800 VND 作為心算參考（實際受銀行匯率、手續費及兌換管道浮動，不作保證）',
  officialCheckReminder: '【2026 行前再次確認提醒】：本手冊中的營業時間、票價、交通時間、餐廳地址、演出場次、泳池規定與水上活動，均可能因季節、天候、維修、節慶、交通管制或店家調整而變動。出發前 7 天、前一晚及當日上午，請分別確認：\n1. 越南官方電子簽證系統 (evisa.gov.vn)。\n2. Sun World Ba Na Hills 官方網站。\n3. 會安古鎮及文化遺產官方售票公告。\n4. 順化古蹟保護中心票價與開放資訊。\n5. 峴港市政府或旅遊局的龍橋演出與交通管制公告。\n6. 航空公司、機場及台灣動植物防疫檢疫署最新規定。',
  hueRiskReminder: '【順化一日遊風險提醒】：峴港往返順化受海雲關、海雲隧道、雨季降雨、道路壅塞與景點停留時間影響，實際行程可能超過 10 小時。已優化為專注參觀「順化皇城」，並將海雲關、啟定陵與樂天超市設為視天候與交通彈性取捨之選配項目；若遇豪雨、濃霧、道路積水或官方發布交通警示，應改走海雲隧道、縮短景點，或取消順化行程。'
};

export const MAIN_ITINERARY: DayPlan[] = [
  {
    dayNumber: 1,
    date: '2026/10/01',
    weekday: '星期四',
    title: '抵達峴港 ➔ 飯店寄放 ➔ 市區粉紅教堂與韓市場 ➔ 美溪沙灘 ➔ 山茶夜市與龍橋夜景',
    subtitle: '初訪峴港，粉紅浪漫、換匯採買、濱海漫步與越式海鮮初體驗',
    highlights: ['峴港大教堂', '合法金店/韓市場換匯採買', '半島飯店休息', '美溪沙灘漫步', '山茶夜市與龍橋散策'],
    meals: {
      breakfast: '機上輕食或出關後機場河粉 (依航班安排)',
      lunch: 'Bún Chả Cá 109 (炸魚餅米線) 或 Bánh Xèo Bà Dưỡng (越式酥脆煎餅)',
      dinner: 'Bé Mặn 海鮮餐廳 (美溪沙灘現撈活海鮮大排檔，請當場確認單價與淨重)',
      snackOrCafe: 'Cộng Cà Phê (越共復古風格椰子咖啡)'
    },
    transportation: '機場至飯店以預約接駁或 Grab 叫車；市區移動以 Grab 為主（費用以 App 即時報價為準）',
    weatherAdvice: '10 月為雨季，多降雨或雷陣雨。今日主要在市區與飯店，若遇降雨可轉入韓市場、室內咖啡館或於半島飯店休息。',
    activities: [
      {
        time: '09:00 起 (約 60–120 分鐘)',
        title: '抵達峴港國際機場 (DAD) & 入境手續',
        location: '峴港國際機場 T2 國際航廈',
        description: '辦理海關查驗、領取行李、開通越南 SIM 卡或啟用 eSIM。入境通關時間約 60–120 分鐘，視當日國際航班抵達量、海關人潮與行李速度而定。走出航廈依 Grab App 指定乘車點與車牌上車。',
        category: 'transport',
        tags: ['出關', 'SIM卡', 'Grab叫車'],
        tips: '走出航廈請勿搭乘路邊主動招攬的黑牌車，請以 Grab App 叫車並核對車牌，綁定信用卡免找零。',
        costEstimate: 'Grab 到半島飯店約 120,000~160,000 VND (約 NT$150~200，浮動計費)',
        openingHours: '航廈 24 小時營運',
        reservation: '台灣護照赴越南本土需事先申請電子簽證 (e-Visa)，請務必於官方唯一合法網址 https://evisa.gov.vn 申請，規費通常為 25 USD (單次) / 50 USD (多次)；官方一般審核約需 3 個工作天，強烈建議出發前至少提前 1–2 週申請並列印紙本備查。',
        restrictions: [
          '護照效期需滿 6 個月以上，並備妥 e-Visa 紙本列印憑證',
          '【海關現金申報】：攜帶外幣現鈔超過等值 5,000 USD 或越南盾現鈔超過 15,000,000 VND 者，依法必須主動向海關書面申報'
        ]
      },
      {
        time: '10:30 - 11:15',
        title: '前往「峴港半島飯店 (Peninsula Hotel)」寄放行李',
        location: '峴港半島飯店 (84 Võ Nguyên Giáp)',
        description: '沿著海岸公路抵達半島飯店，前台辦理預辦入住手續並先寄放大型行李，換上輕便透氣衣物與攜帶雨具。',
        category: 'relax',
        tags: ['飯店寄放', '海景第一排'],
        tips: '可向櫃台索取飯店名片（附越文地址），搭車回程時方便向司機出示。',
        openingHours: '櫃台 24 小時服務；標準入住時間 14:00 後、退房時間 12:00 前',
        reservation: '已完成住宿預訂 (出示訂房確認單與全體住客護照登記即可)',
        restrictions: ['全館客房室內全面禁菸', '戶外泳池具體開放時段、天候開放狀況、水深與兒童陪同規定請以飯店現場公告為準']
      },
      {
        time: '11:30 - 12:15',
        title: '峴港粉紅大教堂 (Da Nang Cathedral)',
        location: '156 Trần Phú, Hải Châu 1, Đà Nẵng',
        description: '建於 1923 年法國殖民時期的哥德式粉紅教堂，屋頂有避雷針公雞，又稱公雞教堂，是峴港代表性地標。',
        category: 'sightseeing',
        tags: ['拍照地標', '粉紅建築', '法式風情'],
        tips: '教堂免費參觀，若遇正門關閉可由側門/修道院方向外觀拍照，參觀請穿著合宜衣物。',
        openingHours: '週一至週六 06:00-11:30、13:30-17:00；週日為彌撒日 (依堂區公告為準)',
        reservation: '無需預約 (免費參觀)',
        restrictions: ['【穿著限制】：進入宗教場所請穿著過膝下著，避免無袖背心或過度暴露服裝', '彌撒進行期間請保持肅靜，教堂內部禁止隨意走動拍照喧嘩']
      },
      {
        time: '12:15 - 13:00',
        title: '韓市場 (Chợ Hàn) ＆ 合法換匯場所換匯',
        location: '119 Trần Phú (韓市場周邊合法兌換點)',
        description: '前往有合法標示的銀行、兌換櫃檯或合法金店，以美金百元新鈔或台幣換取越南盾，交易前請先比較匯率並索取收據。隨後可逛韓市場一樓乾貨/腰果或二樓服飾區。',
        category: 'shopping',
        tags: ['換匯', '傳統市場', '伴手禮'],
        tips: '選擇有合法標示的換匯處，兌換前確認當日告示牌匯率、現場清點鈔票面額並索取收據。',
        weatherBackup: '韓市場為全室內市場，雨天亦非常適合採購。',
        openingHours: '韓市場約 06:00 - 19:00；周邊合法兌換處營業時間依各店家現場公告為準',
        reservation: '無需預約',
        restrictions: ['通常偏好 2006 年後發行、無折痕污損之美金百元新鈔', '市場人潮密集，請隨時注意背包與隨身財物防扒']
      },
      {
        time: '13:00 - 14:15',
        title: '午餐：在地風味「Bún Chả Cá 109」炸魚餅米線 或「Bánh Xèo Bà Dưỡng」',
        location: '109 Nguyễn Chí Thanh 或 K280/23 Hoàng Diệu',
        description: '品嚐峴港著名的炸魚餅米線，鮮魚熬煮高湯搭配九層塔；或是隱藏巷弄中的酥脆越式煎餅包肉捲生菜。',
        category: 'food',
        tags: ['魚餅米線', '道地平民美食', '越式煎餅'],
        costEstimate: '每人約 40,000~80,000 VND (約 NT$50~100，依現場菜單為準)',
        openingHours: '營業時間依店家現場公告為準 (常見 Bún Chả Cá 109 約 06:00 - 22:00；Bánh Xèo Bà Dưỡng 約 09:30 - 21:30)',
        reservation: '現場排隊入座 (翻桌速度快)',
        restrictions: ['在地傳統小吃店家多僅收現金 (VND)，建議自備小額鈔票']
      },
      {
        time: '14:30 - 15:30',
        title: '午後咖啡時光：Cộng Cà Phê 椰子冰沙咖啡',
        location: '98-96 Bạch Đằng (韓江畔)',
        description: '坐在韓江畔的復古主題咖啡館，來一杯招牌濃郁的椰子冰沙咖啡 (Cốt Dừa Cà Phê)，小憩放鬆。',
        category: 'food',
        tags: ['椰子咖啡', '文青復古', '韓江河畔'],
        costEstimate: '每杯約 55,000~65,000 VND (約 NT$70~80，依現場價目表為準)',
        openingHours: '約 07:00 - 23:30 (每日營運，依店家當日為準)',
        reservation: '無需預約 (景觀座位客滿需稍候)',
        restrictions: ['室內全面禁菸', '支援現金及常見國際信用卡']
      },
      {
        time: '15:45 - 17:30',
        title: '回半島飯店辦理入住 ＆ 設施放鬆時光',
        location: '峴港半島飯店 (Peninsula Hotel)',
        description: '辦理房間入住進房休息，可使用飯店設施放鬆，遠眺美溪海景。',
        category: 'relax',
        tags: ['半島飯店', '戶外泳池', '海景休息'],
        tips: '泳池使用規定、開放時段、水深及兒童年齡限制請以飯店櫃台與現場公告為準。',
        openingHours: '入住時間 14:00 後；泳池開放時段依現場公告',
        reservation: '房客免費使用設施',
        restrictions: ['進入泳池請著正式泳裝，嚴禁穿著棉質外衣下水', '若遇雷雨或強風，戶外泳池將依安全考量暫停開放']
      },
      {
        time: '17:30 - 18:30',
        title: '美溪沙灘 (My Khe Beach) 傍晚漫步',
        location: '半島飯店正前方沙灘',
        description: '曾被國際旅遊媒體評為知名美麗海灘之一，沙質細緻，可沿著海岸步道散步吹海風。',
        category: 'relax',
        tags: ['知名海灘', '夕陽漫步', '海濱散步'],
        openingHours: '公共沙灘全天開放 (水上安全與救生員執勤時間依官方現場公告為準)',
        reservation: '無 (自由漫步)',
        restrictions: ['【海域安全】：10 月海況受風浪影響大，如遇紅旗警示或風浪大時嚴禁下水游泳', '沙灘全面禁止亂丟垃圾']
      },
      {
        time: '18:45 - 20:15',
        title: '晚餐：美溪海鮮盛宴「Bé Mặn」現撈活海鮮大排檔',
        location: 'Lô 11 Võ Nguyên Giáp (近美溪沙灘海鮮街)',
        description: '美溪海岸知名平民海鮮大排檔，現場挑選大頭蝦、花蟹、烤扇貝、烤生蠔、清蒸花蛤等。',
        category: 'food',
        tags: ['活海鮮大排檔', '現烤海鮮', '秤重注意'],
        tips: '點海鮮時請店員當場瀝乾水份秤重並確認「每公斤 (1kg) 單價」與料理費，避免計價爭議。',
        costEstimate: '每人約 350,000~500,000 VND (約 NT$450~650，視點選品項與現場秤重而定)',
        openingHours: '約 09:00 - 23:00 (依店家現場公告為準)',
        reservation: '大排檔採現場挑選入座，無特定訂位制度',
        restrictions: ['【防宰注意】：撈取海鮮時請確認瀝乾水份再上秤，並記下白板上的單價', '店內濕紙巾與小菜若有額外收費，不需使用可請店員收回']
      },
      {
        time: '20:30 - 22:00',
        title: '山茶夜市 (Chợ Đêm Sơn Trà) ＆ 龍橋 (Dragon Bridge) 夜景',
        location: 'Mai Hắc Đế, An Hải Trung, Sơn Trà',
        description: '逛充滿活力的山茶夜市品嚐街頭小吃，步行至龍橋與愛情鎖橋欣賞韓江倒影。',
        category: 'nightlife',
        tags: ['夜市小吃', '龍橋夜景', '愛情鎖橋'],
        tips: '人潮擁擠時注意隨身財物；龍橋噴火表演通常為週五至週日 21:00（節慶或特殊活動可能增減場次，請以市府最新公告為準）。',
        openingHours: '山茶夜市約 18:00 - 23:30 (每日營運，依天候調整)',
        reservation: '無需預約',
        restrictions: ['夜市攤販多數僅收現金，請自備小額越南盾', '龍橋若遇演出，周邊封路管制時段與範圍以現場交警指揮及官方公告為準']
      }
    ]
  },
  {
    dayNumber: 2,
    date: '2026/10/02',
    weekday: '星期五',
    title: '巴拿山太陽世界 (Ba Na Hills) 城堡與黃金佛手橋 ➔ 傍晚放鬆 SPA ➔ 景觀餐廳',
    subtitle: '漫步山城、長途登山纜車、巨型佛手金橋與歐風建築群',
    highlights: ['黃金佛手橋 (Golden Bridge)', '太陽世界纜車系統', '法國村 (French Village)', 'Fantasy Park 室內娛樂區', '越式草本 SPA'],
    meals: {
      breakfast: '半島飯店自助早餐',
      lunch: '巴拿山園區餐廳或百匯自助餐 (依購買票種與現場為準)',
      dinner: 'Pizza 4P’s (手工起司披薩) 或 Madame Hạnh (庭園越菜)',
      snackOrCafe: '巴拿山烘焙小點 / 咖啡'
    },
    transportation: '預約往返包車（半島飯店往返巴拿山，單程約 45~60 分鐘，費用依平台/車行報價為準）',
    weatherAdvice: '巴拿山海拔近 1,500 公尺，山頂氣溫較平地低約 5~8°C，且 10 月極易起濃霧或持續降雨。出發前請確認天候與即時監視器，若山區風雨過大建議彈性改期，務必備妥防風保暖薄外套、輕便雨衣及防滑鞋。',
    activities: [
      {
        time: '07:30 - 08:30',
        title: '飯店晨光早餐 ＆ 專車前往巴拿山景區',
        location: '半島飯店 ➔ 巴拿山 (約 45~60 分鐘車程)',
        description: '享用飯店早餐後，約 08:15 司機於飯店大廳接送出發前往巴拿山山腳纜車站。',
        category: 'transport',
        tags: ['專車包車', '晨間出發'],
        openingHours: '包車約定 08:15 飯店大廳接駁',
        reservation: '建議出發前 1~2 天透過平台、旅行社或飯店預約往返包車',
        restrictions: ['包車若超時通常另加收超時費用', '山區多雨路滑，請穿著舒適防滑運動鞋並攜帶雨具']
      },
      {
        time: '08:45 - 09:15',
        title: '搭乘太陽世界登山纜車直登雲霄',
        location: 'Ba Na Hills 纜車站',
        description: '搭乘著名的單線長途登山纜車，沿途俯瞰熱帶森林與山谷飛瀑，直達山腰黃金橋區域。',
        category: 'sightseeing',
        tags: ['登山纜車', '山景俯瞰'],
        costEstimate: '依官方當日票種為準 (2026 官方外地成人纜車票約 1,000,000 VND，含 Buffet 或多日票種另計，依官方公告為準)',
        openingHours: '日常日間營運約 08:00 開始，部分夜間活動或特定套票可延伸至晚間；纜車營運時刻依 Sun World 當季官方公告為準',
        reservation: '【建議預購】：可提早透過官方網站或合法線上平台預訂電子憑證，省去現場排隊購票時間',
        restrictions: [
          '食物與飲料攜帶規定依入口及官方當日公告為準；不要攜帶大量外食，個人水瓶是否可帶入請現場確認',
          '耳壓敏感者搭乘纜車時可適度吞嚥緩解'
        ]
      },
      {
        time: '09:15 - 10:30',
        title: '經典地標：黃金佛手橋 (Golden Bridge) ＆ 愛情花園',
        location: '巴拿山黃金佛手橋',
        description: '巨大石雕佛手自山壁伸出托起金色橋身。在雲霧繚繞間漫步，隨後順道遊覽 Le Jardin D’Amour 花園與 Debay 酒窖外圍。',
        category: 'sightseeing',
        tags: ['佛手金橋', '空中步道', '地標必拍'],
        tips: '早晨人潮通常相對較少；10 月山頂若遇大霧或雨天能見度較低，請放慢腳步注意地面濕滑。',
        openingHours: '依當日纜車運作與園區開放時間為準',
        reservation: '持巴拿山入園票券即可通行',
        restrictions: ['橋上嚴禁攀爬跨越護欄', '橋面禁止使用未經官方申請核准之空拍機/無人機']
      },
      {
        time: '10:45 - 12:30',
        title: '轉乘月亮城堡列車 ＆ 法國村 (French Village) 漫步',
        location: '巴拿山山頂法國村與月亮城堡',
        description: '搭乘齒軌小火車前往月亮城堡體驗影院設施；或漫步於歐風石磚建築、噴泉廣場與街頭造景構成的法國村街道。',
        category: 'sightseeing',
        tags: ['歐風建築', '月亮城堡', '街頭景觀'],
        openingHours: '各展館、城堡與表演時段依園區現場公告為準',
        reservation: '常規設施依所持票種適用範圍為準',
        restrictions: ['山頂石板路雨天易滑，請避免穿著高跟鞋或光滑平底拖鞋']
      },
      {
        time: '12:30 - 13:45',
        title: '午餐：巴拿山百匯自助餐 (Arapang 或 Beer Plaza) 或園區餐廳',
        location: '巴拿山園區餐廳區',
        description: '在山頂餐廳享用越式熟食、烤肉、沙拉與多國風味的百匯自助午餐或單點定食。',
        category: 'food',
        tags: ['園區Buffet', '多國百匯', '山頂用餐'],
        openingHours: '自助餐供餐時段通常為 11:00 - 15:00 (依現場公告)',
        reservation: '若購買含 Buffet 套票，持憑證於餐廳核銷即可；亦可現場購票入座',
        restrictions: ['自助餐禁止將餐點外帶打包', '用餐尖峰時段請依動線排隊取餐']
      },
      {
        time: '14:00 - 15:30',
        title: '室內娛樂：Fantasy Park 娛樂區 ＆ 軌道滑車',
        location: '巴拿山 Fantasy Park',
        description: '若遇山區下雨，可轉往多樓層的室內遊樂區 Fantasy Park；天候晴朗無雨時可排隊體驗高山軌道滑車 (Alpine Coaster)。',
        category: 'relax',
        tags: ['室內娛樂', '雨天備案', '軌道滑車'],
        weatherBackup: 'Fantasy Park 多數設施位於室內，但個別設施可能因維修、停電、客流或園區安全措施暫停；若山區天候極端不佳，建議評估取消或改期巴拿山行程。',
        openingHours: '室內設施營運時間依官方公告；戶外軌道滑車如遇大雨雷擊或強風將暫停營運',
        reservation: '多數一般設施依票種包含，投幣遊戲、蠟像館或特殊體驗可能另收費',
        restrictions: ['高山滑車設有身高限制（未滿標準需成人陪同）與安全乘載規範', '搭乘設施請遵照工作人員安全指示']
      },
      {
        time: '16:00 - 17:30',
        title: '搭乘纜車下山 ＆ 專車返回市區飯店',
        location: '巴拿山 ➔ 半島飯店',
        description: '搭乘纜車返回山腳，包車司機於約定停車場接駁返回半島飯店洗沐更衣。',
        category: 'transport',
        tags: ['專車回程', '梳洗休息'],
        openingHours: '下山纜車班次依當日營運時刻表為準 (請留意末班車通知)',
        reservation: '已與包車司機約定下午時段於停車場等候',
        restrictions: ['請留意下山人潮，提早前往纜車站避免排隊延誤']
      },
      {
        time: '18:00 - 19:30',
        title: '舒壓放鬆：越式草本 SPA 按摩體驗 (如 Herbal Spa 等)',
        location: '美溪沙灘周邊 SPA 館',
        description: '安排 60~90 分鐘草本精油或熱石全身按摩，舒緩雙腿與背部疲勞。',
        category: 'relax',
        tags: ['越式SPA', '草本精油', '舒緩放鬆'],
        tips: '熱門 SPA 店家傍晚時段經常客滿，建議出發前透過官方社群或預訂平台預約。',
        costEstimate: '60~90 分鐘按摩約 400,000~650,000 VND (約 NT$500~800，依店家價目為準)',
        openingHours: '營業時間依各店家公告 (常見約 09:00 - 22:30)',
        reservation: '【建議預約】：傍晚尖峰時段建議提前預約',
        restrictions: ['身體有特殊狀況、懷孕或手術史請於填表時如實告知芳療師', '按摩前請避免過量飲食']
      },
      {
        time: '19:45 - 21:15',
        title: '晚餐：Pizza 4P’s 手工起司披薩 或 Madame Hạnh 庭園越菜',
        location: 'Pizza 4P’s 或 Madame Hạnh (地址請以預約分店為準)',
        description: '品嚐知名連鎖披薩店 Pizza 4P’s 的自製新鮮布拉塔起司 (Burrata) 披薩與蟹肉義大利麵；或選擇越式庭園料理。',
        category: 'food',
        tags: ['手工披薩', '布拉塔起司', '庭園越菜'],
        costEstimate: '每人約 250,000~450,000 VND (約 NT$310~560，依點餐為準)',
        openingHours: '依店家最新公告為準 (常見約 10:00 - 22:00)',
        reservation: '【強烈建議預訂】：熱門時段建議出發前透過官網或 Google 線上訂位',
        restrictions: ['預約座位通常保留 15 分鐘，請準時抵達', '支援信用卡及電子支付']
      },
      {
        time: '21:30 - 22:30',
        title: '夜生活：韓江景觀酒吧眺望夜色 (自由選配)',
        location: '韓江周邊高空景觀酒吧',
        description: '在景觀酒吧點杯飲品，欣賞韓江橋樑夜景與市區燈火。',
        category: 'nightlife',
        tags: ['韓江夜景', '景觀酒吧', '放鬆小憩'],
        costEstimate: '飲品每杯約 120,000~220,000 VND (約 NT$150~275)',
        openingHours: '各酒吧營業時間依現場為準',
        reservation: '散客多可現場入座',
        restrictions: ['各酒吧可能設有基本著裝禮儀規範', '未成年人請勿飲酒']
      }
    ]
  },
  {
    dayNumber: 3,
    date: '2026/10/03',
    weekday: '星期六',
    title: '五行山探秘 ➔ 迦南島竹籃船 ➔ 會安古鎮浪漫燈籠夜遊',
    subtitle: '喀斯特大理石洞穴、水椰林竹籃船、世界文化遺產會安老街與秋盆河夜色',
    highlights: ['五行山水山玄空洞', '迦南島水椰林竹籃船', '會安古鎮歷史老街', '秋盆河遊船與夜市燈籠'],
    meals: {
      breakfast: '半島飯店自助早餐',
      lunch: '會安高樓麵 (Cao Lầu) 與 白玫瑰 / 炸雲吞 (如 Morning Glory 或 Miss Ly 等)',
      dinner: 'Bale Well (炭烤豬肉串生菜春捲) 或 燈籠水岸景觀餐廳',
      snackOrCafe: 'Faifo Coffee (屋頂景觀，可選) 或 Mót Hội An (草本茶飲)'
    },
    transportation: '預約峴港往返會安一日包車（涵蓋五行山、迦南島水椰林與會安古鎮外圍，費用依平台/車行報價為準）',
    weatherAdvice: '五行山階梯雨後濕滑，請著防滑平底鞋；迦南島竹籃船如遇海況或風浪過大應避免旋轉動作，若遇大雨可評估取消；10 月會安古鎮臨秋盆河低窪區域偶有潮汛積水風險，請留意當日排水與天候公告。',
    activities: [
      {
        time: '08:00 - 08:45',
        title: '專車出發前往「五行山 (Marble Mountains)」',
        location: '52 Huyền Trân Công Chúa, Ngũ Hành Sơn',
        description: '由五座大理石與石灰岩山峰組成，主要參觀規模最完整的「水山 (Thủy Sơn)」。提早出發以保留後續交通與用餐緩衝。',
        category: 'sightseeing',
        tags: ['大理石山', '天然洞穴', '佛教聖地'],
        tips: '可選擇搭乘單程景觀電梯上山以節省體力，電梯單程約 15,000 VND。',
        costEstimate: '門票約 40,000 VND + 單程電梯 15,000 VND (約 NT$70，依現場售票處公告為準)',
        openingHours: '景區開放約 07:00 - 17:30 (登山電梯營運至 17:00)',
        reservation: '現場購票即可 (可於入口購買門票與電梯票)',
        restrictions: ['【防滑注意】：洞穴與山頂階梯經年潮濕濕滑，嚴禁穿著高跟鞋或光滑拖鞋，務必穿著抓地力佳之防滑鞋', '洞內部分石階陡峭，年長者或行動不便者建議視體力折返']
      },
      {
        time: '08:45 - 10:30',
        title: '探索玄空洞 (Huyen Khong Cave) ＆ 眺望台',
        location: '五行山水山景區',
        description: '走進天然喀斯特溶洞「玄空洞」，光線自天井灑落在佛像與石壁上，氣氛莊嚴清幽。隨後可登臨眺望台遠眺海岸與周邊地景。',
        category: 'sightseeing',
        tags: ['溶洞景觀', '石窟佛像', '文化地標'],
        openingHours: '07:00 - 17:30 (光線灑落依天氣與日照角度而定)',
        reservation: '無需預約',
        restrictions: ['洞內供奉佛像神龕，請保持莊重禮貌，勿攀爬石雕', '洞內濕氣重且有滴水，請留意腳下青苔']
      },
      {
        time: '12:00 - 13:15',
        title: '午餐：會安經典風味「高樓麵、白玫瑰、炸餛飩」',
        location: '會安古鎮餐廳 (如 Morning Glory Original 或 Miss Ly 等)',
        description: '抵達會安享用午餐，品嚐會安代表性的高樓麵 (Cao Lầu)、透亮米皮的白玫瑰 (Bánh Bao Bánh Vạc) 與越式炸餛飩。預留充分車程緩衝（五行山至會安車程約 35–45 分鐘）。',
        category: 'food',
        tags: ['會安風味', '高樓麵', '白玫瑰'],
        costEstimate: '每人約 150,000~250,000 VND (約 NT$190~310，依現場菜單為準)',
        openingHours: '營業時間依店家現場公告為準',
        reservation: '現場入座或可視店家狀況提前預約',
        restrictions: ['古鎮老宅內全面禁菸', '多數支援現金與主流信用卡']
      },
      {
        time: '13:30 - 15:00',
        title: '迦南島 (Cam Thanh Coconut Village) 水椰林竹籃船體驗',
        location: '迦南島水椰林 (Cam Thanh, Hoi An)',
        description: '搭乘傳統圓形竹編桶船（竹籃船）穿行於熱帶水椰林水道中，觀賞船夫旋轉特技與水上民謠表演，亦可體驗持桿垂釣小螃蟹。',
        category: 'sightseeing',
        tags: ['竹籃船', '水椰林', '水上體驗'],
        tips: '若不習慣劇烈晃動，上船時可主動向船夫示意「不旋轉 (No Spin/Nhẹ thôi)」；若雨勢較大或風浪劇烈，應主動取消水上活動。',
        costEstimate: '竹籃船體驗約 120,000~150,000 VND (約 NT$150~190，依代訂或現場報價為準)',
        openingHours: '日間營運約 07:30 - 17:30 (每趟航程約 40~50 分鐘)',
        reservation: '【建議預約】：建議透過包車司機代訂或由正規平台預購，避免現場遭非正規業者喊價',
        restrictions: ['【乘船安全】：搭乘竹籃船必須全程正確穿著救生衣', '長輩、幼童或易暈船者請主動告知船夫不要高速旋轉；表演小費隨喜 (通常約 20,000~50,000 VND)']
      },
      {
        time: '15:45 - 17:45',
        title: '會安古鎮 (Hoi An Ancient Town) 老街漫步 ＆ 景觀咖啡 (選配)',
        location: '會安古鎮核心區 (Phố cổ Hội An)',
        description: '漫步於保存完好的歷史街道，外觀或入內參觀日本橋 (Chùa Cầu / 來遠橋)、福建會館與古宅宗祠。知名咖啡館 Faifo Coffee 可作為自由選配休憩點。',
        category: 'sightseeing',
        tags: ['世界文化遺產', '古鎮老街', '文化會館'],
        tips: '進入古鎮街區漫步免費；若欲入內參觀指定古宅、會館或博物館，請依官方規定購買古鎮參觀門票。',
        openingHours: '古街區全天開放；售票古蹟展館約 07:30 - 17:30',
        reservation: '票價與適用範圍以售票處當日公告為準（若參觀指定歷史古蹟館舍可於入口售票處購票，依官方最新收費辦法）',
        restrictions: ['【步行街管制】：每日特定時段（通常為 15:00 - 21:30）古鎮核心區限制機動車輛進入', '進入宗祠與會館請著合宜服裝，請勿過度暴露']
      },
      {
        time: '17:45 - 18:45',
        title: '晚餐：道地特色小吃「Bale Well」炭烤肉串生菜春捲 或 水岸餐廳',
        location: 'Bale Well (45/51 Trần Hưng Đạo) 或 沿河餐廳',
        description: '品嚐現烤炭火豬肉串、炸春捲搭配大量生菜與特調花生沾醬；或於河畔餐廳用餐。',
        category: 'food',
        tags: ['炭烤肉串', '生菜春捲', '水岸景觀'],
        costEstimate: '每人約 150,000~250,000 VND (約 NT$190~310)',
        openingHours: '依店家現場營業為準',
        reservation: '傳統街巷小店現場入座；景觀餐廳可視需要提前預訂',
        restrictions: ['傳統小吃店多數僅收現金 (VND)']
      },
      {
        time: '18:45 - 20:15',
        title: '秋盆河乘船放水燈體驗 ＆ 燈籠夜市漫步',
        location: '秋盆河畔 (Sông Hoài) 與 阮黃夜市 (Nguyễn Hoàng)',
        description: '入夜後古鎮絲綢燈籠亮起，可於碼頭搭乘木船於秋盆河施放紙水燈祈福，隨後逛逛燈籠夜市與手工藝攤位。',
        category: 'nightlife',
        tags: ['秋盆河遊船', '放水燈', '燈籠夜市'],
        tips: '價格依船型、乘坐人數、時段與現場公告而異；上船前先確認總價與穿妥救生衣。',
        openingHours: '遊船約 17:30 - 21:30；夜市約 18:00 - 22:00 (依天候調整)',
        reservation: '現場正規售票碼頭購票即可',
        restrictions: ['【乘船法規】：上船必須全程穿妥救生衣，請勿於船上危險站立', '夜市攤位拍攝燈籠牆若未購買商品，部分店家可能收取小額拍照費 (可先詢問店家)']
      },
      {
        time: '20:30 - 21:15',
        title: '專車返回峴港半島飯店',
        location: '會安古鎮外圍 ➔ 峴港半島飯店 (約 40~50 分鐘車程)',
        description: '於約定接送點與包車司機會合，搭乘專車返回半島飯店休息。',
        category: 'transport',
        tags: ['專車回程'],
        openingHours: '包車約定 20:30 於古鎮外圍停車場會合',
        reservation: '已與包車司機約定外圍上車點（因古鎮內部禁止汽車通行）',
        restrictions: ['請準時抵達約定接駁地點，避免司機於路邊久候']
      }
    ]
  },
  {
    dayNumber: 4,
    date: '2026/10/04',
    weekday: '星期日',
    title: '山茶半島觀音聖像 ➔ 美溪沙灘休閒 ➔ 越式咖啡文化 ➔ 週末龍橋噴火噴水秀',
    subtitle: '山海靈應寺、濱海慢活、精品咖啡品鑑、週末晚間龍橋特色演出',
    highlights: ['山茶半島靈應寺 (白玉觀音立像)', '美溪沙灘海岸漫步', '越式精品與滴漏咖啡體驗', '週末龍橋噴火噴水演出 (21:00 以官方最新公告為準)'],
    meals: {
      breakfast: '半島飯店海景早餐',
      lunch: 'Phở Bắc 63 (牛肉河粉) 或 LUK LAK (精緻越式料理)',
      dinner: 'Thia Go Restaurant Danang (全越經典菜) 或 韓江水岸餐廳 (建議 20:00 前用餐完畢)',
      snackOrCafe: '43 Factory Coffee Roaster (精品單品咖啡) 或 The Hideout Cafe'
    },
    transportation: '山茶半島可透過 Grab 或半日包車（車程約 15~20 分鐘）；市區移動使用 Grab App 叫車方便靈活。',
    weatherAdvice: '山茶半島晨間視野較佳，可遠眺峴港灣弧線；午後如遇降雨，可轉往市區精品咖啡館、商場或享受飯店室內設施。',
    activities: [
      {
        time: '09:00 - 11:00',
        title: '山茶半島靈應寺 (Chùa Linh Ứng - Sơn Trà) ＆ 俯瞰峴港灣',
        location: 'Bãi Bụt, Bán Đảo Sơn Trà (距離半島飯店約 10~15 分鐘車程)',
        description: '造訪建於山海之巔的靈應寺，瞻仰白玉觀音立像，面向大海庇佑漁民。從寺廟前庭平台可俯瞰美溪沙灘與市區天際線。',
        category: 'sightseeing',
        tags: ['白玉觀音', '山海地標', '靈應寺'],
        tips: '靈應寺免收門票；山區周圍可能偶有野生猴群，請勿餵食或手提塑膠袋，避免猴群爭搶。',
        openingHours: '通常白天開放，參拜區域與時間依寺方現場公告為準',
        reservation: '無需預約 (免費參觀)',
        restrictions: [
          '【穿著與禮儀規定】：進入殿內依現場標示脫帽、脫鞋並穿著合宜服裝（避免無袖短褲）以示莊重',
          '【野生動物注意】：野生猴群具野性與搶食本能，請妥善收好隨身物品與塑膠袋，禁止餵食觸摸'
        ]
      },
      {
        time: '11:30 - 13:00',
        title: '午餐：經典牛肉河粉「Phở Bắc 63」或「LUK LAK」越式料理',
        location: '203 Đống Đa 或 28 Nguyễn Du (出發前請確認營業狀態)',
        description: '品嚐慢熬牛骨清湯的鮮嫩牛肉河粉；或是前往餐廳品嚐烤肉、海鮮等精緻料理。',
        category: 'food',
        tags: ['牛肉河粉', '道地小吃', '精緻越菜'],
        costEstimate: '每人約 60,000~200,000 VND (約 NT$75~250)',
        openingHours: '依店家現場公告為準',
        reservation: '小吃現場入座；精緻餐廳週末中午建議提早預約',
        restrictions: ['街邊傳統小吃多僅收現金']
      },
      {
        time: '13:30 - 15:30',
        title: '午後放鬆：半島飯店休息 ＆ 美溪海岸漫步',
        location: '半島飯店 ＆ 美溪沙灘沿線',
        description: '午後回到飯店休息，在客房放鬆或於戶外沙灘步道漫步，享受海風與熱帶海岸風光。',
        category: 'relax',
        tags: ['海景休息', '海岸散步', '慢活時光'],
        openingHours: '沙灘步道全天開放',
        reservation: '無需預約',
        restrictions: [
          '【海況安全】：10 月為雨季且海浪起伏較大，如見紅旗警示或風浪增強，嚴禁下海游泳',
          '戶外活動請隨身攜帶雨具'
        ]
      },
      {
        time: '15:45 - 17:30',
        title: '咖啡文化體驗：43 Factory Coffee Roaster 或 越式手沖館',
        location: '422 Ngô Thì Sĩ, Mỹ An (出發前請確認最新營業時間)',
        description: '前往精品咖啡館 43 Factory，品嚐產區單品手沖咖啡，感受中越當代精品咖啡文化。',
        category: 'food',
        tags: ['精品咖啡', '手沖體驗', '文青建築'],
        costEstimate: '每杯約 90,000~150,000 VND (約 NT$110~190)',
        openingHours: '營業時間依店家現場為準',
        reservation: '現場入座 (景觀座位採先到先得)',
        restrictions: ['室內全面禁菸', '水池造景請注意腳步']
      },
      {
        time: '18:00 - 19:50',
        title: '晚餐：道地全越風味「Thia Go Restaurant」或 韓江畔料理',
        location: '53 Phan Thúc Duyện 或 韓江水岸周邊',
        description: '在餐廳享用牛肉米線、生春捲、薑蔥炒海瓜子與越式烤肉。建議 19:50 前結束用餐，以利提前就位觀賞龍橋演出。',
        category: 'food',
        tags: ['精緻越菜', '生春捲', '清爽料理'],
        costEstimate: '每人約 150,000~250,000 VND (約 NT$190~310)',
        openingHours: '依店家現場公告為準',
        reservation: '建議提早預訂晚餐時段',
        restrictions: ['支援現金與常見信用卡支付']
      },
      {
        time: '20:15 - 21:30',
        title: '週末龍橋噴火噴水演出 ＆ 韓江漫步',
        location: '龍橋 (Cầu Rồng) 龍頭東側廣場',
        description: '週末常規演出通常為週五、週六、週日晚間 21:00 登場（特殊節慶或活動可能增減場次，依市府最新公告為準），金色鋼龍噴出火燄與水柱。建議 20:15 前步行抵達觀賞區就位。',
        category: 'nightlife',
        tags: ['週末演出', '21點演出', '龍橋地標'],
        tips: '【觀賞叮嚀】：噴水環節下風處水霧較大，手機與電子產品請注意防潑水；演出期間龍橋周邊路段實施交管，務必提早步行抵達。',
        openingHours: '演出通常於 21:00 準時開始 (約 15 分鐘)',
        reservation: '公共橋樑與廣場免費觀賞；若選擇韓江遊船需另購船票',
        restrictions: [
          '【交管注意】：週末演出時段（約 20:30 - 21:30）龍橋橋面全面禁止汽機車通行，請配合現場警察交管',
          '人潮密集時請保管好隨身皮夾與手機'
        ]
      }
    ]
  },
  {
    dayNumber: 5,
    date: '2026/10/05',
    weekday: '星期一',
    title: '順化世界文化遺產深度遊 (海雲隧道 ➔ 順化皇城 ➔ 傳統鹽咖啡) ➔ 晚宴慶祝',
    subtitle: '阮朝古都皇城紫禁城深度參觀、品嚐代表性順化牛肉粉、舒適返程',
    highlights: ['順化皇城 (The Citadel / 阮朝大內)', '順化是 Bún Bò Huế 代表性發源地區之一', '順化傳統鹽咖啡 (Cà Phê Muối)', '樂天超市採買 (自由選配)'],
    meals: {
      breakfast: '半島飯店早餐',
      lunch: '順化 Bún Bò Huế (如 Quán Bà Tuyết) 或 順化風味料理',
      dinner: 'Fatfish Restaurant (韓江畔創意料理) 或 峴港海鮮餐廳',
      snackOrCafe: '順化傳統鹽咖啡 (Cà Phê Muối)'
    },
    transportation: '預約峴港往返順化全日包車（全程約 9~10 小時，單程車程約 2~2.5 小時，優先行駛海雲隧道確保安全準時）',
    weatherAdvice: '順化 10 月多雨且山區易有濃霧。本行程主打「順化皇城」深度遊，改走海雲隧道以避免海雲關山路路況風險；若當日遇豪雨警報或道路積水，應遵從司機建議縮短景點或取消順化行程。',
    activities: [
      {
        time: '08:00 - 10:30',
        title: '專車啟程 ➔ 經海雲隧道前往古都順化',
        location: '峴港 ➔ 順化 (約 2~2.5 小時車程)',
        description: '專車經海雲隧道前往順化市區，隧道通暢且不受山路濃霧影響，行車平穩安全。',
        category: 'transport',
        tags: ['海雲隧道', '古都專車', '平穩舒適'],
        tips: '容易暈車者可於出發前備妥暈車藥；海雲關與啟定陵作為天候良好時的彈性選配，雨季建議專注皇城。',
        openingHours: '海雲隧道全天通車',
        reservation: '順化一日包車建議出發前 1~2 天確認預約',
        restrictions: ['若遇天雨路滑，行車時間可能略有延長，請保持從容心態']
      },
      {
        time: '10:30 - 12:30',
        title: '順化皇城 (The Citadel / 順化大內紫禁城) 參觀',
        location: 'Thành phố Huế, Thừa Thiên Huế',
        description: '越南阮朝（1802-1945）的皇宮與都城，列入 UNESCO 世界文化遺產。參觀午門、太和殿、世廟、九鼎與宮殿遺構，了解越南歷史王朝風華。',
        category: 'sightseeing',
        tags: ['世界文化遺產', '阮朝皇城', '歷史古蹟'],
        costEstimate: '門票依順化古蹟保護中心最新牌價為準 (成人約 200,000 VND)',
        openingHours: '約 07:30 - 17:30 (開放時間以現場售票處公告為準)',
        reservation: '現場售票亭購票即可',
        restrictions: [
          '【古蹟禮儀與服裝規範】：進入供奉阮朝帝王之世廟及殿堂內部嚴禁著過度暴露之無袖背心或短褲短裙，嚴禁戴帽戴墨鏡',
          '宮殿室內文物禁止觸摸，園區禁止未經許可之空拍機'
        ]
      },
      {
        time: '12:30 - 14:00',
        title: '午餐：順化風味「順化牛肉粉 (Bún Bò Huế)」＆ 順化鹽咖啡',
        location: 'Quán Bà Tuyết (47 Nguyễn Công Trứ) 或 順化鹽咖啡店',
        description: '順化是 Bún Bò Huế 的代表性發源地區之一，品嚐香茅辣味牛肉米線與滷牛腱，隨後品嚐發源於順化的特色「鹽咖啡 (Cà Phê Muối)」。預留充分 90 分鐘用餐與休息時間。',
        category: 'food',
        tags: ['順化牛肉粉', '鹽咖啡', '在地名吃'],
        costEstimate: '每人約 60,000~120,000 VND (約 NT$75~150)',
        openingHours: '依店家現場營業為準',
        reservation: '現場入座即可',
        restrictions: ['在地平價小吃店多僅收現金，湯頭微辣，不嗜辣者可告知少放辣油']
      },
      {
        time: '14:00 - 16:30',
        title: '專車返回峴港 (啟定陵為自由選配項目)',
        location: '順化 ➔ 峴港',
        description: '若天候良好且時間充裕，可彈性順道造訪啟定皇陵 (Ứng Lăng，門票約 150,000 VND)；若天候陰雨或欲保持從容，則直接搭乘專車經海雲隧道返回峴港市區。',
        category: 'transport',
        tags: ['專車回程', '彈性選配'],
        openingHours: '全日包車服務範圍內',
        reservation: '包車約定時段',
        restrictions: ['若造訪啟定陵需攀登約 127 級較陡石階，雨天路滑需格外注意腳步']
      },
      {
        time: '18:00 - 19:30',
        title: '特產採買：樂天超市 (Lotte Mart) 或 飯店休息 (自由選配)',
        location: '6 Nại Nam, Hoà Cường Bắc, Hải Châu',
        description: '抵達時間預計 18:00–19:00（視路況與交通而定）。超市採買為自由選配項目，可採購腰果、咖啡、果乾等伴手禮；亦可選擇直接回飯店休息。',
        category: 'shopping',
        tags: ['伴手禮採買', '自由選配', '超市打包'],
        tips: '超市設有打包台供旅客免費使用紙箱與膠帶，方便託運打包。',
        openingHours: '約 08:00 - 22:00 (依超市當日公告為準)',
        reservation: '無需預約',
        restrictions: [
          '【入境台灣動植物檢疫重罰法規】：肉製品與含肉食品嚴禁攜入台灣！不同產品、來源及違規情況適用規定不同（例如違規攜帶豬肉製品入境初犯即罰 20 萬元、再犯最高 100 萬元），請依台灣防檢署最新公告為準。'
        ]
      },
      {
        time: '19:45 - 21:30',
        title: '旅程晚宴：Fatfish Restaurant 韓江景觀料理 或 海鮮晚宴',
        location: '439 Trần Hưng Đạo (韓江畔，請確認預約狀態)',
        description: '在行程最後一晚於韓江畔享用精緻海陸料理，欣賞七彩韓江橋景，回顧中越旅程。',
        category: 'food',
        tags: ['韓江夜景', '晚宴慶祝', '放鬆享受'],
        costEstimate: '每人約 350,000~550,000 VND (約 NT$440~690)',
        openingHours: '依店家最新公告為準',
        reservation: '【建議預約】：臨江座位建議提前預訂',
        restrictions: ['部分精緻餐廳可能酌收服務費與稅金', '支援主流國際信用卡']
      }
    ]
  },
  {
    dayNumber: 6,
    date: '2026/10/06',
    weekday: '星期二',
    title: '半島飯店慢活 ➔ 占婆雕刻博物館 ➔ 告別美食烤肉米線 ➔ 14:00~14:30 前往機場',
    subtitle: '海景巡禮、古老占婆文明、品嚐經典炭火烤肉米線、搭機平安返國',
    highlights: ['半島飯店早餐', '占婆雕刻博物館 (古占婆砂岩石雕)', 'Bún Chả 越式炭烤肉米線', '14:00~14:30 飯店出發 ➔ 17:30 起飛 (預留 3 小時機場緩衝)'],
    meals: {
      breakfast: '半島飯店海景早餐',
      lunch: 'Bún Chả Hà Nội 59 (烤肉米線) 或 Bếp Cuốn (特色春捲料理)',
      dinner: '機上餐點 / 機場免稅店輕食',
      snackOrCafe: 'The Cups Coffee 或 韓江畔外帶咖啡'
    },
    transportation: '市區景點以 Grab 叫車；午後 14:00~14:30 於半島飯店提領行李後搭車前往機場 (雨季保守預留 3 小時抵達機場)',
    weatherAdvice: '收官日安排市區室內博物館與精緻餐飲；因 10 月多雨且市區午後可能塞車積水，務必於 14:00~14:30 出發前往機場。',
    activities: [
      {
        time: '08:30 - 10:30',
        title: '飯店晨光早餐 ＆ 整理行李收拾行囊',
        location: '峴港半島飯店 (Peninsula Hotel)',
        description: '悠閒享用飯店自助早餐，欣賞美溪海岸風光，回房打包行李並核對護照與隨身重要物品。',
        category: 'relax',
        tags: ['海景早餐', '打包行李', '退房準備'],
        openingHours: '早餐時段約 06:30 - 10:00 (依飯店公告為準)',
        reservation: '房客憑房號享用自助早餐',
        restrictions: ['早餐收餐前請準時入座用餐']
      },
      {
        time: '10:30 - 11:00',
        title: '辦理退房 Check-out ＆ 行李暫存飯店前台',
        location: '半島飯店前台大廳',
        description: '辦理退房結帳手續，將大型托運行李暫寄於飯店大廳，領取行李牌後輕裝出發。',
        category: 'relax',
        tags: ['退房手續', '行李寄放'],
        openingHours: '飯店標準退房時間為 12:00 前',
        reservation: '前台直接辦理',
        restrictions: ['請妥善保存行李領取憑條，返回時憑牌提領行李']
      },
      {
        time: '11:15 - 12:30',
        title: '占婆雕刻博物館 (Museum of Cham Sculpture)',
        location: 'Số 02 2 Tháng 9, Bình Hiên, Hải Châu',
        description: '建於 1915 年的法式建築博物館，典藏古占婆王國（4-13 世紀）砂岩石雕與赤陶文物，包括濕婆神、舞王、梵天等雕像，為研究占婆藝術的重要館舍。',
        category: 'sightseeing',
        tags: ['占婆博物館', '歷史文物', '法式建築'],
        costEstimate: '門票約 60,000 VND (約 NT$75，依現場售票為準)',
        openingHours: '約 07:30 - 17:00 (最後售票 16:30，依館方公告為準)',
        reservation: '現場售票處購票即可',
        restrictions: [
          '【文物保護規範】：石雕文物嚴禁觸摸或攀爬倚靠',
          '館內展區嚴禁使用相機閃光燈，大型背包需依規定寄存於入口處'
        ]
      },
      {
        time: '12:45 - 13:45',
        title: '午餐：經典告別風味「Bún Chả 越式炭火烤肉米線」或「Bếp Cuốn」',
        location: 'Bún Chả Hà Nội 59 (59 Nguyễn Chí Thanh) 或 54 Nguyễn Văn Thoại',
        description: '炭火現烤焦香的豬肉肉丸與五花肉片，浸泡在酸甜魚露高湯中，搭配生菜、香草與米線品嚐；或至 Bếp Cuốn 品嚐全越特色春捲拼盤。',
        category: 'food',
        tags: ['炭火烤肉米線', '生菜香草', '經典風味'],
        costEstimate: '每人約 60,000~120,000 VND (約 NT$75~150)',
        openingHours: '依店家現場營業為準',
        reservation: '小吃名店現場入座',
        restrictions: ['傳統小店多僅收現金']
      },
      {
        time: '14:00 - 14:30',
        title: '返回半島飯店提領行李 ＆ 出發前往機場',
        location: '半島飯店大廳 ➔ 峴港國際機場 (DAD)',
        description: '14:00–14:30 取行李並出發，搭乘 Grab 前往機場 T2 國際航廈。考量 10 月雨季可能遇降雨、路面積水及市區塞車，提早出發最為穩妥。',
        category: 'transport',
        tags: ['提領行李', '機場專車', '預留塞車緩衝'],
        openingHours: 'Grab 全天可叫車 (車程約 20~30 分鐘，雨天可能延長)',
        reservation: '無需預約 (透過 App 即時叫車)',
        restrictions: ['再次清點確認隨身護照、錢包、手機與重要證件是否齊全']
      },
      {
        time: '14:30 - 17:30',
        title: '抵達機場 ➔ 辦理報到、托運與通關 ➔ 17:30 起飛返台',
        location: '峴港國際機場 (DAD) 國際航廈 T2',
        description: '國際航班建議 2.5–3 小時前抵達機場（10 月雨季以 3 小時為保守方案）。辦理登機手續、托運行李與出境安檢，依序登機並於 17:30 起飛返台。',
        category: 'transport',
        tags: ['國際航班', '海關通關', '平安返台'],
        tips: '峴港機場安檢與海關排隊時間受同時段國際航班數量影響，預留足夠時間最為從容。',
        openingHours: '機場 24 小時營運 (航班起飛前約 2.5~3 小時開櫃報到)',
        reservation: '出發前可利用航空公司官網/App 完成線上預辦登機',
        restrictions: [
          '【入境台灣動植物檢疫重罰法規】：肉製品與含肉食品嚴禁攜入台灣！違規攜帶未申報經海關查獲者將依法重罰（例如豬肉產品初犯處 20 萬元、再犯處 100 萬元罰鍰），不同產品與違規情況適用法規依台灣防檢署最新公告為準。',
          '【行李安全規範】：行動電源與鋰電池必須隨身攜帶，嚴禁放入託運行李；一般國際航班安檢通常要求隨身攜帶液體單一容器不超過 100 ml，並放入透明可密封袋，具體以航空公司與機場現場規定為準。'
        ]
      }
    ]
  }
];

export const ALTERNATIVE_STYLES: AlternativeStyle[] = [
  {
    id: 'classic-highlights',
    title: '玩法 A：經典全景首選 (Classic Highlights)',
    tag: '初訪峴港精選',
    iconName: 'Compass',
    targetAudience: '第一次造訪峴港、情侶、好友同行，想一次網羅知名名勝與經典地標者',
    coreVibe: '巴拿山佛手橋 + 迦南島竹籃船 + 會安燈籠古鎮 + 龍橋夜景 + 道地米線海鮮',
    estimatedCostTWD: '約 NT$ 22,000 ~ 27,000 / 人 (估算值，視實際預訂與消費浮動)',
    description: '熱門標準路線，緊密結合山海風光、世界文化遺產、主題樂園與道地美食，行程節奏豐富充實。',
    keyHighlights: [
      '巴拿山太陽世界：長途登山纜車 + 佛手黃金橋 + 法國村',
      '會安世界文化遺產：日本橋外觀、古鎮漫步、秋盆河放水燈',
      '迦南島水椰林竹籃船體驗',
      '山茶半島靈應寺白玉觀音俯瞰全灣',
      '美溪沙灘 + 龍橋週末限定噴火噴水演出 (依官方公告)'
    ],
    daysSummary: [
      { day: 'Day 1', theme: '粉紅教堂與市區巡禮', schedule: '抵達機場 ➔ 換匯採買 ➔ 道地米線 ➔ 美溪沙灘 ➔ 山茶夜市與龍橋' },
      { day: 'Day 2', theme: '巴拿山雲端仙境全日', schedule: '佛手橋 ➔ 法國村 ➔ 園區百匯 ➔ Fantasy Park ➔ 草本按摩' },
      { day: 'Day 3', theme: '五行山與會安古城燈籠', schedule: '五行山洞穴 ➔ 迦南島竹籃船 ➔ 會安三大名菜 ➔ 古鎮散策與水燈夜市' },
      { day: 'Day 4', theme: '山茶半島與沙灘慢活', schedule: '山茶半島靈應寺 ➔ 精選午餐 ➔ 沙灘散步 ➔ 精品咖啡 ➔ 龍橋演出' },
      { day: 'Day 5', theme: '順化皇城深度一日', schedule: '海雲隧道 ➔ 順化皇城 ➔ 順化牛肉粉 ➔ 順化鹽咖啡 ➔ 晚宴慶祝' },
      { day: 'Day 6', theme: '占婆文明與告別盛宴', schedule: '飯店早餐 ➔ 占婆雕刻博物館 ➔ 烤肉米線 ➔ 14:00~14:30 前往機場' }
    ]
  },
  {
    id: 'luxury-wellness',
    title: '玩法 B：奢華度假 SPA 美食慢活 (Luxury & Wellness)',
    tag: '極致放鬆度假',
    iconName: 'Sparkles',
    targetAudience: '想放慢腳步、追求極致放鬆、優質 SPA、法越精緻料理與海景下午茶的渡假者',
    coreVibe: '每日 60-90 分鐘精選 SPA + 法越精緻私廚 + 海景放空 + 會安特色遊船',
    estimatedCostTWD: '約 NT$ 38,000 ~ 52,000 / 人 (估算值，視實際預訂與消費浮動)',
    description: '捨棄緊湊的奔波打卡，每天睡到自然醒享用海景早餐，下午安排草本或火山石全身水療，傍晚品味精選料理與海鮮，極致療癒。',
    keyHighlights: [
      '每日預約一場 60-90 分鐘精選水療 SPA',
      '半島飯店海景放鬆與下午茶時光',
      '精選特色料理巡禮：LUK LAK、Madame Hạnh、Fatfish 等',
      '會安秋盆河木船巡航放水燈',
      '專屬包車接送，行程舒適從容'
    ],
    daysSummary: [
      { day: 'Day 1', theme: '海風初歇與草本 SPA', schedule: '抵達飯店 ➔ 海景休息 ➔ 草本精油SPA ➔ 精選海鮮晚餐' },
      { day: 'Day 2', theme: '巴拿山休閒悠遊', schedule: '專車直達巴拿山 ➔ 佛手橋漫步 ➔ 園區午宴 ➔ 回飯店水療放鬆' },
      { day: 'Day 3', theme: '會安古鎮精緻料理與遊船', schedule: '午後抵會安 ➔ 秋盆河夕陽遊船 ➔ 古鎮精選晚餐' },
      { day: 'Day 4', theme: '美溪沙灘漫步與精緻晚宴', schedule: '飯店休息 ➔ 43 Factory精品咖啡 ➔ 舒壓按摩 ➔ Fatfish法越晚餐' },
      { day: 'Day 5', theme: '悠閒採買與景觀酒吧', schedule: '特色伴手禮採買 ➔ 超市封箱 ➔ 海鮮燒烤 ➔ 韓江景觀酒吧' },
      { day: 'Day 6', theme: '海景告別與從容賦歸', schedule: '最後海景晨光 ➔ 精緻越式春捲午宴 ➔ 14:00~14:30 專車送機' }
    ]
  },
  {
    id: 'heritage-culture',
    title: '玩法 C：歷史文化深度探索 (Heritage & History)',
    tag: '深度人文探索',
    iconName: 'Landmark',
    targetAudience: '熱愛世界文化遺產、中越歷史、占婆印度教文明、阮朝宮廷建築的深度旅人',
    coreVibe: '順化皇城 + 會安古鎮 + 五行山洞穴 + 占婆雕刻博物館',
    estimatedCostTWD: '約 NT$ 24,000 ~ 30,000 / 人 (估算值，視實際預訂與消費浮動)',
    description: '深入探訪中越重要歷史古蹟與文化遺產，探尋占婆王國文物與 19 世紀阮朝帝王歷史，人文底蘊豐厚。',
    keyHighlights: [
      '順化皇城紫禁城深度參觀 (UNESCO 世界文化遺產)',
      '會安古鎮世界遺產深度散策 (福建會館、古宅、日本橋外觀)',
      '占婆雕刻博物館千年砂岩石雕典藏',
      '五行山玄空洞與佛教石刻探秘',
      '品嚐順化牛肉粉發源地特色風味與順化傳統鹽咖啡'
    ],
    daysSummary: [
      { day: 'Day 1', theme: '峴港起源與法國殖民遺跡', schedule: '抵達 ➔ 峴港粉紅大教堂 ➔ 韓江歷史巡禮 ➔ 合法換匯' },
      { day: 'Day 2', theme: '五行山與占婆文化前導', schedule: '五行山洞穴探秘 ➔ 傳統越式料理 ➔ 草本按摩' },
      { day: 'Day 3', theme: '會安古鎮世界遺產深度散策', schedule: '全日會安：福建會館 ➔ 日本橋 ➔ 古宅宗祠 ➔ 夜市水燈' },
      { day: 'Day 4', theme: '山茶半島與巴拿山歷史建築', schedule: '靈應寺 ➔ 巴拿山歐風建築 ➔ 城堡巡禮 ➔ 舒壓按摩' },
      { day: 'Day 5', theme: '順化帝國皇城深度一日', schedule: '海雲隧道 ➔ 順化皇宮 ➔ 順化牛肉粉發源地 ➔ 順化鹽咖啡 ➔ 返回峴港' },
      { day: 'Day 6', theme: '占婆雕刻博物館總結', schedule: '占婆雕刻博物館精華導覽 ➔ 炭烤肉米線 ➔ 14:00~14:30 前往機場' }
    ]
  },
  {
    id: 'rainy-family-friendly',
    title: '玩法 D：雨季備案 ＆ 親子輕鬆型 (Rain & Family Friendly)',
    tag: '10月雨季首選備案',
    iconName: 'Umbrella',
    targetAudience: '遇到連續雨天、攜帶長輩或小孩同行，不便長時間戶外風吹雨淋的旅客',
    coreVibe: '巴拿山室內 Fantasy Park + 越式廚藝體驗 + 韓市場/Lotte Mart購物 + 溫泉/室內SPA',
    estimatedCostTWD: '約 NT$ 20,000 ~ 25,000 / 人 (估算值，視實際預訂與消費浮動)',
    description: '針對 10 月份中越雨季特別設計的彈性雨天備案，多數活動皆在室內、空調展館、大型商場、廚藝學校與全覆蓋遊樂區內，風雨無阻照樣精彩。',
    keyHighlights: [
      '巴拿山室內大型樂園 Fantasy Park (室內遊樂設施與影院體驗)',
      '會安或峴港越式廚藝教室 (Cooking Class)：親手做生春捲、牛肉河粉與煎餅',
      '峴港室內商場大巡禮：Vincom Plaza、Lotte Mart、Big C/Go! 超市',
      'Mikazuki 日式室內水上樂園與室內溫水設施 (選配)',
      '室內質感咖啡館、熱石按摩與舒活護理'
    ],
    daysSummary: [
      { day: 'Day 1', theme: '市區室內巡禮與特色咖啡', schedule: '抵達 ➔ 韓市場室內換匯採買 ➔ Vincom Plaza ➔ 椰子咖啡 ➔ 飯店休息' },
      { day: 'Day 2', theme: '巴拿山室內 Fantasy Park 體驗', schedule: '纜車直達山頂 ➔ 室內樂園體驗 ➔ 城堡百匯 Buffet ➔ 室內 SPA' },
      { day: 'Day 3', theme: '越式料理 Cooking Class 廚藝課', schedule: '室內市場巡禮 ➔ 動手做經典越菜 ➔ 品嚐成果 ➔ 會安古街漫步' },
      { day: 'Day 4', theme: 'Mikazuki 室內水上設施或飯店休閒', schedule: '室內全天候溫水設施 ➔ 舒壓按摩 ➔ Pizza 4P\'s 披薩大餐' },
      { day: 'Day 5', theme: '商場大採購與手作體驗', schedule: 'Lotte Mart 裝箱採買 ➔ 越式燈籠手作 DIY 體驗 ➔ 韓江景觀餐廳' },
      { day: 'Day 6', theme: '占婆博物館與室內伴手禮店', schedule: '占婆室內展廳 ➔ 舒活按摩 ➔ 告別烤肉米線 ➔ 14:00~14:30 前往機場' }
    ]
  }
];

export const BUDGET_TIERS: BudgetTier[] = [
  {
    id: 'budget-explorer',
    name: '小資輕裝型 (Value Explorer)',
    targetUser: '講究 CP 值、喜愛平民排隊小吃與彈性搭乘 Grab 的自由行旅人（費用為預估參考，請依實際浮動）',
    totalTWD: 17800,
    totalVND: 14240000,
    breakdown: {
      flight: 7500,
      hotel: 4500,
      transport: 1200,
      food: 2200,
      activities: 1600,
      spaShopping: 800
    },
    highlights: [
      '住半島飯店標準海景雙人房（雙人分攤估算）',
      '每餐以平民米線、街頭特色煎餅、夜市大排檔為主',
      '交通以 Grab 點對點搭乘與預約接駁為主',
      '體驗 1 次 60 分鐘平價越式按摩'
    ]
  },
  {
    id: 'comfort-standard',
    name: '舒適經典型 (Recommended)',
    targetUser: '最受歡迎推薦！行程包車無憂、品嚐在地好料、享受 2 次優質 SPA（費用為預估參考，請依實際浮動）',
    totalTWD: 25500,
    totalVND: 20400000,
    breakdown: {
      flight: 8500,
      hotel: 6500,
      transport: 2400,
      food: 4200,
      activities: 2100,
      spaShopping: 1800
    },
    highlights: [
      '半島飯店高樓層豪華海景房',
      '全日專屬包車（巴拿山一日、會安一日、順化一日）免等車',
      '美溪沙灘現撈海鮮 + Pizza 4P\'s + 庭園精緻越菜',
      '2 次 60~90 分鐘熱門草本精油熱石按摩',
      '樂天超市伴手禮開心採購'
    ]
  },
  {
    id: 'luxury-premium',
    name: '尊榮奢華型 (Luxury & Indulgence)',
    targetUser: '追求極致舒適、海景套房、私人專車、精緻私廚與高品質 SPA（費用為預估參考，請依實際浮動）',
    totalTWD: 45000,
    totalVND: 36000000,
    breakdown: {
      flight: 13500,
      hotel: 14000,
      transport: 4500,
      food: 6500,
      activities: 2800,
      spaShopping: 3700
    },
    highlights: [
      '半島飯店全海景行政套房',
      '全程專屬獨立包車接送',
      '享受高品質水療 SPA 療程',
      '會安秋盆河木船遊船 + 韓江景觀創意晚宴',
      '特色伴手禮與手作體驗'
    ]
  }
];

export const SAFETY_WEATHER_TIPS = [
  {
    category: '10 月中越雨季實況與彈性對策',
    icon: 'CloudRain',
    tips: [
      '【真實雨季特性】：10 月是峴港、會安與中越全年的主要雨季與降雨高峰期（歷史月降雨量約 500–650 mm、雨日常達 20 天以上），可能出現持續性陰雨、大雨甚至受外圍熱帶擾動/颱風影響，切勿預設「早晨必定放晴」或「僅為午後短暫陣雨」。',
      '【行程策略】：採取「晴天搶先戶外、雨天彈性切換」原則，巴拿山與海雲嶺等山區景點建議依當日即時雲霧與雷達預報機動調整。',
      '【隨身裝備建議】：透氣快乾衣物、防滑好走鞋款（五行山與老街石板路雨後極滑）、折疊雨傘、高係數雨衣、防水背包套與手機防水袋。',
      '【溫差防護】：巴拿山（海拔近 1,500m）山頂氣溫較市區平地低 5~8°C，雨霧天體感偏涼，務必攜帶防風保暖薄外套。'
    ]
  },
  {
    category: '交通安全與正規叫車防坑攻略',
    icon: 'Car',
    tips: [
      '【必備 App】：在台灣先下載好「Grab App」並綁定信用卡，出機場後直接 App 叫車，費用透明固定，避免現金找零爭議與黑車喊價。',
      '【拒搭攬客黑車】：在機場與各大景區門口切勿搭乘個人主動拉客之黑牌車；若需攔計程車，僅選正規綠色「Mai Linh」或白色「Vinasun」按表收費。',
      '【跨城包車優勢】：巴拿山、會安、順化等長途路線，預訂全日包車可免去雨天叫不到車或山區等候的困擾，時間彈性自由。',
      '【步行過馬路技巧】：越南市區機車密集，過馬路時請觀察車流，以「均速穩定前行」，切勿突然猛衝或急退，騎士會順勢繞行。'
    ]
  },
  {
    category: '海鮮消費防坑與飲水腸胃衛生',
    icon: 'UtensilsCrossed',
    tips: [
      '【海鮮計價三確認】：1. 確認標價為「每公斤 (1kg)」或「每份 (phần)」；2. 挑選活海鮮時現場在電子秤前看清淨重；3. 留意是否有額外料理加工費（如清蒸、蒜蓉、炒胡椒等）。',
      '【飲水與冰塊衛生】：自來水不可生飲，飯店刷牙漱口建議使用瓶裝水；小吃攤盡量避免大塊不明冰塊，建議點原裝罐裝飲料或前往乾淨店面。',
      '【隨身備用常備藥】：請準備止瀉藥、腸胃藥、益生菌、退燒止痛藥及防蚊液以備不時之需。'
    ]
  },
  {
    category: '外幣換匯、越盾面額辨識與防竊',
    icon: 'Coins',
    tips: [
      '【換匯技巧】：攜帶 2006 年後發行、無折痕無破損的「100 美元新版大鈔」至有合法標示之兌換點或金店兌換，交易前先確認匯率並索取收據。',
      '【面額防混淆】：越盾面額 0 較多，注意藍綠色的「500,000」與「20,000」容易混淆；「100,000」為綠色。找零時請數清零的位數。',
      '【人潮防扒防搶】：在夜市、古鎮老街與龍橋散場等人潮密集處，背包前背，在路邊拍照時握穩手機，避免飛車奪物。'
    ]
  },
  {
    category: '返台檢疫重大法規與行李限制',
    icon: 'ShieldCheck',
    tips: [
      '【肉品嚴禁入境台灣】：為防範非洲豬瘟等重大動植物疫病，嚴禁攜帶任何肉製品（包含生熟豬肉、牛肉乾、肉鬆、含肉塊之即食泡麵等）入境台灣！',
      '【違規重罰警示】：違規攜帶未申報經海關查獲者將依法重罰（例如豬肉製品初犯處新台幣 20 萬元、再犯最高 100 萬元罰鍰），不同產品適用法規依台灣防檢署最新公告為準。在當地超市採買時請仔細確認成分標示。',
      '【隨身液體與鋰電池規範】：行動電源與備用鋰電池必須隨身攜帶，嚴禁放入託運行李；國際航班隨身液體單一容器不得超過 100ml，並需裝入透明夾鏈袋內。'
    ]
  }
];

export const RECOMMENDED_RESTAURANTS: RestaurantItem[] = [
  {
    name: 'Bún Chả Cá 109',
    vietnameseName: 'Bún Chả Cá 109 Nguyễn Chí Thanh',
    category: '在地平民小吃 / 人氣名店',
    specialty: '招牌魚餅米線、鮮魚肉塊米線、特製辣椒醬',
    priceRange: '35,000 ~ 60,000 VND (約 NT$45~75，以現場菜單為準)',
    address: '109 Nguyễn Chí Thanh, Hải Châu 1, Đà Nẵng (出發前請確認營業狀態)',
    rating: '網路評價參考：約 4.4~4.6 ★ (平價小吃熱門名店)',
    proTip: '湯頭用鮮魚、南瓜、菠蘿燉煮，加入九層塔與紫洋蔥香氣撲鼻，加一匙桌上特製辣椒風味更道地！'
  },
  {
    name: 'Bánh Xèo Bà Dưỡng',
    vietnameseName: 'Bánh Xèo Bà Dưỡng',
    category: '巷弄經典名店 / 越式煎餅',
    specialty: '招牌黃金酥脆越式煎餅、炭烤豬肉串 (Nem Lụi)',
    priceRange: '60,000 ~ 120,000 VND (約 NT$75~150，以現場菜單為準)',
    address: 'K280/23 Hoàng Diệu, Bình Hiên, Hải Châu, Đà Nẵng (出發前請確認營業狀態)',
    rating: '網路評價參考：約 4.3~4.5 ★ (排隊小吃名店)',
    proTip: '隱身在巷弄內，用薄米紙包裹生菜、黃瓜、煎餅與肉串，沾特製花生豬肝濃醬，一口咬下外酥內嫩！'
  },
  {
    name: 'Bé Mặn Seafood',
    vietnameseName: 'Hải Sản Bé Mặn',
    category: '生猛現撈海鮮大排檔',
    specialty: '蒜蓉烤扇貝、蔥油大頭蝦、避風塘炒花蟹、清蒸花蛤',
    priceRange: '300,000 ~ 500,000 VND / 人 (約 NT$380~650，依現場秤重與點選為準)',
    address: 'Lô 11 Võ Nguyên Giáp, Mân Thái, Sơn Trà (近半島飯店)',
    rating: '網路評價參考：約 4.2~4.4 ★ (峴港人氣海鮮排檔)',
    proTip: '距離半島飯店近，挑選活蝦活蟹時請店員當場瀝乾水份秤重並確認「每公斤 (1kg) 單價」，即可安心大快朵頤！'
  },
  {
    name: 'Pizza 4P’s Da Nang',
    vietnameseName: 'Pizza 4P’s Hoàng Văn Thụ / Indochina',
    category: '特色連鎖 / 越義 Fusion 手工披薩',
    specialty: '新鮮手作布拉塔起司披薩 (Burrata)、蟹肉番茄義大利麵、生火腿起司披薩',
    priceRange: '200,000 ~ 400,000 VND / 人 (約 NT$250~500，以現場點餐為準)',
    address: '8 Hoàng Văn Thụ, Phước Ninh, Hải Châu, Đà Nẵng (地址以預約分店為準)',
    rating: '網路評價參考：約 4.7~4.8 ★ (極受歡迎之連鎖品牌)',
    proTip: '在越南極具人氣的披薩品牌，強烈建議出發前在官網提前線上訂位，招牌布拉塔起司口感濃郁！'
  },
  {
    name: 'Madame Hạnh Restaurant',
    vietnameseName: 'Madame Hạnh - Cuisine de Da Nang',
    category: '庭園景觀餐廳 / 精緻越菜',
    specialty: '香蕉花鮮蝦沙拉、椰汁慢燉海鮮、炭烤香茅排骨、越式甜品',
    priceRange: '250,000 ~ 450,000 VND / 人 (約 NT$310~560，以現場菜單為準)',
    address: '79 Lương Nhữ Hộc, Khuê Trung, Cẩm Lệ, Đà Nẵng (出發前請確認營業狀態)',
    rating: '網路評價參考：約 4.5~4.7 ★ (環境優雅之庭園餐廳)',
    proTip: '坐落在綠意盎然的洋房庭院中，菜品精緻，適合家庭聚餐與從容用餐。'
  },
  {
    name: 'Cộng Cà Phê (越共咖啡)',
    vietnameseName: 'Cộng Cà Phê Bạch Đằng',
    category: '特色連鎖咖啡館',
    specialty: '招牌椰子冰沙咖啡 (Cốt Dừa Cà Phê)、綠豆冰沙咖啡、越式滴漏咖啡',
    priceRange: '45,000 ~ 70,000 VND (約 NT$55~90，依現場價目為準)',
    address: '96-98 Bạch Đằng, Hải Châu 1, Đà Nẵng (韓江畔，請確認分店狀態)',
    rating: '網路評價參考：約 4.4~4.6 ★ (知名主題咖啡館)',
    proTip: '以軍綠復古為主題，二樓面江座位視野開闊，下午喝一杯濃郁椰子冰沙咖啡是一大享受。'
  }
];

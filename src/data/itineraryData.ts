import { DayPlan, AlternativeStyle, BudgetTier, RestaurantItem } from '../types';

export const TRIP_INFO = {
  destination: '越南 峴港 (Da Nang) & 會安 (Hoi An) & 順化 (Hue)',
  startDate: '2026-10-01',
  endDate: '2026-10-06',
  duration: '6 天 5 夜 (含 4 個完整遊玩日與抵離境 2 個半日)',
  flightArrival: '2026/10/01 09:00 抵達峴港國際機場 T2 國際航廈',
  flightDeparture: '2026/10/06 17:30 峴港國際機場起飛 (建議 14:00~14:30 從飯店出發，預留雨天塞車緩衝)',
  hotel: {
    name: '峴港半島飯店 (Peninsula Hotel Danang)',
    address: '84 Võ Nguyên Giáp, Mân Thái, Sơn Trà, Đà Nẵng',
    locationAdvantage: '緊鄰美溪沙灘海岸公路與山茶半島海景第一排，設有戶外景觀泳池（具體設施規格、開放時段與兒童規定請以現場為準）',
    checkInTime: '14:00 後 (可先於大廳寄放行李)',
    checkOutTime: '12:00 前'
  },
  weatherOverview: '10 月為峴港及中越主要雨季（月降雨量約 500–650 mm、降雨天數常達 20 天以上），多有持續性大雨、雷雨或颱風影響低窪積水，不宜預設午後短暫陣雨。各項戶外活動與山區/水上行程需於前一日及當日上午視氣象雷達彈性調整。',
  exchangeRateApprox: '以新台幣 (TWD) 估算為主，當地越盾 (VND) 採 1 TWD ≈ 800 VND 作為心算參考（實際受銀行匯率、手續費及兌換管道浮動，不作保證）'
};

export const MAIN_ITINERARY: DayPlan[] = [
  {
    dayNumber: 1,
    date: '2026/10/01',
    weekday: '星期四',
    title: '抵達峴港 ➔ 飯店寄放 ➔ 市區粉紅教堂與韓市場 ➔ 美溪沙灘 ➔ 山茶夜市與龍橋夜景',
    subtitle: '初訪峴港，粉紅浪漫、換匯採買、濱海漫步與越式海鮮初體驗',
    highlights: ['峴港大教堂', '韓市場換匯採買', '半島飯店戶外海景泳池', '美溪沙灘漫步', '山茶夜市與龍橋散策'],
    meals: {
      breakfast: '機上輕食或出關後機場河粉 (依航班安排)',
      lunch: 'Bún Chả Cá 109 (經典炸魚餅米線) 或 Bánh Xèo Bà Dưỡng (招牌越式酥脆煎餅)',
      dinner: 'Bé Mặn 海鮮餐廳 (美溪沙灘現撈活海鮮大排檔，請當場確認秤重)',
      snackOrCafe: 'Cộng Cà Phê (越共復古風格椰子咖啡)'
    },
    transportation: '機場專車/Grab 叫車接送至飯店；市區點對點以 Grab 車資約 30,000~60,000 VND (約 NT$40~75，以 App 即時顯示為準)',
    weatherAdvice: '10 月為雨季，多降雨或雷陣雨。今日主要在市區與飯店，若遇降雨可轉入韓市場、室內咖啡館或於半島飯店休息。',
    activities: [
      {
        time: '09:00 - 09:50',
        title: '抵達峴港國際機場 (DAD) & 入境',
        location: '峴港國際機場 T2 國際航廈',
        description: '辦理出海關查驗、領取行李、開通 4G/5G 越南 SIM 卡或啟用 eSIM。走出航廈依 App 與現場指示前往叫車區（請以 Grab App 指定乘車點與車牌為準）。',
        category: 'transport',
        tags: ['出關', 'SIM卡', 'Grab叫車'],
        tips: '走出航廈請勿搭乘路邊隨意招攬的黑牌車，請以 Grab App 叫車並核對車牌，綁定信用卡免找零。',
        costEstimate: 'Grab 到半島飯店約 120,000~160,000 VND (約 NT$150~200，浮動計費)',
        openingHours: '航廈 24 小時營運',
        reservation: '出發前需於官方平台申請並列印越南電子簽證 (E-Visa)，備妥護照與憑證',
        restrictions: ['護照效期需滿 6 個月以上', '攜帶現金超過 5,000 美元或等值外幣需主動申報']
      },
      {
        time: '10:00 - 10:30',
        title: '前往「峴港半島飯店 (Peninsula Hotel)」寄放行李',
        location: '峴港半島飯店 (84 Võ Nguyên Giáp)',
        description: '沿著海岸公路抵達半島飯店，前台辦理預辦入住手續並先寄放大型行李，換上輕便透氣衣物與攜帶雨具。',
        category: 'relax',
        tags: ['飯店寄放', '海景第一排'],
        tips: '可向櫃台索取飯店名片（附越文地址），搭車回程時方便向司機出示。',
        openingHours: '櫃台 24 小時服務；標準入住時間 14:00 後、退房時間 12:00 前',
        reservation: '已完成住宿預訂 (出示訂房確認單與全體住客護照登記即可)',
        restrictions: ['全館客房室內全面禁菸', '戶外泳池具體開放時段、水深與兒童陪同規定請以飯店現場公告為準']
      },
      {
        time: '10:45 - 11:30',
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
        time: '11:45 - 12:30',
        title: '韓市場 (Chợ Hàn) & 周邊名店換匯',
        location: '119 Trần Phú (韓市場周邊金店)',
        description: '前往韓市場旁的知名銀樓（如 Kim Mỹ 等）以百元美金新鈔或台幣換取越南盾。隨後可逛韓市場一樓乾貨/腰果或二樓服飾區。',
        category: 'shopping',
        tags: ['換匯金店', '傳統市場', '伴手禮'],
        tips: '美金大面額（100 USD 乾淨無折痕）通常匯率較優；市場二樓衣物可禮貌議價。',
        weatherBackup: '韓市場為全室內市場，雨天亦非常適合採購。',
        openingHours: '韓市場約 06:00 - 19:00；周邊金店換匯約 07:30 - 19:00 (依各店家當日營業為準)',
        reservation: '無需預約',
        restrictions: ['【換匯注意】：金店通常偏好無折痕污損之美金百元新鈔', '市場人潮密集，請隨時注意背包與隨身財物防扒']
      },
      {
        time: '12:30 - 13:45',
        title: '午餐：在地風味「Bún Chả Cá 109」炸魚餅米線 或「Bánh Xèo Bà Dưỡng」',
        location: '109 Nguyễn Chí Thanh 或 K280/23 Hoàng Diệu',
        description: '品嚐峴港著名的炸魚餅米線，鮮魚熬煮高湯搭配九層塔；或是隱藏巷弄中的酥脆炸蛋皮越式煎餅包肉捲生菜。',
        category: 'food',
        tags: ['魚餅米線', '道地平民美食', '越式煎餅'],
        costEstimate: '每人約 40,000~80,000 VND (約 NT$50~100)',
        openingHours: 'Bún Chả Cá 109 約 06:00 - 22:00；Bánh Xèo Bà Dưỡng 約 09:30 - 21:30',
        reservation: '現場排隊入座 (翻桌速度快)',
        restrictions: ['在地傳統小吃店家多僅收現金 (VND)，建議自備小額鈔票']
      },
      {
        time: '14:00 - 15:00',
        title: '午後咖啡時光：Cộng Cà Phê 椰子冰沙咖啡',
        location: '98-96 Bạch Đằng (韓江畔)',
        description: '坐在韓江畔的復古主題咖啡館，來一杯招牌濃郁的椰子冰沙咖啡 (Cốt Dừa Cà Phê)，小憩放鬆。',
        category: 'food',
        tags: ['椰子咖啡', '文青復古', '韓江河畔'],
        costEstimate: '每杯約 55,000~65,000 VND (約 NT$70~80)',
        openingHours: '約 07:00 - 23:30 (每日營運)',
        reservation: '無需預約 (景觀座位客滿需稍候)',
        restrictions: ['室內全面禁菸', '支援現金及常見國際信用卡']
      },
      {
        time: '15:15 - 17:30',
        title: '回半島飯店辦理入住 ＆ 設施放鬆時光',
        location: '峴港半島飯店 (Peninsula Hotel)',
        description: '辦理房間入住進房休息，可使用飯店戶外泳池或設施放鬆，遠眺美溪海景。',
        category: 'relax',
        tags: ['半島飯店', '戶外泳池', '海景休息'],
        tips: '泳池使用規定、開放時段及兒童年齡限制請以飯店櫃台與現場公告為準。',
        openingHours: '入住時間 14:00 後；泳池開放時段依現場公告',
        reservation: '房客免費使用設施',
        restrictions: ['進入泳池請著正式泳裝，嚴禁穿著棉質外衣下水', '若遇雷雨或強風，戶外泳池將依安全考量暫停開放']
      },
      {
        time: '17:30 - 18:30',
        title: '美溪沙灘 (My Khe Beach) 傍晚漫步',
        location: '半島飯店正前方沙灘',
        description: '曾被部分國際旅遊媒體評選為知名美麗海灘，沙質細緻，可沿著海岸步道散步吹海風。',
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
        description: '美溪海岸知名平民海鮮大排檔，現場挑選生猛大頭蝦、花蟹、烤扇貝、烤生蠔、清蒸花蛤等。',
        category: 'food',
        tags: ['活海鮮大排檔', '現烤海鮮', '秤重注意'],
        tips: '點海鮮時請店員當場瀝乾水份秤重並確認「每公斤單價 (Kg)」，避免計價爭議。',
        costEstimate: '每人約 350,000~500,000 VND (約 NT$450~650，視點選海鮮品項而定)',
        openingHours: '約 09:00 - 23:00 (晚餐尖峰約 18:30 - 20:00)',
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
        openingHours: '山茶夜市約 18:00 - 23:30 (每日營運)',
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
    subtitle: '漫步山城、世界級長途登山纜車、巨型佛手金橋與歐風建築群',
    highlights: ['黃金佛手橋 (Golden Bridge)', '太陽世界纜車系統', '法國村 (French Village)', 'Fantasy Park 室內娛樂區', '越式草本 SPA'],
    meals: {
      breakfast: '半島飯店海景自助早餐',
      lunch: '巴拿山園區餐廳或自助百匯 (如 Arapang / Beer Plaza 自助餐)',
      dinner: 'Pizza 4P’s (手工起司披薩) 或 Madame Hạnh (越式庭園料理)',
      snackOrCafe: '巴拿山烘焙小點 / 咖啡'
    },
    transportation: '預約往返包車（半島飯店往返巴拿山，單程約 45~60 分鐘，含司機等候約 8 小時約 650,000~850,000 VND）',
    weatherAdvice: '巴拿山海拔高達 1,487 公尺，山頂氣溫較平地低約 5~8°C，且 10 月極易起濃霧或持續降雨。出發前請確認天候與即時監視器，務必備妥防風保暖薄外套、輕便雨衣及防滑鞋。',
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
        restrictions: ['包車若超時通常另加收約 100,000 VND / 小時', '山區多雨路滑，請穿著舒適防滑運動鞋並攜帶雨具']
      },
      {
        time: '08:45 - 09:15',
        title: '搭乘太陽世界登山纜車直登雲霄',
        location: 'Ba Na Hills 纜車站',
        description: '搭乘世界著名的單線長途登山纜車，沿途俯瞰熱帶森林與山谷飛瀑，直達山腰黃金橋區域。',
        category: 'sightseeing',
        tags: ['世界級纜車', '山景俯瞰'],
        costEstimate: '成人通票約 900,000~950,000 VND (若含自助午餐套票約 1,250,000~1,350,000 VND，依官方最新牌價為準)',
        openingHours: '園區與纜車日常營運約 08:00 - 17:00 (部分設施與夜間場次依當季官方營運時刻表調整)',
        reservation: '【建議預購】：可提早透過線上平台或官網預訂電子憑證，省去現場售票處排隊時間',
        restrictions: ['巴拿山嚴禁攜帶外食熟食與未密封餐盒入園 (個人水瓶通常除外)', '耳壓敏感者搭乘纜車時可適度吞嚥緩解']
      },
      {
        time: '09:15 - 10:30',
        title: '經典地標：黃金佛手橋 (Golden Bridge) ＆ 愛情花園',
        location: '巴拿山黃金佛手橋',
        description: '巨大石雕佛手自山壁伸出托起金色橋身。在雲霧繚繞間漫步，隨後順道遊覽 Le Jardin D’Amour 花園與百年 Debay 酒窖。',
        category: 'sightseeing',
        tags: ['佛手金橋', '空中步道', '地標必拍'],
        tips: '早晨人潮通常相對較少；10 月山頂若遇大霧或雨天能見度較低，可放慢腳步注意地面濕滑。',
        openingHours: '依園區纜車運作時間開放 (日間 08:00 - 17:00)',
        reservation: '持巴拿山入園門票即可通行',
        restrictions: ['橋上嚴禁攀爬跨越護欄', '橋面禁止使用未經官方申請核准之空拍機/無人機']
      },
      {
        time: '10:45 - 12:30',
        title: '轉乘月亮城堡列車 ＆ 法國村 (French Village) 漫步',
        location: '巴拿山山頂法國村與月亮城堡',
        description: '搭乘齒軌小火車前往月亮城堡體驗影院設施；或漫步於以歐風石磚教堂、噴泉廣場與街頭造景構成的法國村街道。',
        category: 'sightseeing',
        tags: ['歐風建築', '月亮城堡', '街頭景觀'],
        openingHours: '設施開放時間約 08:30 - 17:00 (各展館及演出時間依現場公告)',
        reservation: '常規景點與影院包含於通用門票內',
        restrictions: ['山頂石板路雨天易滑，請避免穿著高跟鞋或光滑平底拖鞋']
      },
      {
        time: '12:30 - 13:45',
        title: '午餐：巴拿山百匯自助餐 (Arapang 或 Beer Plaza) 或園區餐廳',
        location: '巴拿山園區餐廳區',
        description: '在山頂餐廳享用包含越式熟食、烤肉、沙拉與多國風味的百匯自助午餐或定食。',
        category: 'food',
        tags: ['園區Buffet', '多國百匯', '山頂用餐'],
        openingHours: '自助餐供餐時段通常為 11:00 - 15:00',
        reservation: '若購買含 Buffet 套票，持憑證於餐廳核銷即可；亦可現場購票入座',
        restrictions: ['自助餐禁止將餐點外帶打包', '用餐尖峰時段請依動線排隊取餐']
      },
      {
        time: '14:00 - 15:30',
        title: '室內娛樂：Fantasy Park 娛樂區 ＆ 軌道滑車',
        location: '巴拿山 Fantasy Park',
        description: '若遇山區下雨，可轉往多樓層的室內遊樂園 Fantasy Park 體驗室內遊樂設施；天候良好時可排隊體驗高山軌道滑車 (Alpine Coaster)。',
        category: 'relax',
        tags: ['室內樂園', '雨天備案', '軌道滑車'],
        weatherBackup: 'Fantasy Park 全區為室內空間，即使戶外暴雨亦可正常遊玩各項機動遊戲。',
        openingHours: 'Fantasy Park 約 08:30 - 17:00；戶外軌道滑車如遇大雨雷擊將暫停營運',
        reservation: '多數室內一般設施含於通用門票 (少數特定投幣機台/蠟像館需另計費)',
        restrictions: ['高山滑車設有身高限制（未滿標準需成人陪同）與安全乘載規範', '搭乘滑車請遵照工作人員指示維持安全車距']
      },
      {
        time: '16:00 - 17:30',
        title: '搭乘纜車下山 ＆ 專車返回市區飯店',
        location: '巴拿山 ➔ 半島飯店',
        description: '搭乘纜車返回山腳，包車司機於約定停車場接駁返回半島飯店洗沐更衣。',
        category: 'transport',
        tags: ['專車回程', '梳洗休息'],
        openingHours: '巴拿山日間常規下山纜車約至 17:00 (請留意末班車通知)',
        reservation: '已與包車司機約定下午時段於停車場等候',
        restrictions: ['請務必於 16:30 前往纜車站，避免遇排隊下山人潮延誤時間']
      },
      {
        time: '18:00 - 19:30',
        title: '舒壓放鬆：越式草本 SPA 按摩體驗 (如 Herbal Spa 等)',
        location: '美溪沙灘周邊優質 SPA 館',
        description: '行程走累後，安排 60~90 分鐘越式草本精油或熱石全身按摩，舒緩雙腿與背部疲勞。',
        category: 'relax',
        tags: ['越式SPA', '草本精油', '舒緩放鬆'],
        tips: '熱門 SPA 店家傍晚時段經常客滿，建議提早 1~2 天在線上或透過官方社群預約。',
        costEstimate: '60~90 分鐘按摩約 400,000~650,000 VND (約 NT$500~800)',
        openingHours: '多數店家約 09:00 - 22:30',
        reservation: '【建議預約】：傍晚尖峰時段建議出發前於官方管道線上預約',
        restrictions: ['身體有特殊狀況、懷孕或手術史請於填表時如實告知芳療師', '按摩前請避免過量飲食']
      },
      {
        time: '19:45 - 21:15',
        title: '晚餐：超人氣「Pizza 4P’s」手工布拉塔起司披薩 或「Madame Hạnh」庭園越菜',
        location: 'Pizza 4P’s (Hoàng Văn Thụ / Indochina) 或 Madame Hạnh',
        description: '品嚐知名連鎖披薩店 Pizza 4P’s 的自製新鮮布拉塔起司 (Burrata) 披薩與蟹肉義大利麵；或選擇精緻越式庭園料理。',
        category: 'food',
        tags: ['人氣披薩', '布拉塔起司', '精緻越菜'],
        costEstimate: '每人約 250,000~450,000 VND (約 NT$310~560)',
        openingHours: 'Pizza 4P’s 約 10:00 - 22:30；Madame Hạnh 約 10:00 - 22:00',
        reservation: '【強烈建議預訂】：Pizza 4P’s 晚間極受歡迎，建議出發前透過官網或 Google 線上訂位',
        restrictions: ['預約座位通常保留 15 分鐘，請準時抵達', '支援信用卡及電子支付']
      },
      {
        time: '21:30 - 22:30',
        title: '夜生活：韓江景觀酒吧 (如 Brilliant Top Bar) 眺望夜色',
        location: '韓江周邊高空景觀酒吧',
        description: '在頂樓酒吧點杯飲品，欣賞韓江橋樑夜景與市區燈火。',
        category: 'nightlife',
        tags: ['韓江夜景', '頂樓酒吧', '微醺時光'],
        costEstimate: '飲品每杯約 120,000~220,000 VND (約 NT$150~275)',
        openingHours: '多數營業至 23:00~24:00 (各店不同)',
        reservation: '普通散客多可現場入座，若需指定特定臨江第一排座位可提前詢問',
        restrictions: ['各酒吧可能設有基本著裝禮儀規範 (如禁止過度邋遢穿著)', '未成年人請勿飲酒']
      }
    ]
  },
  {
    dayNumber: 3,
    date: '2026/10/03',
    weekday: '星期六',
    title: '五行山探秘 ➔ 迦南島竹籃船 ➔ 會安古鎮浪漫燈籠夜遊',
    subtitle: '喀斯特大理石洞穴、水椰林竹籃船、世界文化遺產會安老街與秋盆河夜色',
    highlights: ['五行山水山玄空洞', '迦南島水椰林竹籃船', '會安古鎮法式黃牆老宅', 'Faifo Coffee 屋頂景觀', '秋盆河遊船與夜市燈籠'],
    meals: {
      breakfast: '半島飯店活力自助早餐',
      lunch: '會安高樓麵 (Cao Lầu) 與 白玫瑰 / 炸雲吞 (如 Morning Glory 或 Miss Ly)',
      dinner: 'Bale Well (炭烤豬肉串生菜春捲) 或 燈籠水岸景觀餐廳',
      snackOrCafe: 'Faifo Coffee (古鎮屋頂景觀) 或 Mót Hội An (招牌草本茶飲)'
    },
    transportation: '預約峴港往返會安一日包車（涵蓋五行山、迦南島水椰林與會安古鎮外圍，全程約 8~10 小時，費用約 700,000~950,000 VND）',
    weatherAdvice: '五行山階梯雨後濕滑，請著防滑平底鞋；下午迦南島竹籃船如遇陣雨會提供雨具；10 月會安古鎮臨秋盆河低窪區域偶有潮汛積水風險，請留意當日排水與天候公告。',
    activities: [
      {
        time: '08:30 - 09:15',
        title: '專車出發前往「五行山 (Marble Mountains)」',
        location: '52 Huyền Trân Công Chúa, Ngũ Hành Sơn',
        description: '由五座大理石與石灰岩山峰組成，主要參觀規模最完整的「水山 (Thủy Sơn)」。',
        category: 'sightseeing',
        tags: ['大理石山', '天然洞穴', '佛教聖地'],
        tips: '可選擇搭乘單程景觀電梯上山以節省體力，電梯單程約 15,000 VND。',
        costEstimate: '門票約 40,000 VND + 單程電梯 15,000 VND (約 NT$70，依現場售票為準)',
        openingHours: '景區開放約 07:00 - 17:30 (登山電梯營運至 17:00)',
        reservation: '現場購票即可 (可於入口購買門票與電梯票)',
        restrictions: ['【防滑注意】：洞穴與山頂階梯經年潮濕濕滑，嚴禁穿著高跟鞋或光滑拖鞋，務必穿著抓地力佳之防滑鞋', '洞內部分石階陡峭，年長者或行動不便者建議視體力折返']
      },
      {
        time: '09:15 - 10:45',
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
        time: '11:15 - 12:30',
        title: '午餐：會安經典風味「高樓麵、白玫瑰、炸餛飩」',
        location: '會安古鎮餐廳 (如 Morning Glory Original 或 Miss Ly 等)',
        description: '品嚐會安代表性的高樓麵 (Cao Lầu)、透亮米皮的白玫瑰 (Bánh Bao Bánh Vạc) 與越式炸餛飩。',
        category: 'food',
        tags: ['會安風味', '高樓麵', '白玫瑰'],
        costEstimate: '每人約 150,000~250,000 VND (約 NT$190~310)',
        openingHours: '約 10:00 - 22:00 (依各店家當日營業為準)',
        reservation: '現場入座或可視店家狀況提前預約',
        restrictions: ['古鎮老宅內全面禁菸', '多數支援現金與主流信用卡']
      },
      {
        time: '13:00 - 14:45',
        title: '迦南島 (Cam Thanh Coconut Village) 水椰林竹籃船體驗',
        location: '迦南島水椰林 (Cam Thanh, Hoi An)',
        description: '搭乘傳統圓形竹編桶船（竹籃船）穿行於熱帶水椰林水道中，觀賞船夫旋轉特技與水上民謠表演，亦可體驗持桿垂釣小螃蟹。',
        category: 'sightseeing',
        tags: ['竹籃船', '水椰林', '水上體驗'],
        tips: '若不習慣劇烈晃動，上船時可主動向船夫示意「不旋轉 (No Spin/Nhẹ thôi)」。',
        costEstimate: '竹籃船體驗約 120,000~150,000 VND (約 NT$150~190，可透過包車或線上平台代訂)',
        openingHours: '日間營運約 07:30 - 17:30 (每趟航程約 40~50 分鐘)',
        reservation: '【建議預約】：建議透過包車司機代訂或由正規平台預購，避免現場遭非正規業者喊價',
        restrictions: ['【乘船安全】：搭乘竹籃船必須全程正確穿著救生衣', '長輩、幼童或易暈船者請主動告知船夫不要高速旋轉；表演小費隨喜 (通常約 20,000~50,000 VND)']
      },
      {
        time: '15:15 - 17:30',
        title: '會安古鎮 (Hoi An Ancient Town) 老街漫步 ＆ Faifo Coffee 屋頂景觀',
        location: '會安古鎮核心區 (Phố cổ Hội An)',
        description: '漫步於保存完好的歷史街道，外觀或入內參觀日本橋 (Chùa Cầu / 來遠橋)、福建會館與古宅宗祠。至知名咖啡館 Faifo Coffee 頂樓露台俯瞰古城瓦頂風情。',
        category: 'sightseeing',
        tags: ['世界遺產', '古鎮老街', '景觀咖啡', '文化會館'],
        tips: '進入古鎮街區漫步免費；若欲入內參觀指定古宅、會館或博物館，請依官方規定購買「會安古鎮參觀套票 (Entrance Ticket)」。',
        openingHours: '古街區全天開放；售票古蹟展館約 07:30 - 17:30；Faifo Coffee 約 07:00 - 21:30',
        reservation: '無需預約；參觀指定歷史古蹟館舍可於入口售票處購買古鎮套票 (約 120,000~150,000 VND/張，含指定景點格數)',
        restrictions: ['【步行街管制】：每日特定時段（通常為 15:00 - 21:30）古鎮核心區限制機動車輛進入', '進入宗祠與會館請著合宜服裝，請勿過度暴露']
      },
      {
        time: '17:30 - 18:30',
        title: '晚餐：道地特色小吃「Bale Well」炭烤肉串生菜春捲 或 燈籠水岸餐廳',
        location: 'Bale Well (45/51 Trần Hưng Đạo) 或 沿河景觀餐廳',
        description: '品嚐現烤炭火豬肉串、炸春捲搭配大量生菜與特調花生沾醬；或於河畔餐廳一邊用餐一邊欣賞初上的華燈。',
        category: 'food',
        tags: ['炭烤肉串', '生菜春捲', '水岸景觀'],
        costEstimate: '每人約 150,000~250,000 VND (約 NT$190~310)',
        openingHours: '約 10:00 - 22:00 (依店家營業為準)',
        reservation: '傳統街巷小店現場入座；景觀餐廳可視需要提前預訂',
        restrictions: ['傳統小吃店多數僅收現金 (VND)']
      },
      {
        time: '18:45 - 20:15',
        title: '秋盆河乘船放水燈體驗 ＆ 燈籠夜市漫步',
        location: '秋盆河畔 (Sông Hoài) 與 阮黃夜市 (Nguyễn Hoàng)',
        description: '入夜後古鎮各色絲綢燈籠亮起，可於碼頭搭乘木船於秋盆河施放紙水燈祈福，隨後逛逛燈籠夜市與手工藝攤位。',
        category: 'nightlife',
        tags: ['秋盆河遊船', '放水燈', '燈籠夜市'],
        tips: '遊船請至官方公告之正規售票點購票（公定價約 150,000~200,000 VND/艘，含水燈），上船前確認穿好救生衣。',
        openingHours: '遊船約 17:30 - 21:30；夜市約 18:00 - 22:00',
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
    title: '山茶半島巨型觀音 ➔ 美溪沙灘漫步休閒 ➔ 越式咖啡文化 ➔ 龍橋週末噴火噴水秀',
    subtitle: '山海靈應寺、濱海慢活、精品咖啡品鑑、週日夜間龍橋特色噴火秀',
    highlights: ['山茶半島靈應寺 (67米觀音立像)', '美溪沙灘海岸漫步', '越式精品與滴漏咖啡體驗', '週日晚間 21:00 龍橋噴火噴水秀 (以官方最新公告為準)'],
    meals: {
      breakfast: '半島飯店海景早餐',
      lunch: 'Phở Bắc 63 (北越清燉牛肉河粉) 或 LUK LAK (精緻越式料理)',
      dinner: 'Thia Go Restaurant Danang (全越經典菜) 或 韓江水岸景觀餐廳',
      snackOrCafe: '43 Factory Coffee Roaster (精品單品咖啡) 或 The Hideout Cafe'
    },
    transportation: '山茶半島可透過 Grab 或半日包車（車程約 15~20 分鐘）；市區移動使用 Grab App 叫車方便靈活。',
    weatherAdvice: '山茶半島晨間視野較佳，可遠眺峴港灣弧線；午後如遇降雨，可轉往市區精品咖啡館、商場或享受飯店室內設施。',
    activities: [
      {
        time: '09:00 - 11:00',
        title: '山茶半島靈應寺 (Chùa Linh Ứng - Sơn Trà) ＆ 俯瞰峴港灣',
        location: 'Bãi Bụt, Bán Đảo Sơn Trà (距離半島飯店約 10~15 分鐘車程)',
        description: '造訪建於山海之巔的靈應寺，瞻仰高達 67 公尺的白玉觀音立像，面向大海庇佑漁民。從寺廟前庭廣闊平台可俯瞰美溪沙灘月牙形弧線與市區天際線。',
        category: 'sightseeing',
        tags: ['白玉觀音', '山海地標', '靈應寺'],
        tips: '靈應寺免收門票；山區周圍可能偶有野生猴群，請勿餵食或手提塑膠袋，避免猴群爭搶。',
        openingHours: '開放時間約 06:00 - 18:00 (免費參觀)',
        reservation: '無需預約',
        restrictions: [
          '【穿著規定】：進入正殿請穿著過膝下著與有袖上衣，嚴禁過度暴露；殿內請脫帽脫鞋以示莊重',
          '【野生動物注意】：野生猴群具野性與搶食本能，請妥善收好隨身物品與塑膠袋，禁止餵食觸摸'
        ]
      },
      {
        time: '11:30 - 13:00',
        title: '午餐：經典牛肉河粉「Phở Bắc 63」或「LUK LAK」越式料理',
        location: '203 Đống Đa 或 28 Nguyễn Du',
        description: '品嚐慢熬牛骨清湯的鮮嫩牛肉河粉；或是前往法越風情餐廳品嚐烤鴨胸、香茅烤肉等精緻料理。',
        category: 'food',
        tags: ['牛肉河粉', '道地小吃', '精緻越菜'],
        costEstimate: '每人約 60,000~200,000 VND (約 NT$75~250)',
        openingHours: 'Phở Bắc 63 約 06:00 - 21:00；LUK LAK 約 10:30 - 22:00',
        reservation: 'Phở Bắc 63 現場入座；LUK LAK 週末中午建議提早預約',
        restrictions: ['街邊傳統小吃多僅收現金，生辣椒醬與九層塔可依個人喜好調味']
      },
      {
        time: '13:30 - 15:30',
        title: '午後放鬆：半島飯店休息 ＆ 美溪海岸漫步',
        location: '半島飯店 ＆ 美溪沙灘沿線',
        description: '午後回到飯店休息，在海景客房放鬆或於戶外沙灘步道漫步，享受海風與熱帶海岸風光。',
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
        location: '422 Ngô Thì Sĩ, Mỹ An',
        description: '前往通透玻璃水池造景的精品咖啡館 43 Factory，品嚐產區單品手沖咖啡，感受中越當代精品咖啡浪潮。',
        category: 'food',
        tags: ['精品咖啡', '手沖體驗', '文青建築'],
        costEstimate: '每杯約 90,000~150,000 VND (約 NT$110~190)',
        openingHours: '約 06:30 - 22:30',
        reservation: '現場入座 (景觀座位採先到先得)',
        restrictions: ['室內全面禁菸', '水池造景請注意腳步']
      },
      {
        time: '18:00 - 20:00',
        title: '晚餐：道地全越風味「Thia Go Restaurant」或 韓江畔私房料理',
        location: '53 Phan Thúc Duyện 或 韓江水岸周邊',
        description: '在溫馨明亮的餐廳享用順化牛肉米線、生春捲、薑蔥炒海瓜子與越式烤肉拼盤。',
        category: 'food',
        tags: ['精緻越菜', '生春捲', '清爽料理'],
        costEstimate: '每人約 150,000~250,000 VND (約 NT$190~310)',
        openingHours: '約 10:00 - 22:00',
        reservation: '建議提早 1 天預訂晚餐時段',
        restrictions: ['支援現金與常見信用卡支付']
      },
      {
        time: '20:30 - 21:45',
        title: '週日限定！龍橋 (Dragon Bridge) 噴火噴水演出 ＆ 韓江漫步',
        location: '龍橋 (Cầu Rồng) 龍頭東側廣場',
        description: '逢週五、週六、週日晚間 21:00 登場的特色演出，金色鋼龍連續噴出烈火與水柱，現場氣氛熱烈（特殊節慶演出時刻請以市府最新公告為準）。',
        category: 'nightlife',
        tags: ['週末限定', '21點演出', '龍橋地標'],
        tips: '【觀賞叮嚀】：噴水環節下風處水霧較大，手機與電子產品請注意防潑水；演出期間龍橋周邊路段實施交管，建議提早步行就位。',
        openingHours: '表演通常於 21:00 準時開始 (約 15 分鐘)',
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
    title: '順化世界文化遺產一日遊 (海雲嶺 ➔ 順化皇城 ➔ 啟定皇陵) ➔ 樂天超市採買',
    subtitle: '穿越海雲關隘山海景致、探訪阮朝古都皇城紫禁城、採買在地特產伴手禮',
    highlights: ['海雲關 (Hai Van Pass)', '順化皇城 (The Citadel / 阮朝大內)', '啟定皇陵 (Ứng Lăng / 陶瓷馬賽克)', '順化牛肉粉發源地', '樂天超市 (Lotte Mart) 大採買'],
    meals: {
      breakfast: '半島飯店豐富早餐',
      lunch: '順化正宗 Bún Bò Huế (如 Quán Bà Tuyết) 或 順化宮廷料理',
      dinner: 'Fatfish Restaurant (韓江畔創意料理) 或 峴港道地海鮮餐廳',
      snackOrCafe: '順化傳統鹽咖啡 (Cà Phê Muối / 順化發源地)'
    },
    transportation: '預約峴港往返順化全日包車（全程約 10~11 小時，單程車程約 2~2.5 小時，費用約 1,200,000~1,500,000 VND / 車）',
    weatherAdvice: '順化與海雲嶺 10 月多雨且山頂易有大霧，路面濕滑。若遇豪雨警報或海雲嶺能見度不佳，包車可改走海雲隧道以確保行車安全。',
    activities: [
      {
        time: '08:00 - 09:30',
        title: '專車啟程 ＆ 經海雲嶺山路 (Hai Van Pass) 遠眺靈姑灣',
        location: '海雲嶺山頂關隘 (Đèo Hải Vân)',
        description: '行經被旅遊雜誌譽為壯麗公路的海雲嶺，於制高點古碉堡短暫停留，俯瞰靈姑灣山海景色。若遇天候不佳或濃霧，司機將直接行駛快速海雲隧道。',
        category: 'sightseeing',
        tags: ['海雲嶺', '山海景致', '古關隘'],
        tips: '山路彎道較多，容易暈車者建議於出發前半小時服用暈車藥。',
        openingHours: '公路全天開放',
        reservation: '順化一日包車建議出發前 1~2 天確認預約',
        restrictions: ['山頂石階路面濕滑，請踩穩腳步注意安全', '天候惡劣時遵從司機安全建議改走隧道']
      },
      {
        time: '10:30 - 12:30',
        title: '順化皇城 (The Citadel / 順化大內紫禁城) 參觀',
        location: 'Thành phố Huế, Thừa Thiên Huế',
        description: '越南阮朝（1802-1945）的皇宮與都城，列入 UNESCO 世界文化遺產。參觀午門、太和殿、世廟、九鼎與宮殿遺構，了解越南末代王朝興衰。',
        category: 'sightseeing',
        tags: ['世界文化遺產', '阮朝皇城', '歷史古蹟'],
        costEstimate: '門票約 200,000 VND (約 NT$250，可與皇陵購買聯票)',
        openingHours: '約 07:30 - 17:30 (最後售票約 17:00)',
        reservation: '現場售票亭購票即可 (可買皇城+啟定陵優惠聯票)',
        restrictions: [
          '【古蹟禮儀與服裝規範】：進入供奉阮朝帝王之世廟及殿堂內部嚴禁著過度暴露之無袖背心或短褲短裙，嚴禁戴帽戴墨鏡',
          '宮殿室內文物禁止觸摸，園區禁止未經許可之空拍機'
        ]
      },
      {
        time: '12:30 - 13:45',
        title: '午餐：順化正宗「順化牛肉粉 (Bún Bò Huế)」＆ 順化鹽咖啡 (Cà Phê Muối)',
        location: 'Quán Bà Tuyết (47 Nguyễn Công Trứ) ＆ 順化鹽咖啡店',
        description: '品嚐順化當地的香茅辣味牛肉米線與滷牛腱，餐後品嚐順化著名的「鹽咖啡」，感受微鹹奶蓋與滴漏黑咖啡的獨特融合。',
        category: 'food',
        tags: ['順化牛肉粉', '鹽咖啡', '在地名吃'],
        costEstimate: '每人約 60,000~100,000 VND (約 NT$75~125)',
        openingHours: '約 06:30 - 21:00 (依店家營業為準)',
        reservation: '現場入座即可',
        restrictions: ['在地平價小吃店多僅收現金，湯頭微辣，不嗜辣者可告知少放辣油']
      },
      {
        time: '14:00 - 15:30',
        title: '啟定皇陵 (Ứng Lăng / Khải Định Tomb) 陶瓷馬賽克藝術',
        location: 'Châu Chữ, Hương Thủy, Thừa Thiên Huế',
        description: '順化風格極具特色之阮朝皇陵，依山而建，內部主殿啟成殿以彩色陶瓷碎琉璃拼貼出極為華麗精緻的壁畫與浮雕，呈現中西合璧之建築美學。',
        category: 'sightseeing',
        tags: ['陶瓷馬賽克', '啟定陵', '世界文化遺產'],
        costEstimate: '門票約 150,000 VND (約 NT$190)',
        openingHours: '約 07:30 - 17:30',
        reservation: '持順化聯票或現場購票即可',
        restrictions: [
          '【石階坡度】：進入皇陵需攀登約 127 級較陡石階，雨天請握好扶手慢行',
          '殿內禁止吸菸與飲食，請愛護文物'
        ]
      },
      {
        time: '15:30 - 17:30',
        title: '專車行駛海雲隧道返回峴港市區',
        location: '順化 ➔ 峴港',
        description: '回程專車行經海雲隧道返回峴港，車程約 1.5~2 小時，可在車上休息放鬆。',
        category: 'transport',
        tags: ['隧道專車回程'],
        openingHours: '海雲隧道全天通車',
        reservation: '全日包車服務範圍內',
        restrictions: ['若遇天雨路滑或市區下班尖峰，行車時間可能略有延長']
      },
      {
        time: '17:45 - 19:30',
        title: '樂天超市 (Lotte Mart Da Nang) 特產伴手禮採買',
        location: '6 Nại Nam, Hoà Cường Bắc, Hải Châu',
        description: '至大型量販超市採購越南知名伴手禮：帶皮鹽焗腰果、G7 / 中原傳奇咖啡、椰子咖啡、果乾、河粉調理包等，明碼標價並提供紙箱封箱服務。',
        category: 'shopping',
        tags: ['伴手禮採買', '腰果咖啡', '超市封箱'],
        tips: '超市設有打包台供旅客免費使用紙箱與膠帶，方便託運打包。',
        openingHours: '約 08:00 - 22:00 (每日營業)',
        reservation: '無需預約',
        restrictions: [
          '超市提供紙箱與膠帶供旅客自助手打包（可作託運行李使用）',
          '【入境台灣檢疫重罰規範】：嚴禁購買並攜帶任何肉製品（包含生熟豬肉、肉乾、含肉塊泡麵、肉鬆等）入境台灣，違者依防檢法最重可處新台幣 20 萬至 100 萬元罰鍰！'
        ]
      },
      {
        time: '19:45 - 21:30',
        title: '旅程晚宴：Fatfish Restaurant 韓江景觀創意料理 或 經典海鮮',
        location: '439 Trần Hưng Đạo (韓江畔)',
        description: '在行程最後一晚於韓江畔享用精緻海陸料理、精釀飲品，欣賞七彩韓江橋景，回顧中越旅程。',
        category: 'food',
        tags: ['韓江夜景', '精緻晚宴', '放鬆慶祝'],
        costEstimate: '每人約 350,000~550,000 VND (約 NT$440~690)',
        openingHours: '約 11:00 - 14:00、17:00 - 22:00',
        reservation: '【建議預約】：臨江座位建議提早 1~2 天線上或電話預訂',
        restrictions: ['部分精緻餐廳可能酌收服務費與稅金', '支援主流國際信用卡']
      }
    ]
  },
  {
    dayNumber: 6,
    date: '2026/10/06',
    weekday: '星期二',
    title: '半島飯店慢活 ➔ 占婆雕刻博物館 ➔ 告別美食烤肉米線 ➔ 機場返台',
    subtitle: '海景巡禮、古老占婆文明、品嚐經典炭火烤肉米線、搭機平安返國',
    highlights: ['半島飯店海景早餐', '占婆雕刻博物館 (千年砂岩石雕)', 'Bún Chả 越式炭烤肉米線', '預留雨天塞車緩衝 14:00~14:30 飯店出發 ➔ 17:30 起飛'],
    meals: {
      breakfast: '半島飯店海景告別早餐',
      lunch: 'Bún Chả Hà Nội 59 (炭火烤肉米線) 或 Bếp Cuốn (全越特色春捲料理)',
      dinner: '機上餐點 / 機場免稅店輕食',
      snackOrCafe: 'The Cups Coffee 或 韓江畔外帶咖啡'
    },
    transportation: '市區景點以 Grab 叫車；午後 14:00~14:30 返回半島飯店提領行李後搭 Grab 前往機場 (預留雨季尖峰塞車緩衝)',
    weatherAdvice: '收官日安排市區室內博物館與精緻餐飲；因 10 月多雨且市區午後可能塞車積水，務必提早出發前往機場。',
    activities: [
      {
        time: '08:30 - 10:30',
        title: '飯店晨光早餐 ＆ 整理行李收拾行囊',
        location: '峴港半島飯店 (Peninsula Hotel)',
        description: '悠閒享用飯店自助早餐，欣賞最後的美溪海岸風光，回房打包行李並核對護照與隨身重要物品。',
        category: 'relax',
        tags: ['海景早餐', '打包行李', '退房準備'],
        openingHours: '早餐時段約 06:30 - 10:00',
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
        description: '建於 1915 年的法式建築博物館，典藏世界最豐富完整的古占婆王國（4-13 世紀）砂岩石雕與赤陶文物，包括濕婆神、舞王、梵天與神鳥雕像。',
        category: 'sightseeing',
        tags: ['占婆博物館', '歷史文物', '法式建築'],
        costEstimate: '門票約 60,000 VND (約 NT$75)',
        openingHours: '約 07:30 - 17:00 (最後售票 16:30)',
        reservation: '現場售票處購票即可',
        restrictions: [
          '【文物保護規範】：石雕文物嚴禁觸摸或攀爬倚靠',
          '館內展區嚴禁使用相機閃光燈，大型背包需依規定寄存於入口處'
        ]
      },
      {
        time: '12:45 - 14:00',
        title: '午餐：經典告別風味「Bún Chả 越式炭火烤肉米線」或「Bếp Cuốn」',
        location: 'Bún Chả Hà Nội 59 (59 Nguyễn Chí Thanh) 或 54 Nguyễn Văn Thoại',
        description: '炭火現烤焦香的豬肉肉丸與五花肉片，浸泡在酸甜魚露高湯中，搭配生菜、香草與米線品嚐，層次分明；或至 Bếp Cuốn 品嚐全越特色春捲拼盤。',
        category: 'food',
        tags: ['炭火烤肉米線', '生菜香草', '經典風味'],
        costEstimate: '每人約 60,000~120,000 VND (約 NT$75~150)',
        openingHours: '約 09:30 - 21:00 (依店家營業為準)',
        reservation: '小吃名店現場入座',
        restrictions: ['傳統小店多僅收現金']
      },
      {
        time: '14:15 - 14:45',
        title: '返回半島飯店提領行李 ＆ 預約 Grab 出發前往機場',
        location: '半島飯店大廳 ➔ 峴港國際機場 (DAD)',
        description: '回飯店大廳憑牌提領行李，使用 Grab App 叫車前往機場 T2 國際航廈。考量 10 月雨季可能遇降雨及塞車，提早於 14:30 左右啟程最為保險。',
        category: 'transport',
        tags: ['提領行李', '機場專車', '預留塞車緩衝'],
        openingHours: 'Grab 全天可叫車 (車程約 20~30 分鐘，雨天可能延長)',
        reservation: '無需預約 (透過 App 即時叫車)',
        restrictions: ['再次清點確認隨身護照、錢包、手機與重要證件是否齊全']
      },
      {
        time: '15:00 - 17:30',
        title: '抵達機場 ➔ 辦理報到、行李托運與通關 ➔ 17:30 搭機起飛返台',
        location: '峴港國際機場 (DAD) 國際航廈 T2',
        description: '於起飛前 2.5 小時抵達國際航廈，辦理登機手續、托運行李與出境安檢，依序登機並於 17:30 起飛返台。',
        category: 'transport',
        tags: ['國際航班', '海關通關', '平安返台'],
        tips: '峴港機場安檢與海關排隊時間受同時段國際航班數量影響，預留 2.5 小時最為從容。',
        openingHours: '機場 24 小時營運 (航班起飛前約 2.5~3 小時開櫃報到)',
        reservation: '出發前可利用航空公司官網/App 完成線上預辦登機',
        restrictions: [
          '【入境台灣動植物檢疫重罰禁令】：嚴禁攜帶任何肉製品（生熟豬肉、肉乾、含肉泡麵、肉鬆等）入境台灣，違者依《動物傳染病防治條例》處以 20 萬元至 100 萬元罰鍰！',
          '行動電源與鋰電池必須隨身攜帶，嚴禁放入託運行李；手提液體單瓶不得超過 100ml'
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
    category: '10 月中越雨季實況與彈性對策',
    icon: 'CloudRain',
    tips: [
      '【真實雨季特性】：10 月是峴港、會安與中越全年的主要雨季與降雨高峰期，可能出現持續性陰雨、大雨甚至受外圍熱帶擾動/颱風影響，切勿預設「早晨必定放晴」或「僅為午後短暫陣雨」。',
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
      '【換匯技巧】：攜帶 2006 年後發行、無折痕無破損的「100 美元新版大鈔」至韓市場周圍正規合法銀樓兌換，匯率通常最優。',
      '【面額防混淆】：越盾面額 0 較多，注意藍綠色的「500,000」與「20,000」容易混淆；「100,000」為綠色。找零時請數清零的位數。',
      '【人潮防扒防搶】：在夜市、古鎮老街與龍橋散場等人潮密集處，背包前背，在路邊拍照時握穩手機，避免飛車奪物。'
    ]
  },
  {
    category: '返台檢疫重大法規警示',
    icon: 'ShieldCheck',
    tips: [
      '【肉品嚴禁入境台灣】：為防範非洲豬瘟等重大疫病，嚴禁攜帶任何肉製品（包含生熟豬肉、牛肉乾、肉鬆、含肉塊之即食泡麵等）入境台灣！',
      '【違規重罰】：違規攜帶未申報經海關查獲者，初犯即處新台幣 20 萬元罰鍰，最高可處 100 萬元！在當地超市採買時請仔細確認成分標示。'
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

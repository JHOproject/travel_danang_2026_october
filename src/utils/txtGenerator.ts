import { 
  TRIP_INFO, 
  MAIN_ITINERARY, 
  ALTERNATIVE_STYLES, 
  BUDGET_TIERS, 
  SAFETY_WEATHER_TIPS, 
  RESTAURANT_RECOMMENDATIONS,
  WEATHER_MODULES,
  TWO_LEVEL_RAIN_GUIDE
} from '../data/itineraryData';

export interface TxtExportOptions {
  includeMainItinerary: boolean;
  includeAlternatives: boolean;
  includeBudget: boolean;
  includeTips: boolean;
  includeRestaurants: boolean;
  includeWeatherModules?: boolean;
}

export function generateItineraryTxt(options: TxtExportOptions = {
  includeMainItinerary: true,
  includeAlternatives: true,
  includeBudget: true,
  includeTips: true,
  includeRestaurants: true,
  includeWeatherModules: true
}): string {
  const lines: string[] = [];

  const dividerDouble = '================================================================================';
  const dividerSingle = '--------------------------------------------------------------------------------';
  const dividerSub = '................................................................................';

  lines.push(dividerDouble);
  lines.push('【 2026 越南峴港 6 天 5 夜 達人客製旅遊行程手冊 (TXT隨身離線版) 】');
  lines.push(dividerDouble);
  lines.push(`旅遊目的地：${TRIP_INFO.destination}`);
  lines.push(`行程天數：${TRIP_INFO.duration}`);
  lines.push(`去程班機：${TRIP_INFO.flightArrival}`);
  lines.push(`回程班機：${TRIP_INFO.flightDeparture}`);
  lines.push(`住宿飯店：${TRIP_INFO.hotel.name}`);
  lines.push(`飯店地址：${TRIP_INFO.hotel.address}`);
  lines.push(`飯店特色：${TRIP_INFO.hotel.locationAdvantage}`);
  lines.push(`入住/退房：入住 ${TRIP_INFO.hotel.checkInTime} ｜ 退房 ${TRIP_INFO.hotel.checkOutTime}`);
  lines.push(`氣候概況：${TRIP_INFO.weatherOverview}`);
  lines.push(`實用匯率：${TRIP_INFO.exchangeRateApprox}`);
  lines.push(dividerDouble);
  lines.push('');
  lines.push('【2026 行前與每日官方確認提示】');
  lines.push(TRIP_INFO.officialCheckReminder);
  lines.push('');
  lines.push('【順化一日遊取捨原則】');
  lines.push(TRIP_INFO.hueRiskReminder);
  lines.push(dividerDouble);
  lines.push('');

  // 1. MAIN ITINERARY
  if (options.includeMainItinerary) {
    lines.push('================================================================================');
    lines.push('第一部分：6 天主打精選行程與餐飲規劃 (含 4 個完整遊玩日與抵離境 2 個半日)');
    lines.push('================================================================================\n');

    MAIN_ITINERARY.forEach((day) => {
      lines.push(dividerSingle);
      lines.push(`【第 ${day.dayNumber} 天】${day.date} (${day.weekday}) - ${day.title}`);
      lines.push(`今日主題：${day.theme}`);
      lines.push(`核心必排：${day.coreActivities.join(' ｜ ')}`);
      if (day.optionalActivities && day.optionalActivities.length > 0) {
        lines.push(`彈性選配：${day.optionalActivities.join(' ｜ ')}`);
      }
      if (day.cutIfTiredOrRaining && day.cutIfTiredOrRaining.length > 0) {
        lines.push(`可刪活動：${day.cutIfTiredOrRaining.join(' ｜ ')}`);
      }
      lines.push(`調度建議：${day.weatherSwapAdvice.suggestion}`);
      lines.push(`當日亮點：${day.highlights.join(' ｜ ')}`);
      lines.push(`今日交通：${day.transportation}`);
      lines.push(`天氣提醒：${day.weatherAdvice}`);
      lines.push(dividerSub);
      lines.push('【今日推薦餐飲】');
      lines.push(`  早餐：${day.meals.breakfast}`);
      lines.push(`  午餐：${day.meals.lunch}`);
      lines.push(`  晚餐：${day.meals.dinner}`);
      if (day.meals.snackOrCafe) {
        lines.push(`  下午茶/咖啡：${day.meals.snackOrCafe}`);
      }
      lines.push(dividerSub);
      lines.push('【詳細行程時間表】');

      day.activities.forEach((act, idx) => {
        const coreMark = act.isCore ? '【⭐今日核心】' : act.canSkipIfTired ? '【✂️太累可刪】' : act.isOptional ? '【✨彈性選配】' : '';
        lines.push(`\n  (${idx + 1}) [${act.time}] ${coreMark} ${act.title}`);
        lines.push(`      地點：${act.location}`);
        lines.push(`      內容：${act.description.replace(/\n/g, '\n            ')}`);
        if (act.openingHours) {
          lines.push(`      營業時間：${act.openingHours}`);
        }
        if (act.reservation) {
          lines.push(`      預約與確認：${act.reservation}`);
        }
        if (act.restrictions && act.restrictions.length > 0) {
          lines.push(`      須知與限制：${act.restrictions.join('；')}`);
        }
        if (act.costEstimate) {
          lines.push(`      預估費用：${act.costEstimate}`);
        }
        if (act.tips) {
          lines.push(`      達人叮嚀：${act.tips}`);
        }
        if (act.weatherBackup) {
          lines.push(`      雨天備案：${act.weatherBackup}`);
        }
      });

      // If Day 5 has Alternative Plan B, print it as well
      if (day.dayNumber === 5 && day.alternativePlanB) {
        lines.push('\n' + dividerSub);
        lines.push(`【第 5 天 備選方案 B】${day.alternativePlanB.title}`);
        lines.push(`方案摘要：${day.alternativePlanB.subtitle}`);
        lines.push(`今日主題：${day.alternativePlanB.theme}`);
        lines.push(`方案對比評估：`);
        lines.push(`  - 車程時間：${day.alternativePlanB.comparison.travelTime}`);
        lines.push(`  - 體力消耗：${day.alternativePlanB.comparison.fatigue}`);
        lines.push(`  - 文化深度：${day.alternativePlanB.comparison.culture}`);
        lines.push(`  - 放鬆指數：${day.alternativePlanB.comparison.relaxation}`);
        lines.push(`  - 雨季風險：${day.alternativePlanB.comparison.rainRisk}`);
        lines.push(`方案 B 餐飲安排：`);
        lines.push(`  早餐：${day.alternativePlanB.meals.breakfast}`);
        lines.push(`  午餐：${day.alternativePlanB.meals.lunch}`);
        lines.push(`  晚餐：${day.alternativePlanB.meals.dinner}`);
        if (day.alternativePlanB.meals.snackOrCafe) {
          lines.push(`  下午茶：${day.alternativePlanB.meals.snackOrCafe}`);
        }
        lines.push(`方案 B 行程時間表：`);
        day.alternativePlanB.activities.forEach((bAct, bIdx) => {
          lines.push(`\n  (B-${bIdx + 1}) [${bAct.time}] ${bAct.title}`);
          lines.push(`      地點：${bAct.location}`);
          lines.push(`      內容：${bAct.description}`);
          if (bAct.costEstimate) {
            lines.push(`      預估費用：${bAct.costEstimate}`);
          }
        });
      }

      lines.push('\n');
    });
  }

  // 2. WEATHER SWAP MODULES & TWO LEVEL RAIN GUIDE
  if (options.includeWeatherModules !== false) {
    lines.push('================================================================================');
    lines.push('第二部分：10 月雨季 5 大天氣調度模組 ＆ 晴雨兩級應變策略');
    lines.push('================================================================================\n');

    WEATHER_MODULES.forEach((mod, i) => {
      lines.push(`[模組 ${i + 1}] ${mod.name}`);
      lines.push(`  適宜天候：${mod.primaryCondition}`);
      lines.push(`  最佳時段：${mod.bestDays}`);
      lines.push(`  避免狀況：${mod.avoidWhen}`);
      lines.push(`  調度建議：${mod.swapAction}`);
      lines.push('');
    });

    lines.push(dividerSub);
    lines.push('【雨季兩級備案切換指南】');
    lines.push(`(1) ${TWO_LEVEL_RAIN_GUIDE.level1.title}`);
    lines.push(`    說明：${TWO_LEVEL_RAIN_GUIDE.level1.description}`);
    lines.push(`    推薦活動：${TWO_LEVEL_RAIN_GUIDE.level1.safeActivities.join('；')}`);
    lines.push(`\n(2) ${TWO_LEVEL_RAIN_GUIDE.level2.title}`);
    lines.push(`    說明：${TWO_LEVEL_RAIN_GUIDE.level2.description}`);
    lines.push(`    ❌ 嚴格避免：${TWO_LEVEL_RAIN_GUIDE.level2.avoidList.join('；')}`);
    lines.push(`     極端天氣首選：${TWO_LEVEL_RAIN_GUIDE.level2.recommendedList.join('；')}`);
    lines.push('\n');
  }

  // 3. ALTERNATIVE STYLES
  if (options.includeAlternatives) {
    lines.push('================================================================================');
    lines.push('第三部分：四大替換玩法與主題風格 (依照偏好與天氣隨時切換)');
    lines.push('================================================================================\n');

    ALTERNATIVE_STYLES.forEach((alt, idx) => {
      lines.push(dividerSingle);
      lines.push(`【風格 ${idx + 1}】${alt.title} [${alt.tag}]`);
      lines.push(`適合族群：${alt.targetAudience}`);
      lines.push(`核心特色：${alt.coreVibe}`);
      lines.push(`預估費用：${alt.estimatedCostTWD}`);
      lines.push(`特色亮點：`);
      alt.keyHighlights.forEach((h) => lines.push(`  - ${h}`));
      lines.push('每日行程概要：');
      alt.daysSummary.forEach((ds) => {
        lines.push(`  * ${ds.day} (${ds.theme}): ${ds.schedule}`);
      });
      lines.push('');
    });
  }

  // 4. BUDGET BREAKDOWN
  if (options.includeBudget) {
    lines.push('================================================================================');
    lines.push('第四部分：不同玩法花費預估與預算分析 (2026 行情拆解)');
    lines.push('================================================================================\n');

    BUDGET_TIERS.forEach((tier) => {
      lines.push(dividerSingle);
      lines.push(`【${tier.name}】預估總花費：約 NT$ ${tier.totalTWD.toLocaleString()} (約 ${tier.totalVND.toLocaleString()} VND)`);
      lines.push(`適合對象：${tier.targetUser}`);
      lines.push('細項花費清單 (每人基準)：');
      lines.push(`  1. 往返機票 (含稅)：約 NT$ ${tier.breakdown.flight.toLocaleString()}`);
      lines.push(`  2. 5晚飯店 (半島飯店雙人分攤)：約 NT$ ${tier.breakdown.hotel.toLocaleString()}`);
      lines.push(`  3. 6天當地交通 (包車+Grab)：約 NT$ ${tier.breakdown.transport.toLocaleString()}`);
      lines.push(`  4. 6天餐飲美食 (正餐+小吃咖啡)：約 NT$ ${tier.breakdown.food.toLocaleString()}`);
      lines.push(`  5. 景點門票與體驗 (巴拿山/竹籃船等)：約 NT$ ${tier.breakdown.activities.toLocaleString()}`);
      lines.push(`  6. SPA按摩與伴手禮：約 NT$ ${tier.breakdown.spaShopping.toLocaleString()}`);
      lines.push('方案特色：');
      tier.highlights.forEach((hl) => lines.push(`  - ${hl}`));
      lines.push('');
    });
  }

  // 5. SAFETY, WEATHER & TRAFFIC
  if (options.includeTips) {
    lines.push('================================================================================');
    lines.push('第五部分：天氣、交通、飲食安全與防坑指南 (達人私房心法)');
    lines.push('================================================================================\n');

    SAFETY_WEATHER_TIPS.forEach((cat) => {
      lines.push(`【${cat.category}】`);
      cat.tips.forEach((tip) => lines.push(`  * ${tip}`));
      lines.push('');
    });
  }

  // 6. RESTAURANTS
  if (options.includeRestaurants) {
    lines.push('================================================================================');
    lines.push('第六部分：峴港必吃道地美食與名店推薦');
    lines.push('================================================================================\n');

    RESTAURANT_RECOMMENDATIONS.forEach((res, i) => {
      lines.push(`${i + 1}. 【${res.name}】(${res.vietnameseName})`);
      lines.push(`   分類：${res.category} ｜ 評分：${res.rating}`);
      lines.push(`   招牌推薦：${res.specialty}`);
      lines.push(`   價位參考：${res.priceRange}`);
      lines.push(`   地址：${res.address}`);
      lines.push(`   達人撇步：${res.proTip}`);
      lines.push('');
    });
  }

  lines.push(dividerDouble);
  lines.push('【重要緊急聯絡電話與實用資訊】');
  lines.push('  - 駐越南台北經濟文化辦事處 (河內/北越與中越)：+84-24-3833-5501');
  lines.push('  - 駐胡志明市台北經濟文化辦事處：+84-28-3834-9160');
  lines.push('  - 外交部旅外國人急難救助服務專線：+886-800-085-095');
  lines.push('  - 越南報警電話：113 / 救護車：115 / 火警：114');
  lines.push('  - 峴港半島飯店電話：+84 236 3816 666');
  lines.push(dividerDouble);
  lines.push('祝您旅途平安愉快！Happy Traveling in Da Nang, Hoi An & Hue!');
  lines.push(dividerDouble);

  return lines.join('\n');
}

export function downloadTxtFile(content: string, filename: string = '2026-峴港六天五夜達人行程手冊.txt') {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

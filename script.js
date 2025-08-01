// 六十甲子籤詩資料庫
const fortuneData = {
    1: {
        poem: "甲子　天開地闢事業昌\n萬象更新喜氣洋洋\n求謀作事皆如意\n福祿綿綿壽自長",
        meaning: "大吉。萬事順利，事業昌隆，福壽雙全。",
        explanation: "如天地初開，萬象更新，無論做什麼事都會順利成功，福祿壽俱全。"
    },
    2: {
        poem: "乙丑　二龍爭珠在天涯\n一主文章一主家\n兩般福祿皆臨到\n功名富貴自榮華",
        meaning: "吉。文武雙全，福祿並至，功名富貴。",
        explanation: "有兩種才能和機會，文能安邦，武能定國，雙重好運降臨。"
    },
    3: {
        poem: "丙寅　虎入深山有威風\n改換門庭喜氣生\n若問前程何所似\n三春楊柳正青青",
        meaning: "吉。威勢顯現，環境轉換帶來歡樂。",
        explanation: "如虎歸山，展現威勢。改變環境或方向會帶來好運。"
    },
    4: {
        poem: "丁卯　月照仙台第一重\n雲梯有路可相通\n若問前程歸何處\n十里花香滿徑紅",
        meaning: "吉。月明如晝，道路通暢，前程似錦。",
        explanation: "月光照亮前路，有明確道路通往成功，前程美好如花香滿徑。"
    },
    5: {
        poem: "戊辰　青龍得水上青天\n久困池塘不等閒\n若遇雲雷來變化\n立身成器在目前",
        meaning: "吉。青龍遇水，困境解除，成功在即。",
        explanation: "如困在池塘的龍遇到雲雷，即將飛黃騰達。"
    },
    6: {
        poem: "己巳　黃金地上露光華\n要識分明雨與花\n桃李結成果滿樹\n等閒造化不須誇",
        meaning: "吉。黃金露華，桃李滿樹，自然成就。",
        explanation: "如黃金在陽光下閃閃發光，經過雨露滋潤，桃李結果，成就自然來臨。"
    },
    7: {
        poem: "庚午　一馬當先第一程\n離鄉背井去投明\n任君走遍天邊路\n立志功名自有成",
        meaning: "吉。離鄉投明，志在天下，功名可期。",
        explanation: "勇敢踏出第一步，離開舒適圈尋找機會，有志者事竟成。"
    },
    8: {
        poem: "辛未　天邊雁聲沒多時\n登舟渡水向前歸\n今來古往如流水\n富貴功名總有期",
        meaning: "吉。雁聲嘹亮，時光流轉，富貴有期。",
        explanation: "如大雁遷徙有明確方向，渡過難關後能回歸正軌，富貴指日可待。"
    },
    9: {
        poem: "壬申　山雨欲來風滿樓\n人情冷暖雪花愁\n更兼無意求名利\n何必登高怨不休",
        meaning: "平。風雨將至，人情冷暖，宜保持平常心。",
        explanation: "感覺風雨欲來，人際關係複雜，保持淡然心態，不要強求名利。"
    },
    10: {
        poem: "癸酉　月裡嫦娥不畫眉\n只因愁慮事難為\n若問前程並吉凶\n但看容貌保無虧",
        meaning: "平。嫦娥憂愁，事未能成，前程待看。",
        explanation: "如嫦娥憂愁，事情還沒有結果，但本質無損，需要耐心等待。"
    }
    ,
    11: {
        poem: "甲戌　一片江山萬里心\n前途消息未分明\n貴人指引當亨泰\n自有財源如水深",
        meaning: "吉。前途未明，需貴人指引，財運自來。",
        explanation: "目前雖然看不清前路，但只要有貴人幫助，財運與好消息會隨之而來。"
    },
    12: {
        poem: "乙亥　雲開月出見分明\n萬里舟行進又停\n若得順風吹一棹\n前程快樂任君行",
        meaning: "吉。雲開見月，前途漸明，順勢而為。",
        explanation: "困難逐漸消散，前路會越來越清楚，只要順勢而行，將會順利。"
    },
    13: {
        poem: "丙子　一山如畫對清江\n門裡團圓事事雙\n誰道中間無阻隔\n吉人自有保安康",
        meaning: "吉。家庭和樂，遇阻有解，吉人天相。",
        explanation: "雖然偶有阻礙，但有貴人相助，家庭與事業都能圓滿。"
    },
    14: {
        poem: "丁丑　春風楊柳正芳菲\n雨過天晴花自飛\n若問前程歸路穩\n定如舟楫遇順風",
        meaning: "吉。春風得意，前程順利。",
        explanation: "時運正好，做事如順風行舟，萬事順遂。"
    },
    15: {
        poem: "戊寅　一片祥雲覆吉門\n家中和氣得安存\n時來祿馬皆如意\n福祿自有慶家門",
        meaning: "吉。家運興隆，福祿自來。",
        explanation: "家中氣氛和諧，時運來臨，福氣自然降臨。"
    },
    16: {
        poem: "己卯　花開今已結成果\n富貴榮華在眼前\n若問前程歸路穩\n前途自然遇貴人",
        meaning: "吉。成果顯現，貴人相助。",
        explanation: "努力已經有了成果，未來還會有貴人幫助，前途光明。"
    },
    17: {
        poem: "庚辰　一輪明月照高樓\n萬里長空盡自由\n若得貴人來接引\n前程萬里任君遊",
        meaning: "吉。貴人相助，前途無量。",
        explanation: "有貴人幫忙，前路寬廣，能夠自由發展。"
    },
    18: {
        poem: "辛巳　一葉扁舟下急灘\n舟人雖急不須煩\n前途自有平安路\n任意前行不用難",
        meaning: "吉。雖遇急流，終有平安。",
        explanation: "雖然目前有些波折，但不用擔心，最終會平安順利。"
    },
    19: {
        poem: "壬午　一片孤帆落照中\n異鄉作客意無窮\n若逢知己同攜手\n他日功名自可通",
        meaning: "吉。異鄉奮鬥，遇知己則成。",
        explanation: "在外地奮鬥雖孤單，但只要遇到志同道合的朋友，將來必有成就。"
    },
    20: {
        poem: "癸未　一條大路自亨通\n萬事無憂福祿豐\n若得貴人來助力\n前程錦繡自享通",
        meaning: "吉。大路亨通，貴人助力。",
        explanation: "前途一片光明，有貴人幫助，萬事順利。"
    }
    ,
    21: {
        poem: "甲申　一輪紅日出東方\n萬里無雲照四方\n舊事已過新事至\n前程如錦更輝煌",
        meaning: "吉。舊事已過，前途光明。",
        explanation: "過去的困難已經結束，未來將會更加美好。"
    },
    22: {
        poem: "乙酉　一池春水映桃花\n風送鶯啼入萬家\n若得貴人來助力\n前程錦繡自榮華",
        meaning: "吉。貴人助力，前程錦繡。",
        explanation: "有貴人幫忙，前途將會非常順利且榮華。"
    },
    23: {
        poem: "丙戌　一葉輕舟下急灘\n舟人雖急不須煩\n前途自有平安路\n任意前行不用難",
        meaning: "吉。雖遇急流，終有平安。",
        explanation: "雖然目前有些波折，但不用擔心，最終會平安順利。"
    },
    24: {
        poem: "丁亥　一片孤帆落照中\n異鄉作客意無窮\n若逢知己同攜手\n他日功名自可通",
        meaning: "吉。異鄉奮鬥，遇知己則成。",
        explanation: "在外地奮鬥雖孤單，但只要遇到志同道合的朋友，將來必有成就。"
    },
    25: {
        poem: "戊子　一條大路自亨通\n萬事無憂福祿豐\n若得貴人來助力\n前程錦繡自享通",
        meaning: "吉。大路亨通，貴人助力。",
        explanation: "前途一片光明，有貴人幫助，萬事順利。"
    },
    26: {
        poem: "己丑　一片祥雲覆吉門\n家中和氣得安存\n時來祿馬皆如意\n福祿自有慶家門",
        meaning: "吉。家運興隆，福祿自來。",
        explanation: "家中氣氛和諧，時運來臨，福氣自然降臨。"
    },
    27: {
        poem: "庚寅　春風楊柳正芳菲\n雨過天晴花自飛\n若問前程歸路穩\n定如舟楫遇順風",
        meaning: "吉。春風得意，前程順利。",
        explanation: "時運正好，做事如順風行舟，萬事順遂。"
    },
    28: {
        poem: "辛卯　一山如畫對清江\n門裡團圓事事雙\n誰道中間無阻隔\n吉人自有保安康",
        meaning: "吉。家庭和樂，遇阻有解，吉人天相。",
        explanation: "雖然偶有阻礙，但有貴人相助，家庭與事業都能圓滿。"
    },
    29: {
        poem: "壬辰　雲開月出見分明\n萬里舟行進又停\n若得順風吹一棹\n前程快樂任君行",
        meaning: "吉。雲開見月，前途漸明，順勢而為。",
        explanation: "困難逐漸消散，前路會越來越清楚，只要順勢而行，將會順利。"
    },
    30: {
        poem: "癸巳　一片江山萬里心\n前途消息未分明\n貴人指引當亨泰\n自有財源如水深",
        meaning: "吉。前途未明，需貴人指引，財運自來。",
        explanation: "目前雖然看不清前路，但只要有貴人幫助，財運與好消息會隨之而來。"
    }
    ,
    31: {
        poem: "甲午　一輪明月照高樓\n萬里長空盡自由\n若得貴人來接引\n前程萬里任君遊",
        meaning: "吉。貴人相助，前途無量。",
        explanation: "有貴人幫忙，前路寬廣，能夠自由發展。"
    },
    32: {
        poem: "乙未　花開今已結成果\n富貴榮華在眼前\n若問前程歸路穩\n前途自然遇貴人",
        meaning: "吉。成果顯現，貴人相助。",
        explanation: "努力已經有了成果，未來還會有貴人幫助，前途光明。"
    },
    33: {
        poem: "丙申　一片祥雲覆吉門\n家中和氣得安存\n時來祿馬皆如意\n福祿自有慶家門",
        meaning: "吉。家運興隆，福祿自來。",
        explanation: "家中氣氛和諧，時運來臨，福氣自然降臨。"
    },
    34: {
        poem: "丁酉　春風楊柳正芳菲\n雨過天晴花自飛\n若問前程歸路穩\n定如舟楫遇順風",
        meaning: "吉。春風得意，前程順利。",
        explanation: "時運正好，做事如順風行舟，萬事順遂。"
    },
    35: {
        poem: "戊戌　一山如畫對清江\n門裡團圓事事雙\n誰道中間無阻隔\n吉人自有保安康",
        meaning: "吉。家庭和樂，遇阻有解，吉人天相。",
        explanation: "雖然偶有阻礙，但有貴人相助，家庭與事業都能圓滿。"
    },
    36: {
        poem: "己亥　雲開月出見分明\n萬里舟行進又停\n若得順風吹一棹\n前程快樂任君行",
        meaning: "吉。雲開見月，前途漸明，順勢而為。",
        explanation: "困難逐漸消散，前路會越來越清楚，只要順勢而行，將會順利。"
    },
    37: {
        poem: "庚子　一片江山萬里心\n前途消息未分明\n貴人指引當亨泰\n自有財源如水深",
        meaning: "吉。前途未明，需貴人指引，財運自來。",
        explanation: "目前雖然看不清前路，但只要有貴人幫助，財運與好消息會隨之而來。"
    },
    38: {
        poem: "辛丑　一條大路自亨通\n萬事無憂福祿豐\n若得貴人來助力\n前程錦繡自享通",
        meaning: "吉。大路亨通，貴人助力。",
        explanation: "前途一片光明，有貴人幫助，萬事順利。"
    },
    39: {
        poem: "壬寅　一片孤帆落照中\n異鄉作客意無窮\n若逢知己同攜手\n他日功名自可通",
        meaning: "吉。異鄉奮鬥，遇知己則成。",
        explanation: "在外地奮鬥雖孤單，但只要遇到志同道合的朋友，將來必有成就。"
    },
    40: {
        poem: "癸卯　一葉輕舟下急灘\n舟人雖急不須煩\n前途自有平安路\n任意前行不用難",
        meaning: "吉。雖遇急流，終有平安。",
        explanation: "雖然目前有些波折，但不用擔心，最終會平安順利。"
    }
    ,
    41: {
        poem: "甲辰　一片孤帆落照中\n異鄉作客意無窮\n若逢知己同攜手\n他日功名自可通",
        meaning: "吉。異鄉奮鬥，遇知己則成。",
        explanation: "在外地奮鬥雖孤單，但只要遇到志同道合的朋友，將來必有成就。"
    },
    42: {
        poem: "乙巳　一條大路自亨通\n萬事無憂福祿豐\n若得貴人來助力\n前程錦繡自享通",
        meaning: "吉。大路亨通，貴人助力。",
        explanation: "前途一片光明，有貴人幫助，萬事順利。"
    },
    43: {
        poem: "丙午　一片祥雲覆吉門\n家中和氣得安存\n時來祿馬皆如意\n福祿自有慶家門",
        meaning: "吉。家運興隆，福祿自來。",
        explanation: "家中氣氛和諧，時運來臨，福氣自然降臨。"
    },
    44: {
        poem: "丁未　春風楊柳正芳菲\n雨過天晴花自飛\n若問前程歸路穩\n定如舟楫遇順風",
        meaning: "吉。春風得意，前程順利。",
        explanation: "時運正好，做事如順風行舟，萬事順遂。"
    },
    45: {
        poem: "戊申　一山如畫對清江\n門裡團圓事事雙\n誰道中間無阻隔\n吉人自有保安康",
        meaning: "吉。家庭和樂，遇阻有解，吉人天相。",
        explanation: "雖然偶有阻礙，但有貴人相助，家庭與事業都能圓滿。"
    },
    46: {
        poem: "己酉　雲開月出見分明\n萬里舟行進又停\n若得順風吹一棹\n前程快樂任君行",
        meaning: "吉。雲開見月，前途漸明，順勢而為。",
        explanation: "困難逐漸消散，前路會越來越清楚，只要順勢而行，將會順利。"
    },
    47: {
        poem: "庚戌　一片江山萬里心\n前途消息未分明\n貴人指引當亨泰\n自有財源如水深",
        meaning: "吉。前途未明，需貴人指引，財運自來。",
        explanation: "目前雖然看不清前路，但只要有貴人幫助，財運與好消息會隨之而來。"
    },
    48: {
        poem: "辛亥　一條大路自亨通\n萬事無憂福祿豐\n若得貴人來助力\n前程錦繡自享通",
        meaning: "吉。大路亨通，貴人助力。",
        explanation: "前途一片光明，有貴人幫助，萬事順利。"
    },
    49: {
        poem: "壬子　一輪明月照高樓\n萬里長空盡自由\n若得貴人來接引\n前程萬里任君遊",
        meaning: "吉。貴人相助，前途無量。",
        explanation: "有貴人幫忙，前路寬廣，能夠自由發展。"
    },
    50: {
        poem: "癸丑　花開今已結成果\n富貴榮華在眼前\n若問前程歸路穩\n前途自然遇貴人",
        meaning: "吉。成果顯現，貴人相助。",
        explanation: "努力已經有了成果，未來還會有貴人幫助，前途光明。"
    }
    ,
    51: {
        poem: "甲寅　一輪紅日出東方\n萬里無雲照四方\n舊事已過新事至\n前程如錦更輝煌",
        meaning: "吉。舊事已過，前途光明。",
        explanation: "過去的困難已經結束，未來將會更加美好。"
    },
    52: {
        poem: "乙卯　一池春水映桃花\n風送鶯啼入萬家\n若得貴人來助力\n前程錦繡自榮華",
        meaning: "吉。貴人助力，前程錦繡。",
        explanation: "有貴人幫忙，前途將會非常順利且榮華。"
    },
    53: {
        poem: "丙辰　一葉輕舟下急灘\n舟人雖急不須煩\n前途自有平安路\n任意前行不用難",
        meaning: "吉。雖遇急流，終有平安。",
        explanation: "雖然目前有些波折，但不用擔心，最終會平安順利。"
    },
    54: {
        poem: "丁巳　一片孤帆落照中\n異鄉作客意無窮\n若逢知己同攜手\n他日功名自可通",
        meaning: "吉。異鄉奮鬥，遇知己則成。",
        explanation: "在外地奮鬥雖孤單，但只要遇到志同道合的朋友，將來必有成就。"
    },
    55: {
        poem: "戊午　一條大路自亨通\n萬事無憂福祿豐\n若得貴人來助力\n前程錦繡自享通",
        meaning: "吉。大路亨通，貴人助力。",
        explanation: "前途一片光明，有貴人幫助，萬事順利。"
    },
    56: {
        poem: "己未　一片祥雲覆吉門\n家中和氣得安存\n時來祿馬皆如意\n福祿自有慶家門",
        meaning: "吉。家運興隆，福祿自來。",
        explanation: "家中氣氛和諧，時運來臨，福氣自然降臨。"
    },
    57: {
        poem: "庚申　春風楊柳正芳菲\n雨過天晴花自飛\n若問前程歸路穩\n定如舟楫遇順風",
        meaning: "吉。春風得意，前程順利。",
        explanation: "時運正好，做事如順風行舟，萬事順遂。"
    },
    58: {
        poem: "辛酉　一山如畫對清江\n門裡團圓事事雙\n誰道中間無阻隔\n吉人自有保安康",
        meaning: "吉。家庭和樂，遇阻有解，吉人天相。",
        explanation: "雖然偶有阻礙，但有貴人相助，家庭與事業都能圓滿。"
    },
    59: {
        poem: "壬戌　雲開月出見分明\n萬里舟行進又停\n若得順風吹一棹\n前程快樂任君行",
        meaning: "吉。雲開見月，前途漸明，順勢而為。",
        explanation: "困難逐漸消散，前路會越來越清楚，只要順勢而行，將會順利。"
    },
    60: {
        poem: "癸亥　一片江山萬里心\n前途消息未分明\n貴人指引當亨泰\n自有財源如水深",
        meaning: "吉。前途未明，需貴人指引，財運自來。",
        explanation: "目前雖然看不清前路，但只要有貴人幫助，財運與好消息會隨之而來。"
    }
};

// 系統狀態
let currentState = 'question';
let divinationHistory = [];
let selectedCategory = '';
let userInfo = {};
let currentFortune = null;

// 頁面區塊
const sections = {
    question: document.getElementById('question-section'),
    divination: document.getElementById('divination-section'),
    category: document.getElementById('category-section'),
    info: document.getElementById('info-section'),
    result: document.getElementById('result-section')
};

// 擲筊相關函式 - 依據AI.prompt.md規範
function tossOne() {
    return Math.random() < 0.52 ? '正' : '反';
}

function tossPair() {
    const a = tossOne();
    const b = tossOne();
    
    if (a === '正' && b === '正') {
        return '笑筊';
    } else if (a === '反' && b === '反') {
        return '陰筊';
    } else {
        return '聖筊';
    }
}

function simulate(maxSheng = 3) {
    const history = [];
    let shengCount = 0;
    
    while (true) {
        const result = tossPair();
        history.push(result);
        
        if (result === '笑筊' || result === '陰筊') {
            return { history, stopReason: result };
        }
        
        shengCount++;
        if (shengCount >= maxSheng) {
            return { history, stopReason: '三次聖筊' };
        }
    }
}

// 顯示指定區塊
function showSection(sectionName) {
    Object.values(sections).forEach(section => {
        section.classList.remove('active');
    });
    sections[sectionName].classList.add('active');
    currentState = sectionName;
    
    // 確保按鈕顯示狀態正確
    const retryBtn = document.getElementById('retry-divination');
    const throwBtn = document.getElementById('throw-jiao');
    
    if (sectionName === 'divination') {
        retryBtn.style.display = 'none';
        throwBtn.style.display = 'inline-block';
    } else {
        retryBtn.style.display = 'none';
    }
}

// 顯示擲筊動畫
function showDivinationAnimation() {
    const resultArea = document.getElementById('divination-result');
    resultArea.innerHTML = `
        <div class="divination-animation">
            <div class="jiao-container">
                <div class="jiao-background"></div>
                <div class="jiao jiao-1 positive"></div>
                <div class="jiao jiao-2 negative"></div>
                <div class="jiao-sound">啪啪！</div>
            </div>
        </div>
        <p style="margin-top: 20px; font-size: 1.1rem; color: #8B4513;">恭請神明降旨指示...</p>
    `;
}

// 顯示擲筊結果 - 依據AI.prompt.md規範
function showDivinationResult(result) {
    const resultArea = document.getElementById('divination-result');
    const historyText = result.history.join('、');
    
    let message = '';
    let showRetry = false;
    let hideThrowButton = false;
    
    if (result.stopReason === '三次聖筊') {
        message = `<div style="background: rgba(255, 248, 220, 0.9); padding: 20px; border-radius: 12px; border: 2px solid #DAA520; margin: 15px 0;">
            <h4 style="color: #8B0000; font-size: 1.4rem; margin-bottom: 10px;">🙏 神明降旨</h4>
            <p style="font-size: 1.2rem; color: #2F4F4F; font-weight: 500;">神明已明瞭您的疑問，請告知您想請示的領域。</p>
        </div>`;
        hideThrowButton = true;
        setTimeout(() => showSection('category'), 2000);
    } else {
        message = `<div style="background: rgba(255, 182, 193, 0.8); padding: 20px; border-radius: 12px; border: 2px solid #DC143C; margin: 15px 0;">
            <h4 style="color: #8B0000; font-size: 1.3rem; margin-bottom: 10px;">💭 重新聚焦</h4>
            <p style="font-size: 1.1rem; color: #2F4F4F;">出現<strong>${result.stopReason}</strong>，恐因所問不明或心意不定。</p>
            <p style="font-size: 1.1rem; color: #2F4F4F; margin-top: 8px;">請重新聚焦問題，再次虔誠擲筊。</p>
        </div>`;
        showRetry = true;
        hideThrowButton = true;
    }
    
    resultArea.innerHTML = `
        <div style="margin-bottom: 25px; text-align: center;">
            <h4 style="color: #8B0000; font-size: 1.4rem; margin-bottom: 15px;">📿 擲筊結果序列</h4>
            <div style="background: rgba(240, 240, 240, 0.9); padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p style="font-size: 1.3rem; font-weight: bold; color: #2F4F4F;">[${historyText}]</p>
                <p style="font-size: 1.1rem; color: #8B4513; margin-top: 8px;">停止原因：<strong>${result.stopReason}</strong></p>
            </div>
        </div>
        ${message}
    `;
    
    // 控制按鈕顯示
    const retryBtn = document.getElementById('retry-divination');
    const throwBtn = document.getElementById('throw-jiao');
    
    retryBtn.style.display = showRetry ? 'inline-block' : 'none';
    throwBtn.style.display = hideThrowButton ? 'none' : 'inline-block';
}

// 抽籤函式
function drawFortune() {
    return Math.floor(Math.random() * 60) + 1; // 1~60籤
}

// 產生解籤內容 - 依據AI.prompt.md固定輸出結構
function generateFortuneInterpretation(fortuneNumber, category, userInfo) {
    const fortune = fortuneData[fortuneNumber];
    
    const suggestions = generateSpecificAdvice(fortune, category, userInfo);
    const verification = generateVerification(fortune);
    
    return `
        <div class="fortune-interpretation">
            <h3 style="color: #8B0000; font-size: 1.6rem; margin-bottom: 20px; text-align: center; 
                      border-bottom: 2px solid #DAA520; padding-bottom: 10px;">
                （一）籤號與原文
            </h3>
            <div class="poem" style="background: rgba(255, 248, 220, 0.9); padding: 25px; border-radius: 12px; 
                                    border: 2px solid #DAA520; margin-bottom: 25px; text-align: center;">
                <h4 style="color: #8B0000; font-size: 1.4rem; margin-bottom: 15px;">第${fortuneNumber}籤</h4>
                <p style="font-size: 1.3rem; line-height: 2; color: #2F4F4F; font-weight: 500;">
                    ${fortune.poem.replace(/\n/g, '<br>')}
                </p>
            </div>

            <h3 style="color: #8B0000; font-size: 1.6rem; margin: 30px 0 15px 0; 
                      border-bottom: 2px solid #DAA520; padding-bottom: 8px;">
                （二）古義闡釋
            </h3>
            <div style="background: rgba(240, 248, 255, 0.8); padding: 20px; border-radius: 10px; 
                       border-left: 4px solid #4682B4; margin-bottom: 25px;">
                <p style="font-size: 1.2rem; line-height: 1.8; color: #2F4F4F; font-style: italic;">
                    ${fortune.meaning}
                </p>
            </div>

            <h3 style="color: #8B0000; font-size: 1.6rem; margin: 30px 0 15px 0; 
                      border-bottom: 2px solid #DAA520; padding-bottom: 8px;">
                （三）白話譯意
            </h3>
            <div style="background: rgba(240, 255, 240, 0.8); padding: 20px; border-radius: 10px; 
                       border-left: 4px solid #32CD32; margin-bottom: 25px;">
                <p style="font-size: 1.2rem; line-height: 1.8; color: #2F4F4F;">
                    ${fortune.explanation}
                </p>
            </div>

            <h3 style="color: #8B0000; font-size: 1.6rem; margin: 30px 0 15px 0; 
                      border-bottom: 2px solid #DAA520; padding-bottom: 8px;">
                （四）契合使用者情境之分析
            </h3>
            <div style="background: rgba(255, 245, 238, 0.9); padding: 20px; border-radius: 10px; 
                       border-left: 4px solid #FF6347; margin-bottom: 25px;">
                ${suggestions}
            </div>

            <h3 style="color: #8B0000; font-size: 1.6rem; margin: 30px 0 15px 0; 
                      border-bottom: 2px solid #DAA520; padding-bottom: 8px;">
                （五）自我檢核紀要
            </h3>
            <div style="background: rgba(248, 248, 255, 0.9); padding: 20px; border-radius: 10px; 
                       border-left: 4px solid #6A5ACD; margin-bottom: 25px;">
                ${verification}
            </div>

            <div style="background: rgba(255, 182, 193, 0.6); padding: 20px; border-radius: 12px; 
                       border: 2px dashed #DC143C; margin-top: 30px; text-align: center;">
                <h4 style="color: #8B0000; font-size: 1.3rem; margin-bottom: 10px;">📿 信受隨緣</h4>
                <p style="font-size: 1.1rem; color: #2F4F4F; line-height: 1.6;">
                    籤詩帶有啟示與指引性質，最終決策仍掌握於自身。<br>
                    誠心感受神明慈悲，善用智慧明辨是非，自能趨吉避凶。
                </p>
            </div>
        </div>
    `;
}

// 根據使用者情境產生具體建議
function generateSpecificAdvice(fortune, category, userInfo) {
    const age = parseInt(userInfo.age);
    const gender = userInfo.gender;
    const occupation = userInfo.occupation;
    
    let ageGroup = '';
    if (age < 25) ageGroup = '青年';
    else if (age < 45) ageGroup = '壯年';
    else if (age < 65) ageGroup = '中年';
    else ageGroup = '長者';
    
    let advice = `
        <h4 style="color: #8B0000; font-size: 1.2rem; margin-bottom: 15px;">
            針對${ageGroup}${gender}性、從事${occupation}的您，在${category}方面：
        </h4>
        <div style="padding-left: 15px;">
    `;
    
    // 根據不同類別和籤詩內容產生建議
    if (category === '事業') {
        if (fortune.poem.includes('龍') || fortune.poem.includes('虎')) {
            advice += `
                <p style="margin: 10px 0;"><strong>🎯 可採取之行動：</strong>展現您的領導能力，積極主動爭取機會，如龍虎般威勢顯現。</p>
                <p style="margin: 10px 0;"><strong>⚠️ 應避免之風險：</strong>避免過於急躁，需要耐心等待最佳時機，切勿冒進。</p>
                <p style="margin: 10px 0;"><strong>🌟 潛藏之機遇：</strong>將有貴人相助或重要轉機出現，留意身邊的機會。</p>
            `;
        } else if (fortune.poem.includes('花') || fortune.poem.includes('春')) {
            advice += `
                <p style="margin: 10px 0;"><strong>🎯 可採取之行動：</strong>把握春天般的好時機，積極開展新計畫，播種未來。</p>
                <p style="margin: 10px 0;"><strong>⚠️ 應避免之風險：</strong>不要被表面的美好迷惑，需要實際行動配合。</p>
                <p style="margin: 10px 0;"><strong>🌟 潛藏之機遇：</strong>創意和靈感將帶來意想不到的收穫。</p>
            `;
        } else {
            advice += `
                <p style="margin: 10px 0;"><strong>🎯 可採取之行動：</strong>保持穩健的工作態度，循序漸進發展事業。</p>
                <p style="margin: 10px 0;"><strong>⚠️ 應避免之風險：</strong>避免好高騖遠，腳踏實地最為重要。</p>
                <p style="margin: 10px 0;"><strong>🌟 潛藏之機遇：</strong>堅持不懈將會帶來意外的突破。</p>
            `;
        }
    } else if (category === '愛情') {
        advice += `
            <p style="margin: 10px 0;"><strong>🎯 可採取之行動：</strong>保持開放的心態，真誠待人，愛情自然來臨。</p>
            <p style="margin: 10px 0;"><strong>⚠️ 應避免之風險：</strong>不要因過去的傷害而封閉內心。</p>
            <p style="margin: 10px 0;"><strong>🌟 潛藏之機遇：</strong>在意想不到的場合將遇到有緣人。</p>
        `;
    } else {
        advice += `
            <p style="margin: 10px 0;"><strong>🎯 可採取之行動：</strong>保持正面積極的態度，善用自身優勢。</p>
            <p style="margin: 10px 0;"><strong>⚠️ 應避免之風險：</strong>避免過度憂慮，保持內心平靜。</p>
            <p style="margin: 10px 0;"><strong>🌟 潛藏之機遇：</strong>耐心等待，好運將會降臨。</p>
        `;
    }
    
    advice += '</div>';
    return advice;
}

// 產生驗證依據
function generateVerification(fortune) {
    return `
        <h4 style="color: #8B0000; font-size: 1.2rem; margin-bottom: 15px;">三點驗證依據：</h4>
        <ol style="padding-left: 20px; line-height: 1.8;">
            <li style="margin: 10px 0;">
                <strong>籤詩詞句引證：</strong>「${fortune.poem.split('\n')[1]}」，印證此解讀符合古典籤意。
            </li>
            <li style="margin: 10px 0;">
                <strong>古義對應性：</strong>此籤${fortune.meaning}，與現代處境形成呼應關係。
            </li>
            <li style="margin: 10px 0;">
                <strong>實務適用性：</strong>建議內容結合個人年齡、職業特點，具備實際可行性。
            </li>
        </ol>
    `;
}

// 頁面載入完成後的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 開始擲筊按鈕
    document.getElementById('start-divination').addEventListener('click', function() {
        showSection('divination');
    });
    
    // 擲筊按鈕
    document.getElementById('throw-jiao').addEventListener('click', function() {
        showDivinationAnimation();
        
        setTimeout(() => {
            const result = simulate();
            divinationHistory = result.history;
            showDivinationResult(result);
        }, 2000);
    });
    
    // 重新擲筊按鈕
    document.getElementById('retry-divination').addEventListener('click', function() {
        // 重置擲筊界面
        const resultArea = document.getElementById('divination-result');
        resultArea.innerHTML = '<p style="text-align: center; font-size: 1.2rem; color: #8B4513;">恭候神明降旨中...</p>';
        
        // 隱藏重新擲筊按鈕，顯示擲筊按鈕
        document.getElementById('retry-divination').style.display = 'none';
        document.getElementById('throw-jiao').style.display = 'inline-block';
        
        // 清空之前的擲筊歷史
        divinationHistory = [];
    });
    
    // 問題領域選擇
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectedCategory = this.dataset.category;
            showSection('info');
        });
    });
    
    // 使用者資訊表單提交
    document.getElementById('user-info-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        userInfo = {
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            occupation: document.getElementById('occupation').value,
            questionDetail: document.getElementById('question-detail').value
        };
        
        const fortuneNumber = drawFortune();
        currentFortune = fortuneNumber;
        
        const interpretation = generateFortuneInterpretation(fortuneNumber, selectedCategory, userInfo);
        document.getElementById('fortune-result').innerHTML = interpretation;
        
        showSection('result');
    });
    
    // 重新問事按鈕
    document.getElementById('restart-divination').addEventListener('click', function() {
        currentState = 'question';
        divinationHistory = [];
        selectedCategory = '';
        userInfo = {};
        currentFortune = null;
        
        document.getElementById('user-info-form').reset();
        document.getElementById('divination-result').innerHTML = '<p style="text-align: center; font-size: 1.2rem; color: #8B4513;">恭候神明降旨中...</p>';
        document.getElementById('fortune-result').innerHTML = '';
        
        showSection('question');
    });
});

// 初始化顯示問事頁面
showSection('question');
